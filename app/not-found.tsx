import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-yellow-50/50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-gray-300 dark:text-gray-700 mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            页面未找到
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            抱歉，您访问的页面不存在
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            返回首页
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            <Search className="w-4 h-4 mr-2" />
            查看服务
          </Link>
        </div>
      </div>
    </div>
  );
}

