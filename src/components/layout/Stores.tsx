"use client";

import Image from "next/image";
import ButtonStores from "./ButtonStores";

interface Props {isOpen: boolean; onClose: () => void;}

const stores = [
  {
    id: 1,
    name: "HYGGY Київ, ТЦ Променада",
    status: "Відчинено:",
    closeTime: "Зачиняється о 20:00",
  },
  {
    id: 2,
    name: "HYGGY Київ, ТЦ Променада",
    status: "Відчинено:",
    closeTime: "Зачиняється о 20:00",
  },
  {
    id: 3,
    name: "HYGGY Київ, ТЦ Променада",
    status: "Відчинено:",
    closeTime: "Зачиняється о 20:00",
  },
  {
    id: 4,
    name: "HYGGY Київ, ТЦ Променада",
    status: "Відчинено:",
    closeTime: "Зачиняється о 20:00",
  },
  {
    id: 5,
    name: "HYGGY Київ, ТЦ Променада",
    status: "Відчинено:",
    closeTime: "Зачиняється о 20:00",
  },
];

export default function Stores({isOpen, onClose,}: Props) 
{
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 z-50 w-[600px] max-w-full bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)]">

      <div className="relative px-[40px] py-[30px]">
        <h2 className="text-center text-[24px] font-semibold">
          HYGGY Київ ТЦ Променада
        </h2>
        <button onClick={onClose}
          className="absolute right-[40px] top-[20px] text-[55px] leading-none transition hover:opacity-60">×
        </button>
      </div>

      <div className="h-[1px] w-full bg-black/30"/>

      <div className="px-[40px] pt-[40px]">
        <div className="flex h-[68px] items-center rounded-[12px] bg-[#E0E0E0] px-[35px]">
          <input type="search" placeholder="Пошук..."
            className="flex-1 bg-transparent text-[24px] outline-none placeholder:text-black/40"/>          
          <Image src="/icons/lens.png" alt="" width={29} height={29}/>
        </div>
      </div>

      <div className="p-[40px]">
        <div className="flex flex-col gap-[26px]">
          {stores.map((store) => (
            <div key={store.id}
              className="border border-black/30 p-[25px]">
              <div className="flex justify-between">
                <h3 className="max-w-[240px] text-[24px] max-[640px]:text-[20px] font-semibold leading-[1.2]">{store.name}
                </h3>
                <ButtonStores />
              </div>

              <div className="mt-[35px] flex items-center justify-between">
                <div className="text-[19px]">
                  <span className="font-semibold text-[#76C043]">{store.status}</span>{" "}{store.closeTime}
                </div>
                <button type="button"
                  className="text-[20px] max-[640px]:text-[18px] font-semibold text-[#00AAAD] underline">Робочі години
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}