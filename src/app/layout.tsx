import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Prefooter from "@/components/layout/Prefooter";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "JYSK — меблі, текстиль та декор для дому",
    template: "%s | JYSK",
  },
  description:
    "Скандинавський стиль для кожної кімнати: меблі, матраци, текстиль і декор за доступними цінами.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Prefooter />
        <Footer />
      </body>
    </html>
  );
}
