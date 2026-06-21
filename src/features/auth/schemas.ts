import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Введіть коректний email"),
  password: z.string().min(6, "Пароль має містити щонайменше 6 символів"),
  rememberMe: z.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(2, "Вкажіть ім'я та прізвище"),
    email: z.email("Введіть коректний email"),
    phone: z
      .string()
      .optional()
      .refine((v) => !v || /^[0-9+()\s-]{7,}$/.test(v), {
        message: "Введіть коректний номер телефону",
      }),
    password: z.string().min(6, "Пароль має містити щонайменше 6 символів"),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((v) => v === true, {
      message: "Потрібно погодитися з умовами використання",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не збігаються",
    path: ["confirmPassword"],
  });

export type RegisterValues = z.infer<typeof registerSchema>;
