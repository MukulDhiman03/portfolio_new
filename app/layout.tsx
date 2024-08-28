import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/ulib/utils";

// google font
const Bricolage_Grotesque_font = Inter({ subsets: ["latin"] });
const ostwald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  title: "Mukul Dhiman",
  description: "Mukul Dhiman Official Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(Bricolage_Grotesque_font.className, ostwald.variable)}>{children}</body>
    </html>
  );
}
