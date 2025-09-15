import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";   
import Product from "@/models/product.js";  

export async function GET() {
  try {
    await connectDB(); 

    // Get products sorted by newest first
    const allProducts = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, allProducts }, 
      { status: 200 }                 
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to get products" },
      { status: 500 }
    );
  }
}
