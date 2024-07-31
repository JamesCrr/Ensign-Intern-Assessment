import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: {},
      totalItemsInCart: 0,
      addItemToCart: (newItem) => {
        const newCart = { ...get().cart };
        const newCount = newItem.id in newCart ? newCart[newItem.id]["count"] + 1 : 1;
        newCart[newItem.id] = { item: newItem, count: newCount };
        set((state) => ({ cart: newCart, totalItemsInCart: state.totalItemsInCart + 1 }));
      },
      removeItemFromCart: (itemId) => {
        const newCart = { ...get().cart };
        newCart[itemId]["count"] -= 1;
        if (newCart[itemId]["count"] == 0) delete newCart[itemId];
        set((state) => ({ cart: newCart, totalItemsInCart: state.totalItemsInCart - 1 }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCartStore;
