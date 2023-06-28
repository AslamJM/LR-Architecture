import "./globals.css";
import { Montserrat, Titillium_Web } from "next/font/google";
import Providers from "@/components/Providers";
import LayoutProvider from "@/components/LayoutProvider";

const opensans = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-tit",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "LR Chartered Architects",
  description:
    " Discover the transformative power of LR Chartered Architects - a leading architectural firm specializing in innovative and sustainable design solutions for residential and commercial projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${titillium.className} `}>
      <body>
        <Providers>
          <LayoutProvider>{children}</LayoutProvider>
        </Providers>
      </body>
    </html>
  );
}
