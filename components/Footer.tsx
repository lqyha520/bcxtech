import Link from "next/link";
import { Mail, Phone, MapPin, QrCode } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-50/95 dark:bg-[#1a2332]/95 backdrop-blur-lg border-t border-amber-200/50 dark:border-cyan-500/30">
      <div className="container mx-auto px-4 py-8">
        {/* 主要内容 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo 和 二维码 */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">BCX</span>
              </div>
              <div>
                <div className="text-lg font-black text-gray-900 dark:text-white">布草芯科技</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">专注企业数字化转型</div>
              </div>
            </div>
            {/* 微信二维码 */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-lg border border-amber-200/50 dark:border-cyan-500/30 p-1.5 shadow-md flex items-center justify-center">
                {/* 二维码占位区域 - 可以替换为实际的二维码图片 */}
                <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </div>
                {/* 如果使用实际图片，取消注释下面的代码并注释上面的占位div */}
                {/* <Image
                  src="/wechat-qrcode.png"
                  alt="微信二维码"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                /> */}
              </div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">微信二维码</div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>400-888-8888</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>contact@bcx.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>深圳市南山区</span>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} 布草芯科技. All rights reserved. | 
            <Link href="/privacy" className="ml-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              隐私政策
            </Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
