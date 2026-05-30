"use client";

interface Props {
  onClick?: () => void;
}

export default function ButtonStores({onClick, }: Props) {
  return (
    <button type="button" onClick={onClick}
      className="h-[58px] w-[290px] rounded-[12px] bg-[#00AAAD] text-[24px] font-normal text-white transition hover:opacity-80
        max-[640px]:h-[52px]
        max-[640px]:w-[270px]
        max-[640px]:text-[20px]">Обрати магазин
    </button>
  );
}