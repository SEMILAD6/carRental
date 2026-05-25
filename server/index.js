import dotenv from "dotenv";
dotenv.config();



import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import carRoutes from "./routes/cars.js";
import reservationRoutes from "./routes/reservations.js";




const app = express();

app.use(cors({ origin: ["https://carrental-yrah.onrender.com"], credentials: true }));
app.use(express.json());

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/reservations", reservationRoutes);

app.get("/health", (req, res) => {
  res.send("Car Rental API is running");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => console.log(err));