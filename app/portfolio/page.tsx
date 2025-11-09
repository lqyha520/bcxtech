"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollHint from "@/components/ScrollHint";
import { Code2, Smartphone, Package, TrendingUp, Users, Award, Star, ArrowRight, Eye, Heart, CheckCircle, Zap, Clock, Target, BarChart, ChevronDown } from "lucide-react";

const categories = [
  { id: "all", name: "全部案例", icon: Award },
  { id: "miniprogram", name: "小程序", icon: Smartphone },
  { id: "erp", name: "ERP系统", icon: Package },
  { id: "custom", name: "定制开发", icon: Code2 },
  { id: "web", name: "网站开发", icon: TrendingUp },
];

const projects = [
  {
    id: 1,
    category: "miniprogram",
    title: "某连锁餐饮小程序",
    client: "知名连锁餐饮品牌",
    description: "为全国500+门店打造的智能点餐小程序，支持扫码点餐、会员管理、营销活动等功能",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["小程序", "电商", "会员系统"],
    results: [
      { label: "订单量", value: "提升500%", icon: TrendingUp },
      { label: "用户数", value: "100万+", icon: Users },
      { label: "满意度", value: "98%", icon: Star },
    ],
    features: ["扫码点餐", "会员积分", "优惠券", "外卖配送", "数据分析"],
    duration: "3个月",
    year: "2024",
    color: "from-blue-600 to-cyan-500",
    featured: true,
  },
  {
    id: 2,
    category: "erp",
    title: "制造业ERP管理系统",
    client: "大型制造企业",
    description: "涵盖生产、采购、库存、销售、财务等全流程的企业资源管理系统",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["ERP", "生产管理", "供应链"],
    results: [
      { label: "效率提升", value: "60%", icon: Zap },
      { label: "成本降低", value: "40%", icon: Target },
      { label: "库存周转", value: "2倍", icon: BarChart },
    ],
    features: ["生产计划", "物料管理", "质量追溯", "成本核算", "报表分析"],
    duration: "6个月",
    year: "2024",
    color: "from-purple-600 to-pink-500",
    featured: true,
  },
  {
    id: 3,
    category: "custom",
    title: "智能仓储管理系统",
    client: "物流科技公司",
    description: "基于AI和IoT技术的智能仓储解决方案，实现仓库自动化管理",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    tags: ["AI", "IoT", "自动化"],
    results: [
      { label: "自动化率", value: "95%", icon: Zap },
      { label: "准确率", value: "99.9%", icon: CheckCircle },
      { label: "效率提升", value: "3倍", icon: TrendingUp },
    ],
    features: ["智能调度", "自动盘点", "路径优化", "实时监控", "预测分析"],
    duration: "8个月",
    year: "2023",
    color: "from-orange-600 to-red-500",
    featured: true,
  },
  {
    id: 4,
    category: "miniprogram",
    title: "在线教育小程序",
    client: "教育培训机构",
    description: "集课程学习、在线考试、社区交流于一体的教育平台",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["教育", "在线学习", "社区"],
    results: [
      { label: "学员数", value: "50万+", icon: Users },
      { label: "完课率", value: "85%", icon: CheckCircle },
      { label: "续费率", value: "70%", icon: Star },
    ],
    features: ["视频课程", "在线考试", "作业批改", "学习社区", "进度跟踪"],
    duration: "4个月",
    year: "2024",
    color: "from-green-600 to-emerald-500",
    featured: false,
  },
  {
    id: 5,
    category: "web",
    title: "企业官网及管理后台",
    client: "科技创新企业",
    description: "响应式企业官网+内容管理系统，支持多语言和SEO优化",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["官网", "CMS", "多语言"],
    results: [
      { label: "访问量", value: "提升200%", icon: Eye },
      { label: "转化率", value: "提升150%", icon: TrendingUp },
      { label: "SEO排名", value: "前3页", icon: Star },
    ],
    features: ["响应式设计", "内容管理", "多语言", "SEO优化", "数据统计"],
    duration: "2个月",
    year: "2024",
    color: "from-indigo-600 to-purple-500",
    featured: false,
  },
  {
    id: 6,
    category: "erp",
    title: "零售连锁管理系统",
    client: "连锁零售企业",
    description: "支持多门店、多仓库的零售管理系统，实现总部与门店的高效协同",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["零售", "连锁", "进销存"],
    results: [
      { label: "门店数", value: "200+", icon: Target },
      { label: "库存准确率", value: "99%", icon: CheckCircle },
      { label: "配送效率", value: "提升80%", icon: Zap },
    ],
    features: ["多门店管理", "库存调拨", "会员营销", "收银系统", "数据看板"],
    duration: "5个月",
    year: "2023",
    color: "from-pink-600 to-rose-500",
    featured: false,
  },
  {
    id: 7,
    category: "custom",
    title: "客户关系管理系统",
    client: "B2B销售企业",
    description: "全流程客户管理系统，从线索到成交的完整销售管理",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    tags: ["CRM", "销售管理", "数据分析"],
    results: [
      { label: "销售转化", value: "提升80%", icon: TrendingUp },
      { label: "客户满意度", value: "95%", icon: Star },
      { label: "响应速度", value: "提升3倍", icon: Zap },
    ],
    features: ["线索管理", "商机跟进", "合同管理", "销售预测", "客户画像"],
    duration: "4个月",
    year: "2024",
    color: "from-blue-600 to-indigo-500",
    featured: false,
  },
  {
    id: 8,
    category: "miniprogram",
    title: "社区团购小程序",
    client: "生鲜电商平台",
    description: "基于社区的团购小程序，支持团长管理、拼团、配送等功能",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    tags: ["团购", "社区", "电商"],
    results: [
      { label: "团长数", value: "5000+", icon: Users },
      { label: "日订单", value: "10万+", icon: TrendingUp },
      { label: "复购率", value: "75%", icon: Heart },
    ],
    features: ["团长招募", "拼团活动", "配送管理", "佣金结算", "营销工具"],
    duration: "3个月",
    year: "2023",
    color: "from-green-600 to-teal-500",
    featured: false,
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="min-h-screen bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332]">
      <Header />
      
      {/* Hero Section - 上下布局 */}
      <section className="relative pt-16 md:pt-20 h-screen flex flex-col overflow-hidden bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419]">
        {/* 动态背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 大型渐变球体 */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
          
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-1 relative z-10 w-full h-full flex flex-col justify-start overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            {/* 顶部：标题区域 */}
            <div className="text-center mb-2 md:mb-3 animate-fade-in">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-1.5 leading-tight tracking-tight animate-slide-up md:whitespace-nowrap">
                用<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">技术</span>创造<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-400">价值</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-0.5 font-semibold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                500+ 企业信赖 · 1000+ 成功案例 · 98% 客户满意度
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                为各行业企业提供专业的数字化解决方案
              </p>
            </div>
            
            {/* 中间：统计卡片 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2.5 mb-2 md:mb-3 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { number: "500+", label: "服务客户", color: "from-blue-600 to-cyan-500" },
                { number: "1000+", label: "成功案例", color: "from-purple-600 to-pink-500" },
                { number: "98%", label: "满意度", color: "from-orange-600 to-red-500" },
                { number: "50+", label: "行业覆盖", color: "from-green-600 to-emerald-500" },
              ].map((stat, i) => (
                <div key={i} className="group relative">
                  <div className={`px-2 py-1.5 md:px-3 md:py-2 bg-gradient-to-r ${stat.color} rounded-lg text-white font-black shadow-lg hover:scale-105 transition-transform cursor-default flex flex-col justify-center items-center text-center`}>
                    <div className="text-base md:text-lg lg:text-xl mb-0.5">{stat.number}</div>
                    <div className="text-[10px] md:text-xs opacity-90">{stat.label}</div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10`}></div>
                </div>
              ))}
            </div>
            
            {/* 底部：精选案例预览 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-2.5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {featuredProjects.slice(0, 3).map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg overflow-hidden border border-amber-200/50 dark:border-cyan-400/20 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => {
                    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {/* 图片区域 */}
                  <div className="relative h-16 md:h-20 flex-shrink-0 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 dark:opacity-10`}></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* 年份标签 */}
                    <div className="absolute top-1.5 left-1.5">
                      <span className={`px-1.5 py-0.5 bg-gradient-to-r ${project.color} text-white text-[10px] md:text-xs font-bold rounded-full shadow-lg`}>
                        {project.year}
                      </span>
                    </div>
                    
                    {/* 精选徽章 */}
                    <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-yellow-500 text-white text-[10px] md:text-xs font-bold rounded-full flex items-center gap-0.5 shadow-lg">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      精选
                    </div>
                  </div>
                  
                  {/* 内容区域 */}
                  <div className="p-1.5 md:p-2 flex-1 flex flex-col min-h-0">
                    <h3 className="text-xs md:text-sm font-black text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mb-0.5 line-clamp-1">{project.client}</p>
                    <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-300 mb-1 line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    
                    {/* 关键指标 */}
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                      {project.results.slice(0, 2).map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="flex items-center gap-0.5">
                            <div className={`p-0.5 rounded bg-gradient-to-br ${project.color} opacity-20 dark:opacity-10`}>
                              <Icon className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-900 dark:text-white" />
                            </div>
                            <div>
                              <div className="text-[10px] md:text-xs font-black text-gray-900 dark:text-white leading-tight">{result.value}</div>
                              <div className="text-[9px] md:text-[10px] text-gray-500 dark:text-gray-400 leading-tight">{result.label}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* 查看按钮 */}
                    <div className="flex items-center gap-0.5 text-blue-600 dark:text-cyan-400 text-[10px] md:text-xs font-bold group-hover:gap-1 transition-all">
                      <span>查看详情</span>
                      <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* 悬停光效 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 滚动提示组件 */}
        <ScrollHint />
      </section>

      {/* 分类筛选和全部案例 */}
      <section id="featured-projects" className="py-12 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 text-center">全部案例</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg scale-105"
                      : "bg-white/70 dark:bg-[#1a2332]/70 text-gray-700 dark:text-gray-300 border border-amber-200/50 dark:border-cyan-400/20 hover:scale-105"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* 案例列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white/80 dark:bg-[#1a2332]/80 rounded-2xl overflow-hidden border border-amber-200/50 dark:border-cyan-400/20 hover:scale-105 transition-all shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">{project.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{project.client}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 dark:bg-cyan-900/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-16 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-4">让我们一起创造下一个成功案例</h2>
            <p className="text-lg opacity-90 mb-8">专业团队为您提供一对一咨询服务</p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
              >
                立即咨询
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                查看服务
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

