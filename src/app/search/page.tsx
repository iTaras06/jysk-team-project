import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { searchProducts } from "@/lib/api";

export const metadata = {
  title: "Пошук",
};

// У Next 16 searchParams теж Promise — треба await.
type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? await searchProducts(query) : [];

  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        {query ? (
          <>
            <h1 className="text-[34px] font-bold">
              Результати пошуку: «{query}»
            </h1>
            <p className="mt-2 text-[18px] text-[#231F20B3]">
              Знайдено товарів: {results.length}
            </p>

            {results.length > 0 ? (
              <div className="mt-8 grid grid-cols-4 gap-7 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="mt-10 flex flex-col items-start gap-6">
                <p className="text-[20px] text-[#231F2080]">
                  За запитом «{query}» нічого не знайдено. Спробуйте інше слово.
                </p>
                <Link
                  href="/catalog"
                  className="flex h-[52px] w-[230px] items-center justify-center bg-[#00AAAD] text-[19px] font-medium text-white transition hover:bg-[#009396]"
                >
                  Перейти до каталогу
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-[34px] font-bold">Пошук</h1>
            <p className="mt-2 text-[20px] text-[#231F2080]">
              Введіть назву товару в рядок пошуку вгорі.
            </p>
          </>
        )}
      </section>
    </main>
  );
}
