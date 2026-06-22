"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const advantages = [
  { icon: "/icons/work/21.png", title: "МІЖНАРОДНІ МОЖЛИВОСТІ", width: 60, height: 60 },
  { icon: "/icons/work/22.png", title: "СТРІМКА КАР’ЄРА", width: 92, height: 46 },
  { icon: "/icons/work/23.png", title: "КОМАНДНИЙ ДУХ", width: 90, height: 62 },
];

const cards = [
  { image: "/images/work/31.png", title: "РІТЕЙЛ" },
  { image: "/images/work/32.png", title: "КОНТАКТИ" },
  { image: "/images/work/33.png", title: "ГОЛОВНИЙ ОФІС" },
];

export default function Work() {
  return (
    <main className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
      <div className="px-[100px] pt-8 max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <div className="flex items-center gap-3 text-[16px] text-[#8E8E8E] max-[640px]:text-[14px]">
          <Link href="/" className="transition duration-300 hover:text-[#00AAAD]">
            Домашня сторінка
          </Link>
          <span>{">"}</span>
          <span>Робота</span>
        </div>
      </div>

      <section className="mt-6 px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <Reveal>
          <div className="group relative h-[450px] overflow-hidden max-[768px]:h-[200px] max-[640px]:h-[140px]">
            <Image
              src="/images/work/11.png"
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-[100px] py-[70px] max-[768px]:px-[50px] max-[768px]:py-[50px] max-[640px]:px-[20px] max-[640px]:py-[30px]">
        <Reveal>
          <h1 className="text-center text-[40px] font-bold text-[#231F20] max-[640px]:text-[30px]">
            Працюй з нами
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-6 max-w-[1100px] space-y-5 text-justify text-[18px] leading-[1.6] text-[#231F20B3] max-[640px]:text-[16px]">
            <p>
              Ми – сучасний і динамічний інтернет-магазин, який активно зростає та шукає
              талановитих і мотивованих людей. Якщо ти готовий долучитися до команди, що рухає
              інновації та обслуговує клієнтів на найвищому рівні, ми будемо раді вітати тебе серед
              нас! Ми цінуємо професійний розвиток наших співробітників. Пропонуємо навчання,
              тренінги та можливість кар’єрного зростання у різних напрямках – від обслуговування
              клієнтів до IT і маркетингу.
            </p>
            <p>
              Наш інтернет-магазин спеціалізується на продажі товарів для дому, меблів та декору.
              Ми прагнемо надавати нашим клієнтам широкий вибір високоякісної продукції за
              доступними цінами. Наші головні цінності – це довіра, інновації та сервіс,
              орієнтований на клієнта. Ми працюємо для того, щоб кожен покупець отримував найкращий
              досвід покупок, а кожен працівник – можливість для особистого та професійного
              розвитку.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-black/50 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.35)]">
        <div className="grid grid-cols-3 px-[100px] py-[50px] max-[768px]:gap-8 max-[768px]:px-[30px] max-[768px]:pb-[20px] max-[640px]:grid-cols-1 max-[640px]:gap-10 max-[640px]:px-[20px]">
          {advantages.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-[70px] items-center justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={item.width}
                    height={item.height}
                    className="object-contain"
                  />
                </div>
                <p className="mt-6 text-center text-[18px] font-semibold text-[#231F20]">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[100px] py-[70px] max-[768px]:px-[50px] max-[768px]:py-[60px] max-[640px]:px-[20px] max-[640px]:py-[40px]">
        <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1">
          {cards.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group relative h-[420px] overflow-hidden max-[768px]:h-[450px] max-[640px]:h-[320px]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-end justify-center pb-[45px] max-[640px]:pb-[30px]">
                  <h2 className="text-[28px] font-bold text-white transition-transform duration-300 group-hover:-translate-y-1 max-[640px]:text-[24px]">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <Reveal>
          <div className="bg-[#00AAAD] px-[40px] py-[30px] text-white max-[768px]:bg-[#F3F3F3] max-[768px]:px-[20px] max-[768px]:py-[25px] max-[768px]:text-[#231F20] max-[640px]:px-[15px] max-[640px]:py-[20px]">
            <h2 className="text-center text-[30px] font-bold uppercase max-[640px]:text-[22px]">
              ЗНАЙДИ РОБОТУ, ЯКУ ТИ ШУКАЄШ
            </h2>
            <p className="mt-5 text-justify text-[18px] leading-[1.6] max-[768px]:hidden">
              Ми віримо в потенціал кожного члена нашої команди. У нас ти зможеш постійно
              вдосконалювати свої навички, відвідувати тренінги, брати участь у внутрішніх
              програмах навчання та розвивати свою кар’єру. Розвивайся в напрямках, які тобі
              цікаві – від клієнтського сервісу до логістики, від маркетингу до IT-рішень. Тому
              пропонуємо гнучкий графік роботи, що дозволяє поєднувати роботу з іншими важливими
              справами.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-6 px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <Reveal>
          <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
            <div className="flex flex-col justify-center bg-white px-[40px] py-[50px] max-[768px]:hidden">
              <h2 className="text-[28px] font-bold text-[#231F20]">РОБОТА В РІТЕЙЛІ</h2>
              <p className="mt-6 text-justify text-[18px] leading-[1.6] text-[#231F20B3]">
                Окрім того, ти зможеш працювати віддалено з будь-якої точки світу, використовуючи
                сучасні технології для ефективної комунікації з командою. Ми цінуємо талант і
                наполегливість наших співробітників, тому пропонуємо гідну оплату праці та систему
                бонусів, яка мотивує досягати нових висот. В нашій компанії ти знайдеш колектив
                однодумців, які підтримують одне одного та прагнуть досягати спільних цілей.
              </p>
            </div>
            <div className="group relative h-[500px] overflow-hidden max-[768px]:hidden">
              <Image
                src="/images/work/41.png"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-6 px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <Reveal>
          <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
            <div className="group relative h-[500px] overflow-hidden max-[768px]:h-[420px] max-[640px]:h-[300px]">
              <Image
                src="/images/work/42.png"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center bg-white px-[40px] py-[50px] max-[768px]:px-[40px] max-[768px]:py-[30px] max-[640px]:px-[25px]">
              <h2 className="text-[28px] font-bold text-[#231F20] max-[768px]:hidden">
                РОБОТА В ГОЛОВНОМУ ОФІСІ
              </h2>
              <p className="mt-6 text-justify text-[18px] leading-[1.6] text-[#231F20B3] max-[768px]:mt-0 max-[640px]:text-[16px]">
                Ми віримо, що успіх – це результат командної роботи, де кожен співробітник відіграє
                важливу роль. У нас ти знайдеш не тільки колег, але й друзів, які завжди готові
                допомогти та підтримати. Твої ідеї, ініціативи та пропозиції не залишаться
                непоміченими. Ти зможеш робити реальний внесок у розвиток бізнесу, бачивши
                результати своєї праці.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-6 px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <Reveal>
          <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
            <div className="flex flex-col justify-center bg-white px-[40px] py-[50px] max-[768px]:px-[40px] max-[768px]:py-[30px] max-[640px]:order-2 max-[640px]:px-[25px]">
              <h2 className="text-[28px] font-bold text-[#231F20] max-[768px]:hidden">
                РОБОТА У ВІДДІЛІ ПО РОБОТІ З КЛІЄНТАМИ
              </h2>
              <p className="text-justify text-[18px] leading-[1.6] text-[#231F20B3] max-[640px]:text-[16px]">
                Окрім того, ти зможеш працювати віддалено з будь-якої точки світу, використовуючи
                сучасні технології для ефективної комунікації з командою. Ми цінуємо талант і
                наполегливість наших співробітників, тому пропонуємо гідну оплату праці та систему
                бонусів, яка мотивує досягати нових висот. В нашій компанії ти знайдеш колектив
                однодумців, які підтримують одне одного та прагнуть досягати спільних цілей.
              </p>
            </div>
            <div className="group relative h-[500px] overflow-hidden max-[768px]:h-[420px] max-[640px]:h-[300px]">
              <Image
                src="/images/work/43.png"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-6 px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
        <Reveal>
          <div className="bg-[#00AAAD] px-[40px] py-[30px] text-white max-[768px]:bg-white max-[768px]:px-[40px] max-[768px]:py-[25px] max-[768px]:text-[#231F20] max-[640px]:px-[25px]">
            <h2 className="text-center text-[30px] font-bold uppercase max-[768px]:hidden">
              ПРИЄДНУЙСЯ ДО НАШОЇ КОМАНДИ І ПРАЦЮЙ З НАМИ
            </h2>
            <p className="mt-2 text-justify text-[18px] leading-[1.6] max-[640px]:text-[16px]">
              Ми віримо в потенціал кожного члена нашої команди. У нас ти зможеш постійно
              вдосконалювати свої навички, відвідувати тренінги, брати участь у внутрішніх
              програмах навчання та розвивати свою кар’єру. Розвивайся в напрямках, які тобі
              цікаві – від клієнтського сервісу до логістики, від маркетингу до IT-рішень.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="pt-[60px] max-[768px]:hidden">
        <Reveal>
          <div className="flex justify-center gap-30">
            <Image src="/icons/work/51.png" alt="" width={90} height={90} className="transition-transform duration-300 hover:scale-110" />
            <Image src="/icons/work/52.png" alt="" width={82} height={82} className="transition-transform duration-300 hover:scale-110" />
            <Image src="/icons/work/53.png" alt="" width={82} height={82} className="transition-transform duration-300 hover:scale-110" />
            <Image src="/icons/work/54.png" alt="" width={92} height={70} className="transition-transform duration-300 hover:scale-110" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
