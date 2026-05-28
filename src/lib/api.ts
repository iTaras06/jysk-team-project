import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";
import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

// Тонка обгортка над джерелом даних. Зараз — JSON-моки.
// Коли з'явиться реальне API/БД — змінюємо тільки тіло цих функцій.

export async function getCategories(): Promise<Category[]> {
  return categoriesData as Category[];
}

export async function getProducts(): Promise<Product[]> {
  return productsData as Product[];
}

export async function getRecommendedProducts(): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((p) => p.isRecommended);
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((p) => p.categorySlug === slug);
}
