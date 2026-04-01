import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata = {
  title: "Miriam Muñoz Fernández — Portfolio",
  description: "Graduada en Publicidad y Relaciones Públicas por la Universidad de Sevilla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans bg-[#f5f4f0] text-[#1a1a1a] min-h-full`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
