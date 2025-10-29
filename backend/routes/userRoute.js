const express = require("express");
const { userVerification } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", userVerification, (req, res) => {
  res.json({ message: "Welcome!" });
});

