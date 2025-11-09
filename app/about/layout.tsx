import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - 布草芯科技",
  description: "了解布草芯科技的发展历程、团队实力、企业文化和服务理念。我们专注于为企业提供专业的软件开发、小程序定制和ERP系统解决方案。",
  keywords: "关于我们,公司介绍,团队介绍,企业文化,发展历程",
  openGraph: {
    title: "关于我们 - 布草芯科技",
    description: "了解布草芯科技的发展历程、团队实力和企业文化",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

