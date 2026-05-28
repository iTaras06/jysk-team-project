"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Вхід користувача:", { email, password, rememberMe });
  };

  return (
    <main className="min-h-[calc(100vh-300px)] bg-white text-[#231F20]">
      <section className="mx-auto flex max-w-[1700px] gap-10 px-10 py-12">
        <div className="flex flex-1 flex-col justify-between bg-[#E0E0E0] p-12">
          <div>
            <p className="text-[24px] font-medium text-[#00AAAD]">Профіль покупця</p>
            <h1 className="mt-5 max-w-[660px] text-[58px] leading-[1.05] font-bold">
              Увійдіть, щоб швидше оформлювати замовлення
            </h1>
            <p className="mt-7 max-w-[620px] text-[24px] leading-[1.35] text-[#231F20B3]">
              Зберігайте улюблені товари, переглядайте історію покупок та керуйте доставкою в одному
              місці.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">Обране</p>
              <p className="mt-2 text-[20px] font-bold">Обране</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">Список товарів завжди під рукою.</p>
            </div>
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">Замовлення</p>
              <p className="mt-2 text-[20px] font-bold">Замовлення</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">Статуси та чеки в профілі.</p>
            </div>
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">Адреси</p>
              <p className="mt-2 text-[20px] font-bold">Адреси</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">Швидше оформлення доставки.</p>
            </div>
          </div>
        </div>

        <div className="w-[520px] border border-[#00000030] bg-white p-10 transition-all hover:border-[#00AAAD]">
          <h2 className="text-[42px] font-bold">Вхід</h2>
          <p className="mt-3 text-[20px] text-[#231F20B3]">
            Введіть email та пароль від вашого акаунта.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal transition-colors outline-none placeholder:text-[#231F2082] focus:border-b-2 focus:border-[#00AAAD] focus:bg-[#d6d6d6]"
                required
              />
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal transition-colors outline-none placeholder:text-[#231F2082] focus:border-b-2 focus:border-[#00AAAD] focus:bg-[#d6d6d6]"
                required
              />
            </label>

            <div className="flex items-center justify-between text-[18px]">
              <label className="flex cursor-pointer items-center gap-3 select-none">
                <input
                  type="checkbox"
                  name="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-5 w-5 cursor-pointer"
                />
                Запам&rsquo;ятати мене
              </label>
              <Link href="/" className="font-medium text-[#00AAAD] hover:underline">
                Забули пароль?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-2 h-[62px] bg-[#00AAAD] text-[24px] font-medium text-white transition-all hover:bg-[#008f91] hover:shadow-lg active:scale-[0.98]"
            >
              Увійти
            </button>
          </form>

          <div className="mt-8 border-t border-[#00000030] pt-7">
            <p className="text-[20px] text-[#231F20B3]">Ще немає акаунта?</p>
            <Link
              href="/register"
              className="mt-4 flex h-[56px] items-center justify-center bg-[#E0E0E0] text-[22px] font-medium transition-colors hover:bg-[#d6d6d6]"
            >
              Створити акаунт
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
