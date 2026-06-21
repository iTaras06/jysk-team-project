"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [showCard, setShowCard] = useState(true);

return (
<section className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
    <div className="mx-auto max-w-[1900px] px-20 max-[768px]:px-8 max-[640px]:px-5">

        <div className="pt-8 flex items-center gap-5 text-[22px] text-[#8E8E8E]
            max-[768px]:text-[18px]
            max-[640px]:text-[16px]">
            <Link href="/" className="hover:text-[#61B8BE] duration-300">
                Домашня сторінка
            </Link>
            <span>{">"}</span>
            <Link href="/shops" className="hover:text-[#61B8BE] duration-300">
                Пошук магазинів
            </Link>
            <span>{">"}</span><span>Магазин</span>
        </div>

        <div className="mt-10 flex gap-8 max-[768px]:flex-col max-[768px]:mt-4">

            <div className="flex-1">

                <h1 className="text-[40px] max-[768px]:text-[32px] max-[640px]:text-[28px] font-bold">
                    HYGGY Житомир ТЦ Олді
                </h1>

                <div className="mt-7 max-[768px]:mt-2 text-[24px] max-[768px]:text-[20px] max-[640px]:text-[18px]">
                    вул. Михайла Грушевського, 5 10002 Житомир
                </div>

                <Link href="/shops" className="mt-7 block text-[24px] max-[768px]:text-[20px] max-[640px]:text-[18px] text-[#00AAAD] underline">
                    Обрати інший магазин
                </Link>

                <div className="relative mt-12 max-[768px]:mt-4">

                    <Image src="/images/shops/1.png" alt="" width={980} height={820} className="w-full"/>

                    {showCard && (
                        <div className="absolute inset-0 bg-black/50"></div>
                    )}

                    {showCard && (
                        <div className="absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        bg-white rounded-[8px]
                        shadow-lg p-5 max-[768px]:pb-2 w-[270px]">

                        <button
                            className="absolute right-2 top-[-20px] max-[768px]:top-[-14px] text-[46px] max-[768px]:text-[36px]"
                            onClick={() => setShowCard(false)}>×
                        </button>

                        <Image src="/images/shops/22.png" alt="" width={200} height={110} className="w-full px-5"/>

                        <div className="mt-4 text-[20px] max-[768px]:text-[18px] font-bold">
                            HYGGY Житомир ТЦ Олді
                        </div>

                        <div className="mt-3 text-[#767676] text-[16px]">
                            вул. Михайла Грушевського 5
                            <br />
                            10002 Житомир
                        </div>

                        <div className="mt-2 text-[#00AAAD] text-[16px]">
                            Тел: +380442470786
                        </div>

                        <div className="text-[#00AAAD] underline text-[16px]">
                            Знайти магазин
                        </div>

                        <div className="mt-4 font-bold">
                            Робочі години
                        </div>

                        <div className="mt-2 flex justify-between text-[#767676]">
                            <span>Сьогодні</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between text-[#767676]">
                            <span>Завтра</span>
                            <span>10:00 - 20:00</span>
                        </div>

                    </div>
                    )}
                </div>

            </div>


            <div className="w-[600px] max-[768px]:w-full">

                <Image src="/images/shops/21.png" alt="" width={630} height={400} className="w-full"/>

                <div className="mt-9 bg-white shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-16 pt-8 pb-27 max-[768px]:pb-8">

                    <h2 className="text-[32px] max-[768px]:text-[28px] max-[640px]:text-[26px] font-bold">
                        Робочі години
                    </h2>

                    <div className="mt-10  max-[768px]:mt-6 space-y-8 max-[768px]:space-y-3 text-[28px] max-[768px]:text-[22px] max-[640px]:text-[20px]">

                        <div className="flex justify-between">
                            <span>Понеділок</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Вівторок</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Середа</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Четвер</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>П’ятниця</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Субота</span>
                            <span>10:00 - 20:00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Неділя</span>
                            <span>10:00 - 20:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}