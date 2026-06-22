export default function Prefooter() {
  return (
    <section className="w-full bg-[#E0E0E0] text-[#231F20]">
      <div className="mx-auto flex max-w-[1408px] flex-col items-center px-9 py-12
          max-[640px]:px-5 max-[640px]:py-9">

        <h2 className="max-w-[820px] text-center text-[24px] font-bold leading-[1.25]
            max-[768px]:text-[22px]
            max-[640px]:text-[18px]">
          Підпишись на розсилку новин та отримай код на безкоштовну доставку для свого першого замовлення!
        </h2>

        <p className="mt-4 max-w-[640px] text-center text-[16px] leading-[1.4] text-[#231F20B3]
            max-[640px]:text-[14px]">
          10% знижка на перше замовлення, ексклюзивні пропозиції та ранній доступ до розпродажів.
        </p>

        <div className="mt-7 flex w-full max-w-[820px] items-center gap-4
            max-[640px]:flex-col">

          <input
            type="text"
            placeholder="Ім'я"
            className="h-[52px] w-full min-w-0 max-w-[220px] flex-1 rounded-[10px] bg-[#D9D9D9] px-5 text-[16px] text-[#231F20] outline-none transition-colors placeholder:text-[#231F2080] focus:bg-[#cfcfcf]
            max-[640px]:max-w-none"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="h-[52px] w-full min-w-0 flex-[2] rounded-[10px] bg-[#D9D9D9] px-5 text-[16px] text-[#231F20] outline-none transition-colors placeholder:text-[#231F2080] focus:bg-[#cfcfcf]
            max-[640px]:max-w-none"
          />

          <button
            type="button"
            className="h-[52px] w-full min-w-0 max-w-[200px] flex-1 rounded-[10px] bg-[#00AAAD] text-[16px] font-bold text-white transition-colors hover:bg-[#009396]
            max-[640px]:max-w-none"
          >
            Підписатися
          </button>
        </div>
      </div>
    </section>
  );
}
