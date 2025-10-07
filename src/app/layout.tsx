import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import Preloader from "../components/Preloader";
import Clouds from "../components/Clouds";
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Blueberry IT Sky",
  title: {
    default: "Blueberry IT Sky – Smart Digital Solutions",
    template: "%s | Blueberry IT Sky",
  },
  description:
    "Web, app, and software development blending technology and creativity to drive growth.",
  keywords: [
    "IT consulting",
    "cloud",
    "DevOps",
    "cybersecurity",
    "hardware supply",
    "software development",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Blueberry IT Sky",
    title: "Blueberry IT Sky – Smart Digital Solutions",
    description:
      "Web, app, and software development blending technology and creativity to drive growth.",
    images: [{ url: "/globe.svg", width: 1200, height: 630, alt: "Blue Berry Sky" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueberry IT Sky – Smart Digital Solutions",
    description:
      "Web, app, and software development blending technology and creativity to drive growth.",
    images: ["/globe.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-white text-slate-900 border border-slate-200 rounded px-3 py-2 shadow">Skip to content</a>
        <Preloader />
        <Clouds />
        <Navbar />
        <main id="main" className="relative z-10 min-h-[70vh] pt-24">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
