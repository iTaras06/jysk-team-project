import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import Prefooter from "@/components/layout/Prefooter";
import { getCategories, getRecommendedProducts } from "@/lib/api";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getRecommendedProducts(),
  ]);

  return (
    <>
    <main className="w-full bg-white text-[#231F20]">
      <section id="store" className="mx-auto flex max-w-[1408px] gap-7 px-9 py-9 max-[900px]:flex-col max-[640px]:px-5">
        <div className="group relative flex min-h-[352px] flex-1 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop"
            alt="Інтер'єр у скандинавському стилі"
            fill
            sizes="(max-width: 900px) 100vw, 1060px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15" />

          <div className="relative flex w-[60%] flex-col justify-center px-11 text-white max-[900px]:w-[70%] max-[640px]:w-full max-[640px]:px-7 max-[640px]:py-10">
            <p className="mb-4 text-[20px] font-medium text-[#5FD2D4]">Знижки до 50%</p>
            <h1 className="max-w-[506px] text-[53px] leading-[1.04] font-bold max-[640px]:text-[36px]">
              Оновіть дім до літа
            </h1>
            <p className="mt-6 max-w-[462px] text-[21px] leading-[1.35] text-white/85 max-[640px]:text-[18px]">
              Меблі, текстиль і декор у спокійному скандинавському стилі для кожної кімнати.
            </p>
            <Link
              href="/catalog"
              className="mt-7 flex h-[51px] w-[189px] items-center justify-center bg-[#00AAAD] text-[20px] font-medium text-white transition hover:bg-[#009396]"
            >
              Дивитися акції
            </Link>
          </div>
        </div>

        <aside className="flex w-[321px] flex-col gap-7 max-[900px]:w-full">
          <div className="flex flex-1 flex-col justify-between bg-[#00AAAD] p-7 text-white">
            <div>
              <p className="text-[20px] font-medium">Товар тижня</p>
              <h2 className="mt-4 text-[34px] leading-tight font-bold">Матраци від 2 499 грн</h2>
            </div>
            <Link
              href="/catalog/bedroom"
              className="flex h-[44px] w-[156px] items-center justify-center bg-white text-[18px] font-medium text-[#231F20] transition hover:bg-[#F0F0F0]"
            >
              Купити
            </Link>
          </div>

          <div className="bg-[#E0E0E0] p-7">
            <p className="text-[20px] font-medium">Самовивіз сьогодні</p>
            <p className="mt-3 text-[17px] leading-[1.35] text-[#231F20B3]">
              Перевірте наявність у вибраному магазині та заберіть замовлення без очікування.
            </p>
          </div>
        </aside>
      </section>

      <section id="categories" className="mx-auto max-w-[1408px] px-9 pb-11">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-[34px] font-bold">Популярні категорії</h2>
          <Link
            href="/catalog"
            className="flex h-[42px] w-[174px] items-center justify-center bg-[#E0E0E0] text-[18px] transition hover:bg-[#D3D3D3]"
          >
            Усі категорії
          </Link>
        </div>

        <div className="grid grid-cols-6 gap-6 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2">
          {categories.map((category) => (
            <Link
              href={`/catalog/${category.slug}`}
              className="group relative block h-[160px] overflow-hidden max-[640px]:h-[130px]"
              key={category.id}
            >
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/45" />
              <span className="absolute bottom-4 left-4 text-[20px] font-medium text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full border-y border-[#00000030] bg-[#F7F7F7]">
        <div className="mx-auto grid max-w-[1408px] grid-cols-3 gap-7 px-9 py-9 max-[768px]:grid-cols-1">
          <div className="bg-white p-7">
            <p className="text-[23px] font-bold">Швидка доставка</p>
            <p className="mt-2 text-[17px] text-[#231F20B3]">
              Привеземо замовлення додому або підготуємо до видачі в магазині.
            </p>
          </div>
          <div className="bg-white p-7">
            <p className="text-[23px] font-bold">Скандинавський вибір</p>
            <p className="mt-2 text-[17px] text-[#231F20B3]">
              Практичні товари для дому без зайвого шуму в дизайні.
            </p>
          </div>
          <div className="bg-white p-7">
            <p className="text-[23px] font-bold">Простий повернення</p>
            <p className="mt-2 text-[17px] text-[#231F20B3]">
              Повертайте покупки зручним способом протягом періоду повернення.
            </p>
          </div>
        </div>
      </section>

      <section id="recommended" className="mx-auto max-w-[1408px] px-9 py-11">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-[34px] font-bold">Рекомендуємо</h2>
          <Link
            href="/catalog"
            className="flex h-[42px] w-[150px] items-center justify-center bg-[#E0E0E0] text-[18px] transition hover:bg-[#D3D3D3]"
          >
            Магазин
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-[1408px] px-9 pb-11">
        <div className="grid grid-cols-3 gap-7 max-[768px]:grid-cols-1">
          <div id="faq" className="bg-[#E0E0E0] p-7">
            <p className="text-[23px] font-bold">Питання-відповіді</p>
            <p className="mt-2 text-[17px] text-[#231F20B3]">
              Допоможемо з оплатою, доставкою, поверненням та вибором товарів.
            </p>
          </div>
          <div id="jobs" className="bg-[#E0E0E0] p-7">
            <p className="text-[23px] font-bold">Робота в HYGGY</p>
            <p className="mt-2 text-[17px] text-[#231F20B3]">
              Відкриті позиції для магазинів, складу та офісної команди.
            </p>
          </div>
          <div className="bg-[#E0E0E0] p-7">
            <p className="text-[23px] font-bold">Блог</p>
            <p className="mt-2 text-[17px] text-[#231F20B3]">
              Ідеї для дому, сезонні добірки та практичні поради.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Prefooter />
    </>
  );
}
