import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SentinelBacktest - Find Hidden Biases in Your Trading Strategy",
  description: "We caught $300K in fake profits from backtest bias. Automated audit finds where your strategy will fail before you go live.",
  keywords: "backtest validation, trading bias detection, algo trading audit, backtest overfitting, same-bar entry bias",
  openGraph: {
    title: "SentinelBacktest - We Caught $300K in Fake Profits",
    description: "Automated bias detection for algorithmic traders. Find the bugs your backtests can't see.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SentinelBacktest - We Caught $300K in Fake Profits",
    description: "Automated bias detection for algorithmic traders. Find the bugs your backtests can't see.",
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
