import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 - 布草芯科技",
  description: "联系布草芯科技，获取专业的软件开发、小程序定制、ERP系统解决方案。我们提供7x24小时咨询服务，快速响应您的需求。",
  keywords: "联系我们,咨询,联系方式,商务合作,技术支持",
  openGraph: {
    title: "联系我们 - 布草芯科技",
    description: "联系布草芯科技，获取专业的数字化转型服务",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

