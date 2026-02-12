import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentinel Algo - AI-Powered Backtest Validation",
  description: "Powered by Claude Sonnet 4.5. We caught $300K in fake profits from backtest bias. Find the bugs before you go live.",
  keywords: "AI trading validation, backtest validation, trading bias detection, algo trading audit, Claude AI, backtest overfitting",
  icons: {
    icon: '/sentinel-logo.jpg',
  },
  openGraph: {
    title: "Sentinel Algo - AI-Powered Backtest Validation",
    description: "Powered by Claude Sonnet 4.5. Automated bias detection for algorithmic traders.",
    type: "website",
    images: ['/sentinel-hero-logo.jpg'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Algo - AI-Powered Backtest Validation",
    description: "Powered by Claude Sonnet 4.5. Find the bugs your backtests can't see.",
    images: ['/sentinel-hero-logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
