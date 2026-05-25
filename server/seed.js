import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Car from "./models/Car.js";

await mongoose.connect(process.env.MONGO_URI);

await Car.deleteMany({});
console.log("Cleared existing cars");

await Car.insertMany([
  { name: "Toyota Camry", type: "Sedan", seats: 4, pricePerDay: 70000, totalUnits: 5, image: "toyota-camry.jpg" },
  { name: "Nissan Altima", type: "Sedan", seats: 4, pricePerDay: 75000, totalUnits: 5, image: "nissan-altima.jpg" },
  { name: "Lexus GX 460", type: "SUV", seats: 7, pricePerDay: 220000, totalUnits: 3, image: "lexus-gx-460.jpg" },
  { name: "Honda CR-V", type: "SUV", seats: 7, pricePerDay: 90000, totalUnits: 4, image: "honda-crv.jpeg" },
  { name: "Toyota Prado", type: "SUV", seats: 7, pricePerDay: 180000, totalUnits: 8, image: "toyota-prado.jpg" },
  { name: "Hyundai Tucson", type: "SUV", seats: 5, pricePerDay: 85000, totalUnits: 3, image: "hyundai-tucson.jpg" },
  { name: "Kia Sportage", type: "SUV", seats: 5, pricePerDay: 80000, totalUnits: 2, image: "kia-sportage.jpg" },
  { name: "Mercedes C-Class", type: "Luxury", seats: 4, pricePerDay: 180000, totalUnits: 4, image: "merc-c-class.jpg" },
  { name: "BMW X5", type: "Luxury", seats: 5, pricePerDay: 250000, totalUnits: 5, image: "bmw-x5.jpg" },
  { name: "Audi A6", type: "Luxury", seats: 4, pricePerDay: 210000, totalUnits: 3, image: "audi-a6.jpg" },
  { name: "Range Rover Sport", type: "Luxury", seats: 5, pricePerDay: 300000, totalUnits: 3, image: "range-rover-sport.jpg" },
  { name: "Mercedes GLE", type: "Luxury", seats: 5, pricePerDay: 280000, totalUnits: 3, image: "mercedes-gle.jpg" },
  { name: "Porsche Cayenne", type: "Luxury", seats: 5, pricePerDay: 450000, totalUnits: 2, image: "porsche-cayenne.jpg" },
  { name: "Ferrari SF90", type: "Exotic", seats: 2, pricePerDay: 1500000, totalUnits: 1, image: "ferrari-sf90.jpg" },
  { name: "Lamborghini Huracán", type: "Exotic", seats: 2, pricePerDay: 1700000, totalUnits: 1, image: "lamborghini-huracan.jpg" },
  { name: "Rolls Royce Ghost", type: "Exotic", seats: 4, pricePerDay: 2000000, totalUnits: 1, image: "https://images.unsplash.com/photo-1625510872834-7db6c4273870?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvbGxzJTIwcm95Y2UlMjBnaG9zdHxlbnwwfHwwfHx8MA%3D%3D" },
]);

console.log("URI:", process.env.MONGO_URI);

console.log("Cars seeded!");

mongoose.disconnect();