import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import { NextSeo } from 'next-seo';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wise money | By Kevin Kenfack",
  description: "Optimisez la gestion de vos finances personnelles avec Wise Money. Sachez précisément comment votre argent est utilisé.",
  openGraph: {
    title: "Wise money | By Kevin Kenfack",
    description: "Optimisez la gestion de vos finances personnelles avec Wise Money. Sachez précisément comment votre argent est utilisé.",
    url: "https://wise-money.vercel.app",
    siteName: "Wise money",
    images: "https://wise-money.vercel.app/og-image.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="fr"
        className="dark"
        style={{
          colorScheme: "dark",
        }}
      >
        <head><meta name="theme-color" content="#f97316" /></head>
        <body className={inter.className}>
          <Toaster richColors position="bottom-right" />
          <RootProviders>{children}</RootProviders>
          <Analytics />
          <SpeedInsights/>
        </body>
      </html>
    </ClerkProvider>
  );
}
