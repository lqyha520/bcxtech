import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "核心服务 - 布草芯科技",
  description: "专业的软件开发、小程序定制、ERP系统开发服务。为企业提供全方位的数字化转型解决方案，包括小程序开发、ERP系统、定制软件开发等。",
  keywords: "软件开发,小程序开发,ERP系统,企业软件,定制开发,数字化转型",
  openGraph: {
    title: "核心服务 - 布草芯科技",
    description: "专业的软件开发、小程序定制、ERP系统开发服务",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

