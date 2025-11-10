"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollHint from "@/components/ScrollHint";
import { Calendar, Tag, TrendingUp, Award, Rocket, Users, ArrowRight, Clock, Eye, ThumbsUp, Share2, Newspaper, Zap, Star, Building2 } from "lucide-react";

const categories = [
  { id: "all", name: "全部", icon: Newspaper },
  { id: "company", name: "公司动态", icon: Building2 },
  { id: "industry", name: "行业资讯", icon: TrendingUp },
  { id: "technology", name: "技术分享", icon: Zap },
  { id: "case", name: "案例分享", icon: Award },
];

const news = [
  {
    id: 1,
    category: "company",
    title: "布草芯科技荣获「2024年度最佳企业服务商」称号",
    excerpt: "在刚刚结束的中国企业服务峰会上，布草芯科技凭借卓越的技术实力和优质的服务质量，荣获「2024年度最佳企业服务商」称号...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    date: "2024-11-05",
    author: "市场部",
    views: 1280,
    likes: 156,
    tags: ["公司荣誉", "行业认可"],
    featured: true,
  },
  {
    id: 2,
    category: "technology",
    title: "如何利用AI技术提升企业运营效率",
    excerpt: "人工智能技术正在深刻改变企业的运营方式。本文将分享我们在多个项目中应用AI技术的实践经验，帮助企业实现智能化转型...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    date: "2024-11-03",
    author: "技术团队",
    views: 2340,
    likes: 289,
    tags: ["AI技术", "智能化"],
    featured: false,
  },
  {
    id: 3,
    category: "case",
    title: "某大型制造企业ERP系统成功上线，效率提升60%",
    excerpt: "经过6个月的开发与实施，我们为某大型制造企业打造的ERP系统正式上线。系统涵盖生产、采购、库存、财务等多个模块...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    date: "2024-11-01",
    author: "项目团队",
    views: 1890,
    likes: 234,
    tags: ["ERP系统", "成功案例"],
    featured: true,
  },
  {
    id: 4,
    category: "industry",
    title: "2024年企业数字化转型趋势报告",
    excerpt: "根据最新的行业调研数据，2024年企业数字化转型呈现出新的特点和趋势。云原生、AI赋能、数据驱动成为关键词...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    date: "2024-10-28",
    author: "研究院",
    views: 3120,
    likes: 412,
    tags: ["行业趋势", "数字化转型"],
    featured: false,
  },
  {
    id: 5,
    category: "company",
    title: "布草芯科技北京分公司正式成立",
    excerpt: "为了更好地服务华北地区的客户，布草芯科技北京分公司于10月20日正式成立。新办公室位于中关村软件园，拥有专业的技术和服务团队...",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    date: "2024-10-20",
    author: "行政部",
    views: 1560,
    likes: 198,
    tags: ["公司动态", "业务拓展"],
    featured: false,
  },
  {
    id: 6,
    category: "technology",
    title: "微服务架构在企业级应用中的最佳实践",
    excerpt: "微服务架构已经成为现代企业级应用的主流选择。本文将深入探讨微服务架构的设计原则、技术选型和实施要点...",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    date: "2024-10-15",
    author: "架构师团队",
    views: 2890,
    likes: 367,
    tags: ["微服务", "架构设计"],
    featured: false,
  },
  {
    id: 7,
    category: "case",
    title: "电商小程序助力传统零售企业线上转型",
    excerpt: "某知名连锁零售企业通过我们开发的电商小程序，成功实现线上线下融合，月销售额增长300%...",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    date: "2024-10-10",
    author: "产品团队",
    views: 2150,
    likes: 276,
    tags: ["小程序", "电商"],
    featured: true,
  },
  {
    id: 8,
    category: "industry",
    title: "低代码平台：加速企业应用开发的新引擎",
    excerpt: "低代码开发平台正在改变传统的软件开发模式，让业务人员也能参与到应用开发中来，大幅缩短开发周期...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    date: "2024-10-05",
    author: "产品研究",
    views: 1780,
    likes: 223,
    tags: ["低代码", "开发工具"],
    featured: false,
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews = selectedCategory === "all" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const featuredNews = news.filter(item => item.featured).slice(0, 3);

  return (
    <main className="min-h-screen bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332]">
      <Header />
      
      {/* Hero Section - 首屏设计 */}
      <section className="pt-16 md:pt-20 min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        {/* 装饰背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-3 md:py-1 relative z-10 w-full flex-1 flex flex-col justify-center md:justify-start">
          <div className="max-w-7xl mx-auto w-full">
            {/* 顶部：标题和描述 - 移动端优化字体大小，PC端保持原样 */}
            <div className="text-center mb-3 md:mb-2 animate-fade-in">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 md:mb-1 leading-tight tracking-tight animate-slide-up">
                <span className="md:whitespace-nowrap">
                  洞察<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">行业动态</span>
                </span>
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-1 md:mb-0.5 font-semibold animate-slide-up px-2 md:px-0" style={{ animationDelay: '0.1s' }}>
                分享最新的公司动态、行业资讯和技术干货
              </p>
              <p className="text-xs md:text-xs text-gray-500 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up px-2 md:px-0" style={{ animationDelay: '0.2s' }}>
                第一时间了解行业趋势和技术发展
              </p>
            </div>
        
            {/* 中间：精选新闻预览 - 3个卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2.5 mb-4 md:mb-2 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {featuredNews.map((item, index) => {
                const CategoryIcon = categories.find(c => c.id === item.category)?.icon || Newspaper;
                return (
                  <div key={item.id} className="group relative bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg border border-amber-200/50 dark:border-cyan-400/20 shadow-lg hover:scale-105 transition-all overflow-hidden">
                    <div className="relative h-24 md:h-24 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                      <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-yellow-500 text-white text-[10px] md:text-[10px] font-bold rounded-full flex items-center gap-0.5">
                        <Star className="w-3 h-3" />
                        精选
                      </div>
                      <div className="absolute bottom-2 left-2 z-20 px-2 py-0.5 bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
                        <span className="text-[10px] md:text-[10px] font-bold text-gray-900 dark:text-white">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                      </div>
                    </div>
                    <div className="p-2.5 md:p-2.5">
                      <h3 className="text-sm md:text-sm font-black text-gray-900 dark:text-white mb-1.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-[10px] md:text-[10px] text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-0.5">
                            <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                        <div className="flex items-center gap-1.5">
                          <span className="flex items-center gap-0.5">
                            <Eye className="w-3 h-3" />
                        {item.views}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                );
              })}
            </div>

            {/* 底部：文章分类快速入口 - 移动端隐藏，PC端显示 */}
            <div className="hidden md:block animate-fade-in mb-4 md:mb-0" style={{ animationDelay: '0.4s' }}>
              {/* PC端：所有分类在一行显示 */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 md:gap-2.5">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const categoryNews = news.filter(item => item.category === category.id);
                  const count = category.id === "all" ? news.length : categoryNews.length;
                  const colors = [
                    "from-blue-600 to-cyan-500",
                    "from-purple-600 to-pink-500",
                    "from-orange-600 to-red-500",
                    "from-green-600 to-emerald-500",
                    "from-indigo-600 to-purple-500",
                  ];
                  const color = colors[categories.indexOf(category) % colors.length];
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group relative bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg border border-amber-200/50 dark:border-cyan-400/20 shadow-lg hover:scale-105 transition-all p-2.5 md:p-2.5 flex flex-col items-center justify-center text-center min-h-[90px] md:min-h-0 ${
                        selectedCategory === category.id ? "ring-2 ring-blue-500 dark:ring-cyan-400" : ""
                      }`}
                    >
                      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-1.5 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4.5 h-4.5 md:w-5 md:h-5 text-white" />
                      </div>
                      <h3 className="text-xs md:text-xs font-black text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                        {category.name}
                      </h3>
                      <p className="text-[10px] md:text-[10px] text-gray-500 dark:text-gray-400">
                        {count} 篇
                      </p>
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10`}></div>
                    </button>
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

      {/* 新闻列表 - 瀑布流布局 */}
      <section className="py-12 md:py-8 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* 分类筛选 */}
          <div className="mb-8 md:mb-8">
            {/* 移动端：全部单独一行 */}
            {categories.map((category) => {
              const Icon = category.icon;
              if (category.id === "all") {
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full md:hidden px-4 py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 min-h-[40px] active:scale-95 mb-2.5 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg scale-105"
                        : "bg-white/70 dark:bg-[#1a2332]/70 text-gray-700 dark:text-gray-300 border border-amber-200/50 dark:border-cyan-400/20"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="leading-none whitespace-nowrap">{category.name}</span>
                  </button>
                );
              }
              return null;
            })}
            
            {/* 移动端：其他分类一行两个 */}
            <div className="grid grid-cols-2 gap-2.5 md:hidden mb-0">
              {categories.filter(c => c.id !== "all").map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 min-h-[40px] active:scale-95 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg scale-105"
                        : "bg-white/70 dark:bg-[#1a2332]/70 text-gray-700 dark:text-gray-300 border border-amber-200/50 dark:border-cyan-400/20"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="leading-none whitespace-nowrap">{category.name}</span>
                  </button>
                );
              })}
            </div>
            
            {/* PC端：横向排列 */}
            <div className="hidden md:flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg scale-105"
                        : "bg-white/70 dark:bg-[#1a2332]/70 text-gray-700 dark:text-gray-300 border border-amber-200/50 dark:border-cyan-400/20 hover:scale-105"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="leading-none">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredNews.map((item, index) => {
              const CategoryIcon = categories.find(c => c.id === item.category)?.icon || Newspaper;
              return (
                <div 
                  key={item.id} 
                  className="bg-white/80 dark:bg-[#1a2332]/80 rounded-xl md:rounded-2xl overflow-hidden border border-amber-200/50 dark:border-cyan-400/20 hover:scale-105 transition-all shadow-lg group"
                >
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 md:top-3 md:left-3 z-20 px-2 py-0.5 md:px-3 md:py-1 bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg flex items-center gap-1 md:gap-2">
                      <CategoryIcon className="w-3 h-3 md:w-4 md:h-4 text-blue-600 dark:text-cyan-400" />
                      <span className="text-[10px] md:text-xs font-bold text-gray-900 dark:text-white">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20 px-2 py-0.5 md:px-3 md:py-1 bg-yellow-500 text-white text-[10px] md:text-xs font-bold rounded-full flex items-center gap-0.5 md:gap-1">
                        <Star className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        精选
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-5">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-[10px] md:text-xs text-gray-500 dark:text-gray-500">
                      <span className="flex items-center gap-0.5 md:gap-1">
                        <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span>{item.author}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-black text-gray-900 dark:text-white mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 md:line-clamp-3 mb-3 md:mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 md:py-1 bg-blue-50 dark:bg-cyan-900/20 text-blue-600 dark:text-cyan-400 text-[10px] md:text-xs font-semibold rounded-full border border-blue-200/30 dark:border-cyan-400/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-gray-500 dark:text-gray-500">
                        <span className="flex items-center gap-0.5 md:gap-1 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                          <Eye className="w-3 h-3 md:w-4 md:h-4" />
                          {item.views}
                        </span>
                        <span className="flex items-center gap-0.5 md:gap-1 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                          <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                          {item.likes}
                        </span>
                        <span className="flex items-center gap-0.5 md:gap-1 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                          <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                          分享
                        </span>
                      </div>
                      <button className="text-blue-600 dark:text-cyan-400 font-bold text-[10px] md:text-xs hover:gap-2 flex items-center gap-0.5 md:gap-1 transition-all">
                        查看
                        <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 加载更多 */}
          <div className="text-center mt-8 md:mt-12">
            <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:shadow-lg transition-all inline-flex items-center gap-1.5 md:gap-2">
              加载更多
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
