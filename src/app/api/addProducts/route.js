import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary (make sure to set these in .env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dtiebz6dt",
  api_key: process.env.CLOUDINARY_API_KEY || "917975848548442",
  api_secret: process.env.CLOUDINARY_API_SECRET || "n2sFoq3s9w-nyn6coRuCeyh32-o",
});

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, category, subcategory, article, description, image } = body;

    // Basic validation
    if (!name || !category || !subcategory || !article || !description || !image) {
      console.log("validation error")
      return NextResponse.json(
        { success: false, message: "All fields are required including image" },
        { status: 400 }
      );
    }

    // Check for existing article
    const existingProduct = await Product.findOne({ article: article });
    if (existingProduct) {
      console.log("existing product")
      return NextResponse.json(
        { success: false, message: "This article number is already exists" },
        { status: 409 }
      );
    }

    // Upload image to Cloudinary
    let uploadedImage;
    try {
      const cloudRes = await cloudinary.uploader.upload(image);
      uploadedImage = cloudRes.secure_url;
      console.log("image upload successfully")
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return NextResponse.json(
        { success: false, message: "Image upload failed" },
        { status: 500 }
      );
    }

    // Create product
    const newProduct = new Product({
      name,
      category,
      subcategory ,
      article ,
      description,
      image: uploadedImage,
    });

    const savedProduct = await newProduct.save();

    return NextResponse.json(
      { success: true, message: "Product added successfully", product: savedProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product catch:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add product", error: error.message },
      { status: 500 }
    );
  }
}
