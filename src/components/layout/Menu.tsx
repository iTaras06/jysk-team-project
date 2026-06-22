"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Категорії — ведуть на реальні роути каталогу (/catalog/<slug>).
const categoryLinks = [
  { title: "Вітальня", href: "/catalog/living-room" },
  { title: "Спальня", href: "/catalog/bedroom" },
  { title: "Ванна", href: "/catalog/bathroom" },
  { title: "Офіс", href: "/catalog/office" },
  { title: "Сад", href: "/catalog/garden" },
  { title: "Декор", href: "/catalog/decor" },
];

// Розділи сайту — щоб меню було повноцінною навігацією (особливо на мобільному).
const pageLinks = [
  { title: "Каталог", href: "/catalog" },
  { title: "Магазини", href: "/shops" },
  { title: "Блог", href: "/blog" },
  { title: "Питання-відповідь", href: "/questions" },
  { title: "Робота", href: "/work" },
];

export default function Menu({ isOpen, onClose }: Props) {
  // Esc закриває меню + блокування прокрутки сторінки, поки меню відкрите.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Затемнення позаду — клік закриває меню */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Панель меню — виїжджає зліва */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        className={`absolute left-0 top-0 h-full w-[495px] max-w-full overflow-y-auto bg-white px-[50px] py-[42px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out max-[640px]:px-[30px] max-[640px]:py-[30px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <Link href="/" onClick={onClose}>
            <Image src="/icons/logo.png" alt="HYGGY" width={91} height={58} priority />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити меню"
            className="text-[45px] leading-none transition hover:rotate-90 hover:opacity-60"
          >
            ×
          </button>
        </div>

        <div className="mt-[33px] h-[1px] w-full bg-black/30" />

        <nav className="mt-[33px]" aria-label="Категорії">
          <ul className="flex flex-col gap-[28px]">
            {categoryLinks.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-300 ease-out ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${100 + i * 45}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-[20px] font-normal text-[#231F20] transition hover:pl-2 hover:text-[#00AAAD]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-[33px] h-[1px] w-full bg-black/30" />

        <nav className="mt-[28px]" aria-label="Розділи">
          <ul className="flex flex-col gap-[22px]">
            {pageLinks.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-300 ease-out ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${100 + (categoryLinks.length + i) * 45}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-[18px] font-medium text-[#231F20]/80 transition hover:pl-2 hover:text-[#00AAAD]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
