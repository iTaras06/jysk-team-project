"use client";

import Link from "next/link";
import { useOrdersStore } from "@/features/orders/store";
import { useHydrated } from "@/lib/useHydrated";
import { formatPrice } from "@/lib/format";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function OrdersPage() {
  const orders = useOrdersStore((s) => s.orders);
  const hydrated = useHydrated();

  if (!hydrated) {
    return <main className="min-h-[calc(100vh-300px)] bg-white" />;
  }

  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <h1 className="text-[40px] font-bold">Мої замовлення</h1>

        {orders.length === 0 ? (
          <div className="mt-10 flex flex-col items-start gap-6">
            <p className="text-[20px] text-[#231F2080]">У вас поки немає замовлень.</p>
            <Link
              href="/catalog"
              className="flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396]"
            >
              Перейти до каталогу
            </Link>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-6">
            {orders.map((order) => (
              <div key={order.id} className="border border-[#00000020] p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[22px] font-bold">№ {order.id}</p>
                    <p className="text-[16px] text-[#231F2080]">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <span className="bg-[#00AAAD] px-4 py-1.5 text-[16px] font-medium text-white">
                    {order.status}
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-2 border-t border-[#00000015] pt-5">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-[17px]">
                      <span className="text-[#231F20B3]">
                        {item.title} × {item.qty}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-between border-t border-[#00000015] pt-5 text-[20px] font-bold">
                  <span>Разом</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
