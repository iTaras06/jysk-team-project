"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterValues } from "@/features/auth/schemas";
import { useAuthStore } from "@/features/auth/store";

export default function RegisterPage() {
  const router = useRouter();
  const registerUser = useAuthStore((s) => s.register);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: RegisterValues) => {
    setFormError("");
    const result = registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    if (!result.ok) {
      setFormError(result.error);
      return;
    }
    router.push("/profile");
  };

  const fieldClass =
    "h-[62px] bg-[#E0E0E0] px-5 text-[22px] font-normal transition-colors outline-none placeholder:text-[#231F2082] focus:border-b-2 focus:border-[#00AAAD] focus:bg-[#d6d6d6]";
  const errorClass = "text-[16px] font-normal text-red-600";

  return (
    <main className="min-h-[calc(100vh-300px)] bg-white text-[#231F20]">
      <section className="mx-auto flex max-w-[1700px] gap-10 px-10 py-12">
        {/* Left Side: JYSK Benefits Info Panel */}
        <div className="flex flex-1 flex-col justify-between bg-[#E0E0E0] p-12">
          <div>
            <p className="text-[24px] font-medium text-[#00AAAD]">Профіль покупця</p>
            <h1 className="mt-5 max-w-[660px] text-[58px] leading-[1.05] font-bold">
              Створіть акаунт та отримайте переваги
            </h1>
            <p className="mt-7 max-w-[620px] text-[24px] leading-[1.35] text-[#231F20B3]">
              Приєднуйтесь до JYSK, щоб зберігати список улюблених товарів, відслідковувати статус
              замовлень та отримувати персональні пропозиції.
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

          {formError && (
            <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4 text-[16px] text-red-700">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Ім&rsquo;я та Прізвище
              <input type="text" {...register("name")} className={fieldClass} />
              {errors.name && <span className={errorClass}>{errors.name.message}</span>}
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Email
              <input type="email" {...register("email")} className={fieldClass} />
              {errors.email && <span className={errorClass}>{errors.email.message}</span>}
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Телефон
              <input type="tel" {...register("phone")} className={fieldClass} />
              {errors.phone && <span className={errorClass}>{errors.phone.message}</span>}
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Пароль
              <input type="password" {...register("password")} className={fieldClass} />
              {errors.password && <span className={errorClass}>{errors.password.message}</span>}
            </label>

            <label className="flex flex-col gap-3 text-[20px] font-medium">
              Підтвердження пароля
              <input type="password" {...register("confirmPassword")} className={fieldClass} />
              {errors.confirmPassword && (
                <span className={errorClass}>{errors.confirmPassword.message}</span>
              )}
            </label>

            <div className="mt-2 flex items-start gap-3 text-[18px]">
              <input
                type="checkbox"
                id="agreeToTerms"
                {...register("agreeToTerms")}
                className="mt-1 h-5 w-5 cursor-pointer"
              />
              <label
                htmlFor="agreeToTerms"
                className="cursor-pointer leading-snug text-[#231F20B3] select-none"
              >
                Я погоджуюся з політикою конфіденційності та правилами сервісу JYSK
              </label>
            </div>
            {errors.agreeToTerms && (
              <span className={errorClass}>{errors.agreeToTerms.message}</span>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-[62px] bg-[#00AAAD] text-[24px] font-medium text-white transition-all hover:bg-[#008f91] hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
            >
              Зареєструватися
            </button>
          </form>

          <div className="mt-8 border-t border-[#00000030] pt-7">
            <p className="text-[20px] text-[#231F20B3]">Вже маєте акаунт?</p>
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
