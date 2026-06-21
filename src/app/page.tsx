import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { getCategories, getRecommendedProducts } from "@/lib/api";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getRecommendedProducts(),
  ]);

  return (
    <main className="w-full bg-white text-[#231F20]">
      <section id="store" className="mx-auto flex max-w-[1408px] gap-7 px-9 py-9 max-[900px]:flex-col max-[640px]:px-5">
        <div className="flex min-h-[352px] flex-1 bg-[#E0E0E0] max-[640px]:flex-col">
          <div className="flex w-[52%] flex-col justify-center px-11 max-[900px]:w-[55%] max-[640px]:w-full max-[640px]:px-7 max-[640px]:py-8">
            <p className="mb-4 text-[20px] font-medium text-[#00AAAD]">Знижки до 50%</p>
            <h1 className="max-w-[506px] text-[53px] leading-[1.04] font-bold max-[640px]:text-[36px]">
              Оновіть дім до літа
            </h1>
            <p className="mt-6 max-w-[462px] text-[21px] leading-[1.35] text-[#231F20B3] max-[640px]:text-[18px]">
              Меблі, текстиль і декор у спокійному скандинавському стилі для кожної кімнати.
            </p>
            <button className="mt-7 h-[51px] w-[189px] bg-[#00AAAD] text-[20px] font-medium text-white transition hover:bg-[#009396]">
              Дивитися акції
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center px-7 max-[640px]:py-8">
            <div className="relative h-[255px] w-full max-w-[429px]">
              <div className="absolute bottom-0 left-0 h-[96px] w-full bg-white" />
              <div className="absolute bottom-[81px] left-[35px] h-[120px] w-[174px] bg-[#00AAAD]" />
              <div className="absolute right-[43px] bottom-[81px] h-[144px] w-[149px] bg-[#231F20]" />
              <div className="absolute right-[76px] bottom-[162px] h-[48px] w-[81px] bg-white" />
              <div className="absolute bottom-[96px] left-[157px] h-[65px] w-[142px] bg-[#F5F5F5]" />
              <div className="absolute bottom-[24px] left-[57px] h-[29px] w-[314px] bg-[#231F20]" />
            </div>
          </div>
        </div>

        <aside className="flex w-[321px] flex-col gap-7 max-[900px]:w-full">
          <div className="flex flex-1 flex-col justify-between bg-[#00AAAD] p-7 text-white">
            <div>
              <p className="text-[20px] font-medium">Товар тижня</p>
              <h2 className="mt-4 text-[34px] leading-tight font-bold">Матраци від 2 499 грн</h2>
            </div>
            <button className="h-[44px] w-[156px] bg-white text-[18px] font-medium text-[#231F20]">
              Купити
            </button>
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
              className="flex h-[123px] flex-col justify-between bg-[#E0E0E0] p-6 text-left transition hover:bg-[#D3D3D3]"
              key={category.id}
            >
              <span className="h-[35px] w-[35px] bg-[#00AAAD]" />
              <span className="text-[20px] font-medium">{category.name}</span>
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
            <p className="text-[23px] font-bold">Робота в JYSK</p>
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
        <div id="favorites" className="h-0" />
        <div id="cart" className="h-0" />
      </section>
    </main>
  );
}
