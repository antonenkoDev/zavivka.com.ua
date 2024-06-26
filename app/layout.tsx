import type { Metadata } from "next";
import { Inter, Ubuntu, Mali } from "next/font/google";
import "./globals.css";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["cyrillic"],
  variable: '--font-inter',
  display: 'swap',
});

const ubuntu = Ubuntu({ 
  subsets: ["cyrillic"],
  variable: '--font-ubuntu',
  weight: ['400', '700'],
  display: 'swap',
});

const mali = Mali({ 
  subsets: ["latin"],
  variable: '--font-mali',
  weight: ['700'],
  display: 'swap',
});
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
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.variable} ${ubuntu.variable} ${mali.variable}`}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <main className="relative overflow-x-hidden">{children}</main>
              <Footer/>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
