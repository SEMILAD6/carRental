import express from "express";
import Reservation from "../models/Reservation.js";
import Car from "../models/Car.js";

const router = express.Router();

// POST create a reservation
router.post("/", async (req, res) => {
  const {
    carId,
    customerName,
    customerEmail,
    customerPhone,
    pickupLocation,
    pickupDate,
    returnDate,
  } = req.body;

  console.log("Reservation request body:", req.body); // line 9 — after destructuring

  try {
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    if (returnD <= pickup) {
      return res.status(400).json({ message: "Return date must be after pickup date" });
    }

    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ message: "Car not found" });

    // Check availability
    const overlapping = await Reservation.countDocuments({
      car: carId,
      status: { $ne: "cancelled" },
      pickupDate: { $lt: returnD },
      returnDate: { $gt: pickup },
    });

    if (overlapping >= car.totalUnits) {
      return res.status(409).json({
        message: `Sorry, the ${car.name} is fully booked for those dates`,
      });
    }

    // Calculate price
    const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
    const totalPrice = days * car.pricePerDay;

    const reservation = new Reservation({
      car: carId,
      customerName,
      customerEmail,
      customerPhone,
      pickupLocation,
      pickupDate: pickup,
      returnDate: returnD,
      totalPrice,
    });

    await reservation.save();

    res.status(201).json({
      message: "Reservation created successfully",
      reservation: {
        referenceNumber: reservation.referenceNumber,
        car: car.name,
        pickupLocation,
        pickupDate,
        returnDate,
        totalPrice,
        status: reservation.status,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// GET all reservations (admin)
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("car", "name type pricePerDay")
      .sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET all reservations for a specific car
router.get("/car/:carId", async (req, res) => {
  try {
    const reservations = await Reservation.find({
      car: req.params.carId,
      status: { $ne: "cancelled" },
    }).select("pickupDate returnDate status");

    res.json(reservations);
  } catch (err) {
    console.error("Reservation error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET single reservation by reference number
router.get("/:reference", async (req, res) => {
  try {
    const reservation = await Reservation.findOne({
      referenceNumber: req.params.reference,
    }).populate("car", "name type image");

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH cancel a reservation
router.patch("/:id/cancel", async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );
    if (!reservation) return res.status(404).json({ message: "Reservation not found" });
    res.json({ message: "Reservation cancelled", reservation });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;