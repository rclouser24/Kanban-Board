import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { signup } from "../api/authAPI";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signup(signUpData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to signup', err);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label >Username</label>
        <input 
          type='text'
          name='username'
          value={signUpData.username || ''}
          onChange={handleChange}
        />
      <label>Password</label>
        <input 
          type='password'
          name='password'
          value={signUpData.password || ''}
          onChange={handleChange}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
    
  )
};

export default Signup;
