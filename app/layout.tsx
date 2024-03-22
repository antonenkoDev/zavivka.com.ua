import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Студія завивок",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-common-background text-white`}>
        <Header/>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
