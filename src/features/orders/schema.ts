import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Вкажіть ім'я та прізвище"),
  email: z.email("Введіть коректний email"),
  phone: z.string().regex(/^[0-9+()\s-]{7,}$/, "Введіть коректний номер телефону"),
  city: z.string().min(2, "Вкажіть місто"),
  address: z.string().min(3, "Вкажіть адресу доставки"),
  delivery: z.enum(["courier", "pickup"]),
  payment: z.enum(["card", "cash"]),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;
