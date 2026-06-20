"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "@/components/layout/Menu";
import Stores from "@/components/layout/Stores";

const navLinks = [
  { href: "/#blog", label: "Блог", width: "w-[125px] max-[768px]:w-[111px]" },
  { href: "/#recommended", label: "Магазини", width: "w-[165px] max-[768px]:w-[145px]" },
  { href: "/#faq", label: "Питання-відповідь", width: "w-[235px] max-[768px]:w-[208px]" },
  { href: "/#jobs", label: "Робота", width: "w-[165px] max-[768px]:w-[145px]" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoresOpen, setIsStoresOpen] = useState(false);
  return (
    <>
    <header className="relative w-full h-[249px] text-[#231F20] border-b border-black/50 shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-[768px]:h-auto">

      <div className="h-[48px] w-full bg-[#00AAAD] max-[768px]:h-[35px]" />
      <div className="h-[201px] w-full bg-white max-[768px]:h-auto">
        <div className="w-full border-b border-black/50 max-[768px]:border-none">
          <div className="mx-[6%] flex h-[123px]  items-center px-10
            max-[768px]:h-[96px]
            max-[768px]:px-[10px]
            max-[768px]:justify-between
            max-[640px]:h-[96px]">
            
            <Link href="/" aria-label="На головну">
              <Image src="/icons/logo.png"  alt="HYGGY" width={91} height={58} className="max-[768px]:w-[74px] max-[768px]:h-[48px]"/>
            </Link>

            <button type="button" onClick={() => setIsMenuOpen(true)}
              className="ml-9 flex items-center gap-[52px]
              max-[768px]:ml-[-120px]
              max-[768px]:gap-[30px]
              max-[640px]:gap-[6px]">

              <div className="flex h-[25px] w-[50px] flex-col justify-between max-[768px]:h-[25px] max-[768px]:w-[42px]">
                <span className="h-[3px] w-full bg-black" />
                <span className="h-[3px] w-full bg-black" />
                <span className="h-[3px] w-full bg-black" />
              </div>

              <span className="text-[24px] font-medium max-[768px]:text-[24px] max-[640px]:hidden">Меню
              </span>
            </button>

            <form
              action="/"
              className="ml-[105px] flex h-[58px] max-w-[748px] flex-1 items-center rounded-[10px] bg-[#E0E0E0] px-6
              max-[768px]:absolute
              max-[768px]:top-[136px]
              max-[768px]:left-[30px]
              max-[768px]:right-[30px]
              max-[768px]:ml-0
              max-[768px]:max-w-none
              max-[768px]:h-[45px]
              max-[640px]:top-[140px]"
              role="search">

              <input type="search" name="search" placeholder="Пошук..."
                className="flex-1 bg-transparent text-[20px] text-[#231F2082] outline-none placeholder:text-[#231F2082] max-[768px]:text-[18px]"/>

              <button type="submit" className="shrink-0" aria-label="Знайти товари">
                <Image src="/icons/lens.png" alt="" width={24} height={24} className="max-[768px]:w-[22px] max-[768px]:h-[22px]"/>
              </button>
            </form>

            <div className="hidden
              max-[768px]:block
              max-[768px]:absolute
              max-[768px]:left-0
              max-[768px]:right-0
              max-[768px]:top-[220px]
              max-[768px]:h-[1px]
              max-[768px]:bg-black/40
              max-[640px]:hidden"/>

            <div className="ml-auto flex shrink-0 items-center gap-[66px]
            max-[768px]:ml-0
            max-[768px]:gap-[36px]
            max-[640px]:gap-[30px]">
              <Link href="/#favorites" aria-label="Обране">
                <Image src="/icons/fav.png" alt="" width={62} height={50}
                className="max-[768px]:w-[50px] max-[768px]:h-[40px] max-[640px]:hidden"/>
                <Image src="/icons/fav2.png" alt="" width={36} height={32} className="hidden
                  max-[640px]:block
                  max-[640px]:w-[36px]
                  max-[640px]:h-[32px]"/>
              </Link>

              <Link href="/login" aria-label="Увійти в профіль">
                <Image src="/icons/prof.png" alt="" width={33} height={52}
                className="max-[768px]:w-[32px] max-[768px]:h-[50px] max-[640px]:hidden"/>
                <Image src="/icons/prof2.png" alt="" width={28} height={38} 
                className="hidden max-[640px]:block max-[640px]:w-[28px] max-[640px]:h-[38px]"/>
              </Link>

              <Link href="/#cart" aria-label="Кошик">
                <Image src="/icons/cart.png" alt="" width={53} height={52}
                className="max-[768px]:w-[50px] max-[768px]:h-[49px] max-[640px]:hidden"/>
                <Image src="/icons/cart2.png" alt="" width={41} height={39} className="hidden
                  max-[640px]:block
                  max-[640px]:w-[41px]
                  max-[640px]:h-[39px]"/>
              </Link>
            </div>
          </div>
        </div>


        <div className="flex min-h-[74px] mx-[4%] items-center justify-between px-24
          max-[768px]:mt-[70px]
          max-[768px]:h-[108px]
          max-[768px]:flex-col
          max-[768px]:items-center
          max-[768px]:px-0
          max-[640px]:h-[90px]
          max-[640px]:mt-[0px]"> 

          <button type="button" onClick={() => setIsStoresOpen(true)}
            className="flex items-center gap-4 whitespace-nowrap shrink-0 max-[768px]:hidden">
            <Image src="/icons/stor.png" alt="" width={20} height={24} className="shrink-0"/>
            <span className="text-[20px] whitespace-nowrap">HYGGY Київ ТЦ Променада</span>
            <Image src="/icons/check.png" alt="" width={16} height={16} className="shrink-0"/>
          </button>

          <nav className="flex items-center gap-8
            max-[768px]:ml-0
            max-[768px]:mt-[40px]
            max-[768px]:mb-[40px]
            max-[768px]:gap-[16px]
            max-[640px]:hidden" 
            aria-label="Головна навігація">

            {navLinks.map((link) => (
              <Link
                href={link.href}
                  className={`flex h-[42px] ${link.width} items-center justify-center bg-[#E0E0E0] text-[18px] transition hover:bg-[#D3D3D3] max-[768px]:h-[45px] max-[768px]:text-[18px]`}
                key={link.href}>{link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </header>
    <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    <Stores isOpen={isStoresOpen} onClose={() => setIsStoresOpen(false)} />
    </>
  );
}