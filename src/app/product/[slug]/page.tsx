import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/features/cart/ProductActions";
import ProductCard from "@/components/ui/ProductCard";
import {
  getCategoryBySlug,
  getProductBySlug,
  getProducts,
  getProductsByCategory,
} from "@/lib/api";
import { formatPrice } from "@/lib/format";

// У Next 16 params у динамічних роутах — Promise, треба await.
type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return {
    title: product ? product.title : "Товар",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const [category, related] = await Promise.all([
    getCategoryBySlug(product.categorySlug),
    getProductsByCategory(product.categorySlug),
  ]);

  const others = related.filter((p) => p.id !== product.id).slice(0, 4);
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <main className="w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <nav className="mb-7 text-[16px] text-[#231F2080]">
          <Link href="/" className="transition hover:text-[#00AAAD]">
            Головна
          </Link>
          <span className="mx-2">/</span>
          <Link href="/catalog" className="transition hover:text-[#00AAAD]">
            Каталог
          </Link>
          {category && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/catalog/${category.slug}`}
                className="transition hover:text-[#00AAAD]"
              >
                {category.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-[#231F20]">{product.title}</span>
        </nav>

        <div className="flex gap-11 max-[900px]:flex-col">
          <div
            className={`relative h-[460px] flex-1 overflow-hidden max-[900px]:h-[340px] ${product.color ?? "bg-[#E0E0E0]"}`}
          >
            {product.image && (
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 800px"
                className="object-cover"
              />
            )}
            {product.label && (
              <span className="absolute top-6 left-6 z-[1] bg-[#00AAAD] px-4 py-1.5 text-[18px] font-medium text-white">
                {product.label}
              </span>
            )}
          </div>

          <div className="flex w-[42%] flex-col max-[900px]:w-full">
            <h1 className="text-[40px] leading-tight font-bold">{product.title}</h1>

            <div className="mt-6 flex items-end gap-4">
              <p className="text-[36px] font-bold">{formatPrice(product.price)}</p>
              {product.oldPrice && (
                <p className="mb-1.5 text-[20px] text-[#231F2080] line-through">
                  {formatPrice(product.oldPrice)}
                </p>
              )}
              {discount > 0 && (
                <span className="mb-1.5 bg-[#00AAAD] px-3 py-1 text-[16px] font-medium text-white">
                  -{discount}%
                </span>
              )}
            </div>

            <p className="mt-7 text-[19px] leading-[1.5] text-[#231F20B3]">
              {product.description ?? "Опис товару скоро з'явиться."}
            </p>

            <ProductActions product={product} />

            <div className="mt-9 border-t border-[#00000020] pt-6 text-[17px] text-[#231F20B3]">
              <p>✓ Доставка додому або самовивіз із магазину</p>
              <p className="mt-2">✓ Повернення протягом періоду повернення</p>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-[28px] font-bold">Схожі товари</h2>
            <div className="grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
              {others.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
