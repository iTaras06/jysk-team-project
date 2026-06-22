import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
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

        <Reveal>
          <h1 className="text-[40px] font-bold">Каталог</h1>
        </Reveal>

        <div className="mt-7 mb-11 grid grid-cols-6 gap-6 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2">
          {categories.map((category, i) => (
            <Reveal key={category.id} delay={i * 70}>
              <Link
                href={`/catalog/${category.slug}`}
                className="group relative block h-[160px] overflow-hidden max-[640px]:h-[130px]"
              >
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/45" />
                <span className="absolute bottom-4 left-4 text-[20px] font-medium text-white">
                  {category.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mb-6 text-[28px] font-bold">Усі товари</h2>
        </Reveal>

        <div className="grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
