"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const deliveryLinks = [
  "Як я можу змінити замовлення?",
  "Як я можу скасувати замовлення?",
  "Я не отримав підтвердження замовлення або рахунок-фактуру",
  "Магазин не проінформував мене, що я можу забрати замовлення",
  "Якими варіантами оплати я можу скористатися на сайті?",
  "Як довго моє замовлення «Замов та Забери» залишається зарезервованим?",
  "Де я можу використати свою подарункову картку?",
];

const popularQuestions = [
  "Як я можу зробити замовлення в вашому інтернет-магазині?",
  "Чи можу я змінити або скасувати своє замовлення після його оформлення?",
  "Які варіанти доставки доступні для замовлень?",
  "Скільки часу займе доставка моєї покупки?",
  "Як я можу відстежувати статус свого замовлення?",
  "Які умови повернення товарів, якщо вони не підійшли?",
  "Що робити, якщо товар прибув пошкодженим?",
  "Які матеріали використовуються для виготовлення вашої продукції?",
  "Як я можу знайти найближчий до мене магазин, що продає ваші меблі?",
  "Чи можу я замовити товар в магазині, а забрати його самостійно?",
  "Чи надаєте ви послуги складання меблів?",
  "Які методи оплати ви приймаєте?",
  "Чи є можливість отримати знижку при покупці великої кількості меблів?",
];


