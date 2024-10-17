import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import Header from "@/components/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GameShop",
  description: "This is an game store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Header /> 
        <main className="bg-primary-gradinet min-h-screen">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
