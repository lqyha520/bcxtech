"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollHint from "@/components/ScrollHint";
import { Target, Users, Award, TrendingUp, Rocket, Heart, Lightbulb, Shield, Code, Globe, Zap, Star, Building, Calendar, MapPin, CheckCircle, Sparkles, Trophy, Clock } from "lucide-react";

const milestones = [
  { 
    year: "2019", 
    quarter: "Q1",
    title: "公司成立", 
    desc: "布草芯科技在深圳正式成立，创始团队来自腾讯、华为等知名企业",
    achievement: "初创团队10人",
    color: "from-blue-600 to-cyan-500"
  },
  { 
    year: "2020", 
    quarter: "Q2",
    title: "业务突破", 
    desc: "成功服务100+企业客户，获得天使轮融资500万",
    achievement: "客户数破百",
    color: "from-purple-600 to-pink-500"
  },
  { 
    year: "2021", 
    quarter: "Q3",
    title: "技术创新", 
    desc: "推出自研低代码平台，获得5项软件著作权",
    achievement: "技术专利5项",
    color: "from-orange-600 to-red-500"
  },
  { 
    year: "2022", 
    quarter: "Q4",
    title: "规模扩张", 
    desc: "团队扩展至60人，在北京、上海设立分公司",
    achievement: "3地办公",
    color: "from-green-600 to-emerald-500"
  },
  { 
    year: "2023", 
    quarter: "Q1",
    title: "行业领先", 
    desc: "服务客户突破500家，获评国家高新技术企业",
    achievement: "行业标杆",
    color: "from-indigo-600 to-purple-500"
  },
  { 
    year: "2024", 
    quarter: "Q2",
    title: "持续创新", 
    desc: "AI技术赋能，推出智能化解决方案，客户满意度98%",
    achievement: "AI赋能",
    color: "from-pink-600 to-rose-500"
  },
];

const team = [
  { role: "技术研发", count: "35+", icon: Code, desc: "资深工程师", color: "from-blue-600 to-cyan-500" },
  { role: "产品设计", count: "15+", icon: Lightbulb, desc: "UI/UX设计师", color: "from-purple-600 to-pink-500" },
  { role: "项目管理", count: "10+", icon: Rocket, desc: "项目经理", color: "from-orange-600 to-red-500" },
  { role: "客户服务", count: "12+", icon: Heart, desc: "服务专员", color: "from-green-600 to-emerald-500" },
];

const values = [
  { icon: Target, title: "客户至上", desc: "以客户需求为导向，提供超预期的服务体验" },
  { icon: Lightbulb, title: "创新驱动", desc: "持续技术创新，引领行业发展趋势" },
  { icon: Shield, title: "品质保证", desc: "严格的质量标准，确保每个项目的成功" },
  { icon: Users, title: "团队协作", desc: "高效协同，发挥每个人的最大价值" },
];

