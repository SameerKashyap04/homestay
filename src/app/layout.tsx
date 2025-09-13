import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haven Homestay - Luxury Boutique Accommodation",
  description: "Discover tranquility and luxury at Haven Homestay. A curated, high-end boutique homestay offering unforgettable experiences in serene mountain settings.",
  keywords: ["luxury homestay", "boutique accommodation", "mountain retreat", "wellness", "premium stays"],
  authors: [{ name: "Haven Homestay" }],
  creator: "Haven Homestay",
  publisher: "Haven Homestay",
  metadataBase: new URL("https://haven-homestay.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haven-homestay.vercel.app",
    title: "Haven Homestay - Luxury Boutique Accommodation",
    description: "Discover tranquility and luxury at Haven Homestay. A curated, high-end boutique homestay offering unforgettable experiences.",
    siteName: "Haven Homestay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven Homestay - Luxury Boutique Accommodation",
    description: "Discover tranquility and luxury at Haven Homestay. A curated, high-end boutique homestay offering unforgettable experiences.",
    creator: "@havenhomestay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
