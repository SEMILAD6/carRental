import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  pickupDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  totalPrice: { type: Number },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  referenceNumber: { type: String, unique: true },
}, { timestamps: true });

// Auto-generate reference number before saving
reservationSchema.pre("save", function (next) {
  if (!this.referenceNumber) {
    this.referenceNumber = "GCR-" + Date.now().toString(36).toUpperCase();
  }

  // Auto-calculate total price
  const days = Math.ceil(
    (this.returnDate - this.pickupDate) / (1000 * 60 * 60 * 24)
  );
  this.totalPrice = days * (this.totalPricePerDay || 0);

  next();
});

export default mongoose.model("Reservation", reservationSchema);