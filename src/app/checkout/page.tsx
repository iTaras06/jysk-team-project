"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { checkoutSchema, type CheckoutValues } from "@/features/orders/schema";
import { useOrdersStore } from "@/features/orders/store";
import { selectCartTotal, useCartStore } from "@/features/cart/store";
import { useHydrated } from "@/lib/useHydrated";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const total = useCartStore(selectCartTotal);
  const clear = useCartStore((s) => s.clear);
  const createOrder = useOrdersStore((s) => s.createOrder);
  const hydrated = useHydrated();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      delivery: "courier",
      payment: "card",
    },
  });

  const onSubmit = (data: CheckoutValues) => {
    const order = createOrder({
      items: items.map((i) => ({
        id: i.id,
        title: i.title,
        price: i.price,
        qty: i.qty,
      })),
      total,
      customer: data,
    });
    clear();
    router.replace(`/checkout/success?order=${order.id}`);
  };

  if (!hydrated) {
    return <main className="min-h-[calc(100vh-300px)] bg-white" />;
  }

  if (items.length === 0) {
    return (
      <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
        <section className="mx-auto max-w-[1408px] px-9 py-9">
          <h1 className="text-[40px] font-bold">Оформлення замовлення</h1>
          <p className="mt-8 text-[20px] text-[#231F2080]">
            Кошик порожній — немає чого оформлювати.
          </p>
          <Link
            href="/catalog"
            className="mt-6 flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396]"
          >
            Перейти до каталогу
          </Link>
        </section>
      </main>
    );
  }

  const fieldClass =
    "h-[54px] bg-[#E0E0E0] px-5 text-[19px] outline-none transition-colors focus:border-b-2 focus:border-[#00AAAD] focus:bg-[#d6d6d6]";
  const errorClass = "text-[15px] text-red-600";
  const labelClass = "flex flex-col gap-2 text-[18px] font-medium";

  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <h1 className="text-[40px] font-bold">Оформлення замовлення</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-8 flex gap-9 max-[900px]:flex-col"
        >
          <div className="flex-1">
            <h2 className="text-[24px] font-bold">Контактні дані</h2>
            <div className="mt-5 grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
              <label className={labelClass}>
                Ім&rsquo;я та прізвище
                <input className={fieldClass} {...register("name")} />
                {errors.name && <span className={errorClass}>{errors.name.message}</span>}
              </label>
              <label className={labelClass}>
                Телефон
                <input className={fieldClass} type="tel" {...register("phone")} />
                {errors.phone && <span className={errorClass}>{errors.phone.message}</span>}
              </label>
              <label className={labelClass}>
                Email
                <input className={fieldClass} type="email" {...register("email")} />
                {errors.email && <span className={errorClass}>{errors.email.message}</span>}
              </label>
              <label className={labelClass}>
                Місто
                <input className={fieldClass} {...register("city")} />
                {errors.city && <span className={errorClass}>{errors.city.message}</span>}
              </label>
              <label className={`${labelClass} col-span-2 max-[640px]:col-span-1`}>
                Адреса (відділення або вулиця, будинок)
                <input className={fieldClass} {...register("address")} />
                {errors.address && (
                  <span className={errorClass}>{errors.address.message}</span>
                )}
              </label>
            </div>

            <h2 className="mt-9 text-[24px] font-bold">Доставка</h2>
            <div className="mt-4 flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-3 text-[18px]">
                <input type="radio" value="courier" {...register("delivery")} />
                Кур&rsquo;єр додому
              </label>
              <label className="flex cursor-pointer items-center gap-3 text-[18px]">
                <input type="radio" value="pickup" {...register("delivery")} />
                Самовивіз із магазину
              </label>
            </div>

            <h2 className="mt-9 text-[24px] font-bold">Оплата</h2>
            <div className="mt-4 flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-3 text-[18px]">
                <input type="radio" value="card" {...register("payment")} />
                Картка онлайн
              </label>
              <label className="flex cursor-pointer items-center gap-3 text-[18px]">
                <input type="radio" value="cash" {...register("payment")} />
                Готівка при отриманні
              </label>
            </div>
          </div>

          <aside className="h-fit w-[380px] bg-[#F5F5F5] p-7 max-[900px]:w-full">
            <p className="text-[24px] font-bold">Ваше замовлення</p>
            <div className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-[17px]">
                  <span className="text-[#231F20B3]">
                    {item.title} × {item.qty}
                  </span>
                  <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-between border-t border-[#00000020] pt-5 text-[24px] font-bold">
              <span>До сплати</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 h-[56px] w-full bg-[#00AAAD] text-[20px] font-medium text-white transition hover:bg-[#009396] active:scale-[0.99] disabled:opacity-60"
            >
              Підтвердити замовлення
            </button>
          </aside>
        </form>
      </section>
    </main>
  );
}
