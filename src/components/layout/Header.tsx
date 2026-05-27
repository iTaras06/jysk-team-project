import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#blog", label: "Блог", width: "w-[138px]" },
  { href: "/#recommended", label: "Магазин", width: "w-[181px]" },
  { href: "/#faq", label: "Питання-відповіді", width: "w-[260px]" },
  { href: "/#jobs", label: "Робота", width: "w-[181px]" },
];

export default function Header() {
  return (
    <header className="h-[300px] w-full text-[#231F20]">
      <div className="h-[59px] w-full bg-[#00AAAD]" />

      <div className="h-[240px] w-full bg-white">
        <div className="w-full border-b border-[#00000080]">
          <div className="mx-[5%] flex h-[150px] items-center px-10">
            <Link href="/" aria-label="На головну">
              <Image src="/icons/logo.png" alt="JYSK" width={110} height={71} />
            </Link>

            <Link
              href="/#categories"
              className="ml-10 flex items-center gap-14"
            >
              <div className="flex h-[30px] w-[56px] flex-col justify-between">
                <span className="h-[4px] w-full bg-black" />
                <span className="h-[4px] w-full bg-black" />
                <span className="h-[4px] w-full bg-black" />
              </div>
              <span className="text-[30px] font-medium">Меню</span>
            </Link>

            <form
              action="/"
              className="ml-16 flex h-[71px] max-w-[670px] flex-1 items-center rounded-[10px] bg-[#E0E0E0] px-6"
              role="search"
            >
              <input
                type="search"
                name="search"
                placeholder="Пошук..."
                className="flex-1 bg-transparent text-[24px] text-[#231F2082] outline-none placeholder:text-[#231F2082]"
              />

              <button
                type="submit"
                className="shrink-0"
                aria-label="Знайти товари"
              >
                <Image src="/icons/lens.png" alt="" width={29} height={29} />
              </button>
            </form>

            <div className="ml-auto flex shrink-0 items-center gap-[25px]">
              <Link href="/#favorites" aria-label="Обране">
                <Image src="/icons/fav.png" alt="" width={75} height={60} />
              </Link>
              <Link href="/login" aria-label="Увійти в профіль">
                <Image src="/icons/prof.png" alt="" width={40} height={62} />
              </Link>
              <Link href="/#cart" aria-label="Кошик">
                <Image src="/icons/cart.png" alt="" width={64} height={63} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-[89px] max-w-[1700px] items-center px-10">
          <Link href="/#store" className="flex items-center gap-4">
            <Image src="/icons/stor.png" alt="" width={23} height={29} />
            <span className="text-[24px]">JYSK Київ ТЦ Променада</span>
            <Image src="/icons/check.png" alt="" width={18} height={18} />
          </Link>

          <nav className="ml-[500px] flex items-center gap-8" aria-label="Головна навігація">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className={`flex h-[51px] ${link.width} items-center justify-center bg-[#E0E0E0] text-[22px] transition hover:bg-[#D3D3D3]`}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
