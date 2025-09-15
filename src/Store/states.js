import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

// helper: sort products by createdAt (newest first)
const sortByCreatedAt = (products) => {
  return [...products].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export const useStore = create((set, get) => ({
  productData: [],
  search: "",
  article: "",
  setArticle: (value) => set({ article: value }),
  setSearch: (value) => set({ search: value }),
  setActiveProduct: (activeProduct) => set({ activeProduct }),

  // ✅ Fetch all products
  getProduct: async () => {
    try {
      const response = await axios.get("/api/getProduct");
      const data = response.data;
      if (data.success && data.allProducts) {
        set({ productData: sortByCreatedAt(data.allProducts) });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Something went wrong while fetching products");
    }
  },

  // ✅ Delete product
  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete("/api/deleteProduct", {
        data: { productId },
      });
      const { data } = response;
      if (data.success) {
        toast.success("Product deleted successfully");

        const updatedProducts = get().productData.filter(
          (p) => p._id !== productId
        );

        set({ productData: sortByCreatedAt(updatedProducts) });
      } else {
        toast.error(data.message || "Failed to delete product");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while deleting product");
    }
  },

  // ✅ Add product
  addProduct: async (newProduct) => {
    try {
      const response = await axios.post("/api/addProducts", newProduct);
      const { data } = response;

      if (data.success) {
        toast.success("Product added successfully");

        const updatedProducts = [...get().productData, data.product];
        set({ productData: sortByCreatedAt(updatedProducts) });
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Something went wrong while adding product");
    }
  },
}));
