import { UserLogin } from "../interfaces/UserLogin";
import { UserSignUp } from "../interfaces/UserSignup";



const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try{
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error('User info not retreived')
  }
  return data;
} catch (err){
  console.log('Error from user login', err);
  return Promise.reject('Could not fetch user info')
}
}


const signup = async (userInfo: UserSignUp) => {
  // TODO: make a POST request to the login route
  try{
  const response = await fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error('User info not retreived')
  }
  return data;
} catch (err){
  console.log('Error from user signup', err);
  return Promise.reject('Could not fetch user info')
}
}








export { login, signup };

