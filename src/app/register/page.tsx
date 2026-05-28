"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Паролі не збігаються");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Ви повинні погодитися з умовами використання");
      return;
    }

    // Log the user registration data to the console
    console.log("Реєстрація користувача:", formData);

    setIsSuccess(true);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    });
  };

  return (
    <main className="min-h-[calc(100vh-300px)] bg-white text-[#231F20]">
      <section className="mx-auto flex max-w-[1700px] gap-10 px-10 py-12">
        {/* Left Side: JYSK Benefits Info Panel */}
        <div className="flex flex-1 flex-col justify-between bg-[#E0E0E0] p-12">
          <div>
            <p className="text-[24px] font-medium text-[#00AAAD]">
              Профіль покупця
            </p>
            <h1 className="mt-5 max-w-[660px] text-[58px] leading-[1.05] font-bold">
              Створіть акаунт та отримайте переваги
            </h1>
            <p className="mt-7 max-w-[620px] text-[24px] leading-[1.35] text-[#231F20B3]">
              Приєднуйтесь до JYSK, щоб зберігати список улюблених товарів, відслідковувати статус замовлень та отримувати персональні пропозиції.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">01</p>
              <p className="mt-2 text-[20px] font-semibold">Швидке замовлення</p>
              <p className="mt-2 text-[16px] text-[#231F20B3]">
                Автозаповнення ваших адрес при оформленні покупок.
              </p>
            </div>
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">02</p>
              <p className="mt-2 text-[20px] font-semibold">Історія покупок</p>
              <p className="mt-2 text-[16px] text-[#231F20B3]">
                Перегляд усіх електронних чеків та замовлень в одному місці.
              </p>
            </div>
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">03</p>
              <p className="mt-2 text-[20px] font-semibold">Список бажань</p>
              <p className="mt-2 text-[16px] text-[#231F20B3]">
                Зберігайте товари та стежте за зміною цін на них.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-[520px] border border-[#00000030] bg-white p-10 transition-all hover:border-[#00AAAD]">
          <h2 className="text-[42px] font-bold">Реєстрація</h2>
          <p className="mt-3 text-[20px] text-[#231F20B3]">
            Створіть свій особистий кабінет покупця JYSK.
          </p>

          {isSuccess && (
            <div className="mt-6 border-l-4 border-green-500 bg-green-50 p-4 text-green-700">
              <p className="font-semibold">Успішна реєстрація!</p>
              <p className="text-[16px] mt-1">Дані успішно виведено у консоль розробника.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-3 text-[16px] font-medium text-[#00AAAD] underline hover:text-[#008f91]"
              >
                Зареєструвати іншого користувача
              </button>
            </div>
          )}

          {error && (
            <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4 text-red-700 text-[16px]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Ім'я та Прізвище
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                required
              />
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                required
              />
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Телефон
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=""
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
              />
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Пароль
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=""
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                required
              />
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Підтвердження пароля
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder=""
                className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                required
              />
            </label>

            <div className="flex items-start text-[18px] gap-3 mt-2">
              <input 
                type="checkbox" 
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-5 w-5 mt-1 cursor-pointer" 
                required
              />
              <label htmlFor="agreeToTerms" className="cursor-pointer select-none leading-snug text-[#231F20B3]">
                Я погоджуюся з політикою конфіденційності та правилами сервісу JYSK
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 h-[62px] bg-[#00AAAD] text-[24px] font-medium text-white transition-all hover:bg-[#008f91] hover:shadow-lg active:scale-[0.98]"
            >
              Зареєструватися
            </button>
          </form>

          <div className="mt-8 border-t border-[#00000030] pt-7">
            <p className="text-[20px] text-[#231F20B3]">
              Вже маєте акаунт?
            </p>
            <Link
              href="/login"
              className="mt-4 flex h-[56px] items-center justify-center bg-[#E0E0E0] text-[22px] font-medium transition-colors hover:bg-[#d6d6d6]"
            >
              Увійти в акаунт
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
