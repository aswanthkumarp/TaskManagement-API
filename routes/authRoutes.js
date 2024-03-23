

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
