import mongoose from "mongoose";
import Product from "../models/product.js";     
import { productData } from "../Assets/AllData.js";

// URL-encode the password (@ -> %40)
const MONGODB_URI = "mongodb+srv://faiq1234:faiq%407007@cluster0.qp5woib.mongodb.net/myappdb?retryWrites=true&w=majority";

async function seedDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear old products
    await Product.deleteMany({});
    console.log("🗑️ Old products removed");

    // Insert all products at once
    await Product.insertMany(productData);
    console.log("✅ Products inserted successfully");

    await mongoose.connection.close();
    console.log("🔒 Connection closed");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    await mongoose.connection.close();
  }
}

seedDB();
