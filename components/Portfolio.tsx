"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Smartphone, Package, GraduationCap, UtensilsCrossed, TrendingUp, Sparkles } from "lucide-react";

const categories = ["全部", "软件开发", "小程序", "ERP系统", "电商", "金融"];

const projects = [
  {
    id: 1,
    title: "智能物流管理系统",
    category: "软件开发",
    description: "为大型物流企业打造的智能化管理平台，实现全流程数字化",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    tags: ["Web应用", "React", "Node.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "电商小程序",
    category: "小程序",
    description: "功能完善的电商小程序，支持商品展示、下单、支付等完整流程",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["微信小程序", "电商", "支付"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "制造业ERP系统",
    category: "ERP系统",
    description: "定制化的生产管理系统，覆盖采购、生产、仓储、销售全链条",
    icon: Package,
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop",
    tags: ["ERP", "制造业", "数据分析"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "在线教育平台",
    category: "软件开发",
    description: "集课程管理、在线学习、直播互动于一体的教育平台",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["教育", "直播", "Vue.js"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "餐饮预约小程序",
    category: "小程序",
    description: "支持在线预约、点餐、支付的餐饮行业解决方案",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["餐饮", "预约", "O2O"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "金融数据分析平台",
    category: "金融",
    description: "实时数据采集与分析，为投资决策提供数据支持",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["金融", "大数据", "可视化"],
    color: "from-indigo-500 to-purple-500",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group block bg-white/70 dark:bg-gradient-to-br dark:from-[#1a2332]/90 dark:to-[#0f1419]/90 rounded-xl overflow-hidden border border-amber-200/50 dark:border-cyan-500/20 hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-cyan-500/20 transition-all duration-500 backdrop-blur-sm relative ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
      }}
    >
    <Link
      href={`/portfolio`}
      className="block"
    >
      {/* 背景光效 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
      
      {/* 闪烁装饰 */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <Sparkles className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${project.color} animate-pulse`} />
      </div>

      {/* 图片区域 */}
      <div className="relative h-52 overflow-hidden">
        {/* 背景图片 */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-125 rotate-2" : "scale-100 rotate-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        
        {/* 渐变遮罩 */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
          isHovered ? "from-black/40 via-black/10" : ""
        }`}></div>
        
        {/* 图标装饰 */}
        <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          <Icon className="w-5 h-5" />
        </div>
        
        {/* 项目类型标签 */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white shadow-lg group-hover:scale-110 transition-transform">
          {project.category}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-6 relative z-10">
        {/* 标题 */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-cyan-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* 描述 */}
        <p className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* 标签 - 逐个显示动画 */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 bg-blue-50 dark:bg-cyan-900/20 text-blue-700 dark:text-cyan-300 text-xs font-semibold rounded-full border border-blue-200 dark:border-cyan-400/30 group-hover:scale-110 group-hover:border-blue-400 dark:group-hover:border-cyan-400 transition-all ${
                isVisible ? "animate-fade-in" : ""
              }`}
              style={{
                animationDelay: `${index * 100 + idx * 50}ms`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 查看箭头 */}
        <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          <span>查看详情</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredProjects =
    activeCategory === "全部"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setIsFiltering(true);
    setActiveCategory(category);
    setTimeout(() => setIsFiltering(false), 300);
  };

  return (
    <section className="py-16 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区 - 增强动画 */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 animate-slide-up">
            成功案例
          </h2>
          <p className="text-base font-medium text-gray-700 dark:text-gray-200 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            精选项目展示
          </p>
        </div>

        {/* 分类筛选 - 增强动画 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-110 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/30 scale-105"
                  : "bg-white/80 dark:bg-[#1a2332]/80 text-gray-800 dark:text-cyan-100 border-2 border-amber-300/50 dark:border-cyan-400/30 hover:border-blue-500 dark:hover:border-cyan-400 hover:bg-amber-50/50 dark:hover:bg-[#1a2332]"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 案例网格 - 增强动画 */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-opacity duration-300 ${
            isFiltering ? "opacity-50" : "opacity-100"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* 查看更多按钮 - 增强动画 */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link
            href="/portfolio"
            className="group inline-flex items-center px-6 py-3 border-2 border-amber-300/50 dark:border-cyan-400/30 text-gray-900 dark:text-cyan-100 hover:border-blue-600 hover:text-blue-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300 font-semibold rounded-lg transition-all duration-300 bg-white/80 dark:bg-[#1a2332]/80 hover:bg-amber-50/50 dark:hover:bg-[#1a2332] backdrop-blur-sm hover:scale-110 hover:shadow-lg"
          >
            <span>查看全部案例</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
