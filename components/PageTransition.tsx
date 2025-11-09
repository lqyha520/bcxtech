"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-yellow-50/50 dark:bg-[#0f1419] pointer-events-none transition-opacity duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-loading-bar"></div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}

