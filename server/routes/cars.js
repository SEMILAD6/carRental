import express from "express";
import Car from "../models/Car.js";
import Reservation from "../models/Reservation.js";

const router = express.Router();

// GET all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET available cars for a date range
router.get("/available", async (req, res) => {
  const { pickupDate, returnDate, type } = req.query;

  if (!pickupDate || !returnDate) {
    return res.status(400).json({ message: "Please provide pickup and return dates" });
  }

  try {
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    if (returnD <= pickup) {
      return res.status(400).json({ message: "Return date must be after pickup date" });
    }

    // Find all cars (optionally filtered by type)
    const query = type ? { type } : {};
    const allCars = await Car.find(query);

    // For each car, count how many units are already booked in that period
    const availableCars = await Promise.all(
      allCars.map(async (car) => {
        const overlappingReservations = await Reservation.countDocuments({
          car: car._id,
          status: { $ne: "cancelled" },
          pickupDate: { $lt: returnD },
          returnDate: { $gt: pickup },
        });

        const availableUnits = car.totalUnits - overlappingReservations;

        return {
          ...car.toObject(),
          availableUnits,
          isAvailable: availableUnits > 0,
        };
      })
    );

    res.json(availableCars);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single car
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;