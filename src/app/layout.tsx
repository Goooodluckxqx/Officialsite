import type { Metadata } from "next";
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
      <body className="font-sans antialiased bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}
