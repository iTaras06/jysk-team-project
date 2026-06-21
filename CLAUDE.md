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
- **Фаза 2 — Каталог и карточка товара.** ✅ Сделано (2026-06-21).
  - `/catalog` (категории + все товары), `/catalog/[category]`, `/product/[slug]` — всё async Server Components.
  - `params` обёрнут в `await` (Next 16), у динамических роутов есть `generateStaticParams` + `generateMetadata`, несуществующие категории/товары → `notFound()`.
  - Карточка вынесена в переиспользуемый `src/components/ui/ProductCard.tsx`; главная теперь использует её же.
  - В `api.ts` добавлены `getProductBySlug`, `getCategoryBySlug`. В `products.json` у всех товаров есть `description`.
  - Кнопки на главной («Усі категорії», «Магазин», карточки категорий) и пункт «Каталог» в Header ведут в каталог.
- **Фаза 3 — Корзина и избранное.** ✅ Сделано (2026-06-21).
  - Zustand + persist: `src/features/cart/store.ts` (`hyggy-cart`), `src/features/favorites/store.ts` (`hyggy-favorites`).
  - Хук `src/lib/useHydrated.ts` (на `useSyncExternalStore`) — гасит SSR/client mismatch у счётчиков и persist-данных.
  - Страницы `/cart` (qty +/-, удаление, очистка, сумма) и `/favorites` (server грузит товары → client `FavoritesList` фильтрует по id).
  - `ProductCard` стал client: кнопка «У кошик» работает, есть сердечко избранного. На странице товара — `src/features/cart/ProductActions.tsx`.
  - В Header иконки ведут на `/cart` и `/favorites`, с бейджами-счётчиками (показываются после гидратации).
- **Фаза 4 — Формы.** ✅ Сделано (2026-06-21).
  - React Hook Form + zod + `@hookform/resolvers`. Схемы в `src/features/auth/schemas.ts`.
  - `/login` и `/register` переписаны: валидация на zod, ошибки под полями, кнопка блокируется при сабмите. Вид форм сохранён 1-в-1.
  - zod v4: используется `z.email()` (не `z.string().email()`).
- **Фаза 5 — Авторизация.** ✅ Сделано (2026-06-21). Решение: мок-авторизация на Zustand (не NextAuth/Clerk — у проекта нет бэкенда, нужно было сдать быстро).
  - `src/features/auth/store.ts` (persist `hyggy-auth`): `users[]`, `currentUser`, `register`/`login`/`logout`. Пароли в localStorage в открытом виде — это учебный мок, в комментарии помечено.
  - `/login` и `/register` теперь реально логинят/регистрируют через стор и редиректят на `/profile`; ошибки («неверный пароль», «email занят») показываются.
  - `/profile` — данные юзера + «Вийти», защищён (нет юзера → redirect на `/login`).
  - В Header иконка профиля ведёт на `/profile` если вошёл, иначе на `/login`.
  - Замена на реальный auth (Auth.js/Clerk) = только заменить тело функций стора + middleware.
- **Фаза 6 — UI quality.** ✅ Сделано (2026-06-21).
  - Реальные картинки товаров: вместо live Unsplash API (ключа в проекте не было) вшиты стабильные URL `images.unsplash.com/photo-...` в `products.json` (поле `image`). Каждое фото подобрано под товар и проверено глазами. Без рантайм-запросов и без зависимости от ключа.
  - `next.config.ts`: `images.remotePatterns` для `images.unsplash.com`. Везде используется `next/image` (ProductCard, страница товара, миниатюра в корзине). `CartItem` получил поле `image`.
  - Адаптив главной: hero стекается на мобильном, сетки категорий/рекомендаций/инфо/блога получили брейкпоинты (как в каталоге).
  - `ml-[500px]` в Header уже не было (команда переписала шапку) — чинить нечего.
  - Атрибуция Unsplash добавлена строкой в Footer.
- **Фаза 7 — Поиск.** ✅ Сделано (2026-06-21).
  - `searchProducts(query)` в `api.ts` (по названию, описанию, имени категории).
  - `/search` — Server Component, читает `?q=` через `await searchParams` (Next 16). Форма в Header теперь `action="/search"`, input `name="q"`.
- **Фаза 8 — Чекаут и заказы.** ✅ Сделано (2026-06-21).
  - `src/types/order.ts`, `src/features/orders/store.ts` (persist `hyggy-orders`, `createOrder` генерит номер `HG…` и дату), `src/features/orders/schema.ts` (zod).
  - `/checkout` — форма (контакты, доставка курьер/самовывоз, оплата картой/наличными) на RHF+zod + сводка из корзины; на сабмит создаёт заказ, чистит корзину, редирект на success. Пустая корзина → заглушка.
  - `/checkout/success?order=ID` — подтверждение с номером и составом (useSearchParams в Suspense).
  - `/orders` — история заказов. Кнопка корзины «Оформити замовлення» → `/checkout`, карточка «Замовлення» в профиле → `/orders`.
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
