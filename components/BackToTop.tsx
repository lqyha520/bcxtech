"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === "undefined") return;
    
    const toggleVisibility = () => {
      if (typeof window === "undefined" || typeof document === "undefined") return;
      
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      
      setScrollProgress(progress);
      
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group animate-slide-up hover:scale-110"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          {/* 进度环 */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray={`${scrollProgress * 2.8} 100`}
              className="transition-all duration-300"
            />
          </svg>
        </button>
      )}
    </>
  );
}
