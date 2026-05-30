"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {isOpen: boolean; onClose: () => void;}

const menuItems = [
  { title: "Вітальня", href: "/living-room" },
  { title: "Кухня", href: "/kitchen" },
  { title: "Спальня", href: "/bedroom" },
  { title: "Ванна", href: "/bathroom" },
  { title: "Кабінет", href: "/office" },
  { title: "Двір", href: "/yard" },
];

export default function Menu({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-50 w-[600px] max-w-full bg-white px-[60px] py-[50px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)]
      max-[640px]:px-[30px]
      max-[640px]:py-[30px]">

      <div className="flex items-start justify-between">
        <Link href="/" onClick={onClose}>
          <Image src="/icons/logo.png" alt="HYGGY" width={110} height={70} priority/>
        </Link>

        <button type="button" onClick={onClose} aria-label="Закрити меню"
          className="text-[55px] leading-none transition hover:opacity-60"> ×
        </button>
      </div>

      <div className="mt-[40px] h-[1px] w-full bg-black/30"/>

      <nav className="mt-[40px]">
        <ul className="flex flex-col gap-[40px]">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onClose}
                className="text-[24px] font-normal text-[#231F20] transition hover:opacity-70">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}