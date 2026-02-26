import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TextIn xParse - 智能文档抽取",
  description: "超越 OCR 和单独大模型：基于智能文档解析的文档抽取",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
