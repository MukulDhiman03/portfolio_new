import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/ulib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";

// google font
const Bricolage_Grotesque_font = Bricolage_Grotesque({ subsets: ["latin"] });
const ostwald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })


// meta data
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
      <body className={cn(Bricolage_Grotesque_font.className, ostwald.variable)}>
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
