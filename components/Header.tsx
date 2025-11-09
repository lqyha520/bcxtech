"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "首页", href: "/" },
  { name: "服务", href: "/services" },
  { name: "案例", href: "/portfolio" },
  { name: "关于", href: "/about" },
  { name: "新闻", href: "/news" },
  { name: "联系", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === "undefined") return;
    
    // 从 localStorage 读取主题设置，如果没有则默认为暗色模式
    try {
      const savedTheme = localStorage.getItem("theme");
      const isDarkMode = savedTheme === "dark" || (!savedTheme && true);
      
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      // localStorage 访问失败时的降级处理
      console.error("Failed to access localStorage:", error);
    }
    
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    try {
      if (newIsDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (error) {
      console.error("Failed to update theme:", error);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-yellow-50/95 dark:bg-[#1a2332]/95 backdrop-blur-lg shadow-md border-b border-amber-200/50 dark:border-cyan-500/30"
          : "bg-yellow-50/90 dark:bg-[#1a2332]/90 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
              {/* 外圈 */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-blue-600 shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 dark:group-hover:shadow-cyan-500/40 transition-all group-hover:scale-105"></div>
              {/* 字母 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-lg tracking-tighter">BCX</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-gray-900 dark:text-white leading-none group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                布草芯科技
              </span>
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 leading-none mt-0.5">
                BUCAOXIN TECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="主导航">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold transition-all rounded-lg relative focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2",
                  isActive(item.href)
                    ? "text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-900/20"
                    : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 rounded-full" aria-hidden="true"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2"
              aria-label={isDark ? "切换到亮色模式" : "切换到暗色模式"}
              aria-pressed={isDark}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all shadow-sm shadow-blue-500/25 hover:shadow-md hover:shadow-blue-500/30"
            >
              立即咨询
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2"
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 dark:border-blue-500/30 animate-fade-in"
            role="menu"
            aria-label="移动端导航菜单"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-lg transition-all",
                    isActive(item.href)
                      ? "text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-900/20"
                      : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <button
                  onClick={toggleTheme}
                  className="w-full px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2"
                  aria-label={isDark ? "切换到亮色模式" : "切换到暗色模式"}
                  aria-pressed={isDark}
                  role="menuitem"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>浅色模式</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>暗黑模式</span>
                    </>
                  )}
                </button>
                <Link
                  href="/contact"
                  className="block mx-4 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all text-center shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}