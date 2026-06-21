"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/features/cart/store";
import { useFavoritesStore } from "@/features/favorites/store";
import { useHydrated } from "@/lib/useHydrated";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleFav = useFavoritesStore((s) => s.toggle);
  const isFav = useFavoritesStore((s) => s.ids.includes(product.id));
  const hydrated = useHydrated();

  return (
    <article className="relative border border-[#00000030] bg-white transition hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)]">
      <button
        type="button"
        onClick={() => toggleFav(product.id)}
        aria-label={isFav ? "Прибрати з обраного" : "Додати в обране"}
        className="absolute top-3 right-3 z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/90 text-[20px] shadow transition hover:bg-white"
      >
        <span className={hydrated && isFav ? "text-[#E4002B]" : "text-[#231F2080]"}>
          {hydrated && isFav ? "♥" : "♡"}
        </span>
      </button>

      <Link href={`/product/${product.slug}`} className="block">
        <div className={`relative h-[222px] overflow-hidden ${product.color ?? "bg-[#E0E0E0]"}`}>
          {product.image && (
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover transition duration-300 hover:scale-105"
            />
          )}
          {product.label && (
            <span className="absolute top-4 left-4 z-[1] bg-[#00AAAD] px-4 py-1.5 text-[17px] font-medium text-white">
              {product.label}
            </span>
          )}
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-[22px] font-medium transition hover:text-[#00AAAD]">
            {product.title}
          </h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-[23px] font-bold">{formatPrice(product.price)}</p>
            {product.oldPrice && (
              <p className="text-[15px] text-[#231F2080] line-through">
                {formatPrice(product.oldPrice)}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="h-[40px] w-[99px] bg-[#00AAAD] text-[17px] font-medium text-white transition hover:bg-[#009396] active:scale-[0.97]"
          >
            У кошик
          </button>
        </div>
      </div>
    </article>
  );
}
