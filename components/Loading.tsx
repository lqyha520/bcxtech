"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-50/50 dark:bg-[#0f1419]">
      <div className="text-center">
        {/* Logo动画 */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-black text-3xl">BCX</span>
          </div>
        </div>
        
        {/* 加载文字 */}
        <p className="text-sm font-bold text-gray-600 dark:text-gray-400 animate-pulse">
          加载中...
        </p>
        
        {/* 加载条 */}
        <div className="w-48 h-1 mx-auto mt-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}

