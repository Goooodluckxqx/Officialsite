import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NazzleNest | 智能家居舒适解决方案",
  description: "用智能、优雅的家居舒适产品，打造更美好的居住空间。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
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
      <body className="font-sans antialiased bg-white text-navy-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
