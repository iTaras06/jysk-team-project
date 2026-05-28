import type { Metadata } from "next";
import { Raleway } from "next/font/google";


import "./globals.css";


import Header from "@/components/layout/Header";
import Prefooter from "@/components/layout/Prefooter";


const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create HYGGY App",
  description: "HYGGY furniture store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${raleway.className} min-h-full flex flex-col`}>
        <Header />
        
        {children}
        <Prefooter />
      </body>
    </html>
  );
}
