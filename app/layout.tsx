import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "USDT OTC India | Buy & Sell USDT via OTC Desk – Unitic",
  description:
    "Trade USDT OTC in India with Unitic. Competitive INR rates, verified counterparties, fast settlements and dedicated OTC desk support for bulk trades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>{children}</body>
    </html>
  );
}