export default function Questions() {
const [showDelivery, setShowDelivery] = useState(false);

return (
    <section className="bg-[#F5F5F5] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
        <div className="mx-auto max-w-[2000px] px-20 max-[768px]:px-8 max-[640px]:px-5">

            <div className="pt-8 flex items-center gap-5 text-[22px] text-[#8E8E8E]
                max-[768px]:text-[18px] 
                max-[640px]:text-[16px]">
                <Link href="/" className="hover:text-[#61B8BE] duration-300">
                    Домашня сторінка
                </Link>
                <span>{">"}</span><span>Питання/відповіді</span>
            </div>

            <div className="mt-10 max-[768px]:mt-4 flex gap-8 max-[768px]:flex-col">

                <div className="flex-1">
                    
                    <div className="max-w-[1400px]">

                        <h1 className="text-[48px] font-bold max-[768px]:text-[42px] max-[640px]:text-[36px] max-[768px]:text-center">
                            Питання і відповіді
                        </h1>

                        <p className="mt-8 max-[768px]:mt-2 text-[24px] leading-[1.5] text-[#231F20] text-justify
                        max-[768px]:text-[20px]
                        max-[640px]:text-[18px]">
                            Вітаємо вас у розділі «Питання та відповіді» нашого інтернет-магазину! Ми прагнемо зробити ваш досвід покупки максимально зручним і зрозумілим. Тут ви знайдете відповіді на найпоширеніші запитання щодо замовлень, доставки, повернення товарів та нашої продукції. Ми рекомендуємо ознайомитися з цією інформацією перед оформленням замовлення, щоб уникнути можливих непорозумінь. Якщо ви не знайшли потрібну інформацію, будь ласка, зв’яжіться з нашою службою підтримки, і ми із задоволенням вам допоможемо. Наші фахівці готові відповісти на ваші запитання в будь-який час. Ваш комфорт і задоволення від покупки – наш головний пріоритет. Ми постійно вдосконалюємо наш сервіс, щоб зробити його ще більш зручним для вас. Дякуємо, що обрали нас для облаштування вашого дому!
                        </p>

                        <div className="mt-12 max-[768px]:mt-8 flex flex-col gap-6">

                            <button className="w-full h-[95px] max-[768px]:h-[70px] bg-[#E0E0E0] shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-10 text-left text-[28px] max-[768px]:text-[22px] font-semibold flex items-center justify-between">
                                Питання пов’язані з онлайн замовленнями
                                <span className="ml-5 text-[60px] max-[768px]:text-[40px]">{">"}</span>
                            </button>

                            <div>
                                <button
                                    onClick={() => setShowDelivery(!showDelivery)}
                                    className="w-full h-[95px] max-[768px]:h-[70px] bg-[#00AAAD] text-white shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-10 text-left text-[28px] max-[768px]:text-[22px] font-semibold flex items-center justify-between"
                                    >
                                    Перевезення та доставка
                                    <span className="ml-5 text-[60px] max-[768px]:text-[40px]">{">"}</span>
                                </button>

                                {showDelivery && (
                                    <div className="bg-white shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-10 py-10">
                                        <div className="flex flex-col gap-6 text-[24px]">
                                            {deliveryLinks.map((item) => (
                                                <a key={item} href="#" className="underline underline-offset-6">{item}</a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className="w-full h-[95px] max-[768px]:h-[70px] bg-[#E0E0E0] shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-10 text-left text-[28px] max-[768px]:text-[22px] font-semibold flex items-center justify-between">
                                Повернення та претензії
                                <span className="ml-5 text-[60px] max-[768px]:text-[40px]">{">"}</span>
                            </button>

                            <button className="w-full h-[95px] max-[768px]:h-[70px] bg-[#E0E0E0] shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-10 text-left text-[28px] max-[768px]:text-[22px] font-semibold flex items-center justify-between">
                                Питання стосовно продукції
                                <span className="ml-5 text-[60px] max-[768px]:text-[40px]">{">"}</span>
                            </button>

                            <button className="w-full h-[95px] max-[768px]:h-[70px] bg-[#E0E0E0] shadow-[0_3px_15px_rgba(0,0,0,0.18)] px-10 text-left text-[28px] max-[768px]:text-[22px] font-semibold flex items-center justify-between">
                                Питання пов’язані з магазинами та замовленнями із магазинів
                                <span className="ml-5 text-[60px] max-[768px]:text-[40px]">{">"}</span>
                            </button>
                        </div>
                    </div>
                </div>


                <div
                    className="w-[560px] mt-30 bg-white p-8 h-fit
                        shadow-[0_3px_15px_rgba(0,0,0,0.18)]
                        max-[768px]:w-full
                        max-[768px]:mt-6">
                    <h2 className="text-center text-[40px] font-bold mb-10">Контакти</h2>

                    <div className="space-y-9 text-[22px]">
                        <div className="flex items-start gap-8">
                            <Image src="/icons/questions/1.png" alt="" width={52} height={50}/>

                            <div>
                                <div className="text-[22px] font-semibold">
                                    Зв’язатися з нами в Messenger
                                </div>
                                <div className="mt-2 text-[18px] text-[#767676]">
                                    Час відповіді - 1 год.
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-[#A8A8A8]" />

                        <div className="flex items-start gap-8">
                            <Image src="/icons/questions/2.png" alt="" width={50} height={20}/>
                            <div>
                                <div className="text-[22px] font-semibold">
                                    +380123456789
                                </div>
                                <div className="mt-2 text-[18px] text-[#767676]">
                                    Час відповіді - 1 хв.
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-[#A8A8A8]" />

                        <div className="flex items-start gap-8">
                            <Image src="/icons/questions/3.png" alt="" width={52} height={40}/>
                            <div>
                                <div className="text-[22px] font-semibold">
                                    E-mail
                                </div>
                                <div className="mt-2 text-[18px] text-[#767676]">
                                    Час відповіді - 24 год.
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="font-bold text-[22px]">
                                Графік роботи відділу по роботі з клієнтами
                            </h3>
                            <ul className="mt-5 list-disc pl-20 space-y-3">
                                <li>Пн – Пт: 09:00 - 19:00</li>
                                <li>Сб – Нд: 10:00 - 18:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mt-20 max-[768px]:my-10 text-[48px] font-bold max-[768px]:text-[40px] max-[640px]:text-[34px] max-[768px]:text-center">
                Найбільш поширені питання
            </h2>

            <div className="mt-8 bg-white px-10 py-10 shadow-[0_3px_15px_rgba(0,0,0,0.18)]
                grid grid-cols-2 gap-x-20 gap-y-6
                max-[768px]:grid-cols-1">
                
                {popularQuestions.map((item) => (
                    <a key={item} href="#" className="text-[24px] max-[768px]:text-[20px] max-[640px]:text-[18px] underline underline-offset-4"> {item} </a>
                ))}
            </div>
        </div>
    </section>
  );
}