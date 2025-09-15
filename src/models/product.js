import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    article: { type: String, required: true, unique: true }, 
    description: { type: String },
    image: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);


const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
