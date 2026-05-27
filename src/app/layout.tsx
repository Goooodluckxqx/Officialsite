import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NazzleNest纳乐适 - 舒适睡眠解决方案",
  description: "NazzleNest纳乐适致力于通过创新科技，为每个人提供最舒适的睡眠解决方案。智能温控、人体工学设计、环保材料。",
  keywords: ["NazzleNest", "纳乐适", "睡眠", "床垫", "舒适", "智能温控"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
