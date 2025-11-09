import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// 懒加载非首屏组件
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => (
    <div className="py-16 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  ),
});

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => (
    <div className="py-16 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  ),
});

const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false, // 返回顶部按钮不需要服务端渲染
});

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 dark:bg-[#0f1419]">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
      <BackToTop />
    </main>
  );
}