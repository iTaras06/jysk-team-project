"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const schedule = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя",
];

export default function ShopPage() {
  const [showCard, setShowCard] = useState(true);

  return (
    <section className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
      <div className="mx-auto max-w-[1408px] px-9 max-[768px]:px-8 max-[640px]:px-5">
        <div className="flex items-center gap-3 pt-8 text-[16px] text-[#8E8E8E] max-[640px]:text-[14px]">
          <Link href="/" className="transition duration-300 hover:text-[#00AAAD]">
            Домашня сторінка
          </Link>
          <span>{">"}</span>
          <Link href="/shops" className="transition duration-300 hover:text-[#00AAAD]">
            Пошук магазинів
          </Link>
          <span>{">"}</span>
          <span>Магазин</span>
        </div>

        <div className="mt-8 flex gap-8 max-[768px]:mt-4 max-[768px]:flex-col">
          <div className="flex-1">
            <Reveal>
              <h1 className="text-[40px] font-bold max-[640px]:text-[28px]">
                HYGGY Житомир ТЦ Олді
              </h1>

              <div className="mt-5 text-[18px] text-[#231F20B3] max-[640px]:text-[16px]">
                вул. Михайла Грушевського, 5 10002 Житомир
              </div>

              <Link
                href="/shops"
                className="mt-4 block w-fit text-[18px] text-[#00AAAD] underline transition hover:text-[#009396] max-[640px]:text-[16px]"
              >
                Обрати інший магазин
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative mt-8 overflow-hidden rounded-[8px]">
                <Image src="/images/shops/1.png" alt="" width={980} height={820} className="w-full" />

                {showCard && (
                  <>
                    <div className="animate-fade-in absolute inset-0 bg-black/50" />

                    <div className="animate-pop-in absolute left-1/2 top-1/2 w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white p-5 shadow-lg">
                      <button
                        type="button"
                        aria-label="Закрити картку"
                        className="absolute right-2 top-[-18px] text-[40px] leading-none text-white transition hover:rotate-90 hover:opacity-70"
                        onClick={() => setShowCard(false)}
                      >
                        ×
                      </button>

                      <Image src="/images/shops/22.png" alt="" width={200} height={110} className="w-full px-5" />

                      <div className="mt-4 text-[18px] font-bold">HYGGY Житомир ТЦ Олді</div>

                      <div className="mt-3 text-[15px] text-[#767676]">
                        вул. Михайла Грушевського 5
                        <br />
                        10002 Житомир
                      </div>

                      <div className="mt-2 text-[15px] text-[#00AAAD]">Тел: +380442470786</div>

                      <button
                        type="button"
                        className="text-[15px] text-[#00AAAD] underline transition hover:text-[#009396]"
                      >
                        Знайти магазин
                      </button>

                      <div className="mt-4 text-[16px] font-bold">Робочі години</div>

                      <div className="mt-2 flex justify-between text-[15px] text-[#767676]">
                        <span>Сьогодні</span>
                        <span>10:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between text-[15px] text-[#767676]">
                        <span>Завтра</span>
                        <span>10:00 - 20:00</span>
                      </div>
                    </div>
                  </>
                )}

                {!showCard && (
                  <button
                    type="button"
                    onClick={() => setShowCard(true)}
                    className="absolute bottom-4 right-4 rounded-[8px] bg-[#00AAAD] px-5 py-2 text-[16px] font-medium text-white shadow transition hover:bg-[#009396]"
                  >
                    Показати картку
                  </button>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="w-[480px] max-[768px]:w-full">
            <Image src="/images/shops/21.png" alt="" width={630} height={400} className="w-full rounded-[8px]" />

            <div className="mt-8 bg-white px-10 pt-7 pb-10 shadow-[0_3px_15px_rgba(0,0,0,0.12)] max-[640px]:px-6">
              <h2 className="text-[24px] font-bold max-[640px]:text-[22px]">Робочі години</h2>

              <div className="mt-6 space-y-3 text-[18px] max-[640px]:text-[16px]">
                {schedule.map((day) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span className="text-[#231F20B3]">10:00 - 20:00</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
