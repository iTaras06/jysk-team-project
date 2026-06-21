export default function Prefooter() {
    return (
    <section className="w-full mx-auto text-[rgba(35, 31, 32, 1)]">

    <div className="relative h-[440px] bg-[rgba(224, 224, 224, 1)]
        max-[768px]:h-[390px]
        max-[640px]:h-[324px]">

        <div className="mx-auto flex h-full max-w-[1408px] flex-col items-center pt-[50px]
            max-[768px]:pt-[40px]
            max-[768px]:px-[40px]
            max-[640px]:px-[40px]
            max-[640px]:pt-[20px]">

            <h2 className="text-center text-[23px] font-bold leading-[1.2]
                max-[768px]:text-[20px]
                max-[640px]:text-[16px]">
                Підпишись на розсилку новин та отримай код на
                безкоштовну доставку для свого першого замовлення!
            </h2>

            <p className="mt-7 w-[1155px] text-center text-[20px] leading-[1.2]
                max-[768px]:mt-6
                max-[768px]:w-[650px]
                max-[768px]:text-[14px]
                max-[640px]:mt-4
                max-[640px]:w-full
                max-[640px]:text-[12px]">
                Підпишіться на нашу розсилку та отримайте бонус!
                10% знижка на перше замовлення, ексклюзивні
                пропозиції та ранній доступ до розпродажів.
                Введіть свій email нижче та почніть отримувати переваги!
            </p>

            <div className="mt-[58px] flex items-center gap-[30px]
                max-[768px]:mt-[32px]
                max-[768px]:gap-[12px]
                max-[640px]:mt-[30px]
                max-[640px]:flex-col">

                <input type="text" placeholder="Ім'я"
                    className="h-[74px] w-[321px] rounded-[10px] bg-[#D9D9D9] px-10 text-[26px] text-[#231F2080] outline-none placeholder:text-[#231F2080]
                    max-[768px]:h-[50px]
                    max-[768px]:w-[160px]
                    max-[768px]:px-4
                    max-[768px]:text-[18px]
                    max-[640px]:h-[40px]
                    max-[640px]:w-[260px]
                    max-[640px]:text-[12px]"/>

                <input type="email" placeholder="E-mail"
                    className="h-[74px] w-[668px] rounded-[10px] bg-[#D9D9D9] px-10 text-[26px] text-[#231F2080] outline-none placeholder:text-[#231F2080]
                    max-[768px]:h-[50px]
                    max-[768px]:w-[280px]
                    max-[768px]:px-4
                    max-[768px]:text-[18px]
                    max-[640px]:h-[40px]
                    max-[640px]:w-[260px]
                    max-[640px]:text-[12px]"/>

                <button className="h-[74px] w-[321px] rounded-[10px] bg-[#00AAAD] text-[26px] font-bold    text-white
                    max-[768px]:h-[50px]
                    max-[768px]:w-[200px]
                    max-[768px]:text-[18px]
                    max-[640px]:h-[40px]
                    max-[640px]:w-[260px]
                    max-[640px]:text-[12px]">
                    Поділитися
                </button>
            </div>
        </div>

        <div className="absolute bottom-[105px] left-0 h-[1px] w-full bg-black/50
            max-[768px]:bottom-[80px]
            max-[640px]:bottom-[-15px]"/>
        </div>
    </section>
);}
