import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新闻动态 - 布草芯科技",
  description: "布草芯科技最新动态、行业资讯、技术分享和案例分享。了解软件开发、小程序、ERP系统等行业最新趋势和技术发展。",
  keywords: "新闻动态,行业资讯,技术分享,案例分享,公司动态",
  openGraph: {
    title: "新闻动态 - 布草芯科技",
    description: "了解布草芯科技最新动态和行业资讯",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

