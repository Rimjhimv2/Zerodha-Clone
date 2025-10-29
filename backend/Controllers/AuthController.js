// module.exports = {
//   Signup: async (req, res, next) => {
//     try {
//       const { email, password, username } = req.body;
//       console.log("📩 Signup request received:", req.body);

//       const existingUser = await User.findOne({ email });
//       console.log("🔍 Existing user check result:", existingUser);

//       if (existingUser) {
//         return res.json({ message: "User already exists", success: false });
//       }

//       const hashedPassword = await bcrypt.hash(password, 12);
//       const newUser = new User({ email, username, password: hashedPassword });
//       await newUser.save();

//       const token = createSecretToken(newUser._id);
//       res.cookie("token", token, {
//         withCredentials: true,
//         httpOnly: false,
//       });

//       console.log("New user created:", newUser.email);
//       res
//         .status(201)
//         .json({ message: "User signed up successfully", success: true, user: newUser });

//       next();
//     } catch (error) {
//       console.error("Signup error:", error);
//       res.status(500).json({ message: "Server error", success: false });
//     }
//   },

//   Login: async (req, res, next) => {
//     try {
//       const { email, password } = req.body;
//       console.log("📩 Login attempt:", email);

//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.json({ message: "User not found", success: false });
//       }

//       const auth = await bcrypt.compare(password, user.password);
//       if (!auth) {
//         return res.json({ message: "Incorrect password", success: false });
//       }

//       const token = createSecretToken(user._id);
//       res.cookie("token", token, {
//         withCredentials: true,
//         httpOnly: false,
//       });

//       res
//         .status(201)
//         .json({ message: "User logged in successfully", success: true, user });

//       next();
//    } catch (error) {
//   console.error("❌ Signup error details:", error);
//   res.status(500).json({ message: "Server error", success: false, error: error.message });
// }

//   },
// };
const User = require("../model/UserModel");
const { createSecretToken } = require('../utils/token');

const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) return res.json({ message: "Incorrect password" });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};