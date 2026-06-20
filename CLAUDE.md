@AGENTS.md

# JYSK Team Project

Учебный командный проект — клон сайта JYSK Україна.

## Стек

- Next.js 16.2.6 (App Router, Turbopack/Webpack dev)
- React 19.2.4
- Tailwind CSS v4 (через `@tailwindcss/postcss`)
- TypeScript 5
- ESLint 9 + Prettier 3 (с `prettier-plugin-tailwindcss`)

## Развитие проекта — план по фазам

Идём фазами от фундамента к фичам. Текущий статус (последнее обновление 2026-05-28):

- **Фаза 0 — Гигиена и фундамент.** ✅ Сделано.
  - Унифицирован язык UI на украинский (`lang="uk"`, главная + login переведены).
  - Поправлены `metadata` в `src/app/layout.tsx` (title с шаблоном `%s | JYSK`).
  - Из `/login` убран `isRegister`-тоггл — теперь `/login` и `/register` это две независимые страницы.
  - Заведена структура папок: `src/features/`, `src/lib/`, `src/types/`, `src/data/`, `src/components/ui/`.
  - Поставлены Prettier + `prettier-plugin-tailwindcss`. `.prettierrc`, `.prettierignore` в корне.
  - `npm run lint` → `eslint --max-warnings 0`.
- **Фаза 1 — Данные и типы.** ✅ Сделано.
  - Типы `Category`, `Product` в `src/types/`.
  - Моки в `src/data/categories.json` (6 категорий) и `src/data/products.json` (8 товаров, 4 рекомендованных).
  - `src/lib/api.ts` — единая точка доступа к данным: `getCategories`, `getProducts`, `getRecommendedProducts`, `getProductsByCategory`. Сейчас читает из JSON, потом легко заменить на реальный API.
  - `src/lib/format.ts` — `formatPrice(uah)` для цен в гривнах через `Intl`.
  - `src/app/page.tsx` переписана на async Server Component, читает из api-слоя, у акционных товаров показывается старая зачёркнутая цена.
- **Фаза 2 — Каталог и карточка товара.** ⏳ Следующая.
  - `/catalog`, `/catalog/[category]`, `/product/[slug]`.
  - Server Components для списков, Client только где интерактив.
  - Внимание: в Next 16 `params` в dynamic routes теперь `Promise<…>` — нужно `await`.
- **Фаза 3 — Корзина и избранное.** Zustand + persist в localStorage.
- **Фаза 4 — Формы.** RHF + zod.
- **Фаза 5 — Авторизация.** NextAuth (Auth.js) или Clerk.
- **Фаза 6 — UI quality.** Реальные картинки (Unsplash как источник плейсхолдеров — ключ у пользователя, см. memory `unsplash-api.md`), адаптив, фикс `ml-[500px]` в Header.
- **Фаза 7 — Поиск.**
- **Фаза 8 — Чекаут и заказы.**
- **Фаза 9 — SEO/перф/метрики.**
- **Фаза 10 — Тесты + CI.**
- **Фаза 11 — Деплой.**

## Принятые решения (контекст для будущих сессий)

- **Язык UI:** только украинский. Чат с пользователем — на русском.
- **Login/Register:** отдельные страницы без тогглов.
- **Husky/lint-staged:** пользователь сознательно НЕ хочет. Не предлагать заново.
- **Источник данных на старте:** JSON-моки в `src/data/`, доступ через `src/lib/api.ts`. Не лезть напрямую к JSON из страниц.
- **Стиль отчётов пользователю:** простой язык, без жаргона. Когда просит «расскажи что изменил» или «шаблон отчёта» — 2–6 пунктов плоским языком, архитектурные изменения описывать как «подготовил основу для…», а не «ввёл слой абстракции».
- **Перед нетривиальной работой с Next.js API:** читать `node_modules/next/dist/docs/` — в Next 16 есть breaking changes относительно того, что знают LLM и старые туториалы.
- **Unsplash API:** ключ у пользователя есть, тариф demo (50 req/hr). Использовать только server-side, хранить в `.env.local` как `UNSPLASH_ACCESS_KEY` (без `NEXT_PUBLIC_`). Подробности — в `~/.claude/projects/<this-cwd>/memory/unsplash-api.md`.

## Структура `src/`

```
src/
  app/              — роуты (Next.js App Router)
    page.tsx        — главная
    layout.tsx      — root layout
    login/          — /login
    register/       — /register
  components/
    layout/         — Header (и Footer в будущем)
    ui/             — переюзовные UI-примитивы (пока пусто)
  features/         — доменная логика по фичам (пока пусто: cart, favorites, auth, catalog)
  lib/
    api.ts          — единая точка получения данных
    format.ts       — formatPrice и т.п.
  types/
    category.ts
    product.ts
  data/
    categories.json
    products.json
```

## Скрипты

- `npm run dev` — `next dev --webpack`
- `npm run build` — продакшен-сборка
- `npm run lint` — ESLint, варнинги = ошибки
- `npm run format` — Prettier на весь репо
- `npm run format:check` — проверка форматирования без правок
