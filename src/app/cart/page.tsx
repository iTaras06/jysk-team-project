"use client";

import Image from "next/image";
import Link from "next/link";
import { selectCartTotal, useCartStore } from "@/features/cart/store";
import { useHydrated } from "@/lib/useHydrated";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const total = useCartStore(selectCartTotal);
  const hydrated = useHydrated();

  if (!hydrated) {
    return <main className="min-h-[calc(100vh-300px)] bg-white" />;
  }

  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <h1 className="text-[40px] font-bold">Кошик</h1>

        {items.length === 0 ? (
          <div className="mt-10 flex flex-col items-start gap-6">
            <p className="text-[20px] text-[#231F2080]">Ваш кошик порожній.</p>
            <Link
              href="/catalog"
              className="flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396]"
            >
              Перейти до каталогу
            </Link>
          </div>
        ) : (
          <div className="mt-8 flex gap-9 max-[900px]:flex-col">
            <div className="flex-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 border-b border-[#00000020] py-5"
                >
                  <Link
                    href={`/product/${item.slug}`}
                    className={`relative h-[90px] w-[90px] shrink-0 overflow-hidden ${item.color ?? "bg-[#E0E0E0]"}`}
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="90px"
                        className="object-cover"
                      />
                    )}
                  </Link>
                  <div className="flex-1">
                    <Link
                      href={`/product/${item.slug}`}
                      className="text-[21px] font-medium transition hover:text-[#00AAAD]"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 text-[17px] text-[#231F2080]">
                      {formatPrice(item.price)} / шт
                    </p>
                  </div>

                  <div className="flex items-center border border-[#00000030]">
                    <button
                      type="button"
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="h-[42px] w-[42px] text-[22px] transition hover:bg-[#F0F0F0]"
                      aria-label="Зменшити кількість"
                    >
                      −
                    </button>
                    <span className="w-[46px] text-center text-[19px]">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="h-[42px] w-[42px] text-[22px] transition hover:bg-[#F0F0F0]"
                      aria-label="Збільшити кількість"
                    >
                      +
                    </button>
                  </div>

                  <p className="w-[140px] text-right text-[21px] font-bold">
                    {formatPrice(item.price * item.qty)}
                  </p>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-[26px] text-[#231F2080] transition hover:text-[#E4002B]"
                    aria-label="Видалити товар"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={clear}
                className="mt-5 text-[17px] text-[#231F2080] underline transition hover:text-[#E4002B]"
              >
                Очистити кошик
              </button>
            </div>

            <aside className="h-fit w-[360px] bg-[#F5F5F5] p-7 max-[900px]:w-full">
              <p className="text-[24px] font-bold">Разом</p>
              <div className="mt-5 flex justify-between text-[19px]">
                <span className="text-[#231F20B3]">Сума</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <div className="mt-2 flex justify-between text-[19px]">
                <span className="text-[#231F20B3]">Доставка</span>
                <span className="font-medium">розрахунок при оформленні</span>
              </div>
              <div className="mt-5 flex justify-between border-t border-[#00000020] pt-5 text-[24px] font-bold">
                <span>До сплати</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Link
                href="/checkout"
                className="mt-7 flex h-[56px] w-full items-center justify-center bg-[#00AAAD] text-[20px] font-medium text-white transition hover:bg-[#009396] active:scale-[0.99]"
              >
                Оформити замовлення
              </Link>
              <Link
                href="/catalog"
                className="mt-3 flex h-[50px] w-full items-center justify-center bg-[#E0E0E0] text-[18px] font-medium transition hover:bg-[#D3D3D3]"
              >
                Продовжити покупки
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
