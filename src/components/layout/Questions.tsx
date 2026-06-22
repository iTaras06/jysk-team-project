"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Кожен розділ — окремий робочий акордеон зі своїм списком питань.
const sections = [
  {
    title: "Питання пов’язані з онлайн замовленнями",
    items: [
      "Як я можу зробити замовлення в вашому інтернет-магазині?",
      "Чи можу я змінити або скасувати своє замовлення після його оформлення?",
      "Як я можу відстежувати статус свого замовлення?",
      "Якими варіантами оплати я можу скористатися на сайті?",
      "Де я можу використати свою подарункову картку?",
    ],
  },
  {
    title: "Перевезення та доставка",
    items: [
      "Як я можу змінити замовлення?",
      "Як я можу скасувати замовлення?",
      "Я не отримав підтвердження замовлення або рахунок-фактуру",
      "Магазин не проінформував мене, що я можу забрати замовлення",
      "Які варіанти доставки доступні для замовлень?",
      "Скільки часу займе доставка моєї покупки?",
      "Як довго моє замовлення «Замов та Забери» залишається зарезервованим?",
    ],
  },
  {
    title: "Повернення та претензії",
    items: [
      "Які умови повернення товарів, якщо вони не підійшли?",
      "Що робити, якщо товар прибув пошкодженим?",
      "Протягом якого часу я можу повернути товар?",
      "Як оформити претензію щодо якості товару?",
      "Коли я отримаю кошти після повернення?",
    ],
  },
  {
    title: "Питання стосовно продукції",
    items: [
      "Які матеріали використовуються для виготовлення вашої продукції?",
      "Чи надаєте ви послуги складання меблів?",
      "Чи є гарантія на товари?",
      "Як доглядати за меблями, щоб вони служили довше?",
      "Чи можна замовити товар за індивідуальними розмірами?",
    ],
  },
  {
    title: "Питання пов’язані з магазинами та замовленнями із магазинів",
    items: [
      "Як я можу знайти найближчий до мене магазин?",
      "Чи можу я замовити товар в магазині, а забрати його самостійно?",
      "Який графік роботи магазинів?",
      "Чи є можливість отримати знижку при покупці великої кількості меблів?",
      "Чи можна перевірити наявність товару в конкретному магазині?",
    ],
  },
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
  // Дозволяємо відкривати кілька розділів одночасно.
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggle = (id: number) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <section className="bg-[#F5F5F5] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
      <div className="mx-auto max-w-[1408px] px-9 max-[768px]:px-8 max-[640px]:px-5">
        <div className="flex items-center gap-3 pt-8 text-[16px] text-[#8E8E8E] max-[640px]:text-[14px]">
          <Link href="/" className="transition duration-300 hover:text-[#00AAAD]">
            Домашня сторінка
          </Link>
          <span>{">"}</span>
          <span>Питання/відповіді</span>
        </div>

        <div className="mt-8 flex gap-8 max-[768px]:mt-4 max-[768px]:flex-col">
          <div className="flex-1">
            <h1 className="text-[40px] font-bold max-[640px]:text-[32px] max-[768px]:text-center">
              Питання і відповіді
            </h1>

            <p className="mt-5 max-w-[820px] text-[18px] leading-[1.6] text-[#231F20B3] max-[640px]:text-[16px]">
              Вітаємо вас у розділі «Питання та відповіді» нашого інтернет-магазину! Ми прагнемо
              зробити ваш досвід покупки максимально зручним і зрозумілим. Тут ви знайдете
              відповіді на найпоширеніші запитання щодо замовлень, доставки, повернення товарів та
              нашої продукції. Якщо ви не знайшли потрібну інформацію, будь ласка, зв’яжіться з
              нашою службою підтримки, і ми із задоволенням вам допоможемо. Ваш комфорт і
              задоволення від покупки — наш головний пріоритет.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {sections.map((section, id) => {
                const open = openIds.includes(id);
                return (
                  <div key={section.title}>
                    <button
                      type="button"
                      onClick={() => toggle(id)}
                      aria-expanded={open}
                      className={`flex w-full items-center justify-between px-7 py-5 text-left text-[20px] font-medium shadow-[0_3px_15px_rgba(0,0,0,0.12)] transition-colors duration-300 max-[640px]:text-[18px] ${
                        open ? "bg-[#00AAAD] text-white" : "bg-[#E0E0E0] hover:bg-[#D3D3D3]"
                      }`}
                    >
                      <span className="pr-4">{section.title}</span>
                      <span
                        className={`shrink-0 text-[26px] leading-none transition-transform duration-300 ${
                          open ? "rotate-90" : ""
                        }`}
                      >
                        {">"}
                      </span>
                    </button>

                    {/* Плавне розгортання через grid-rows 0fr → 1fr */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-4 bg-white px-7 py-7 shadow-[0_3px_15px_rgba(0,0,0,0.12)]">
                          {section.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="w-fit text-[18px] text-[#231F20] underline underline-offset-4 transition hover:text-[#00AAAD] max-[640px]:text-[16px]"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="h-fit w-[420px] bg-white p-7 shadow-[0_3px_15px_rgba(0,0,0,0.12)] max-[768px]:w-full">
            <h2 className="mb-7 text-center text-[24px] font-bold">Контакти</h2>

            <div className="space-y-6 text-[18px]">
              <div className="flex items-start gap-5">
                <Image src="/icons/questions/1.png" alt="" width={42} height={40} />
                <div>
                  <div className="text-[18px] font-semibold">Зв’язатися з нами в Messenger</div>
                  <div className="mt-1 text-[15px] text-[#767676]">Час відповіді — 1 год.</div>
                </div>
              </div>

              <hr className="border-[#A8A8A8]" />

              <div className="flex items-start gap-5">
                <Image src="/icons/questions/2.png" alt="" width={42} height={18} />
                <div>
                  <div className="text-[18px] font-semibold">+380123456789</div>
                  <div className="mt-1 text-[15px] text-[#767676]">Час відповіді — 1 хв.</div>
                </div>
              </div>

              <hr className="border-[#A8A8A8]" />

              <div className="flex items-start gap-5">
                <Image src="/icons/questions/3.png" alt="" width={42} height={34} />
                <div>
                  <div className="text-[18px] font-semibold">E-mail</div>
                  <div className="mt-1 text-[15px] text-[#767676]">Час відповіді — 24 год.</div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-[18px] font-bold">
                  Графік роботи відділу по роботі з клієнтами
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-7 text-[17px]">
                  <li>Пн – Пт: 09:00 - 19:00</li>
                  <li>Сб – Нд: 10:00 - 18:00</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <h2 className="mt-16 text-[34px] font-bold max-[640px]:text-[28px] max-[768px]:text-center">
          Найбільш поширені питання
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-16 gap-y-4 bg-white px-9 py-9 shadow-[0_3px_15px_rgba(0,0,0,0.12)] max-[768px]:grid-cols-1">
          {popularQuestions.map((item) => (
            <a
              key={item}
              href="#"
              className="w-fit text-[18px] text-[#231F20] underline underline-offset-4 transition hover:text-[#00AAAD] max-[640px]:text-[16px]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
