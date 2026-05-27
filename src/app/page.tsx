export default function Home() {
  const categories = [
    "Спальня",
    "Гостиная",
    "Ванная",
    "Офис",
    "Сад",
    "Декор",
  ];

  const products = [
    {
      title: "Одеяло Fjord",
      price: "1 299 грн",
      label: "-30%",
      color: "bg-[#CFE8E8]",
    },
    {
      title: "Стул Nord",
      price: "899 грн",
      label: "Хит",
      color: "bg-[#E0E0E0]",
    },
    {
      title: "Полка Basic",
      price: "549 грн",
      label: "Новинка",
      color: "bg-[#D9EEE5]",
    },
    {
      title: "Лампа Hygge",
      price: "749 грн",
      label: "-15%",
      color: "bg-[#F0E7D8]",
    },
  ];

  return (
    <main className="w-full bg-white text-[#231F20]">
      <section className="mx-auto flex max-w-[1700px] gap-8 px-10 py-10">
        <div className="flex min-h-[420px] flex-1 bg-[#E0E0E0]">
          <div className="flex w-[52%] flex-col justify-center px-14">
            <p className="mb-5 text-[24px] font-medium text-[#00AAAD]">
              Скидки до 50%
            </p>
            <h1 className="max-w-[620px] text-[64px] leading-[1.04] font-bold">
              Обновите дом к лету
            </h1>
            <p className="mt-8 max-w-[560px] text-[26px] leading-[1.35] text-[#231F20B3]">
              Мебель, текстиль и декор в спокойном скандинавском стиле для
              каждой комнаты.
            </p>
            <button className="mt-10 h-[62px] w-[230px] bg-[#00AAAD] text-[24px] font-medium text-white">
              Смотреть акции
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center px-8">
            <div className="relative h-[310px] w-full max-w-[520px]">
              <div className="absolute bottom-0 left-0 h-[116px] w-full bg-white" />
              <div className="absolute bottom-[98px] left-[42px] h-[145px] w-[210px] bg-[#00AAAD]" />
              <div className="absolute bottom-[98px] right-[52px] h-[175px] w-[180px] bg-[#231F20]" />
              <div className="absolute right-[92px] bottom-[196px] h-[58px] w-[98px] bg-white" />
              <div className="absolute bottom-[116px] left-[190px] h-[78px] w-[172px] bg-[#F5F5F5]" />
              <div className="absolute bottom-[30px] left-[70px] h-[34px] w-[380px] bg-[#231F20]" />
            </div>
          </div>
        </div>

        <aside className="flex w-[390px] flex-col gap-8">
          <div className="flex flex-1 flex-col justify-between bg-[#00AAAD] p-8 text-white">
            <div>
              <p className="text-[24px] font-medium">Товар недели</p>
              <h2 className="mt-5 text-[42px] leading-tight font-bold">
                Матрасы от 2 499 грн
              </h2>
            </div>
            <button className="h-[54px] w-[190px] bg-white text-[22px] font-medium text-[#231F20]">
              Купить
            </button>
          </div>

          <div className="bg-[#E0E0E0] p-8">
            <p className="text-[24px] font-medium">Самовывоз сегодня</p>
            <p className="mt-4 text-[20px] leading-[1.35] text-[#231F20B3]">
              Проверьте наличие в выбранном магазине и заберите заказ без
              ожидания.
            </p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1700px] px-10 pb-12">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="text-[42px] font-bold">Популярные категории</h2>
          <button className="h-[51px] w-[210px] bg-[#E0E0E0] text-[22px]">
            Все категории
          </button>
        </div>

        <div className="grid grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              className="flex h-[150px] flex-col justify-between bg-[#E0E0E0] p-6 text-left transition hover:bg-[#D3D3D3]"
              key={category}
            >
              <span className="h-[42px] w-[42px] bg-[#00AAAD]" />
              <span className="text-[24px] font-medium">{category}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="w-full border-y border-[#00000030] bg-[#F7F7F7]">
        <div className="mx-auto grid max-w-[1700px] grid-cols-3 gap-8 px-10 py-10">
          <div className="bg-white p-8">
            <p className="text-[28px] font-bold">Быстрая доставка</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Привезем заказ домой или подготовим к выдаче в магазине.
            </p>
          </div>
          <div className="bg-white p-8">
            <p className="text-[28px] font-bold">Скандинавский выбор</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Практичные товары для дома без лишнего шума в дизайне.
            </p>
          </div>
          <div className="bg-white p-8">
            <p className="text-[28px] font-bold">Легкий возврат</p>
            <p className="mt-3 text-[20px] text-[#231F20B3]">
              Возвращайте покупки удобным способом в течение периода возврата.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1700px] px-10 py-12">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="text-[42px] font-bold">Рекомендуем</h2>
          <button className="h-[51px] w-[181px] bg-[#E0E0E0] text-[22px]">
            Магазин
          </button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <article className="border border-[#00000030] bg-white" key={product.title}>
              <div className={`relative h-[270px] ${product.color}`}>
                <span className="absolute top-5 left-5 bg-[#00AAAD] px-5 py-2 text-[20px] font-medium text-white">
                  {product.label}
                </span>
                <div className="absolute right-8 bottom-8 left-8 h-[72px] bg-white" />
                <div className="absolute right-16 bottom-[80px] left-16 h-[92px] bg-[#231F20]" />
              </div>
              <div className="p-6">
                <h3 className="text-[26px] font-medium">{product.title}</h3>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[28px] font-bold">{product.price}</p>
                  <button className="h-[48px] w-[120px] bg-[#00AAAD] text-[20px] font-medium text-white">
                    В корзину
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
