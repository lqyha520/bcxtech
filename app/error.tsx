"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-yellow-50/50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AlertCircle className="w-16 h-16 mx-auto text-red-500 dark:text-red-400 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            出现错误
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            抱歉，页面加载时出现了问题
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            重试
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

