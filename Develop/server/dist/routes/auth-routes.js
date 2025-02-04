import { Router } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const login = async (req, res) => {
    // TODO: If the user exists and the password is correct, return a JWT token
    const { username, password } = req.body;
    const user = await User.findOne({
        where: { username },
    });
    if (!user) {
        return res.status(401).json({ message: "Authentification failed" });
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).json({ message: "Authentification failed" });
    }
    const secretKey = process.env.JWT_SECRET_KEY || "";
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    return res.json({ token });
};
export const signup = async (req, res) => {
    // TODO: If the user exists and the password is correct, return a JWT token
    const { username, password } = req.body;
    try {
        const user = await User.create({
            username,
            password,
        });
        const secretKey = process.env.JWT_SECRET_KEY || "";
        const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
        return res.json({ token, user });
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
};
const router = Router();
// POST /login - Login a user
router.post("/login", login);
router.post("/signup", signup);
export default router;
