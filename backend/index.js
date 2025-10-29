require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { HoldingsModel } = require("./model/HoldingsModel");

const authRoutes = require("./routes/AuthRoute");
const { userVerification } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.use(
  cors({
     origin: ["https://zerodha-clone-coral.vercel.app", "https://zerodha-clone-c48l.vercel.app"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/allPositions", userVerification, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/newOrder", userVerification, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend running with JWT authentication ");
});

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));
