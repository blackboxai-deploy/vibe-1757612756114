import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SocialPro Consulting - Professional Social Media Marketing Services",
  description: "Transform your brand's digital presence with our expert social media consulting services. Packages starting at $299/month with WhatsApp consultation.",
  keywords: "social media consulting, digital marketing, social media management, content creation, brand strategy",
  authors: [{ name: "SocialPro Consulting" }],
  openGraph: {
    title: "SocialPro Consulting - Professional Social Media Marketing",
    description: "Expert social media consulting services to boost your brand's online presence",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialPro Consulting - Social Media Marketing Services",
    description: "Professional social media consulting with proven results",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}