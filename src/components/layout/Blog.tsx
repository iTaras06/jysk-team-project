"use client";

import Image from "next/image";
import Link from "next/link";

type RoomItem = {
  id: number;
  title: string;
  image: string;
};

type BlogCard = {
  id: number;
  title: string;
  image: string;
};

const rooms: RoomItem[] = [
  {
    id: 1,
    title: "Вітальня",
    image: "/images/blog/liv.png",
  },
  {
    id: 2,
    title: "Кухня",
    image: "/images/blog/kit.png",
  },
  {
    id: 3,
    title: "Спальня",
    image: "/images/blog/bed.png",
  },
  {
    id: 4,
    title: "Ванна",
    image: "/images/blog/bath.png",
  },
  {
    id: 5,
    title: "Кабінет",
    image: "/images/blog/off.png",
  },
  {
    id: 6,
    title: "Двір",
    image: "/images/blog/gard.png",
  },
];

const homeSection: BlogCard[] = [
  {
    id: 1,
    title: "Секрети довговічності: як доглядати за меблями з натурального дерева",
    image: "/images/blog/11.png",
  },
  {
    id: 2,
    title: "10 трендів у дизайні інтер'єру 2024 року, які варто врахувати",
    image: "/images/blog/12.png",
  },
  {
    id: 3,
    title: "Як обрати ідеальні меблі для маленької квартири",
    image: "/images/blog/13.png",
  },
  {
    id: 4,
    title: "Чому варто обрати модульні меблі: переваги та ідеї використання",
    image: "/images/blog/14.png",
  },
  {
    id: 5,
    title: "Нестандартні рішення: як меблі можуть змінити ваш простір",
    image: "/images/blog/15.png",
  },
];

const gardenSection: BlogCard[] = [
  {
    id: 1,
    title: "Як вибрати стійкі меблі для саду: матеріали, які витримують погоду",
    image: "/images/blog/21.png",
  },
  {
    id: 2,
    title: "5 ідей для облаштування комфортної зони відпочинку в саду",
    image: "/images/blog/22.png",
  },
  {
    id: 3,
    title: "Садові аксесуари, які змінять ваше уявлення про відпочинок на свіжому повітрі",
    image: "/images/blog/23.png",
  },
  {
    id: 4,
    title: "Як створити затишну атмосферу у саду за допомогою освітлення і меблів",
    image: "/images/blog/24.png",
  },
  {
    id: 5,
    title: "Тренди 2024 року: які садові меблі обирати для вашого простору",
    image: "/images/blog/25.png",
  },
];

const sleepSection: BlogCard[] = [
  {
    id: 1,
    title: "Чому важливо звертати увагу на жорсткість матраца: все про комфорт і підтримку",
    image: "/images/blog/31.png",
  },
  {
    id: 2,
    title: "Як обрати ідеальний матрац: поради для здорового сну",
    image: "/images/blog/32.png",
  },
  {
    id: 3,
    title: "Тренди у світі матраців 2024 року: які новинки варто спробувати",
    image: "/images/blog/33.png",
  },
  {
    id: 4,
    title: "Матраци для здоров'я: які технології покращують якість сну",
    image: "/images/blog/34.png",
  },
  {
    id: 5,
    title: "Догляд за матрацом: прості поради для тривалого використання",
    image: "/images/blog/35.png",
  },
];

