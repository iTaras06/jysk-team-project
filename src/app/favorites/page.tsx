import FavoritesList from "@/features/favorites/FavoritesList";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Обране",
  description: "Збережені товари HYGGY.",
};

export default async function FavoritesPage() {
  const products = await getProducts();

  return (
    <main className="min-h-[calc(100vh-300px)] w-full bg-white text-[#231F20]">
      <section className="mx-auto max-w-[1408px] px-9 py-9">
        <h1 className="text-[40px] font-bold">Обране</h1>
        <FavoritesList products={products} />
      </section>
    </main>
  );
}
