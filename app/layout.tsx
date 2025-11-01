import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local font: Source Code Pro Regular (applied globally via Tailwind token mapping)
const sourceCodePro = localFont({
  src: [
    {
      path: "../public/fonts/source-code-pro/SourceCodePro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/source-code-pro/SourceCodePro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-source-code-pro",
  display: "swap",
});

// Local font: Source Code Pro Regular (applied globally via Tailwind token mapping)
const jetBrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/jet-brains-mono/JetBrainsMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jet-brains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Helps Next generate absolute URLs for OG/Twitter images
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "L1NE Company - Containerless Orchestration System",
  description: "Bringing NixOS to the Cloud. Containerless orchestration with immutable infrastructure, reproducible builds, and cryptographic verification.",
  openGraph: {
    title: "L1NE Company - Containerless Orchestration System",
    description: "Bringing NixOS to the Cloud. Containerless orchestration with immutable infrastructure, reproducible builds, and cryptographic verification.",
    type: "website",
    url: "/",
    siteName: "L1NE Company",
    images: [
      {
        url: "/images/L1NE_OG.png",
        width: 2048,
        height: 1280,
        alt: "L1NE Company - Containerless Orchestration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L1NE Company - Containerless Orchestration System",
    description: "Bringing NixOS to the Cloud. Containerless orchestration with immutable infrastructure, reproducible builds, and cryptographic verification.",
    images: ["/images/L1NE_OG.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} ${jetBrainsMono.variable} antialiased font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
