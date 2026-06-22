"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Shops() {
  // Робочий перемикач «Зараз відчинено» (фільтр-стан).
  const [openNow, setOpenNow] = useState(false);

  return (
    <section className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
      <div className="mx-auto max-w-[1408px] px-9 max-[768px]:px-8 max-[640px]:px-5">
        <div className="flex items-center gap-3 pt-8 text-[16px] text-[#8E8E8E] max-[640px]:text-[14px]">
          <Link href="/" className="transition duration-300 hover:text-[#00AAAD]">
            Домашня сторінка
          </Link>
          <span>{">"}</span>
          <span>Пошук магазинів</span>
        </div>

        <Reveal>
          <h1 className="mt-8 text-center text-[40px] font-bold max-[640px]:text-[30px]">
            Знайти найближчий магазин
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex items-center gap-6 max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-4">
            <input
              type="text"
              placeholder="Місто або адреса..."
              className="box-border h-[56px] flex-1 rounded-[10px] border border-[#A8A8A8] bg-[#E0E0E0] px-5 text-[18px] outline-none transition focus:border-[#00AAAD]"
            />

            <div className="flex gap-4 max-[768px]:w-full">
              <Link
                href="/shops/shop"
                className="flex h-[56px] w-[200px] items-center justify-center rounded-[10px] bg-[#00AAAD] text-[18px] font-medium text-white transition hover:bg-[#009396] active:scale-[0.97] max-[768px]:flex-1"
              >
                Пошук
              </Link>

              <button
                type="button"
                onClick={() => setOpenNow((v) => !v)}
                aria-pressed={openNow}
                className={`h-[56px] w-[200px] rounded-[10px] border text-[18px] font-medium transition active:scale-[0.97] max-[768px]:flex-1 ${
                  openNow
                    ? "border-[#00AAAD] bg-[#00AAAD] text-white"
                    : "border-[#A8A8A8] bg-[#E0E0E0] hover:bg-[#D3D3D3]"
                }`}
              >
                Зараз відчинено
              </button>
            </div>
          </div>
        </Reveal>

        {openNow && (
          <p className="mt-4 text-[16px] text-[#00AAAD]">
            Показано лише магазини, що працюють зараз.
          </p>
        )}

        <div className="mt-12 flex gap-8 max-[768px]:flex-col-reverse">
          <Reveal className="flex-1">
            <div className="group overflow-hidden rounded-[8px]">
              <Image
                src="/images/shops/1.png"
                alt="Карта магазинів"
                width={1150}
                height={930}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="w-[420px] max-[768px]:w-full">
            <div className="h-fit bg-white p-7 shadow-[0_3px_15px_rgba(0,0,0,0.12)]">
              <h2 className="text-center text-[24px] font-bold">Виберіть магазин</h2>
              <p className="mt-3 text-[18px] leading-[1.6] text-[#231F20B3] max-[640px]:text-[16px]">
                Щоб вибрати магазин, натисніть відповідний значок на карті. Після вибору значка
                магазина масштаб карти збільшується на цій ділянці.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
