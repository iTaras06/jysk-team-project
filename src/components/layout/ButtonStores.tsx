"use client";

interface Props {
  onClick?: () => void;
  selected?: boolean;
}

export default function ButtonStores({ onClick, selected = false }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[44px] w-[170px] shrink-0 rounded-[10px] text-[18px] font-medium transition active:scale-[0.97] max-[640px]:w-[150px] max-[640px]:text-[16px] ${
        selected
          ? "bg-[#231F20] text-white"
          : "bg-[#00AAAD] text-white hover:bg-[#009396]"
      }`}
    >
      {selected ? "Обрано ✓" : "Обрати"}
    </button>
  );
}
