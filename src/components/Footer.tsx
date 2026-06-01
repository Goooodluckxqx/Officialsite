"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  products: [
    { label: "侧睡抱枕 105cm", href: "#products" },
    { label: "侧睡抱枕 120cm", href: "#products" },
    { label: "侧睡抱枕 140cm", href: "#products" },
    { label: "核心技术", href: "#technology" },
  ],
  company: [
    { label: "关于我们", href: "/about" },
    { label: "品牌理念", href: "/about#brand" },
    { label: "联系我们", href: "#" },
  ],
  support: [
    { label: "常见问题", href: "#faq" },
    { label: "安全认证", href: "#safety" },
    { label: "清洗保养", href: "#safety" },
    { label: "退换政策", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-3">
                关注我们
              </h3>
              <p className="text-gray-400">
                订阅获取最新产品资讯、使用技巧和专属优惠
              </p>
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="请输入邮箱地址"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="px-6 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                订阅
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-sm font-bold">N</span>
              </div>
              <span className="text-xl font-serif font-semibold">
                NazzleNest<span className="text-blue-500">纳乐适</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              秉持「舒适而居，自在而息」的理念，打破休憩场景与睡姿束缚，
              提供随形而安、温柔承托的睡眠与居家体验。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">产品</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">支持</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 NazzleNest纳乐适. 保留所有权利. | www.nazzlenest.com
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>GB18401-2010 A类</span>
              <span>·</span>
              <span>FDA 21CFR177.1640</span>
              <span>·</span>
              <span>PCM恒温控温技术</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
