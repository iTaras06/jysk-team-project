import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[300px] text-[#231F20]" >

      <div className="h-[59px] w-full bg-[#00AAAD]" />

      <div className="h-[240px] w-full bg-[#FFFFFF]">

        <div className="w-full border-b border-[#00000080]">

          <div className="mx-[5%] flex h-[150px] items-center px-10">
            <Image src="/icons/logo.png" alt="logo" width={110} height={71} />

            <div className="ml-10 flex items-center gap-14 cursor-pointer">

              <div className="flex h-[30px] w-[56px] flex-col justify-between">
                <span className="h-[4px] w-full bg-black"></span>
                <span className="h-[4px] w-full bg-black"></span>
                <span className="h-[4px] w-full bg-black"></span>
              </div>

              <span className="text-[30px] font-medium">Меню</span>

            </div>




            <div className="ml-16 flex h-[71px] flex-1 max-w-[670px] items-center rounded-[10px] bg-[#E0E0E0] px-6">

              <input type="text" placeholder="Пошук..." className="flex-1 bg-transparent text-[24px] text-[#231F2082] outline-none placeholder:text-[#231F2082]" />

              <button className="shrink-0">
                <Image src="/icons/lens.png" alt="lens" width={29} height={29} />
              </button>

            </div>




            <div className="ml-auto flex shrink-0 items-center gap-[25px]">
              <button><Image src="/icons/fav.png" alt="fav" width={75} height={60} /></button>
              <button><Image src="/icons/prof.png" alt="prof" width={40} height={62} /></button>
              <button><Image src="/icons/cart.png" alt="cart" width={64} height={63} /></button>
            </div>

          </div>
        </div>


        <div className="mx-auto flex h-[89px] max-w-[1700px] items-center px-10">

          <button className="flex items-center gap-4">

            <Image
              src="/icons/stor.png"
              alt="stor"
              width={23}
              height={29}
            />

            <span className="text-[24px]">
              HYGGY Київ ТЦ Променада
            </span>

            <Image
              src="/icons/check.png"
              alt="check"
              width={18}
              height={18}
            />

          </button>

          <div className="ml-[500px] flex items-center gap-8">

            <button className="h-[51px] w-[138px] bg-[#E0E0E0] text-[22px]">
              Блог
            </button>

            <button className="h-[51px] w-[181px] bg-[#E0E0E0] text-[22px]">
              Магазин
            </button>

            <button className="h-[51px] w-[260px] bg-[#E0E0E0] text-[22px]">
              Питання-відповіді
            </button>

            <button className="h-[51px] w-[181px] bg-[#E0E0E0] text-[22px]">
              Робота
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}