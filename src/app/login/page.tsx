"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  
  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Registration states
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handlers
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Вхід користувача:", { email: loginEmail, password: loginPassword, rememberMe });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("Паролі не збігаються");
      return;
    }

    if (!registerData.agreeToTerms) {
      setError("Ви повинні погодитися з умовами використання");
      return;
    }

    // Log user registration data to the console
    console.log("Реєстрація користувача:", registerData);

    setIsSuccess(true);
    // Reset form
    setRegisterData({
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
        
        {/* Left Side: Dynamic Benefits Info Panel */}
        <div className="flex flex-1 flex-col justify-between bg-[#E0E0E0] p-12 transition-all duration-300">
          <div>
            <p className="text-[24px] font-medium text-[#00AAAD]">
              Профіль покупця
            </p>
            <h1 className="mt-5 max-w-[660px] text-[58px] leading-[1.05] font-bold transition-all duration-300">
              {isRegister 
                ? "Створіть акаунт та отримайте переваги" 
                : "Увійдіть, щоб швидше оформлювати замовлення"}
            </h1>
            <p className="mt-7 max-w-[620px] text-[24px] leading-[1.35] text-[#231F20B3]">
              {isRegister
                ? "Приєднуйтесь до JYSK, щоб зберігати список улюблених товарів, відслідковувати статус замовлень та керувати доставкою в одному місці."
                : "Зберігайте улюблені товари, переглядайте історію покупок та керуйте доставкою в одному місці."}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">
                {isRegister ? "01" : "Обране"}
              </p>
              <p className="mt-2 text-[20px] font-bold">
                {isRegister ? "Швидке замовлення" : "Обране"}
              </p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                {isRegister 
                  ? "Автозаповнення ваших адрес при оформленні." 
                  : "Список товарів завжди під рукою."}
              </p>
            </div>
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">
                {isRegister ? "02" : "Замовлення"}
              </p>
              <p className="mt-2 text-[20px] font-bold">
                {isRegister ? "Історія покупок" : "Замовлення"}
              </p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                {isRegister 
                  ? "Всі електронні чеки та замовлення в профілі." 
                  : "Статуси та чеки в профілі."}
              </p>
            </div>
            <div className="bg-white p-6 transition-all hover:shadow-md">
              <p className="text-[24px] font-bold text-[#00AAAD]">
                {isRegister ? "03" : "Адреси"}
              </p>
              <p className="mt-2 text-[20px] font-bold">
                {isRegister ? "Список бажань" : "Адреси"}
              </p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                {isRegister 
                  ? "Зберігайте товари та стежте за цінами." 
                  : "Швидше оформлення доставки."}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Form Container (Login / Register) */}
        <div className="w-[520px] border border-[#00000030] bg-white p-10 transition-all duration-300 hover:border-[#00AAAD]">
          {!isRegister ? (
            /* --- LOGIN FORM --- */
            <>
              <h2 className="text-[42px] font-bold">Вхід</h2>
              <p className="mt-3 text-[20px] text-[#231F20B3]">
                Введіть email та пароль від вашого акаунта.
              </p>

              <form onSubmit={handleLoginSubmit} className="mt-8 flex flex-col gap-6">
                <label className="flex flex-col gap-3 text-[20px] font-medium">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder=""
                    className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                    required
                  />
                </label>

                <label className="flex flex-col gap-3 text-[20px] font-medium">
                  Пароль
                  <input
                    type="password"
                    name="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder=""
                    className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                    required
                  />
                </label>

                <div className="flex items-center justify-between text-[18px]">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
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
                <p className="text-[20px] text-[#231F20B3]">
                  Ще немає акаунта?
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    setIsSuccess(false);
                    setIsRegister(true);
                  }}
                  className="mt-4 flex w-full h-[56px] items-center justify-center bg-[#E0E0E0] text-[22px] font-medium transition-colors hover:bg-[#d6d6d6]"
                >
                  Створити акаунт
                </button>
              </div>
            </>
          ) : (
            /* --- REGISTRATION FORM --- */
            <>
              <h2 className="text-[42px] font-bold">Реєстрація</h2>
              <p className="mt-3 text-[20px] text-[#231F20B3]">
                Створіть свій особистий кабінет покупця JYSK.
              </p>

              {isSuccess && (
                <div className="mt-6 border-l-4 border-green-500 bg-green-50 p-4 text-green-700">
                  <p className="font-semibold">Успішна реєстрація!</p>
                  <p className="text-[16px] mt-1">Дані успішно виведено в console.log.</p>
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

              <form onSubmit={handleRegisterSubmit} className="mt-8 flex flex-col gap-6">
                <label className="flex flex-col gap-3 text-[20px] font-medium">
                  Ім'я та Прізвище
                  <input
                    type="text"
                    name="name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
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
                    value={registerData.email}
                    onChange={handleRegisterChange}
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
                    value={registerData.phone}
                    onChange={handleRegisterChange}
                    placeholder=""
                    className="h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal outline-none transition-colors focus:bg-[#d6d6d6] focus:border-b-2 focus:border-[#00AAAD] placeholder:text-[#231F2082]"
                  />
                </label>

                <label className="flex flex-col gap-3 text-[20px] font-medium">
                  Пароль
                  <input
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
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
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
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
                    checked={registerData.agreeToTerms}
                    onChange={handleRegisterChange}
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
                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    setIsSuccess(false);
                    setIsRegister(false);
                  }}
                  className="mt-4 flex w-full h-[56px] items-center justify-center bg-[#E0E0E0] text-[22px] font-medium transition-colors hover:bg-[#d6d6d6]"
                >
                  Увійти в акаунт
                </button>
              </div>
            </>
          )}
        </div>

      </section>
    </main>
  );
}
