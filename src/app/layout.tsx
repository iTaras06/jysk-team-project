import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";

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
      </body>
    </html>
  );
}
