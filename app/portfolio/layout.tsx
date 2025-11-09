import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "成功案例 - 布草芯科技",
  description: "查看布草芯科技的成功案例，包括小程序开发、ERP系统、定制软件开发等项目案例。了解我们如何帮助企业实现数字化转型。",
  keywords: "成功案例,项目案例,小程序案例,ERP案例,软件开发案例",
  openGraph: {
    title: "成功案例 - 布草芯科技",
    description: "查看我们的成功案例，了解我们如何帮助企业实现数字化转型",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

