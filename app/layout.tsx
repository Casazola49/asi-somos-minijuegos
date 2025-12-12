import type { Metadata } from "next";
import { Bangers, Outfit } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Así Somos - Minigames",
  description: "Podcast desde Cochabamba Bolivia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bangers.variable} ${outfit.variable} antialiased font-sans bg-comic-yellow overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
