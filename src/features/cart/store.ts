import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/product";

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  price: number;
  color?: string;
  image?: string;
  qty: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}

// Стор кошика. Зберігається в localStorage через persist —
// дані не зникають при перезавантаженні сторінки.
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                id: product.id,
                slug: product.slug,
                title: product.title,
                price: product.price,
                color: product.color,
                image: product.image,
                qty: 1,
              },
            ],
          };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: Math.max(1, qty) } : i,
          ),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "hyggy-cart" },
  ),
);

// Похідні селектори — щоб не дублювати reduce по компонентах.
export const selectCartCount = (s: CartState) =>
  s.items.reduce((sum, i) => sum + i.qty, 0);

export const selectCartTotal = (s: CartState) =>
  s.items.reduce((sum, i) => sum + i.price * i.qty, 0);
