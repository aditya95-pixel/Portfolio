import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-beta-snowy-3wzw0loxty.vercel.app'),
  title: "Aditya Mazumdar's Portfolio",
  description: "A website showcasing my coding exploits over college life",
  openGraph: {
    images: [
      {
        url: '/assets/portfolio.png', // Looks in the public folder
        width: 1200,
        height: 630,
        alt: "Aditya Mazumdar's Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
    </html>
  );
}
