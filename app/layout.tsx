import type { Metadata } from "next";
import "./globals.css";

const title = "策衡 EquiStrat | 医疗AI产业合规增长引擎";
const description =
  "策衡 EquiStrat 专注医疗AI产业达人矩阵、品牌全域宣发、产业咨询与企业AI定制服务。";
const siteUrl = "https://mistergz233.github.io/equistrat-website";
const imageUrl = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    images: [{ url: imageUrl, width: 1200, height: 630, alt: "策衡 EquiStrat 医疗AI产业合规增长引擎" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
