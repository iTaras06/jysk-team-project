"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/store";
import { useHydrated } from "@/lib/useHydrated";

export default function ProfilePage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.currentUser);
  const logout = useAuthStore((s) => s.logout);
  const hydrated = useHydrated();

  // Захист сторінки: якщо після гідратації користувача немає — на вхід.
  useEffect(() => {
    if (hydrated && !user) {
      router.replace("/login");
    }
  }, [hydrated, user, router]);

  if (!hydrated || !user) {
    return <main className="min-h-[calc(100vh-300px)] bg-white" />;
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <h1 className="text-[40px] font-bold">Мій профіль</h1>

        <div className="mt-8 flex gap-9 max-[900px]:flex-col">
          <div className="w-[420px] border border-[#00000030] bg-white p-8 max-[900px]:w-full">
            <div className="flex items-center gap-5">
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#00AAAD] text-[28px] font-bold text-white">
                {user.name.trim().charAt(0).toUpperCase() || "U"}
              </div>
              <div>
                <p className="text-[24px] font-bold">{user.name}</p>
                <p className="text-[18px] text-[#231F2080]">{user.email}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#00000020] pt-6">
              <p className="text-[17px] text-[#231F20B3]">Email</p>
              <p className="mt-1 text-[20px]">{user.email}</p>
              <p className="mt-5 text-[17px] text-[#231F20B3]">Ім&rsquo;я та прізвище</p>
              <p className="mt-1 text-[20px]">{user.name}</p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-8 h-[52px] w-full border border-[#231F20] text-[19px] font-medium transition hover:bg-[#F0F0F0]"
            >
              Вийти з акаунта
            </button>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            <Link
              href="/favorites"
              className="bg-[#E0E0E0] p-7 transition hover:bg-[#D3D3D3]"
            >
              <p className="text-[24px] font-bold text-[#00AAAD]">Обране</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Перегляньте збережені товари.
              </p>
            </Link>
            <Link href="/cart" className="bg-[#E0E0E0] p-7 transition hover:bg-[#D3D3D3]">
              <p className="text-[24px] font-bold text-[#00AAAD]">Кошик</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Завершіть оформлення замовлення.
              </p>
            </Link>
            <Link href="/orders" className="bg-[#E0E0E0] p-7 transition hover:bg-[#D3D3D3]">
              <p className="text-[24px] font-bold text-[#00AAAD]">Замовлення</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Перегляньте історію ваших замовлень.
              </p>
            </Link>
            <div className="bg-[#F5F5F5] p-7">
              <p className="text-[24px] font-bold">Адреси</p>
              <p className="mt-2 text-[18px] text-[#231F20B3]">
                Збережіть адреси для швидшого оформлення доставки.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
