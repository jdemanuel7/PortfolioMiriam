import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata = {
  title: "Miriam Muñoz Fernández — Portfolio",
  description: "Creativa publicitaria graduada en la Universidad de Sevilla. Estrategia, dirección de arte y fotografía.",
  metadataBase: new URL("https://miriammunoz.vercel.app"),
  openGraph: {
    title: "Miriam Muñoz Fernández — Portfolio",
    description: "Creativa publicitaria graduada en la Universidad de Sevilla. Estrategia, dirección de arte y fotografía.",
    type: "website",
    images: [{ url: "/miriam.jpg", width: 1200, height: 630, alt: "Miriam Muñoz Fernández" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miriam Muñoz Fernández — Portfolio",
    description: "Creativa publicitaria graduada en la Universidad de Sevilla.",
    images: ["/miriam.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans bg-[#f5f4f0] text-[#1a1a1a] min-h-full`}>
        <Navbar />
        <main><PageTransition>{children}</PageTransition></main>
      </body>
    </html>
  );
}
