"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Rocket, Cpu, Database, Sparkles } from "lucide-react";

// 数字计数动画组件
function AnimatedNumber({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
  // 初始显示最终值，避免显示 "0"
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === "undefined") {
      setShouldAnimate(false);
      return;
    }
    
    const element = ref.current;
    if (!element) return;

    const startAnimation = () => {
      if (hasAnimated || !shouldAnimate) return;
      setHasAnimated(true);
      
      const numValue = parseInt(value.replace(/\D/g, ""));
      const suffixText = value.replace(/\d/g, "");
      
      if (numValue && shouldAnimate) {
        // 重置为 0 开始动画
        setDisplayValue("0" + suffixText);
        
        let current = 0;
        const increment = numValue / 50;
        
        timerRef.current = setTimeout(() => {
          intervalRef.current = setInterval(() => {
            current += increment;
            if (current >= numValue) {
              setDisplayValue(value);
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            } else {
              setDisplayValue(Math.floor(current) + suffixText);
            }
          }, 30);
        }, delay);
      }
    };

    // 检查元素是否已经在视口中
    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      return isInViewport;
    };

    // 设置 IntersectionObserver
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && shouldAnimate) {
          startAnimation();
        }
      },
      { 
        threshold: 0, // 只要有一点可见就触发
        rootMargin: "100px" // 提前触发
      }
    );

    observerRef.current.observe(element);

    // 检查初始状态，如果元素在视口中，延迟一点后开始动画
    const checkAndStart = () => {
      if (checkVisibility() && !hasAnimated && shouldAnimate) {
        // 稍微延迟确保页面已完全加载
        setTimeout(() => {
          startAnimation();
        }, 200);
      }
    };

    // 立即检查一次
    checkAndStart();
    
    // 也监听滚动和加载事件，确保能触发
    window.addEventListener("load", checkAndStart);
    window.addEventListener("scroll", checkAndStart, { passive: true });

    return () => {
      window.removeEventListener("load", checkAndStart);
      window.removeEventListener("scroll", checkAndStart);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [value, suffix, delay, hasAnimated, shouldAnimate]);

  return (
    <div ref={ref} className="text-base md:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">
      {displayValue}
    </div>
  );
}


