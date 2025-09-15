import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://faiq1234:faiq%407007@cluster0.qp5woib.mongodb.net/myappdb?retryWrites=true&w=majority";

if (!MONGODB_URI) throw new Error("Please add your MongoDB URI");

let isConnected = false;

export default async function connectDB() {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(MONGODB_URI, { dbName: "myappdb" });
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected to:", db.connection.name);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}
