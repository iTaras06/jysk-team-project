import Image from "next/image";

export default function Prefooter() {
    return (
    <section className="w-full mx-auto h-[755px] text-[rgba(35, 31, 32, 1)]">

    <div className="h-[240px] border-b border-black/50 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)]  max-[768px]:h-[300px] max-[640px]:h-[400px]">

        <div className="mx-auto flex h-full items-center justify-between px-[10%]
            max-[768px]:px-[25px]
            max-[768px]:gap-[25px]
            max-[640px]:flex-col
            max-[640px]:justify-center
            max-[640px]:gap-[17px]
            max-[640px]:px-[40px]">

            <div className="flex w-[415px] flex-col items-center text-center">
                <Image src="/icons/chair.png" alt="chair"
                    width={80}
                    height={63}
                    className="shrink-0
                    max-[640px]:h-[41px]
                    max-[640px]:w-[52px]"/>
                
                <p className="mt-5 text-[16px] leading-[1.2]
                    max-[768px]:text-[14px]
                    max-[640px]:mt-3
                    max-[640px]:w-full
                    max-[640px]:text-[12px]">
                    Різноманітний вибір сучасних рішень для декорування
                    та облаштування як інтер'єру, так і екстер'єру.
                </p>
            </div>

            <div className="flex w-[415px] flex-col items-center text-center">
                <Image src="/icons/flag.png" alt="flag"
                    width={57}
                    height={67}
                    className="shrink-0
                    max-[640px]:h-[41px]
                    max-[640px]:w-[35px]"/>

                <p className="mt-5 text-[16px] leading-[1.2]
                    max-[768px]:text-[14px]
                    max-[640px]:mt-3
                    max-[640px]:w-full
                    max-[640px]:text-[12px]">
                    Наш стиль нагадує скандинавський, але ми виходимо за рамки одного напрямку, пропонуючи універсальні та функціональні варіанти, що задовольнять різні смаки.
                </p>
            </div>

            <div className="flex w-[415px] flex-col items-center text-center">
                <Image src="/icons/sheet.png" alt="sheet"
                    width={58}
                    height={71}
                    className="shrink-0
                    max-[640px]:h-[49px]
                    max-[640px]:w-[37px]"/>

                <p className="mt-5 text-[16px] leading-[1.2]
                    max-[768px]:text-[14px]
                    max-[640px]:mt-3
                    max-[640px]:w-full
                    max-[640px]:text-[12px]">
                    Ми орієнтовані на різні категорії покупців,
                    пропонуючи товари в діапазоні від середньо-низьких
                    до середньо-високих цін.
                </p>
            </div>
        </div>
    </div>






    <div className="relative h-[550px] bg-[rgba(224, 224, 224, 1)]
        max-[768px]:h-[390px]
        max-[640px]:h-[324px]">

        <div className="mx-auto flex h-full max-w-[1600px] flex-col items-center pt-[60px]
            max-[768px]:pt-[40px]
            max-[768px]:px-[40px]
            max-[640px]:px-[40px]
            max-[640px]:pt-[20px]">

            <h2 className="text-center text-[28px] font-bold
                max-[768px]:text-[20px]
                max-[640px]:text-[16px]">
                Підпишись на розсилку новин та отримай код на
                безкоштовну доставку для свого першого замовлення!
            </h2>

            <p className="mt-10 w-[1400px] text-center text-[24px]
                max-[768px]:mt-6
                max-[768px]:w-[700px]
                max-[768px]:text-[14px]
                max-[640px]:mt-4
                max-[640px]:w-full
                max-[640px]:text-[12px]">
                Підпишіться на нашу розсилку та отримайте бонус!
                10% знижка на перше замовлення, ексклюзивні
                пропозиції та ранній доступ до розпродажів.
                Введіть свій email нижче та почніть отримувати переваги!
            </p>

            <div className="mt-[70px] flex items-center gap-[28px]
                max-[768px]:mt-[32px]
                max-[768px]:gap-[12px]
                max-[640px]:mt-[20px]
                max-[640px]:flex-col">

                <input type="text" placeholder="Ім'я"
                    className="h-[89px] w-[390px] rounded-[10px] bg-[#D9D9D9] px-12 text-[32px] text-[#231F2080] outline-none placeholder:text-[#231F2080]

                    max-[768px]:h-[50px]
                    max-[768px]:w-[160px]
                    max-[768px]:px-4
                    max-[768px]:text-[18px]
                    max-[640px]:h-[33px]
                    max-[640px]:w-[200px]
                    max-[640px]:text-[12px]"/>

                <input type="email" placeholder="E-mail"
                    className="h-[89px] w-[810px] rounded-[10px] bg-[#D9D9D9] px-12 text-[32px] text-[#231F2080] outline-none placeholder:text-[#231F2080]

                    max-[768px]:h-[50px]
                    max-[768px]:w-[280px]
                    max-[768px]:px-4
                    max-[768px]:text-[18px]
                    max-[640px]:h-[33px]
                    max-[640px]:w-[200px]
                    max-[640px]:text-[12px]"/>

                <button className="h-[89px] w-[390px] rounded-[10px] bg-[#00AAAD] text-[32px] font-bold    text-white

                    max-[768px]:h-[50px]
                    max-[768px]:w-[200px]
                    max-[768px]:text-[18px]
                    max-[640px]:h-[33px]
                    max-[640px]:w-[200px]
                    max-[640px]:text-[12px]">
                    Поділитися
                </button>
            </div>
        </div>

        <div className="absolute bottom-[126px] left-0 h-[1px] w-full bg-black/50
            max-[768px]:bottom-[80px]
            max-[640px]:bottom-[15px]"/>
        </div>
    </section>
);}
