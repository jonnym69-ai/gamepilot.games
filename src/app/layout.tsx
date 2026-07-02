import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "GamePilot - Local-First Gaming Decision Layer",
  description: "Finally know what to play next. Build your gaming identity, discover taste clusters, and get Perfect Play recommendations — all local, no accounts, no telemetry, no cloud.",
  openGraph: {
    title: "GamePilot - Local-First Gaming Decision Layer",
    description: "Finally know what to play next. Build your gaming identity, discover taste clusters, and get Perfect Play recommendations — all local, no accounts, no telemetry, no cloud.",
    type: "website",
    url: "https://gamepilot.games",
    siteName: "GamePilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "GamePilot - Local-First Gaming Decision Layer",
    description: "Finally know what to play next. Build your gaming identity, discover taste clusters, and get Perfect Play recommendations — all local, no accounts, no telemetry, no cloud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
