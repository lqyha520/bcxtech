"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollHint from "@/components/ScrollHint";
import { Code2, Smartphone, Settings, CheckCircle, Zap, Shield, Users, TrendingUp, Award, Clock, Star, ArrowRight, ChevronDown, Package, Rocket, Target, BarChart, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Smartphone,
    title: "小程序开发",
    subtitle: "微信/支付宝/抖音全平台",
    description: "为企业打造高性能、高转化的小程序应用，覆盖电商、社交、工具等多个场景",
    color: "from-blue-600 to-cyan-500",
    features: [
      { icon: Zap, title: "快速开发", desc: "2-4周完成开发上线" },
      { icon: Users, title: "用户体验", desc: "流畅的交互体验" },
      { icon: Shield, title: "安全可靠", desc: "企业级安全保障" },
      { icon: TrendingUp, title: "数据分析", desc: "完善的数据统计" },
    ],
    technologies: ["微信小程序", "uni-app", "Taro", "云开发", "小程序直播", "小程序支付"],
    cases: [
      { name: "电商小程序", result: "月活提升300%" },
      { name: "餐饮小程序", result: "订单量增长5倍" },
      { name: "教育小程序", result: "用户留存率85%" },
    ],
    process: ["需求分析", "原型设计", "UI设计", "功能开发", "测试优化", "上线运营"],
  },
  {
    id: 2,
    icon: Package,
    title: "ERP系统开发",
    subtitle: "企业资源管理一体化",
    description: "为企业量身定制的ERP系统，实现进销存、财务、人事、生产等全流程数字化管理",
    color: "from-purple-600 to-pink-500",
    features: [
      { icon: Target, title: "精准管理", desc: "全流程数字化管控" },
      { icon: BarChart, title: "数据可视", desc: "实时数据分析报表" },
      { icon: Rocket, title: "高效协同", desc: "多部门协同办公" },
      { icon: Award, title: "灵活定制", desc: "按需定制功能模块" },
    ],
    technologies: ["Spring Boot", "Vue3", "MySQL", "Redis", "微服务架构", "大数据分析"],
    cases: [
      { name: "制造业ERP", result: "效率提升60%" },
      { name: "贸易ERP", result: "成本降低40%" },
      { name: "零售ERP", result: "库存周转率提升2倍" },
    ],
    process: ["业务调研", "系统设计", "模块开发", "数据迁移", "培训上线", "持续优化"],
  },
  {
    id: 3,
    icon: Code2,
    title: "定制软件开发",
    subtitle: "专属的企业级解决方案",
    description: "根据企业独特需求，提供从需求分析到上线运维的全流程定制开发服务",
    color: "from-orange-600 to-red-500",
    features: [
      { icon: Settings, title: "灵活定制", desc: "完全按需开发" },
      { icon: Clock, title: "快速交付", desc: "敏捷开发模式" },
      { icon: Shield, title: "源码交付", desc: "完整源码和文档" },
      { icon: Users, title: "专属团队", desc: "资深工程师服务" },
    ],
    technologies: ["Java", "Python", "Node.js", "React", "Vue", "微服务", "云原生", "AI集成"],
    cases: [
      { name: "智能仓储系统", result: "自动化率95%" },
      { name: "客户管理系统", result: "销售转化率提升80%" },
      { name: "供应链平台", result: "响应速度提升3倍" },
    ],
    process: ["需求梳理", "方案设计", "技术选型", "迭代开发", "测试部署", "运维支持"],
  },
];

