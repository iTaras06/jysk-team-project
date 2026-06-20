"use client";

import Image from "next/image";
import Link from "next/link";

const advantages = [
    {
        icon: "/icons/work/21.png",
        title: "МІЖНАРОДНІ МОЖЛИВОСТІ",
        width: 75,
        height: 75,
    },
    {
        icon: "/icons/work/22.png",
        title: "СТРІМКА КАР'ЄРА",
        width: 114,
        height: 58,
    },
    {
        icon: "/icons/work/23.png",
        title: "КОМАНДНИЙ ДУХ",
        width: 113,
        height: 78,
    },
];

const cards = [
    {
        image: "/images/work/31.png",
        title: "РІТЕЙЛ",
    },
    {
        image: "/images/work/32.png",
        title: "КОНТАКТИ",
    },
    {
        image: "/images/work/33.png",
        title: "ГОЛОВНИЙ ОФІС",
    },
];

export default function Work() {
    return (
        <main className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">

        <div className="px-[100px] pt-[32px]
            max-[768px]:px-[50px]
            max-[768px]:pt-[24px]
            max-[640px]:px-[20px]
            max-[640px]:pt-[20px]">

            <div className="mb-[40px] text-[22px] max-[768px]:text-[18px] max-[640px]:text-[16px] text-[#8E8E8E]">

                <Link href="/" className="hover:text-[#61B8BE] duration-300">Домашня сторінка</Link>
                <span className="mx-8">{">"}</span><span>Робота</span>
            </div>
        </div>

        <section className="mt-6 px-[100px] 
                max-[768px]:px-[50px]
                max-[640px]:px-[20px]">
            <div className="relative h-[450px] overflow-hidden
                max-[768px]:h-[200px]
                max-[640px]:h-[140px]">
                <Image src="/images/work/11.png" alt="" fill className="object-cover"/>
            </div>
        </section>

        <section className="px-[100px] py-[80px]
            max-[768px]:px-[50px]
            max-[768px]:py-[50px]
            max-[640px]:px-[20px]
            max-[640px]:py-[30px]">
            <h1 className="text-center text-[40px] font-bold text-[#231F20]
                max-[768px]:text-[32px]
                max-[640px]:text-[26px]">
                Працюй з нами
            </h1>

            <div className="mx-auto mt-6 space-y-6 text-justify text-[24px] leading-8 text-[#231F20]
                max-[768px]:text-[20px]
                max-[768px]:leading-7
                max-[640px]:text-[18px]
                max-[640px]:leading-6">
                <p>
                    Ми – сучасний і динамічний інтернет-магазин, який активно зростає та шукає талановитих і мотивованих людей. Якщо ти готовий долучитися до команди, що рухає інновації та обслуговує клієнтів на найвищому рівні, ми будемо раді вітати тебе серед нас! Ми цінуємо професійний розвиток наших співробітників. Пропонуємо навчання, тренінги та можливість кар'єрного зростання у різних напрямках – від обслуговування клієнтів до IT і маркетингу. Ми цінуємо внесок кожного члена нашої команди, тому пропонуємо конкурентну оплату праці та систему бонусів за результативну роботу.
                </p>

                <p>
                    Наш інтернет-магазин спеціалізується на продажі товарів для дому, меблів та декору. Ми прагнемо надавати нашим клієнтам широкий вибір високоякісної продукції за доступними цінами. Завдяки постійній орієнтації на потреби споживачів та впровадженню новітніх технологій, ми стали одним із лідерів ринку. Наші головні цінності – це довіра, інновації та сервіс, орієнтований на клієнта. Ми працюємо для того, щоб кожен покупець отримував найкращий досвід покупок, а кожен працівник – можливість для особистого та професійного розвитку.
                </p>
            </div>
        </section>

        <section className="bg-[#FFFFFF] border-b border-black/50 shadow-[0px_4px_10px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-3 px-[100px] py-[50px]
                max-[768px]:px-[30px]
                max-[768px]:pb-[20px]
                max-[768px]:gap-8
                max-[640px]:grid-cols-1
                max-[640px]:gap-16
                max-[640px]:px-[20px]
                max-[640px]:pb-[20px]">
                {advantages.map((item) => (
                    <div key={item.title} className="flex flex-col items-center">
                        <div className="flex h-[70px] items-center justify-center max-[768px]:h-[20px] max-[640px]:h-[5px]">
                            <Image src={item.icon} alt=""
                                width={item.width}
                                height={item.height}
                                className="object-contain"/>
                        </div>

                        <p className="mt-10 text-center text-[22px] font-semibold text-[#231F20]
                            max-[768px]:text-[16px]">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        <section className="px-[100px] py-[80px]
            max-[768px]:px-[50px]
            max-[768px]:py-[60px]
            max-[640px]:px-[20px]
            max-[640px]:py-[40px]">
            <div className="grid grid-cols-3 gap-6
                max-[768px]:grid-cols-1">
                {cards.map((item) => (
                    <div key={item.title} className="relative h-[420px] overflow-hidden
                        max-[768px]:h-[450px]
                        max-[640px]:h-[320px]">
                        <Image src={item.image} alt="" fill className="object-cover"/>

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute inset-0 flex items-end justify-center pb-[15px]
                            max-[768px]:pb-[5px]
                            max-[640px]:pb-[0px]">
                            <h2 className="text-[40px] font-bold text-white pb-[30px]
                                max-[768px]:text-[34px]
                                max-[640px]:text-[26px]">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="px-[100px]
            max-[768px]:px-[50px]
            max-[640px]:px-[20px]">
            <div className="bg-[#00AAAD] px-[40px] py-[30px] text-white
                max-[768px]:px-[20px]
                max-[768px]:py-[25px]
                max-[640px]:px-[15px]
                max-[640px]:py-[20px]
                max-[768px]:bg-[#F3F3F3]
                max-[768px]:text-[#231F20]">
                <h2 className="text-center text-[36px] font-bold uppercase
                        max-[768px]:text-[30px]
                        max-[640px]:text-[22px]">
                        ЗНАЙДИ РОБОТУ, ЯКУ ТИ ШУКАЄШ
                </h2>

                <p className="mt-6 text-justify text-[22px] leading-8
                    max-[768px]:hidden">
                    Ми віримо в потенціал кожного члена нашої команди. У нас ти зможеш постійно вдосконалювати свої навички, відвідувати тренінги, брати участь у внутрішніх програмах навчання та розвивати свою кар’єру. Ми підтримуємо ініціативи та заохочуємо досягнення. Розвивайся в напрямках, які тобі цікаві – від клієнтського сервісу до логістики, від маркетингу до IT-рішень. Ми розуміємо, наскільки важливо підтримувати баланс між роботою та особистим життям. Тому пропонуємо гнучкий графік роботи, що дозволяє поєднувати роботу з іншими важливими справами.
                </p>
            </div>
        </section>

        <section className="px-[100px] max-[768px]:px-[50px] max-[640px]:px-[20px]">
            <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
                <div className="flex flex-col justify-center bg-[#FFFFFF] px-[40px] py-[50px]
                    max-[768px]:hidden">
                    
                    <h2 className="text-[32px] font-bold text-[#231F20]
                        max-[768px]:text-[30px]
                        max-[640px]:text-[24px]">
                        РОБОТА В РІТЕЙЛІ
                    </h2>

                    <p className="mt-8 text-justify text-[22px] leading-8 text-[#231F20]">
                        Окрім того, ти зможеш працювати віддалено з будь-якої точки світу, використовуючи сучасні технології для ефективної комунікації з командою. Ми цінуємо талант і наполегливість наших співробітників, тому пропонуємо гідну оплату праці та систему бонусів, яка мотивує досягати нових висот. Твоя праця буде винагороджена відповідно до твоїх зусиль і результатів. Наш інтернет-магазин постійно впроваджує новітні технології, щоб залишатися на піку ринку електронної комерції. В нашій компанії ти знайдеш колектив однодумців, які підтримують одне одного та прагнуть досягати спільних цілей.
                    </p>
                </div>

                <div className="relative h-[500px] max-[768px]:hidden">
                    <Image src="/images/work/41.png" alt="" fill className="object-cover"/>
                </div>
            </div>
        </section>

        <section className="px-[100px]
            max-[768px]:px-[50px]
            max-[640px]:px-[20px]">
            <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
                <div className="relative h-[500px] max-[768px]:h-[420px] max-[640px]:h-[300px]">
                    <Image src="/images/work/42.png" alt="" fill className="object-cover"/>
                </div>

                <div className="flex flex-col justify-center bg-[#FFFFFF] px-[40px] py-[50px]
                    max-[768px]:px-[40px]
                    max-[768px]:py-[0px]
                    max-[640px]:px-[25px]
                    max-[640px]:pb-[10px]">
                    
                    <h2 className="text-[32px] font-bold text-[#231F20]
                        max-[768px]:hidden">
                        РОБОТА В ГОЛОВНОМУ ОФІСІ
                    </h2>

                    <p className="mt-8 text-justify text-[22px] leading-8 text-[#231F20]
                        max-[768px]:text-[20px]
                        max-[768px]:leading-7
                        max-[640px]:text-[18px]
                        max-[640px]:leading-6">
                        Ми віримо, що успіх – це результат командної роботи, де кожен співробітник відіграє важливу роль. У нас ти знайдеш не тільки колег, але й друзів, які завжди готові допомогти та підтримати. У нас кожен співробітник може впливати на майбутнє компанії. Твої ідеї, ініціативи та пропозиції не залишаться непоміченими. Ми заохочуємо творчий підхід до роботи та надаємо можливість втілювати нові ідеї в життя. Ти зможеш робити реальний внесок у розвиток бізнесу, бачивши результати своєї праці. Ми віримо в чесність, відповідальність та взаємодопомогу.
                    </p>
                </div>
            </div>
        </section>

        <section className="px-[100px]
            max-[768px]:px-[50px]
            max-[640px]:px-[20px]">

            <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
                <div className="flex flex-col justify-center bg-[#FFFFFF] px-[40px] py-[50px]
                    max-[768px]:px-[40px]
                    max-[768px]:pt-0
                    max-[640px]:pt-[20px]
                    max-[768px]:pb-[30px]
                    max-[640px]:order-2
                    max-[640px]:px-[25px]
                    max-[640px]:pb-[0px]">
                
                    <h2 className="text-[32px] font-bold text-[#231F20]
                        max-[768px]:hidden">
                        РОБОТА У ВІДДІЛІ ПО РОБОТІ З КЛІЄНТАМИ
                    </h2>

                    <p className="text-justify text-[22px] leading-8 text-[#231F20]
                        max-[768px]:text-[20px]
                        max-[768px]:leading-7
                        max-[640px]:text-[18px]
                        max-[640px]:leading-6">
                        Окрім того, ти зможеш працювати віддалено з будь-якої точки світу, використовуючи сучасні технології для ефективної комунікації з командою. Ми цінуємо талант і наполегливість наших співробітників, тому пропонуємо гідну оплату праці та систему бонусів, яка мотивує досягати нових висот. Твоя праця буде винагороджена відповідно до твоїх зусиль і результатів. Наш інтернет-магазин постійно впроваджує новітні технології, щоб залишатися на піку ринку електронної комерції. В нашій компанії ти знайдеш колектив однодумців, які підтримують одне одного та прагнуть досягати спільних цілей.
                    </p>
                </div>

                <div className="relative h-[500px] max-[768px]:h-[420px] max-[640px]:h-[300px]">
                    <Image src="/images/work/43.png" alt="" fill className="object-cover"/>
                </div>
            </div>
        </section>

        <section className="px-[100px]
            max-[768px]:px-[50px]
            max-[640px]:px-[20px]">
            
            <div className="bg-[#00AAAD] px-[40px] py-[30px] text-white
                max-[768px]:bg-[#FFFFFF]
                max-[768px]:text-[#231F20]
                max-[768px]:px-[40px]
                max-[768px]:py-[25px]
                max-[640px]:px-[25px]
                max-[640px]:pt-[2px]">
                <h2 className="text-center text-[36px] font-bold uppercase
                    max-[768px]:hidden">
                    ПРИЄДНУЙСЯ ДО НАШОЇ КОМАНДИ І ПРАЦЮЙ З НАМИ
                </h2>

                <p className="mt-2 text-justify text-[22px] leading-8
                    max-[768px]:text-[20px]
                    max-[768px]:leading-7
                    max-[640px]:text-[18px]
                    max-[640px]:leading-6">
                    Ми віримо в потенціал кожного члена нашої команди. У нас ти зможеш постійно вдосконалювати свої навички, відвідувати тренінги, брати участь у внутрішніх програмах навчання та розвивати свою кар’єру. Ми підтримуємо ініціативи та заохочуємо досягнення. Розвивайся в напрямках, які тобі цікаві – від клієнтського сервісу до логістики, від маркетингу до IT-рішень. Ми розуміємо, наскільки важливо підтримувати баланс між роботою та особистим життям. Тому пропонуємо гнучкий графік роботи, що дозволяє поєднувати роботу з іншими важливими справами.
                </p>
            </div>
        </section>

        <section className="pt-[60px] max-[768px]:hidden">
            <div className="flex justify-center gap-30">
                <Image src="/icons/work/51.png" alt="" width={90} height={90} />
                <Image src="/icons/work/52.png" alt="" width={82} height={82} />
                <Image src="/icons/work/53.png" alt="" width={82} height={82} />
                <Image src="/icons/work/54.png" alt="" width={92} height={70} />
            </div>
        </section>
    </main>
  );
}

