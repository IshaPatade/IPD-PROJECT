import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

//login

const loginUser = async (req, res) => {
  const { email, password,role } = req.body;
  try {
    const user = await User.login(email, password,role);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup

const signupUser = async (req, res) => {
  const { email, password, location, ethAddress, role } = req.body;
  try {
    const user = await User.signup(email, password, location, ethAddress, role);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
