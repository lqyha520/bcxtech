"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // 这里可以添加错误上报逻辑
    // 例如：logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-yellow-50 dark:bg-[#0f1419] flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white dark:bg-[#1a2332] rounded-xl shadow-lg border border-amber-200/50 dark:border-cyan-500/30 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              出错了
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              很抱歉，页面出现了错误。请刷新页面或返回首页。
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
                <p className="text-xs font-mono text-red-600 dark:text-red-400 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                重试
              </button>
              <Link
                href="/"
                className="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                返回首页
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

