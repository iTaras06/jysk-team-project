import { getCategories, getRecommendedProducts } from "@/lib/api";
import { formatPrice } from "@/lib/format";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getRecommendedProducts(),
  ]);

  return (
    <main className="w-full bg-white text-[#231F20]">
      <section id="store" className="mx-auto flex max-w-[1700px] gap-8 px-10 py-10">
        <div className="flex min-h-[420px] flex-1 bg-[#E0E0E0]">
          <div className="flex w-[52%] flex-col justify-center px-14">
            <p className="mb-5 text-[24px] font-medium text-[#00AAAD]">Знижки до 50%</p>
            <h1 className="max-w-[620px] text-[64px] leading-[1.04] font-bold">
              Оновіть дім до літа
            </h1>
            <p className="mt-8 max-w-[560px] text-[26px] leading-[1.35] text-[#231F20B3]">
              Меблі, текстиль і декор у спокійному скандинавському стилі для кожної кімнати.
            </p>
            <button className="mt-10 h-[62px] w-[230px] bg-[#00AAAD] text-[24px] font-medium text-white">
              Дивитися акції
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center px-8">
            <div className="relative h-[310px] w-full max-w-[520px]">
              <div className="absolute bottom-0 left-0 h-[116px] w-full bg-white" />
              <div className="absolute bottom-[98px] left-[42px] h-[145px] w-[210px] bg-[#00AAAD]" />
              <div className="absolute right-[52px] bottom-[98px] h-[175px] w-[180px] bg-[#231F20]" />
              <div className="absolute right-[92px] bottom-[196px] h-[58px] w-[98px] bg-white" />
              <div className="absolute bottom-[116px] left-[190px] h-[78px] w-[172px] bg-[#F5F5F5]" />
              <div className="absolute bottom-[30px] left-[70px] h-[34px] w-[380px] bg-[#231F20]" />
            </div>
          </div>
        </div>

        <aside className="flex w-[390px] flex-col gap-8">
          <div className="flex flex-1 flex-col justify-between bg-[#00AAAD] p-8 text-white">
            <div>
              <p className="text-[24px] font-medium">Товар тижня</p>
              <h2 className="mt-5 text-[42px] leading-tight font-bold">Матраци від 2 499 грн</h2>
            </div>
            <button className="h-[54px] w-[190px] bg-white text-[22px] font-medium text-[#231F20]">
              Купити
            </button>
          </div>

          <div className="bg-[#E0E0E0] p-8">
            <p className="text-[24px] font-medium">Самовивіз сьогодні</p>
            <p className="mt-4 text-[20px] leading-[1.35] text-[#231F20B3]">
              Перевірте наявність у вибраному магазині та заберіть замовлення без очікування.
            </p>
          </div>
        </aside>
      </section>

      <section id="categories" className="mx-auto max-w-[1700px] px-10 pb-12">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="text-[42px] font-bold">Популярні категорії</h2>
          <button className="h-[51px] w-[210px] bg-[#E0E0E0] text-[22px]">Усі категорії</button>
        </div>

        <div className="grid grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              className="flex h-[150px] flex-col justify-between bg-[#E0E0E0] p-6 text-left transition hover:bg-[#D3D3D3]"
              key={category.id}
            >
              <span className="h-[42px] w-[42px] bg-[#00AAAD]" />
              <span className="text-[24px] font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="w-full border-y border-[#00000030] bg-[#F7F7F7]">
        <div className="mx-auto grid max-w-[1700px] grid-cols-3 gap-8 px-10 py-10">
          <div className="bg-white p-8">
            <p className="text-[28px] font-bold">Швидка доставка</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Привеземо замовлення додому або підготуємо до видачі в магазині.
            </p>
          </div>
          <div className="bg-white p-8">
            <p className="text-[28px] font-bold">Скандинавський вибір</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Практичні товари для дому без зайвого шуму в дизайні.
            </p>
          </div>
          <div className="bg-white p-8">
            <p className="text-[28px] font-bold">Простий повернення</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Повертайте покупки зручним способом протягом періоду повернення.
            </p>
          </div>
        </div>
      </section>

      <section id="recommended" className="mx-auto max-w-[1700px] px-10 py-12">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="text-[42px] font-bold">Рекомендуємо</h2>
          <button className="h-[51px] w-[181px] bg-[#E0E0E0] text-[22px]">Магазин</button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <article className="border border-[#00000030] bg-white" key={product.id}>
              <div className={`relative h-[270px] ${product.color ?? "bg-[#E0E0E0]"}`}>
                {product.label && (
                  <span className="absolute top-5 left-5 bg-[#00AAAD] px-5 py-2 text-[20px] font-medium text-white">
                    {product.label}
                  </span>
                )}
                <div className="absolute right-8 bottom-8 left-8 h-[72px] bg-white" />
                <div className="absolute right-16 bottom-[80px] left-16 h-[92px] bg-[#231F20]" />
              </div>
              <div className="p-6">
                <h3 className="text-[26px] font-medium">{product.title}</h3>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-[28px] font-bold">{formatPrice(product.price)}</p>
                    {product.oldPrice && (
                      <p className="text-[18px] text-[#231F2080] line-through">
                        {formatPrice(product.oldPrice)}
                      </p>
                    )}
                  </div>
                  <button className="h-[48px] w-[120px] bg-[#00AAAD] text-[20px] font-medium text-white">
                    У кошик
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-[1700px] px-10 pb-12">
        <div className="grid grid-cols-3 gap-8">
          <div id="faq" className="bg-[#E0E0E0] p-8">
            <p className="text-[28px] font-bold">Питання-відповіді</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Допоможемо з оплатою, доставкою, поверненням та вибором товарів.
            </p>
          </div>
          <div id="jobs" className="bg-[#E0E0E0] p-8">
            <p className="text-[28px] font-bold">Робота в JYSK</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Відкриті позиції для магазинів, складу та офісної команди.
            </p>
          </div>
          <div className="bg-[#E0E0E0] p-8">
            <p className="text-[28px] font-bold">Блог</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
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
