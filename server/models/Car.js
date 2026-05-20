import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Sedan", "SUV", "Luxury", "Exotic"], required: true },
  seats: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  totalUnits: { type: Number, required: true },
  image: { type: String },
}, { timestamps: true });

export default mongoose.model("Car", carSchema);