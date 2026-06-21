"use client";

import { useCartStore } from "@/features/cart/store";
import { useFavoritesStore } from "@/features/favorites/store";
import { useHydrated } from "@/lib/useHydrated";
import type { Product } from "@/types/product";

export default function ProductActions({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleFav = useFavoritesStore((s) => s.toggle);
  const isFav = useFavoritesStore((s) => s.ids.includes(product.id));
  const hydrated = useHydrated();
  const active = hydrated && isFav;

  return (
    <div className="mt-9 flex gap-4">
      <button
        type="button"
        onClick={() => addItem(product)}
        className="h-[56px] w-[220px] bg-[#00AAAD] text-[20px] font-medium text-white transition hover:bg-[#009396] active:scale-[0.98]"
      >
        Додати в кошик
      </button>
      <button
        type="button"
        onClick={() => toggleFav(product.id)}
        className={`h-[56px] w-[170px] border text-[20px] font-medium transition ${
          active
            ? "border-[#E4002B] text-[#E4002B]"
            : "border-[#231F20] hover:bg-[#F0F0F0]"
        }`}
      >
        {active ? "♥ В обраному" : "♡ В обране"}
      </button>
    </div>
  );
}
