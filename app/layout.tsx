import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wise money",
  description: "Gérez vos finances personnelles facilement avec Wise Money.",
};
export const openGraph: OpenGraph = {
  title: "Wise Money",
  description: "Gérez vos finances personnelles facilement avec Wise Money.",
  url: "https://wise-money.vercel.app",
  siteName: "Wise Money",
  images: ["https://wise-money.vercel.app/og-image.jpg"],
}

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
        <body className={inter.className}>
          <Toaster richColors position="bottom-right" />
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
