import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/lib/api";

// У Next 16 params у динамічних роутах — Promise, треба await.
type Params = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { category } = await params;
  const found = await getCategoryBySlug(category);
  return { title: found ? found.name : "Категорія" };
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const [found, products] = await Promise.all([
    getCategoryBySlug(category),
    getProductsByCategory(category),
  ]);

  if (!found) notFound();

  return (
    <main className="w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <nav className="mb-6 text-[16px] text-[#231F2080]">
          <Link href="/" className="transition hover:text-[#00AAAD]">
            Головна
          </Link>
          <span className="mx-2">/</span>
          <Link href="/catalog" className="transition hover:text-[#00AAAD]">
            Каталог
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#231F20]">{found.name}</span>
        </nav>

        <h1 className="text-[40px] font-bold">{found.name}</h1>
        <p className="mt-2 text-[18px] text-[#231F20B3]">
          {products.length} {products.length === 1 ? "товар" : "товарів"}
        </p>

        {products.length > 0 ? (
          <div className="mt-7 grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-[20px] text-[#231F2080]">
            У цій категорії поки немає товарів.
          </p>
        )}
      </section>
    </main>
  );
}
