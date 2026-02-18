import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sentinel-algo.com"),
  title: {
    default: "Sentinel Algo — Regime-Aware Algorithmic Trading Research",
    template: "%s — Sentinel Algo",
  },
  description:
    "Independent quant research lab. Sharpe 4.29 Pyramidal Coherence Strategy. 5.5-year walk-forward validation. 23,520+ strategies tested. We publish the failures too.",
  keywords: [
    "algorithmic trading",
    "quant trading",
    "regime-aware strategy",
    "backtest validation",
    "NinjaTrader",
    "MES futures",
    "trading research",
    "Sharpe ratio",
    "walk-forward testing",
    "Sentinel Algo",
  ],
  authors: [{ name: "Sentinel Algo", url: "https://sentinel-algo.com" }],
  creator: "Sentinel Algo",
  icons: {
    icon: "/sentinel-logo.jpg",
  },
  openGraph: {
    title: "Sentinel Algo — Regime-Aware Algorithmic Trading Research",
    description:
      "Sharpe 4.29. 5.5-year walk-forward. 23,520+ strategies tested. Independent quant research — including every failure.",
    type: "website",
    url: "https://sentinel-algo.com",
    siteName: "Sentinel Algo",
    images: [
      {
        url: "/sentinel-hero-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sentinel Algo — Algorithmic Trading Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Sentinel_Algo",
    creator: "@Sentinel_Algo",
    title: "Sentinel Algo — Regime-Aware Algorithmic Trading Research",
    description:
      "Sharpe 4.29. 5.5-year walk-forward. 23,520+ strategies tested. We publish the failures.",
    images: ["/sentinel-hero-logo.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sentinel Algo",
  url: "https://sentinel-algo.com",
  logo: "https://sentinel-algo.com/sentinel-logo.jpg",
  description:
    "Independent quantitative trading research lab. Regime-aware strategy development, backtest validation, and algorithmic trading tools.",
  sameAs: ["https://twitter.com/Sentinel_Algo"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "sentinelalgotrading@gmail.com",
    contactType: "customer support",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
