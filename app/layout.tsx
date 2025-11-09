import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bucaoxin.com"),
  title: {
    default: "布草芯科技 - 专业的企业软件开发服务商",
    template: "%s | 布草芯科技",
  },
  description: "布草芯科技专注于软件开发、小程序定制、ERP系统解决方案，为企业提供全方位的数字化服务。",
  keywords: ["软件开发", "小程序定制", "ERP系统", "企业软件", "数字化转型", "小程序开发", "定制开发"],
  authors: [{ name: "布草芯科技" }],
  creator: "布草芯科技",
  publisher: "布草芯科技",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "布草芯科技",
    title: "布草芯科技 - 专业的企业软件开发服务商",
    description: "专注于软件开发、小程序定制、ERP系统解决方案",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "布草芯科技 - 专业的企业软件开发服务商",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "布草芯科技 - 专业的企业软件开发服务商",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "布草芯科技 - 专业的企业软件开发服务商",
    description: "专注于软件开发、小程序定制、ERP系统解决方案",
    images: ["/og-image.jpg", "/og-image.svg"],
    creator: "@bucaoxin", // 如果有 Twitter 账号，可以添加
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    // 如果需要，可以添加搜索引擎验证
    // google: "your-google-verification-code",
    // baidu: "your-baidu-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

// 结构化数据
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "布草芯科技",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bucaoxin.com",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://bucaoxin.com"}/logo.svg`,
  description: "专业的企业软件开发服务商",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "400-888-8888",
    contactType: "customer service",
    email: "contact@bcx.com",
    areaServed: "CN",
    availableLanguage: "Chinese",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "深圳",
    addressRegion: "广东",
    addressCountry: "CN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "布草芯科技",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bucaoxin.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}

