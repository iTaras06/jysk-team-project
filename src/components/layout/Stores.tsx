"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ButtonStores from "./ButtonStores";
import { stores, type Store } from "@/data/stores";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedId: number;
  onSelect: (store: Store) => void;
}

const weekDays = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя",
];

export default function Stores({ isOpen, onClose, selectedId, onSelect }: Props) {
  const [query, setQuery] = useState("");
  // Який магазин показує розгорнутий графік роботи.
  const [hoursOpenId, setHoursOpenId] = useState<number | null>(null);

  // Esc закриває панель + блокування прокрутки сторінки.
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

  // Робочий пошук по назві / місту / адресі.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stores;
    return stores.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Вибір магазину"
        className={`absolute left-0 top-0 flex h-full w-[600px] max-w-full flex-col bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative px-[40px] py-[26px] max-[640px]:px-[24px]">
          <h2 className="text-center text-[22px] font-semibold">Оберіть магазин</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити"
            className="absolute right-[36px] top-[18px] text-[45px] leading-none transition hover:rotate-90 hover:opacity-60"
          >
            ×
          </button>
        </div>

        <div className="h-[1px] w-full bg-black/20" />

        <div className="px-[40px] pt-[28px] max-[640px]:px-[24px]">
          <div className="flex h-[56px] items-center rounded-[12px] bg-[#E0E0E0] px-6">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Пошук за містом або адресою..."
              className="flex-1 bg-transparent text-[18px] outline-none placeholder:text-black/40"
            />
            <Image src="/icons/lens.png" alt="" width={24} height={24} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-[40px] max-[640px]:px-[24px]">
          <div className="flex flex-col gap-[20px]">
            {filtered.map((store, i) => {
              const isSelected = store.id === selectedId;
              return (
                <div
                  key={store.id}
                  className={`border p-[22px] transition-all duration-300 ease-out ${
                    isSelected ? "border-[#00AAAD] bg-[#00AAAD]/5" : "border-black/20"
                  } ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                  style={{ transitionDelay: isOpen ? `${100 + i * 50}ms` : "0ms" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[20px] font-semibold leading-[1.2]">{store.name}</h3>
                      <p className="mt-1 text-[16px] text-[#231F20B3]">{store.address}</p>
                    </div>
                    <ButtonStores selected={isSelected} onClick={() => onSelect(store)} />
                  </div>

                  <div className="mt-[18px] flex items-center justify-between gap-4">
                    <div className="text-[16px]">
                      <span
                        className={`font-semibold ${
                          store.isOpen ? "text-[#76C043]" : "text-[#E4002B]"
                        }`}
                      >
                        {store.isOpen ? "Відчинено:" : "Зачинено:"}
                      </span>{" "}
                      {store.hours}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setHoursOpenId((cur) => (cur === store.id ? null : store.id))
                      }
                      aria-expanded={hoursOpenId === store.id}
                      className="flex shrink-0 items-center gap-1 text-[16px] font-semibold text-[#00AAAD] underline transition hover:text-[#009396]"
                    >
                      Робочі години
                      <span
                        className={`text-[13px] no-underline transition-transform duration-300 ${
                          hoursOpenId === store.id ? "rotate-90" : ""
                        }`}
                      >
                        {">"}
                      </span>
                    </button>
                  </div>

                  {/* Плавне розгортання графіка через grid-rows 0fr → 1fr */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      hoursOpenId === store.id
                        ? "mt-[16px] grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-[8px] border-t border-black/10 pt-[14px] text-[15px]">
                        {weekDays.map((day, d) => (
                          <div key={day} className="flex justify-between">
                            <span className="text-[#231F20B3]">{day}</span>
                            <span>{d < 5 ? store.week.weekday : store.week.weekend}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <p className="text-[18px] text-[#231F20B3]">Магазинів не знайдено.</p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
