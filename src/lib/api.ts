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

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const all = await getCategories();
  return all.find((c) => c.slug === slug);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const catName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name.toLowerCase() ?? "";
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      (p.description?.toLowerCase().includes(q) ?? false) ||
      catName(p.categorySlug).includes(q),
  );
}
