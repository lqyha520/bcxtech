"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Code2, Smartphone, Settings, ArrowRight, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "企业软件开发",
    description: "从需求分析到部署上线，我们提供完整的软件开发服务",
    features: ["Web应用", "移动应用", "API开发", "系统集成"],
    color: "from-blue-500 to-cyan-500",
    href: "/services",
  },
  {
    icon: Smartphone,
    title: "小程序定制",
    description: "微信/支付宝/抖音多平台小程序一站式开发服务",
    features: ["电商小程序", "预约系统", "会员系统", "营销工具"],
    color: "from-green-500 to-emerald-500",
    href: "/services",
  },
  {
    icon: Settings,
    title: "ERP系统",
    description: "定制化企业管理系统，提升运营效率，数据驱动决策",
    features: ["进销存管理", "生产管理", "财务管理", "数据分析"],
    color: "from-purple-500 to-pink-500",
    href: "/services",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-6 bg-white/70 dark:bg-gradient-to-br dark:from-[#1a2332]/90 dark:to-[#0f1419]/90 rounded-xl border border-amber-200/50 dark:border-cyan-500/20 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-2xl dark:hover:shadow-cyan-500/20 transition-all backdrop-blur-sm group relative overflow-hidden ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
      }}
    >
      {/* 背景光效 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
      
      {/* 闪烁装饰 */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${service.color} animate-pulse`} />
      </div>

      {/* 图标 - 旋转动画 */}
      <div 
        className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg dark:shadow-cyan-500/20 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
      >
        <Icon className={`w-6 h-6 ${isHovered ? "animate-icon-bounce" : ""}`} />
      </div>

      {/* 标题 */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-cyan-100 mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400 relative z-10">
        {service.title}
      </h3>

      {/* 描述 */}
      <p className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-4 relative z-10">
        {service.description}
      </p>

      {/* 功能列表 - 逐个显示动画 */}
      <ul className="space-y-2 mb-4 relative z-10">
        {service.features.map((feature, idx) => (
          <li 
            key={idx} 
            className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
            style={{
              animation: isVisible ? `fadeInLeft 0.5s ease-out ${index * 150 + idx * 100}ms both` : "none",
            }}
          >
            <div className={`w-1.5 h-1.5 mr-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0 group-hover:scale-150 transition-transform`}></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 按钮 - 增强悬停效果 */}
      <Link
        href={service.href}
        className="relative z-10 inline-flex items-center gap-1 text-blue-600 dark:text-cyan-400 font-medium text-sm hover:gap-2 transition-all group-hover:font-bold"
      >
        <span>了解更多</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-16 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区 - 增强动画 */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 animate-slide-up">
            核心服务
          </h2>
          <p className="text-base font-medium text-gray-700 dark:text-gray-200 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            为企业提供全方位的数字化解决方案
          </p>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
