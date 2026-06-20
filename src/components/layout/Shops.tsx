"use client";

import Link from "next/link";
import Image from "next/image";

export default function Shops() {
return (
<section className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
    <div className="mx-auto max-w-[1900px] px-20 max-[768px]:px-8 max-[640px]:px-5">

        <div className="pt-8 flex items-center gap-5 text-[22px] text-[#8E8E8E]
            max-[768px]:text-[18px]
            max-[640px]:text-[16px]">
            <Link href="/" className="hover:text-[#61B8BE] duration-300 ">
                Домашня сторінка
            </Link>
            <span>{">"}</span><span>Пошук магазинів</span>
        </div>

        <h1 className="mt-10 max-[768px]:mt-6 text-center text-[48px] font-bold
            max-[768px]:text-[38px]
            max-[640px]:text-[30px]">
                Знайти найближчий магазин
        </h1>

        <div className="mt-16 max-[768px]:mt-6 flex items-center gap-12
                max-[768px]:flex-col
                max-[768px]:items-stretch
                max-[768px]:gap-6">
            <input type="text" className="box-border h-[80px] max-[768px]:h-[70px] flex-1
                rounded-[10px] border border-[#A8A8A8] bg-[#E0E0E0] px-6 py-5 max-[640px]:py-4
                text-[30px] max-[768px]:text-[28px] max-[640px]:text-[24px]
                outline-none"/>

            <div className="flex gap-6 max-[768px]:w-full">

            <Link href="/shops/shop" className=" h-[80px]
                max-[768px]:h-[70px]
                max-[640px]:h-[60px]
                w-[320px]
                rounded-[10px]
                bg-[#00AAAD]
                text-[32px]
                max-[768px]:text-[28px]
                max-[640px]:text-[24px]
                font-semibold
                text-white
                flex items-center justify-center
                max-[768px]:flex-1">
                Пошук
            </Link>

            <button className="h-[80px]
                max-[768px]:h-[70px]
                max-[640px]:h-[60px]
                w-[320px]
                rounded-[10px]
                border border-[#A8A8A8]
                bg-[#E0E0E0]
                text-[30px]
                max-[768px]:text-[28px]
                max-[640px]:text-[24px]
                max-[768px]:flex-1">
                Зараз відчинено
            </button>
        </div>

        
        </div>

            <div className="mt-16 flex gap-8 max-[768px]:flex-col-reverse">

                <div className="flex-1">
                    <Image src="/images/shops/1.png" alt="Карта магазинів"
                        width={1150}
                        height={930}
                        className="w-full"/>
                </div>

            <div className="w-[580px] bg-white p-10 max-[768px]:p-6 shadow-[0_3px_15px_rgba(0,0,0,0.18)] h-fit max-[768px]:w-full">
                <h2 className="text-center text-[30px] font-bold max-[640px]:text-[26px]">
                    Виберіть магазин
                </h2>

                <p className="mt-3 text-[26px] leading-[1.7] text-justify
                    max-[768px]:text-[24px]
                    max-[640px]:text-[20px]">
                        Щоб вибрати магазин, натисніть відповідний значок на карті.
                        Після вибору значка магазина масштаб карти збільшується на цій
                        ділянці.
                </p>
            </div>
        </div>
    </div>
</section>
);
}