function BlogSection({
  title,
  cards,
}: {
  title: string;
  cards: BlogCard[];
}) {
  return (
    <section
      className="bg-[#F3F3F3] mt-[30px] pb-[30px] max-[768px]:pb-[0px]">
      <h2 className="mb-[30px] pt-[20px] text-center text-[48px] font-bold text-[#231F20]
          max-[768px]:mb-[10px]
          max-[768px]:text-[40px]
          max-[640px]:text-[36px]">
        {title}
      </h2>

      <div className="grid grid-cols-[673px_389px_389px] grid-rows-[302px_302px] gap-[30px] justify-center
          max-[768px]:mx-[20px]
          max-[768px]:grid-cols-2
          max-[768px]:[grid-template-rows:auto]
          max-[768px]:gap-[10px]">

        <Link href="#" className="relative row-span-2 overflow-hidden
            max-[768px]:col-span-2
            max-[768px]:row-span-1">
          <Image src={cards[0].image} alt={cards[0].title} width={673} height={631} className="h-[634px] w-[673px] object-cover
            max-[768px]:h-auto
            max-[768px]:w-full"/>

          <div className="absolute inset-0 bg-black/20" />

          <h3 className="absolute left-[25px] top-[25px] w-[80%] text-left text-[30px] font-bold text-white
              max-[768px]:text-[28px]
              max-[640px]:text-[22px]">
            {cards[0].title}
          </h3>
        </Link>

        <Link href="#" className="relative overflow-hidden">
          <Image src={cards[1].image} alt={cards[1].title} width={389} height={302} className="h-[302px] w-[389px] object-cover
            max-[768px]:h-auto
            max-[768px]:w-full"/>

          <div className="absolute inset-0 bg-black/20" />

          <h3 className="absolute top-[20px] left-1/2 w-[85%] -translate-x-1/2 text-center text-[18px]
              max-[768px]:top-1/2
              max-[768px]:left-1/2
              max-[768px]:-translate-y-1/2
              max-[768px]:text-[16px]
              max-[640px]:text-[14px]
              font-bold
              text-white">
            {cards[1].title}
          </h3>
        </Link>

        <Link href="#" className="relative overflow-hidden">
          <Image src={cards[2].image} alt={cards[2].title} width={389} height={302} className="h-[302px] w-[389px] object-cover
            max-[768px]:h-auto
            max-[768px]:w-full"/>
          <div className="absolute inset-0 bg-black/20" />

          <h3 className="absolute top-[20px] left-1/2 w-[85%] -translate-x-1/2 text-center text-[18px]
              max-[768px]:top-1/2
              max-[768px]:left-1/2
              max-[768px]:-translate-y-1/2
              max-[768px]:text-[16px]
              max-[640px]:text-[14px]
              font-bold
              text-white">
            {cards[2].title}
          </h3>
        </Link>

        <Link href="#" className="relative overflow-hidden">
          <Image src={cards[3].image} alt={cards[3].title} width={389} height={302} className="h-[302px] w-[389px] object-cover
            max-[768px]:h-auto
            max-[768px]:w-full]"/>

          <div className="absolute inset-0 bg-black/20" />

          <h3 className="absolute top-[20px] left-1/2 w-[85%] -translate-x-1/2 text-center text-[18px]
              max-[768px]:top-1/2
              max-[768px]:left-1/2
              max-[768px]:-translate-y-1/2
              max-[768px]:text-[16px]
              max-[640px]:text-[14px]
              font-bold
              text-white">
            {cards[3].title}
          </h3>
        </Link>

        <Link href="#" className="relative overflow-hidden">
          <Image src={cards[4].image} alt={cards[4].title} width={389} height={302} className="h-[302px] w-[389px] object-cover
            max-[768px]:h-auto
            max-[768px]:w-full"/>
          <div className="absolute inset-0 bg-black/20" />

          <h3 className="absolute top-[20px] left-1/2 w-[85%] -translate-x-1/2 text-center text-[18px]
              max-[768px]:top-1/2
              max-[768px]:left-1/2
              max-[768px]:-translate-y-1/2
              max-[768px]:text-[16px]
              max-[640px]:text-[14px]
              font-bold
              text-white">
            {cards[4].title}
          </h3>
        </Link>
      </div>
    </section>
  );
}


export default function Blog() {
  return (
    <main className="bg-[#F3F3F3] pb-[100px] 
      max-[768px]:pb-[50px] 
      max-[640px]:pb-[30px]">

      <section
        className="bg-[#F3F3F3] pt-[30px] pb-[30px]">
        <div className="mx-[8%] ">
          <div className="mb-[40px] text-[22px] text-[#8E8E8E]">
            <Link href="/" className="hover:text-[#61B8BE]">Домашня сторінка</Link>
            <span className="mx-8">{">"}</span><span>Блог</span>
          </div>

          <h1 className="text-center text-[58px] font-bold text-[#231F20]
            max-[768px]:text-[46px]
            max-[640px]:text-[38px]">
            Блог
          </h1>

          <h2 className="mt-[18px] text-center text-[40px] text-[#231F20]
            max-[768px]:text-[30px]
            max-[640px]:text-[26px]">
            Ідеї за кімнатами
          </h2>
        </div>
      </section>

      <section className="bg-[#FFFFFF] border-b border-black/50 shadow-[0px_4px_10px_rgba(0,0,0,0.35)]">

        <div className="mx-[8%] py-[30px]">
          <div className="flex justify-center gap-[16%] text-[40px]
            max-[768px]:mx-0
            max-[768px]:text-[30px]
            max-[640px]:text-[20px]
            max-[768px]:gap-[45px]
            max-[640px]:gap-[20px]">
            <Link href="/blog-page"
              className="bg-[#00AAAD] items-center flex justify-center h-[70px] w-[266px]
              max-[768px]:w-[220px]
              max-[640px]:w-[140px]
              max-[640px]:h-[50px]
              text-white
              font-bold">
              Для дому
            </Link>

            <button className="bg-[#ECECEC] items-center flex justify-center font-bold
              h-[70px]
              w-[266px]
              max-[768px]:w-[220px]
              max-[640px]:w-[140px]
              max-[640px]:h-[50px]">
              Для саду
            </button>

            <button className="bg-[#ECECEC] items-center flex justify-center font-bold
              h-[70px]
              w-[266px]
              max-[768px]:w-[220px]
              max-[640px]:w-[140px]
              max-[640px]:h-[50px]">
              Для сну
            </button>
          </div>

          <div className="mt-[30px] grid grid-cols-6 gap-[30px]
            max-[768px]:grid-cols-3
            max-[640px]:grid-cols-2">
            {rooms.map((room) => (
              <Link key={room.id} href="#" className="flex flex-col items-center">
                <div className="flex h-[180px] items-end justify-center
                  max-[640px]:w-[130px] 
                  max-[640px]:h-[130px]">
                  <Image src={room.image} alt={room.title} width={170} height={170} className="object-contain"/>
                </div>

                <span className="mt-4 text-[26px] font-bold max-[768px]:text-[22px] max-[640px]:text-[18px]">
                  {room.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogSection title="Для дому" cards={homeSection} />
      <BlogSection title="Для саду" cards={gardenSection} />
      <BlogSection title="Для сну" cards={sleepSection} />

  </main>
  );
}