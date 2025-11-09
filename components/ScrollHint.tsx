"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollHintProps {
  targetSelector?: string; // 目标选择器，默认为下一个section
  hideAfterScroll?: number; // 滚动多少像素后隐藏，默认100
}

export default function ScrollHint({ 
  targetSelector,
  hideAfterScroll = 100 
}: ScrollHintProps) {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // 当用户滚动超过指定像素时隐藏提示
      if (window.scrollY > hideAfterScroll) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideAfterScroll]);

  const scrollToNext = () => {
    if (typeof window === "undefined") return;
    
    if (targetSelector) {
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    
    // 默认滚动到下一个section
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // 如果没有找到下一个section，滚动到页面底部
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  if (!showScrollHint) return null;

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollToNext}
        className="group flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2 rounded-full p-2"
        aria-label="向下滚动查看更多内容"
      >
        {/* 简洁的向下箭头 */}
        <div className="relative">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-all duration-300 animate-bounce-gentle" />
          {/* 渐变线条装饰 */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </button>
    </div>
  );
}

