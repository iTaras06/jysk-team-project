import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[rgba(0,170,173,1)] text-white">
            <div className="mx-auto max-w-[1280px] px-[64px] pt-[32px] pb-[40px]
                            max-[768px]:px-[30px] max-[768px]:pt-[36px] max-[768px]:pb-[48px]
                            max-[640px]:px-[60px] max-[640px]:pt-[24px] max-[640px]:pb-[32px]">

                <div className="flex justify-between items-start
                max-[640px]:grid
                max-[640px]:grid-cols-2
                max-[640px]:gap-y-[28px]
                max-[640px]:gap-x-[40px]">

                    <div className="flex flex-col">
                        <h3 className="font-bold text-[19px] mb-[20px]
                        max-[768px]:text-[20px]
                        max-[768px]:mb-[20px]
                        max-[640px]:text-[14px]
                        max-[640px]:mb-[12px]">Категорії товарів
                        </h3>

                        <div className="flex flex-col gap-[13px]
                        max-[768px]:gap-[14px]
                        max-[640px]:gap-[10px]">
                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Спальня</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Ванна</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Офіс</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Вітальня</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Кухня та їдальня</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Зберігання</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Для вікон</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Для саду</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Для дому</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Усі категорії</Link>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="font-bold text-[19px] mb-[20px]
                        max-[768px]:text-[20px]
                        max-[768px]:mb-[50px]
                        max-[640px]:text-[14px]
                        max-[640px]:mb-[12px]">Інформація</h3>

                        <div className="flex flex-col gap-[13px]
                        max-[768px]:gap-[14px]
                        max-[640px]:gap-[10px]">

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Зворотній зв’язок</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Магазини і графіки роботи</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Умови та положення</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Доставка</Link>

                        <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Політика конфіденційності</Link>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="font-bold text-[19px] mb-[20px]
                        max-[768px]:text-[20px]
                        max-[768px]:mb-[50px]
                        max-[640px]:text-[14px]
                        max-[640px]:mb-[12px]">Hyggy</h3>

                        <div className="flex flex-col gap-[13px]
                        max-[768px]:gap-[14px]
                        max-[640px]:gap-[10px]">
                            <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Про нас</Link>

                            <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Робота в Hyggy</Link>

                            <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Підписатись на розсилку</Link>

                            <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Блог</Link>

                            <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">B2B</Link>

                            <Link href="/" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Корисні посилання</Link>
                        </div>
                    </div>

                    <div className="max-w-[280px]">

                        <h3 className="font-bold text-[19px] mb-[20px]
                            max-[768px]:text-[20px]
                            max-[768px]:mb-[20px]
                            max-[640px]:text-[14px]
                            max-[640px]:mb-[12px]">Центральний офіс</h3>

                        <div className="text-[17px] leading-[1.3]
                            max-[768px]:text-[16px]
                            max-[640px]:text-[12px]">
                            <p>м. Київ</p>
                            <p>вул. Іоанна Павла, 21</p>
                            <p>123456</p>
                        </div>

                        <div className="mt-[30px]
                            max-[768px]:mt-[28px]
                            max-[640px]:mt-[18px]">
                            
                            <h4 className="font-bold text-[16px]
                            max-[768px]:text-[16px]
                            max-[640px]:text-[12px]">HYGGY B2B</h4>

                            <div className="mt-[12px] flex flex-col gap-[10px]
                            max-[640px]:gap-[6px]">
                                <Link href="tel:+380123456789" className="underline underline-offset-8 text-[17px] max-[768px]:text-[16px] max-[768px]:underline-offset-6 max-[640px]:text-[12px] max-[640px]:underline-offset-4">Тел: +380123456789</Link>

                                <Link href="mailto:b2b@hyggy.com" className="text-[17px] max-[768px]:text-[16px] max-[640px]:text-[12px]">Імейл: b2b@hyggy.com</Link>

                                <Link href="/" className="underline underline-offset-5 font-bold text-[17px] max-[768px]:text-[16px] max-[768px]:underline-offset-4 max-[640px]:text-[12px] max-[640px]:underline-offset-2">Зв&apos;яжіться з нами</Link>
                            </div>
                        </div>

                        <div className="mt-[30px]
                            max-[768px]:mt-[28px]
                            max-[640px]:mt-[18px]">
                            
                            <h4 className="font-bold text-[16px]
                            max-[768px]:text-[16px]
                            max-[640px]:text-[12px]">Зворотній зв’язок:</h4>

                            <div className="mt-[12px] flex flex-col gap-[10px]
                            max-[640px]:gap-[6px]">
                                <Link href="mailto:email@hyggy.com" className="underline underline-offset-8 text-[17px] max-[768px]:text-[16px] max-[768px]:underline-offset-6 max-[640px]:text-[12px] max-[640px]:underline-offset-4">email@hyggy.com</Link>

                                <Link href="tel:+380123456789" className="underline underline-offset-8 text-[17px] max-[768px]:text-[16px] max-[768px]:underline-offset-6 max-[640px]:text-[12px] max-[640px]:underline-offset-4">Тел: +380123456789</Link>

                                <Link href="/" className="underline underline-offset-5 font-bold text-[17px] max-[768px]:text-[16px] max-[768px]:underline-offset-4 max-[640px]:text-[12px] max-[640px]:underline-offset-2">Зв&apos;яжіться з нами</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[80px] flex justify-between items-end
                    max-[768px]:mt-[130px]
                    max-[640px]:mt-[54px]
                    max-[640px]:flex-col
                    max-[640px]:items-center
                    max-[640px]:gap-[24px]">

                    <div className="order-2 flex items-center gap-[34px]
                        max-[768px]:gap-[28px]
                        max-[640px]:order-1
                        max-[640px]:justify-center
                        max-[640px]:w-full
                        max-[640px]:gap-[51px]">

                        <Link href="/"><Image src="/icons/telega.png" alt="" width={36} height={36} className=" w-[36px] h-[36px]
                            max-[768px]:w-[40px]
                            max-[768px]:h-[40px]
                            max-[640px]:w-[30px]
                            max-[640px]:h-[30px]"/></Link>

                        <Link href="/"> <Image src="/icons/insta.png" alt="" width={32} height={33} className=" w-[32px] h-[33px]
                            max-[768px]:w-[35px]
                            max-[768px]:h-[36px]
                            max-[640px]:w-[26px]
                            max-[640px]:h-[27px]"/></Link>

                        <Link href="/"><Image src="/icons/fbook.png" alt="" width={32} height={33} className=" w-[32px] h-[33px]
                            max-[768px]:w-[35px]
                            max-[768px]:h-[36px]
                            max-[640px]:w-[26px]
                            max-[640px]:h-[27px]"/>
                        </Link>

                        <Link href="/"><Image src="/icons/ytube.png" alt="" width={37} height={29} className=" w-[37px] h-[29px]
                            max-[768px]:w-[40px]
                            max-[768px]:h-[33px]
                            max-[640px]:w-[30px]
                            max-[640px]:h-[25px]"/></Link>
                    </div>

                    <div className="order-1 flex items-center gap-[22px]
                        max-[768px]:gap-[22px]
                        max-[640px]:order-2
                        max-[640px]:justify-center
                        max-[640px]:w-full
                        max-[640px]:gap-[50px]">

                        <Image src="/icons/visa.png" alt="" width={80} height={47} className=" w-[80px] h-[47px] rounded-[6px]
                            max-[768px]:w-[80px]
                            max-[768px]:h-[47px]
                            max-[640px]:w-[62px]
                            max-[640px]:h-[36px]"/>

                        <Image src="/icons/mcard.png" alt="Mastercard" width={68} height={47} className=" w-[68px] h-[47px] rounded-[6px]
                            max-[768px]:w-[68px]
                            max-[768px]:h-[47px]
                            max-[640px]:w-[53px]
                            max-[640px]:h-[36px]"/>

                        <Image src="/icons/gpay.png" alt="Google Pay" width={75} height={47} className=" w-[75px] h-[47px] rounded-[6px]
                            max-[768px]:w-[75px]
                            max-[768px]:h-[47px]
                            max-[640px]:w-[59px]
                            max-[640px]:h-[36px]"/>
                    </div>
                </div>

                <div className="mt-[40px] border-t border-white/30 pt-[20px] text-[14px] text-white/80
                    max-[640px]:text-center max-[640px]:text-[12px]">
                    © 2026 HYGGY. Навчальний проєкт. Зображення товарів надано{" "}
                    <a
                        href="https://unsplash.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Unsplash
                    </a>
                    .
                </div>
            </div>
        </footer>
    );
}