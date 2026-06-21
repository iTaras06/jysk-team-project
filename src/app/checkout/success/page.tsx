"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useOrdersStore } from "@/features/orders/store";
import { useHydrated } from "@/lib/useHydrated";
import { formatPrice } from "@/lib/format";

function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get("order");
  const order = useOrdersStore((s) => s.orders.find((o) => o.id === orderId));
  const hydrated = useHydrated();

  if (!hydrated) {
    return <div className="min-h-[300px]" />;
  }

  if (!order) {
    return (
      <div>
        <h1 className="text-[40px] font-bold">Замовлення не знайдено</h1>
        <Link
          href="/catalog"
          className="mt-6 inline-flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396]"
        >
          Перейти до каталогу
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[720px]">
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#00AAAD] text-[34px] text-white">
        ✓
      </div>
      <h1 className="mt-6 text-[40px] leading-tight font-bold">
        Дякуємо за замовлення!
      </h1>
      <p className="mt-3 text-[20px] text-[#231F20B3]">
        Замовлення <span className="font-bold text-[#231F20]">№ {order.id}</span> прийнято.
        Ми зв&rsquo;яжемося з вами для підтвердження.
      </p>

      <div className="mt-8 border border-[#00000020] p-7">
        <p className="text-[22px] font-bold">Склад замовлення</p>
        <div className="mt-4 flex flex-col gap-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-[17px]">
              <span className="text-[#231F20B3]">
                {item.title} × {item.qty}
              </span>
              <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between border-t border-[#00000020] pt-5 text-[22px] font-bold">
          <span>Сплачено / до сплати</span>
          <span>{formatPrice(order.total)}</span>
        </div>
      </div>

      <div className="mt-8 flex gap-4 max-[640px]:flex-col">
        <Link
          href="/orders"
          className="flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396] max-[640px]:w-full"
        >
          Мої замовлення
        </Link>
        <Link
          href="/catalog"
          className="flex h-[52px] w-[230px] items-center justify-center bg-[#E0E0E0] text-[19px] font-medium transition hover:bg-[#D3D3D3] max-[640px]:w-full"
        >
          Продовжити покупки
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-12">
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <SuccessContent />
        </Suspense>
      </section>
    </main>
  );
}
