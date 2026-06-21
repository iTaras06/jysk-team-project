"use client";

import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { useFavoritesStore } from "@/features/favorites/store";
import { useHydrated } from "@/lib/useHydrated";
import type { Product } from "@/types/product";

export default function FavoritesList({ products }: { products: Product[] }) {
  const ids = useFavoritesStore((s) => s.ids);
  const hydrated = useHydrated();

  if (!hydrated) {
    return <div className="mt-8 h-[200px]" />;
  }

  const favorites = products.filter((p) => ids.includes(p.id));

  if (favorites.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-start gap-6">
        <p className="text-[20px] text-[#231F2080]">
          У вашому списку обраного поки нічого немає.
        </p>
        <Link
          href="/catalog"
          className="flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396]"
        >
          Перейти до каталогу
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
