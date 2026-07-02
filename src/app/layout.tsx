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
  title: "GamePilot - Local-First Gaming Library & Launcher",
  description: "Finally know what to play next. Track your gaming stats, earn rewards, and connect with the community — all without accounts, telemetry, or cloud dependency.",
  openGraph: {
    title: "GamePilot - Local-First Gaming Library & Launcher",
    description: "Finally know what to play next. Track your gaming stats, earn rewards, and connect with the community — all without accounts, telemetry, or cloud dependency.",
    type: "website",
    url: "https://gamepilot.games",
    siteName: "GamePilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "GamePilot - Local-First Gaming Library & Launcher",
    description: "Finally know what to play next. Track your gaming stats, earn rewards, and connect with the community — all without accounts, telemetry, or cloud dependency.",
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
