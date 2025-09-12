import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  activeProduct: null,
  search:"",
  article:"",
  setArticle:(value)=>set({article:value}),
  setSearch:(value)=>set({search:value}),
  setActiveProduct: (activeProduct) => set({ activeProduct }),
}));