// 数字计数动画组件
function AnimatedNumber({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const numValue = parseInt(value.replace(/\D/g, ""));
          const suffix = value.replace(/\d/g, "");
          if (numValue) {
            let current = 0;
            const increment = numValue / 50;
            const timer = setTimeout(() => {
              const interval = setInterval(() => {
                current += increment;
                if (current >= numValue) {
                  setDisplayValue(value);
                  clearInterval(interval);
                } else {
                  setDisplayValue(Math.floor(current) + suffix);
                }
              }, 30);
              return () => clearInterval(interval);
            }, delay);
            return () => clearTimeout(timer);
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, suffix, delay, isVisible]);

  return (
    <div ref={ref} className="text-2xl font-black text-gray-900 dark:text-white mb-1">
      {displayValue}
    </div>
  );
}

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332]">
      <Header />
      
      {/* Hero Section - 上下结构设计 */}
      <section className="pt-16 md:pt-20 min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        {/* 装饰背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-2 md:py-1 relative z-10 w-full flex-1 flex flex-col justify-center md:justify-start">
          <div className="max-w-6xl mx-auto w-full">
            {/* 上下结构布局 */}
            <div className="flex flex-col items-center text-center space-y-2 md:space-y-2">
              {/* 顶部内容区 - 移动端优化，PC端保持原样 */}
              <div className="space-y-1.5 md:space-y-1 w-full mb-2 md:mb-2">
                {/* 主标题 - 移动端优化换行和间距，PC端保持原样 */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white leading-tight tracking-tight animate-slide-in-left">
                  {/* 移动端：紧凑布局 */}
                  <div className="md:hidden flex flex-col items-center gap-0.5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400">
                      专业数字化服务
                    </span>
                    <span className="text-gray-900 dark:text-white whitespace-nowrap">
                      助力企业数字化转型
                    </span>
                  </div>
                  {/* PC端：保持原样 */}
                  <div className="hidden md:block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400">
                      专业数字化服务
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">
                      助力企业数字化转型
                    </span>
                  </div>
                </h1>
                
                {/* 描述 - PC端保持原样 */}
                <p className="text-xs md:text-xs text-gray-600 dark:text-gray-300 leading-snug max-w-3xl mx-auto font-medium animate-slide-in-left px-2 md:px-0" style={{ animationDelay: '0.1s' }}>
                  小程序开发、企业级ERP系统定制，<span className="font-semibold text-blue-600 dark:text-cyan-400">10年+经验</span>，<span className="font-semibold text-blue-600 dark:text-cyan-400">500+案例</span>，一站式数字化解决方案
                </p>
              </div>

              {/* 服务亮点 - 核心服务展示 - 移动端优化紧凑布局 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-2 w-full max-w-5xl animate-slide-in-left mb-3 md:mb-2" style={{ animationDelay: '0.2s' }}>
                {[
                  { 
                    icon: Smartphone, 
                    title: "小程序开发", 
                    desc: "微信/支付宝/抖音全平台", 
                    highlight: "2-4周快速上线",
                    gradient: "from-blue-500 to-cyan-400"
                  },
                  { 
                    icon: Package, 
                    title: "ERP系统开发", 
                    desc: "企业资源管理一体化", 
                    highlight: "全流程数字化",
                    gradient: "from-purple-500 to-pink-400"
                  },
                  { 
                    icon: Code2, 
                    title: "定制软件开发", 
                    desc: "专属企业级解决方案", 
                    highlight: "按需灵活定制",
                    gradient: "from-orange-500 to-amber-400"
                  },
                ].map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={i}
                      className="group relative bg-white/80 dark:bg-[#1a2332]/80 backdrop-blur-sm rounded-lg p-3 md:p-2.5 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* 图标 - 移动端优化大小 */}
                      <div className={`w-10 h-10 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-2 md:mb-2 relative mx-auto`}>
                        <Icon className="w-5 h-5 md:w-5 md:h-5 text-white z-10" />
                        <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* 标题 - 移动端优化字体 */}
                      <h3 className="text-sm md:text-sm font-black text-gray-900 dark:text-white mb-1 md:mb-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors text-center">
                        {service.title}
                      </h3>
                      
                      {/* 描述 - 移动端优化字体 */}
                      <p className="text-xs md:text-xs text-gray-600 dark:text-gray-400 mb-1.5 md:mb-1 text-center leading-snug">
                        {service.desc}
                      </p>
                      
                      {/* 亮点标签 - 移动端优化 */}
                      <div className={`inline-flex items-center gap-1 md:gap-0.5 px-2.5 py-1 md:px-2 md:py-0.5 rounded-full mx-auto flex justify-center ${
                        i === 0 ? 'bg-blue-50 dark:bg-blue-900/20' :
                        i === 1 ? 'bg-purple-50 dark:bg-purple-900/20' :
                        'bg-orange-50 dark:bg-orange-900/20'
                      }`}>
                        <Zap className={`w-3.5 h-3.5 md:w-3 md:h-3 ${
                          i === 0 ? 'text-blue-600 dark:text-cyan-400' :
                          i === 1 ? 'text-purple-600 dark:text-pink-400' :
                          'text-orange-600 dark:text-amber-400'
                        }`} />
                        <span className={`text-xs md:text-xs font-bold ${
                          i === 0 ? 'text-blue-700 dark:text-cyan-300' :
                          i === 1 ? 'text-purple-700 dark:text-pink-300' :
                          'text-orange-700 dark:text-amber-300'
                        }`}>{service.highlight}</span>
                      </div>
                      
                      {/* 悬停光效 */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                    </div>
                  );
                })}
              </div>

              {/* 底部统计卡片 - 移动端优化紧凑布局 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 w-full max-w-5xl animate-slide-in-right mb-4 md:mb-0">
                {[
                  { number: "500+", label: "服务客户", icon: Users, color: "blue", delay: 0 },
                  { number: "1000+", label: "成功案例", icon: Award, color: "purple", delay: 100 },
                  { number: "98%", label: "客户满意度", icon: Star, color: "orange", delay: 200 },
                  { number: "7x24", label: "技术支持", icon: Clock, color: "green", delay: 300 },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  const colorClasses = {
                    blue: "from-blue-500 to-cyan-400 border-blue-200 dark:border-cyan-500/30",
                    purple: "from-purple-500 to-pink-400 border-purple-200 dark:border-pink-500/30",
                    orange: "from-orange-500 to-amber-400 border-orange-200 dark:border-amber-500/30",
                    green: "from-emerald-500 to-teal-400 border-emerald-200 dark:border-teal-500/30",
                  };
                  const colors = colorClasses[stat.color as keyof typeof colorClasses];
                  
                  return (
                    <div
                      key={i}
                      className="group relative bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg p-2.5 md:p-2.5 border border-gray-200/50 dark:border-gray-700/50 hover:border-opacity-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                      style={{ animationDelay: `${stat.delay}ms` }}
                    >
                      {/* 图标 - 移动端优化大小 */}
                      <div className={`w-9 h-9 md:w-10 md:h-10 mx-auto mb-2 md:mb-2 rounded-lg bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
                        <Icon className="w-4.5 h-4.5 md:w-5 md:h-5 text-white z-10" />
                        <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* 数字和标签 - 移动端优化字体 */}
                      <div>
                        <div className="text-xl md:text-xl font-black text-gray-900 dark:text-white mb-1 md:mb-1">{stat.number}</div>
                        <div className="text-xs md:text-xs font-semibold text-gray-600 dark:text-gray-400 leading-tight">{stat.label}</div>
                      </div>
                      
                      {/* 悬停光效 */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动提示 - 移动端隐藏，PC端显示 */}
        <div className="hidden md:block">
          <ScrollHint />
        </div>
      </section>

      {/* Services Cards - 重新设计 */}
      <section className="py-12 md:py-20 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* 标题区 - 移动端优化 */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 md:mb-4">
              核心<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">服务</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 md:px-0">
              为企业提供专业的数字化解决方案，助力业务增长
            </p>
          </div>

          {/* 服务网格 - 移动端优化布局 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;
              const isHovered = hoveredService === service.id;
              
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`bg-white/80 dark:bg-[#1a2332]/80 rounded-xl md:rounded-2xl overflow-hidden border-2 border-amber-200/50 dark:border-cyan-400/20 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group ${
                    isExpanded ? 'lg:col-span-2 lg:row-span-2' : ''
                  } ${isHovered ? 'border-blue-400 dark:border-cyan-400' : ''}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                  }}
                >
                  {/* 卡片头部 - 移动端优化padding */}
                  <div className="p-4 md:p-6 relative overflow-hidden">
                    {/* 悬停时的渐变背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* 图标和标题 - 移动端优化布局 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4 relative z-10">
                      <div 
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:animate-icon-bounce" />
                        <div className={`absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}></div>
                      </div>
                      <div className="flex-1 text-center md:text-left w-full">
                        <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-sm text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                          {service.subtitle}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* 核心特性 - 移动端优化 */}
                    <div className="grid grid-cols-2 gap-2 md:gap-2 mb-3 md:mb-4 relative z-10">
                      {service.features.slice(0, 4).map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div 
                            key={idx} 
                            className="flex items-center gap-1.5 md:gap-2 p-2 md:p-2 bg-blue-50/50 dark:bg-cyan-900/10 rounded-lg group/feature hover:bg-blue-100/70 dark:hover:bg-cyan-900/20 transition-all duration-300 hover:scale-105 cursor-pointer min-h-[60px] md:min-h-0"
                            style={{ animationDelay: `${(index * 100) + (idx * 50)}ms` }}
                          >
                            <FeatureIcon className="w-4 h-4 md:w-4 md:h-4 text-blue-600 dark:text-cyan-400 flex-shrink-0 group-hover/feature:animate-icon-bounce" />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs md:text-xs font-bold text-gray-900 dark:text-white truncate group-hover/feature:text-blue-600 dark:group-hover/feature:text-cyan-400 transition-colors">{feature.title}</div>
                              <div className="text-[10px] md:text-[10px] text-gray-600 dark:text-gray-400 truncate leading-tight">{feature.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* 操作按钮 - 移动端优化触摸目标，PC端保持原样 */}
                    <div className="flex flex-col sm:flex-row gap-2 relative z-10">
                      <button
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                        className={`flex-1 px-4 py-3 md:py-2.5 bg-gradient-to-r ${service.color} text-white rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm group/btn hover:scale-105 relative overflow-hidden min-h-[44px] md:min-h-0 active:scale-95 md:active:scale-100`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isExpanded ? '收起详情' : '查看详情'}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''} group-hover/btn:translate-y-0.5`} />
                        </span>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity animate-shimmer"></div>
                      </button>
                      <a
                        href="/contact"
                        className="px-4 py-3 md:py-2.5 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 rounded-lg font-bold hover:bg-blue-50 dark:hover:bg-cyan-900/20 transition-all text-sm hover:scale-105 hover:shadow-md min-h-[44px] md:min-h-0 flex items-center justify-center active:scale-95 md:active:scale-100"
                      >
                        咨询
                      </a>
                    </div>
                  </div>

                  {/* 展开的详细内容 - 移动端优化 */}
                  {isExpanded && (
                    <div className="border-t border-amber-200/50 dark:border-cyan-400/20 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 dark:from-cyan-900/5 dark:to-blue-900/5 p-4 md:p-6 animate-fade-in">
                      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                        {/* 技术栈 - 移动端优化 */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                          <h4 className="text-sm md:text-base font-black text-gray-900 dark:text-white mb-2 md:mb-3 flex items-center gap-2 group/title">
                            <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 group-hover/title:animate-icon-bounce" />
                            技术栈
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1.5 md:py-1 bg-white dark:bg-[#1a2332] text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-amber-200/50 dark:border-cyan-400/20 hover:border-blue-400 dark:hover:border-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-900/20 hover:scale-105 transition-all duration-300 cursor-pointer min-h-[32px] md:min-h-0 flex items-center"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 成功案例 - 移动端优化 */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                          <h4 className="text-sm md:text-base font-black text-gray-900 dark:text-white mb-2 md:mb-3 flex items-center gap-2 group/title">
                            <Award className="w-4 h-4 text-blue-600 dark:text-cyan-400 group-hover/title:animate-icon-bounce" />
                            成功案例
                          </h4>
                          <div className="space-y-2">
                            {service.cases.map((caseItem, idx) => (
                              <div 
                                key={idx} 
                                className="p-3 md:p-2.5 bg-white dark:bg-[#1a2332] rounded-lg border border-amber-200/50 dark:border-cyan-400/20 hover:border-green-400 dark:hover:border-green-500 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group/case min-h-[60px] md:min-h-0"
                                style={{ animationDelay: `${idx * 100}ms` }}
                              >
                                <div className="text-sm md:text-xs font-bold text-gray-900 dark:text-white mb-1 group-hover/case:text-green-600 dark:group-hover/case:text-green-400 transition-colors">{caseItem.name}</div>
                                <div className="text-xs md:text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1">
                                  <TrendingUp className="w-3.5 h-3.5 md:w-3 md:h-3 group-hover/case:animate-icon-bounce" />
                                  {caseItem.result}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 服务流程 - 移动端优化 */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                          <h4 className="text-sm md:text-base font-black text-gray-900 dark:text-white mb-2 md:mb-3 flex items-center gap-2 group/title">
                            <Rocket className="w-4 h-4 text-blue-600 dark:text-cyan-400 group-hover/title:animate-icon-bounce" />
                            服务流程
                          </h4>
                          <div className="space-y-2.5 md:space-y-2">
                            {service.process.map((step, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-center gap-2.5 md:gap-2 group/step hover:translate-x-2 transition-transform duration-300 cursor-pointer min-h-[36px] md:min-h-0"
                                style={{ animationDelay: `${idx * 80}ms` }}
                              >
                                <div className={`w-6 h-6 md:w-5 md:h-5 rounded-full bg-gradient-to-br ${service.color} text-white text-xs md:text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover/step:scale-110 group-hover/step:rotate-12 transition-all duration-300`}>
                                  {idx + 1}
                                </div>
                                <div className="text-sm md:text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover/step:text-blue-600 dark:group-hover/step:text-cyan-400 transition-colors">{step}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA按钮 - 移动端优化触摸目标，PC端保持原样 */}
                      <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                          href="/contact"
                          className={`flex-1 px-5 py-3 md:py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm group/cta hover:scale-105 relative overflow-hidden min-h-[44px] md:min-h-0 active:scale-95 md:active:scale-100`}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            立即咨询
                            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/cta:opacity-100 transition-opacity animate-shimmer"></div>
                        </a>
                        <a
                          href="/portfolio"
                          className="px-5 py-3 md:py-3 border-2 border-gray-300 dark:border-cyan-400/30 text-gray-700 dark:text-gray-300 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-[#1a2332] transition-all text-sm hover:scale-105 hover:shadow-md hover:border-blue-400 dark:hover:border-cyan-400 min-h-[44px] md:min-h-0 flex items-center justify-center active:scale-95 md:active:scale-100"
                        >
                          查看案例
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-16 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 whitespace-nowrap md:whitespace-normal">为什么选择我们</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 whitespace-nowrap md:whitespace-normal">专业、高效、可靠的技术服务商</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "专业团队", desc: "10年+行业经验，资深工程师团队", color: "from-blue-500 to-cyan-400" },
              { icon: Zap, title: "快速交付", desc: "敏捷开发模式，按时保质交付", color: "from-purple-500 to-pink-400" },
              { icon: Shield, title: "质量保证", desc: "严格的质量管控，完善的测试流程", color: "from-orange-500 to-red-400" },
              { icon: Users, title: "贴心服务", desc: "7x24小时技术支持，快速响应", color: "from-green-500 to-emerald-400" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white/70 dark:bg-[#1a2332]/70 rounded-2xl p-6 border-2 border-amber-200/50 dark:border-cyan-400/20 hover:border-blue-400 dark:hover:border-cyan-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center group cursor-pointer animate-card-hover"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
                    <Icon className="w-7 h-7 text-white group-hover:animate-icon-bounce" />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}></div>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