const achievements = [
  { icon: Award, title: "国家高新技术企业", year: "2023" },
  { icon: Trophy, title: "ISO9001质量认证", year: "2022" },
  { icon: Star, title: "软件著作权20+", year: "2021-2024" },
  { icon: Sparkles, title: "行业优秀服务商", year: "2023" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332]">
      <Header />
      
      {/* Hero Section - 公司简介 - 移动端优化 */}
      <section className="pt-16 md:pt-20 min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        {/* 装饰背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-3 md:py-1 relative z-10 w-full flex-1 flex flex-col justify-center md:justify-start">
          <div className="max-w-7xl mx-auto w-full">
            {/* 顶部：标题和公司简介 - 移动端优化字体大小和间距，PC端保持原样 */}
            <div className="text-center mb-3 md:mb-2 animate-fade-in">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 md:mb-1 leading-tight tracking-tight animate-slide-up">
                <span className="md:whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">创新</span>驱动<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-400">未来</span> · <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400">科技</span>成就<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">梦想</span>
                </span>
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-1 md:mb-0.5 font-semibold animate-slide-up px-2 md:px-0" style={{ animationDelay: '0.1s' }}>
                成立于2019年 · 专注企业数字化转型 · 500+企业信赖
              </p>
              <p className="text-xs md:text-xs text-gray-500 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up px-2 md:px-0" style={{ animationDelay: '0.2s' }}>
                专业的软件开发、系统集成和技术咨询服务
              </p>
            </div>

            {/* 中间：核心数据 - 移动端优化 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-2.5 mb-4 md:mb-2 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { number: "500+", label: "服务客户", icon: Users, color: "from-blue-600 to-cyan-500", desc: "企业信赖" },
                { number: "1000+", label: "成功项目", icon: Rocket, color: "from-purple-600 to-pink-500", desc: "项目经验" },
                { number: "72+", label: "专业团队", icon: Code, color: "from-orange-600 to-red-500", desc: "行业精英" },
                { number: "98%", label: "满意度", icon: Star, color: "from-green-600 to-emerald-500", desc: "客户认可" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="group relative">
                    <div className={`px-2.5 py-2 md:px-2.5 md:py-2 bg-gradient-to-r ${stat.color} rounded-lg text-white font-black shadow-lg hover:scale-105 transition-transform cursor-default flex flex-col justify-center items-center text-center min-h-[80px] md:min-h-0`}>
                      <Icon className="w-4 h-4 md:w-4 md:h-4 mb-1 md:mb-0.5 opacity-90" />
                      <div className="text-lg md:text-lg lg:text-xl mb-0.5">{stat.number}</div>
                      <div className="text-xs md:text-xs opacity-90 font-bold">{stat.label}</div>
                      <div className="text-[10px] md:text-[10px] opacity-75">{stat.desc}</div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10`}></div>
                  </div>
                );
              })}
            </div>

            {/* 底部：企业价值观和荣誉预览 - 移动端优化 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2.5 animate-fade-in mb-4 md:mb-0" style={{ animationDelay: '0.4s' }}>
              {/* 左侧：企业价值观 */}
              <div className="bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg border border-amber-200/50 dark:border-cyan-400/20 shadow-lg p-3 md:p-2">
                <div className="flex items-center gap-2 md:gap-2 mb-2 md:mb-1.5">
                  <div className="w-8 h-8 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center shadow-lg">
                    <Target className="w-4 h-4 md:w-4 md:h-4 text-white" />
                  </div>
                  <h3 className="text-sm md:text-sm font-black text-gray-900 dark:text-white">企业价值观</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-1.5">
                  {values.slice(0, 4).map((value, i) => {
                    const Icon = value.icon;
                    return (
                      <div key={i} className="group/item flex items-start gap-1.5 md:gap-1 p-1.5 md:p-1 rounded-lg hover:bg-blue-50 dark:hover:bg-cyan-900/10 transition-colors min-h-[50px] md:min-h-0">
                        <div className="w-6 h-6 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-3 h-3 md:w-3 md:h-3 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs md:text-xs font-black text-gray-900 dark:text-white mb-0.5 group-hover/item:text-blue-600 dark:group-hover/item:text-cyan-400 transition-colors line-clamp-1">
                            {value.title}
                          </h4>
                          <p className="text-[10px] md:text-[10px] text-gray-600 dark:text-gray-300 line-clamp-2 md:line-clamp-1 leading-tight">
                            {value.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 右侧：荣誉资质预览 */}
              <div className="bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg border border-amber-200/50 dark:border-cyan-400/20 shadow-lg p-3 md:p-2">
                <div className="flex items-center gap-2 md:gap-2 mb-2 md:mb-1.5">
                  <div className="w-8 h-8 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 flex items-center justify-center shadow-lg">
                    <Trophy className="w-4 h-4 md:w-4 md:h-4 text-white" />
                  </div>
                  <h3 className="text-sm md:text-sm font-black text-gray-900 dark:text-white">荣誉资质</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-1.5">
                  {achievements.slice(0, 4).map((achievement, i) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={i} className="group/item relative bg-gradient-to-br from-blue-600/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-lg p-2 md:p-1.5 border border-blue-200/30 dark:border-cyan-400/20 hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition-all hover:scale-105 min-h-[50px] md:min-h-0">
                        <div className="flex items-center gap-1 mb-1 md:mb-0.5">
                          <Icon className="w-4 h-4 md:w-4 md:h-4 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                          <h4 className="text-xs md:text-xs font-black text-gray-900 dark:text-white line-clamp-1">
                            {achievement.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-0.5 text-[10px] md:text-[10px] text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3 md:w-2.5 md:h-2.5" />
                          <span>{achievement.year}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动提示 - 移动端隐藏，PC端显示 */}
        <div className="hidden md:block">
          <ScrollHint />
        </div>
      </section>

      {/* 发展历程 - 时间轴 - 移动端优化 */}
      <section className="py-12 md:py-20 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 md:mb-3">发展历程</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">见证我们的成长与突破</p>
          </div>

          <div className="relative">
            {/* 移动端时间轴线 - 左侧 */}
            <div className="absolute left-6 md:hidden w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 opacity-20"></div>
            {/* PC端时间轴线 - 中间 */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 opacity-20"></div>

            {/* 移动端：垂直时间轴 */}
            <div className="md:hidden space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-4 pl-12">
                  {/* 节点 */}
                  <div className={`absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg z-10`}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* 内容区域 */}
                  <div className="flex-1">
                    <div className="bg-white/80 dark:bg-[#1a2332]/80 rounded-xl p-4 border border-amber-200/50 dark:border-cyan-400/20 shadow-lg">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <div className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-white text-xs font-bold`}>
                          {milestone.quarter}
                        </div>
                        <div className="text-xl font-black text-gray-900 dark:text-white">{milestone.year}</div>
                      </div>
                      <h3 className="text-base font-black text-gray-900 dark:text-white mb-1.5">{milestone.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">{milestone.desc}</p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-bold text-green-700 dark:text-green-300">{milestone.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PC端：左右交替时间轴 */}
            <div className="hidden md:block space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* 左侧/右侧内容 */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white/80 dark:bg-[#1a2332]/80 rounded-2xl p-6 border border-amber-200/50 dark:border-cyan-400/20 shadow-lg hover:scale-105 transition-transform ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-white text-xs font-bold`}>
                          {milestone.quarter}
                        </div>
                        <div className="text-2xl font-black text-gray-900 dark:text-white">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{milestone.desc}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-bold text-green-700 dark:text-green-300">{milestone.achievement}</span>
                      </div>
                    </div>
                  </div>

                  {/* 中间节点 */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg z-10 flex-shrink-0`}>
                    <Calendar className="w-8 h-8 text-white" />
                  </div>

                  {/* 占位 */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队规模 - 移动端优化 */}
      <section className="py-12 md:py-20 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 md:mb-3">专业团队</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">汇聚行业精英，打造卓越产品</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {team.map((member, i) => {
              const Icon = member.icon;
              return (
                <div key={i} className="bg-white/80 dark:bg-[#1a2332]/80 rounded-lg md:rounded-2xl p-3 md:p-8 border border-amber-200/50 dark:border-cyan-400/20 hover:scale-105 transition-transform text-center shadow-lg">
                  <div className={`w-10 h-10 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 rounded-lg md:rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-lg md:text-4xl font-black text-gray-900 dark:text-white mb-1 md:mb-2 leading-none">{member.count}</div>
                  <h3 className="text-xs md:text-lg font-black text-gray-900 dark:text-white mb-0.5 md:mb-1 leading-tight">{member.role}</h3>
                  <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400 leading-tight">{member.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 企业价值观 - 移动端优化 */}
      <section className="py-12 md:py-20 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 md:mb-3">企业价值观</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">我们的信念与追求</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-white/80 dark:bg-[#1a2332]/80 rounded-lg md:rounded-2xl p-3 md:p-8 border border-amber-200/50 dark:border-cyan-400/20 hover:scale-105 transition-transform shadow-lg">
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-xl font-black text-gray-900 dark:text-white mb-1 md:mb-2 leading-tight">{value.title}</h3>
                      <p className="text-xs md:text-base text-gray-600 dark:text-gray-300 leading-tight md:leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 荣誉资质 - 移动端优化 */}
      <section className="py-12 md:py-20 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 md:mb-3">荣誉资质</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">专业认证，值得信赖</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 rounded-lg md:rounded-2xl p-3 md:p-6 text-white text-center hover:scale-105 transition-transform shadow-lg">
                  <Icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4" />
                  <h3 className="text-xs md:text-lg font-black mb-1 md:mb-2 leading-tight">{achievement.title}</h3>
                  <div className="flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-sm opacity-90">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{achievement.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 公司地址 - 移动端优化 */}
      <section className="py-12 md:py-20 px-4 bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-white/80 dark:bg-[#1a2332]/80 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-amber-200/50 dark:border-cyan-400/20 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-blue-600 dark:text-cyan-400" />
                  公司地址
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { city: "深圳总部", address: "深圳市南山区科技园南区深圳湾科技生态园", status: "总部" },
                    { city: "北京分公司", address: "北京市海淀区中关村软件园", status: "分部" },
                    { city: "上海分公司", address: "上海市浦东新区张江高科技园区", status: "分部" },
                  ].map((location, i) => (
                    <div key={i} className="p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-lg md:rounded-xl border border-blue-200/30 dark:border-cyan-400/20">
                      <div className="flex items-center gap-2 mb-1.5 md:mb-2 flex-wrap">
                        <h3 className="text-base md:text-lg font-black text-gray-900 dark:text-white">{location.city}</h3>
                        <span className="px-2 py-0.5 bg-blue-600 dark:bg-cyan-500 text-white text-xs font-bold rounded-full">{location.status}</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl md:rounded-2xl flex items-center justify-center p-8 md:p-12 min-h-[200px] md:min-h-0">
                <div className="text-center">
                  <Globe className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 text-blue-600 dark:text-cyan-400" />
                  <p className="text-base md:text-lg font-bold text-gray-700 dark:text-gray-300">地图加载区域</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-2">欢迎莅临参观指导</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
