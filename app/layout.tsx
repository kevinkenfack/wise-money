import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wise money | By Kevin Kenfack",
  description: "Gérez vos finances personnelles facilement avec Wise Money.",
  openGraph: {
    title: "Wise money | By Kevin Kenfack",
    description: "Gérez vos finances personnelles facilement avec Wise Money.",
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
        </body>
      </html>
    </ClerkProvider>
  );
}
