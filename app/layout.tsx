import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apollo Lead Exporter - Automate Your Apollo.io Lead Generation",
  description:
    "Save hours with our Chrome extension that bypasses Apollo's export limits. Automate lead generation with unlimited exports, one-time payment of $49.",
  keywords:
    "Apollo.io, lead generation, chrome extension, sales automation, lead scraper, Apollo automation",
  openGraph: {
    title: "Apollo Lead Exporter - Automate Your Apollo.io Lead Generation",
    description:
      "Save hours with our Chrome extension that bypasses Apollo's export limits",
    type: "website",
    locale: "en_US",
    siteName: "Apollo Lead Scraper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo Lead Scraper - Automate Your Apollo.io Lead Generation",
    description:
      "Save hours with our Chrome extension that bypasses Apollo's export limits",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
