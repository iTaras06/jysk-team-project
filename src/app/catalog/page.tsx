import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { getCategories, getProducts } from "@/lib/api";

export const metadata = {
  title: "Каталог",
  description: "Усі товари HYGGY: меблі, текстиль і декор для дому.",
};

export default async function CatalogPage() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  return (
    <main className="w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <nav className="mb-6 text-[16px] text-[#231F2080]">
          <Link href="/" className="transition hover:text-[#00AAAD]">
            Головна
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#231F20]">Каталог</span>
        </nav>

        <h1 className="text-[40px] font-bold">Каталог</h1>

        <div className="mt-7 mb-11 grid grid-cols-6 gap-6 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalog/${category.slug}`}
              className="flex h-[123px] flex-col justify-between bg-[#E0E0E0] p-6 transition hover:bg-[#D3D3D3]"
            >
              <span className="h-[35px] w-[35px] bg-[#00AAAD]" />
              <span className="text-[20px] font-medium">{category.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="mb-6 text-[28px] font-bold">Усі товари</h2>
        <div className="grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