export default function Hero() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    if (typeof window === "undefined") return;
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-16 md:pt-16 min-h-screen flex flex-col justify-start md:justify-center overflow-hidden bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419]">
      {/* 装饰背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-start md:justify-center py-4 md:py-2">
        <div className="max-w-4xl mx-auto w-full">
          {/* 主标题 - 移动端优化 */}
          <div className="text-center mb-2 md:mb-4">
            <div className="relative inline-block mb-1.5 md:mb-2.5">
              {/* 标题装饰线 - 仅在大屏显示 */}
              <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-blue-500 dark:via-cyan-400 dark:to-cyan-400"></div>
              <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500 dark:via-blue-400 dark:to-blue-400"></div>
              
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight md:leading-none tracking-tight">
                <span className="inline-block text-gray-900 dark:text-white mr-2 sm:mr-2.5 md:mr-3 animate-fade-in relative">
                  布草芯
                  <span className="hidden sm:inline absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 dark:bg-cyan-400 rounded-full animate-pulse"></span>
                </span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  科技
                </span>
              </h1>
            </div>
            
            {/* 副标题 - 移动端优化字体大小，PC端保持原样 */}
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-1.5 md:mb-2.5 animate-slide-up px-1 md:px-0" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
              <p className="text-xs sm:text-base md:text-base text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">
                专业软件开发 · 小程序定制 · ERP系统
              </p>
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-500 dark:text-blue-400 flex-shrink-0" />
            </div>
            
            {/* 描述 - 移动端优化字体大小，PC端保持原样 */}
            <p className="text-xs sm:text-base md:text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2.5 md:mb-4 leading-snug md:leading-relaxed animate-slide-up px-2 md:px-0" style={{ animationDelay: '0.3s' }}>
              为企业提供全方位数字化转型解决方案，用科技创新助力企业高效发展
            </p>

            {/* 按钮组 - 移动端优化触摸目标，PC端保持原样 */}
            <div className="flex flex-row items-center justify-center gap-2 md:gap-2.5 mb-3 md:mb-5 animate-fade-in px-2 md:px-0" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/contact"
                className="group relative px-5 md:px-6 py-2.5 md:py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 dark:hover:from-cyan-600 dark:hover:via-blue-600 dark:hover:to-blue-700 text-white text-xs sm:text-base md:text-base font-bold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/30 hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-cyan-500/50 hover:-translate-y-0.5 overflow-hidden flex-1 text-center min-h-[44px] md:min-h-0 flex items-center justify-center active:scale-95 md:active:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  开始合作
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
              <Link
                href="/portfolio"
                className="group px-5 md:px-6 py-2.5 md:py-2.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-300/50 dark:border-gray-600/50 hover:border-blue-500 dark:hover:border-cyan-400 text-gray-900 dark:text-white text-xs sm:text-base md:text-base font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-white dark:hover:bg-gray-800 flex-1 text-center min-h-[44px] md:min-h-0 flex items-center justify-center active:scale-95 md:active:scale-100"
              >
                <span className="flex items-center justify-center gap-1">
                  查看案例
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* 数据展示卡片 - 移动端优化间距，PC端保持原样 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 max-w-3xl mx-auto animate-fade-in px-2 md:px-0" style={{ animationDelay: '0.5s' }}>
            {[
              { number: "200+", label: "成功项目", desc: "覆盖多个行业", icon: Rocket, color: "from-blue-600 to-cyan-500", bgColor: "bg-blue-50 dark:bg-blue-900/20", delay: 0 },
              { number: "500+", label: "客户信赖", desc: "长期合作伙伴", icon: Database, color: "from-purple-600 to-pink-500", bgColor: "bg-purple-50 dark:bg-purple-900/20", delay: 200 },
              { number: "5年+", label: "行业经验", desc: "专业团队服务", icon: Cpu, color: "from-orange-600 to-red-500", bgColor: "bg-orange-50 dark:bg-orange-900/20", delay: 400 },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={i} 
                  className="group relative p-2.5 md:p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center overflow-hidden"
                >
                  {/* 背景光效 */}
                  <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* 图标 - 移动端优化大小 */}
                  <div className={`relative w-9 h-9 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-1.5 md:mb-2.5 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 mx-auto shadow-md`}>
                    <Icon className="w-4.5 h-4.5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  {/* 数字 - 移动端优化大小 */}
                  {stat.number.includes("年") ? (
                    <div className="text-base md:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 mb-1 md:mb-1">{stat.number}</div>
                  ) : (
                    <div className="mb-1 md:mb-1">
                      <AnimatedNumber value={stat.number} delay={stat.delay} />
                    </div>
                  )}
                  
                  {/* 标签 - 移动端优化字体大小，PC端保持原样 */}
                  <div className="text-xs md:text-sm font-bold text-gray-900 dark:text-white mb-0.5 md:mb-0.5 relative z-10 leading-tight">{stat.label}</div>
                  
                  {/* 描述 - 移动端优化字体大小，PC端保持原样 */}
                  <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 relative z-10 leading-tight">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 滚动提示 - 移动端优化位置 */}
      {showScrollHint && (
        <div className="absolute bottom-3 md:bottom-3 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2 rounded-full p-2 md:p-1.5 hover:scale-110 transition-transform min-h-[44px] md:min-h-0 min-w-[44px] md:min-w-0 flex items-center justify-center active:scale-95 md:active:scale-100"
            aria-label="向下滚动查看更多内容"
          >
            <ChevronDown className="w-4 h-4 md:w-4 md:h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 animate-bounce-gentle" />
          </button>
        </div>
      )}
    </section>
  );
}
