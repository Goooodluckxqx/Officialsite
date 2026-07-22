import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NazzleNest | Smart Home Comfort Solutions",
  description: "Create a better living space with smart, elegant home comfort products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-190JW2GC2J"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-190JW2GC2J');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-chocolate">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
