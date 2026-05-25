import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Car from "./models/Car.js";

await mongoose.connect(process.env.MONGO_URI);

await Car.deleteMany({});
console.log("Cleared existing cars");

await Car.insertMany([
  { name: "Toyota Camry", type: "Sedan", seats: 4, pricePerDay: 70000, totalUnits: 5, image: "https://images.unsplash.com/photo-1657872737697-737a2d123ef2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95b3RhJTIwY2FtcnklMjAyMDJ8ZW58MHx8MHx8fDA%3D" },
  { name: "Nissan Altima", type: "Sedan", seats: 4, pricePerDay: 75000, totalUnits: 5, image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlzc2FuJTIwYWx0aW1hfGVufDB8fDB8fHww" },
  { name: "Lexus GX 460", type: "SUV", seats: 7, pricePerDay: 220000, totalUnits: 3, image: "https://images.unsplash.com/photo-1669691101370-9ee9ee0782dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGV4dXMlMjBneDQ2MHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Honda CR-V", type: "SUV", seats: 7, pricePerDay: 90000, totalUnits: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrbELLUA8IqdyvD2MAzF-5RGRwZdAR58GVQ&s" },
  { name: "Toyota Prado", type: "SUV", seats: 7, pricePerDay: 180000, totalUnits: 8, image: "https://images.unsplash.com/photo-1630826362226-a509049bcdbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95b3RhJTIwcHJhZG8lMjAyMDJ8ZW58MHx8MHx8fDA%3D" },
  { name: "Hyundai Tucson", type: "SUV", seats: 5, pricePerDay: 85000, totalUnits: 3, image: "https://images.unsplash.com/photo-1575090536203-2a6193126514?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHl1bmRhaSUyMHR1Y3NvbnxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Kia Sportage", type: "SUV", seats: 5, pricePerDay: 80000, totalUnits: 2, image: "https://images.unsplash.com/photo-1688893287874-ac7fbd686c24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lhJTIwc3BvcnRhZ2V8ZW58MHx8MHx8fDA%3D" },
  { name: "Mercedes C-Class", type: "Luxury", seats: 4, pricePerDay: 180000, totalUnits: 4, image: "https://images.unsplash.com/photo-1625690096555-a0a4d190901c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVyY2VkZXMlMjBjJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" },
  { name: "BMW X5", type: "Luxury", seats: 5, pricePerDay: 250000, totalUnits: 5, image: "https://images.unsplash.com/photo-1609184166822-bd1f1b991a06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJtdyUyMHg1fGVufDB8fDB8fHww" },
  { name: "Audi A6", type: "Luxury", seats: 4, pricePerDay: 210000, totalUnits: 3, image: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVkaSUyMGE2fGVufDB8fDB8fHww" },
  { name: "Range Rover Sport", type: "Luxury", seats: 5, pricePerDay: 300000, totalUnits: 3, image: "https://images.unsplash.com/photo-1725815761064-b84c3f4f9b94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZ2UlMjByb3ZlciUyMHNwb3J0JTIwMjAyfGVufDB8fDB8fHww" },
  { name: "Mercedes GLE", type: "Luxury", seats: 5, pricePerDay: 280000, totalUnits: 3, image: "https://images.unsplash.com/photo-1669234226129-8ede05b40eff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBnbGV8ZW58MHx8MHx8fDA%3D" },
  { name: "Porsche Cayenne", type: "Luxury", seats: 5, pricePerDay: 450000, totalUnits: 2, image: "https://images.unsplash.com/photo-1654159866298-e3c8ee93e43b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZSUyMGNheWVubmV8ZW58MHx8MHx8fDA%3D" },
  { name: "Ferrari SF90", type: "Exotic", seats: 2, pricePerDay: 1500000, totalUnits: 1, image: "https://images.unsplash.com/photo-1633768428926-81fb4499f795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlcnJhcmklMjBzZjkwfGVufDB8fDB8fHww" },
  { name: "Lamborghini Huracán", type: "Exotic", seats: 2, pricePerDay: 1700000, totalUnits: 1, image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYm9yZ2hpbmklMjBodXJhYyVDMyVBMW58ZW58MHx8MHx8fDA%3D" },
  { name: "Rolls Royce Ghost", type: "Exotic", seats: 4, pricePerDay: 2000000, totalUnits: 1, image: "https://images.unsplash.com/photo-1625510872834-7db6c4273870?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvbGxzJTIwcm95Y2UlMjBnaG9zdHxlbnwwfHwwfHx8MA%3D%3D" },
]);

console.log("URI:", process.env.MONGO_URI);

console.log("Cars seeded!");

mongoose.disconnect();