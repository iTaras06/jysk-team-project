import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-300px)] bg-white text-[#231F20]">
      <section className="mx-auto flex max-w-[1700px] gap-10 px-10 py-12">
        <div className="flex flex-1 flex-col justify-between bg-[#E0E0E0] p-12">
          <div>
            <p className="text-[24px] font-medium text-[#00AAAD]">
              Профіль покупця
            </p>
            <h1 className="mt-5 max-w-[660px] text-[58px] leading-[1.05] font-bold">
              Увійдіть, щоб швидше оформлювати замовлення
            </h1>
            <p className="mt-7 max-w-[620px] text-[24px] leading-[1.35] text-[#231F20B3]">
              Зберігайте улюблені товари, переглядайте історію покупок та
              керуйте доставкою в одному місці.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="bg-white p-6">
              <p className="text-[24px] font-bold">Обране</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Список товарів завжди під рукою.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-[24px] font-bold">Замовлення</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Статуси та чеки в профілі.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-[24px] font-bold">Адреси</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Швидше оформлення доставки.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[520px] border border-[#00000030] bg-white p-10">
          <h2 className="text-[42px] font-bold">Вхід</h2>
          <p className="mt-3 text-[20px] text-[#231F20B3]">
            Введіть email та пароль від вашого акаунта.
          </p>

          <form className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Email
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none placeholder:text-[#231F2082]"
                required
              />
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Пароль
              <input
                type="password"
                name="password"
                placeholder="Ваш пароль"
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none placeholder:text-[#231F2082]"
                required
              />
            </label>

            <div className="flex items-center justify-between text-[18px]">
              <label className="flex items-center gap-3">
                <input type="checkbox" name="remember" className="h-5 w-5" />
                Запам&rsquo;ятати мене
              </label>
              <Link href="/" className="font-medium text-[#00AAAD]">
                Забули пароль?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-2 h-[62px] bg-[#00AAAD] text-[24px] font-medium text-white"
            >
              Увійти
            </button>
          </form>

          <div className="mt-8 border-t border-[#00000030] pt-7">
            <p className="text-[20px] text-[#231F20B3]">
              Ще немає акаунта?
            </p>
            <Link
              href="/"
              className="mt-4 flex h-[56px] items-center justify-center bg-[#E0E0E0] text-[22px] font-medium"
            >
              Створити акаунт
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
