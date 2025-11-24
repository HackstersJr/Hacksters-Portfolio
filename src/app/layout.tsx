import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import Script from "next/script";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "Hacksters Portfolio - Innovators of Tomorrow",
  description: "Futuristic Builders | Innovators of Tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="beforeInteractive" />
        <link href="https://unpkg.com/splitting@1.0.6/dist/splitting.css" rel="stylesheet" />
        <Script src="https://unpkg.com/splitting@1.0.6/dist/splitting.min.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} ${righteous.variable} antialiased`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
