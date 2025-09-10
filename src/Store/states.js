import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  activeProduct: null,
  setActiveProduct: (activeProduct) => set({ activeProduct }),
}));
