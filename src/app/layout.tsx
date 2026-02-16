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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Removed Tailwind CDN - already installed locally via npm */}
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
