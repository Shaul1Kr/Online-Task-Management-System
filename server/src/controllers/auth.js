import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    console.info(
      `Trying to log in with username: ${username} password: ${password}`
    );
    const user = await User.findOne({ username });
    if (!user)
      return res.status(403).json({ msg: "email or password incorrect" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(403).json({ msg: "email or password incorrect" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send("Login successfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}

export async function register(req, res) {
  try {
    const { username, password } = req.body;
    console.info(`Register with username: ${username} password: ${password}`);
    const salt = await bcrypt.genSalt();
    const saltPassword = await bcrypt.hash(password, salt);
    await User.create({ username, password: saltPassword });
    return res.status(200).send("Register successfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}

export async function resetPassword(req, res) {
  try {
    const { username, password } = req.body;
    console.info(
      `Trying to log in with username: ${username} password: ${password}`
    );
    const user = await User.findOne({ username });
    if (!user) return res.status(403).json({ msg: "username is incorrect" });
    const salt = await bcrypt.genSalt();
    const saltPassword = await bcrypt.hash(password, salt);
    user.password = saltPassword;
    await user.save();
    return res.status(200).send("Password reseted successfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}
