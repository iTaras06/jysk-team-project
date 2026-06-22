import type { Metadata } from "next";
import { Raleway } from "next/font/google";


import "./globals.css";


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HYGGY — меблі, текстиль і декор для дому",
    template: "%s | HYGGY",
  },
  description:
    "HYGGY — інтернет-магазин меблів, текстилю та декору в скандинавському стилі.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${raleway.className} flex min-h-dvh flex-col`}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
