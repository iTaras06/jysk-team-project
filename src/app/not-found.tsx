import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
return (
    <section className="bg-[#F3F3F3] pb-[100px] max-[768px]:pb-[50px] max-[640px]:pb-[30px]">
        <div className="mx-auto max-w-[1900px] px-20 pt-8 
        max-[768px]:px-8 
        max-[640px]:px-5">

            <Link href="/" className="text-[26px] text-[#8E8E8E]
                hover:text-[#61B8BE]
                duration-300
                max-[768px]:text-[20px]
                max-[640px]:text-[18px]">
                На головну
            </Link>

            <div className="mt-8 flex flex-col items-center">

                <Image src="/images/404.png" alt="404"  width={1200} height={700} className="w-[1200px] h-auto max-[768px]:w-full" priority/>

                <h1 className="mt-16 text-center text-[34px] font-light text-[#231F20]
                    max-[768px]:mt-12
                    max-[768px]:text-[26px]
                    max-[640px]:mt-8
                    max-[640px]:text-[22px]">
                    Сторінка не знайдена
                </h1>
            </div>
        </div>
    </section>
);
}