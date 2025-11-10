"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollHint from "@/components/ScrollHint";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock, MessageSquare, Users, Zap, Shield } from "lucide-react";

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 验证表单
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 模拟提交（实际项目中应该调用 API）
    try {
      // 这里可以添加实际的 API 调用
      // await submitForm(formData);
      
      await new Promise((resolve) => setTimeout(resolve, 500)); // 模拟网络请求

      setSubmitted(true);
      setErrors({});
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("提交失败:", error);
      setErrors({ message: "提交失败，请稍后重试" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 验证手机号格式
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // 验证表单
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "姓名至少需要2个字符";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "请输入联系电话";
    } else if (!validatePhone(formData.phone.trim())) {
      newErrors.phone = "请输入正确的手机号码（11位数字）";
    }

    if (!formData.message.trim()) {
      newErrors.message = "请描述您的需求";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "需求描述至少需要10个字符";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });

    // 实时验证
    if (errors[name as keyof FormErrors]) {
      const newErrors = { ...errors };
      delete newErrors[name as keyof FormErrors];
      setErrors(newErrors);
    }

    // 手机号实时验证
    if (name === "phone" && value.trim()) {
      if (!validatePhone(value.trim())) {
        setErrors({ ...errors, phone: "请输入正确的手机号码" });
      } else {
        const newErrors = { ...errors };
        delete newErrors.phone;
        setErrors(newErrors);
      }
    }
  };

  return (
    <main className="min-h-screen bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:to-[#1a2332]">
      <Header />
      
      {/* Hero Section - 首屏设计 */}
      <section className="pt-16 md:pt-20 min-h-screen md:h-screen flex flex-col overflow-y-auto md:overflow-hidden bg-yellow-50 dark:bg-gradient-to-b dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419] relative">
        {/* 装饰背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(161,161,170,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-4 md:py-2 relative z-10 w-full flex-1 flex flex-col justify-start">
          <div className="max-w-7xl mx-auto w-full">
            {/* 顶部：标题和描述 - 移动端优化字体大小，PC端保持原样 */}
            <div className="text-center mb-4 md:mb-2 animate-fade-in">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 md:mb-0.5 leading-tight tracking-tight animate-slide-up">
                <span className="whitespace-nowrap">联系我们</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 whitespace-nowrap"> · 开启合作</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-semibold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                专业团队 · 快速响应 · 7x24小时服务
              </p>
            </div>
            
            {/* 中间：联系方式和表单 - 移动端优化间距和触摸目标，PC端保持原样 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 max-w-5xl mx-auto animate-fade-in mb-4 md:mb-0" style={{ animationDelay: '0.3s' }}>
              {/* 左侧：联系方式 - 移动端优化触摸目标 */}
              <div className="bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg border border-amber-200/50 dark:border-cyan-400/20 shadow-lg p-4 md:p-1.5">
                <div className="flex items-center gap-2 md:gap-1.5 mb-3 md:mb-1">
                  <div className="w-8 h-8 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-4 h-4 md:w-3 md:h-3 text-white" />
                  </div>
                  <h3 className="text-sm md:text-sm font-black text-gray-900 dark:text-white">联系方式</h3>
                </div>
                <div className="space-y-2 md:space-y-1">
                  {[
                    { icon: Phone, label: "电话", value: "400-888-8888", color: "from-blue-600 to-cyan-500" },
                    { icon: Mail, label: "邮箱", value: "contact@bcx.com", color: "from-purple-600 to-pink-500" },
                    { icon: MapPin, label: "地址", value: "深圳南山科技园", color: "from-orange-600 to-red-500" },
                    { icon: Clock, label: "时间", value: "周一至周五 9-18", color: "from-green-600 to-emerald-500" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="group/item flex items-start gap-2 md:gap-1 p-2 md:p-0.5 rounded-lg hover:bg-blue-50 dark:hover:bg-cyan-900/10 transition-colors">
                        <div className={`w-8 h-8 md:w-5 md:h-5 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-4 h-4 md:w-2.5 md:h-2.5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs md:text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 md:mb-0">{item.label}</div>
                          <div className="text-sm md:text-sm font-black text-gray-900 dark:text-white leading-tight group-hover/item:text-blue-600 dark:group-hover/item:text-cyan-400 transition-colors break-words">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 服务优势 */}
                <div className="mt-3 md:mt-1 pt-3 md:pt-1 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-2 md:gap-1">
                    {[
                      { icon: Users, label: "专业团队", color: "from-blue-600 to-cyan-500" },
                      { icon: Zap, label: "快速响应", color: "from-purple-600 to-pink-500" },
                      { icon: Shield, label: "安全保障", color: "from-orange-600 to-red-500" },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="text-center">
                          <div className={`w-10 h-10 md:w-7 md:h-7 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mx-auto mb-1.5 md:mb-0.5`}>
                            <Icon className="w-5 h-5 md:w-3.5 md:h-3.5 text-white" />
                          </div>
                          <div className="text-xs md:text-xs font-bold text-gray-600 dark:text-gray-300">{item.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

              {/* 右侧：表单 - 移动端优化间距和触摸目标，PC端保持原样 */}
              <div className="bg-white/90 dark:bg-[#1a2332]/90 backdrop-blur-sm rounded-lg border border-amber-200/50 dark:border-cyan-400/20 shadow-lg p-4 md:p-1.5">
                <div className="text-center mb-3 md:mb-1">
                  <h3 className="text-sm md:text-sm font-black text-gray-900 dark:text-white mb-1 md:mb-0.5">
                    在线咨询
                  </h3>
                  <p className="text-xs md:text-xs text-gray-500 dark:text-gray-400">
                    填写表单，我们会在24小时内回复您
                  </p>
                </div>

                {submitted && (
                  <div className="mb-3 md:mb-1.5 p-3 md:p-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg flex items-center gap-2 md:gap-1.5">
                    <CheckCircle className="w-4 h-4 md:w-3.5 h-3.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-xs md:text-xs font-bold text-green-700 dark:text-green-300">提交成功！我们会尽快联系您</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-1">
                  <div>
                    <label className="block text-xs md:text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 md:mb-0.5">
                      您的姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 md:px-2 md:py-1 rounded-lg border ${
                        errors.name
                          ? "border-red-500 dark:border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      } bg-gray-50 dark:bg-[#0f1419] text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "focus:ring-red-500 dark:focus:ring-red-500"
                          : "focus:ring-blue-500 dark:focus:ring-cyan-400"
                      } focus:border-transparent transition-all text-base md:text-sm min-h-[44px] md:min-h-0`}
                      placeholder="请输入您的姓名"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 md:mt-0.5 text-xs md:text-[10px] text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs md:text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 md:mb-0.5">
                      联系电话 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={11}
                      inputMode="numeric"
                      className={`w-full px-3 py-3 md:px-2 md:py-1 rounded-lg border ${
                        errors.phone
                          ? "border-red-500 dark:border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      } bg-gray-50 dark:bg-[#0f1419] text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "focus:ring-red-500 dark:focus:ring-red-500"
                          : "focus:ring-blue-500 dark:focus:ring-cyan-400"
                      } focus:border-transparent transition-all text-base md:text-sm min-h-[44px] md:min-h-0`}
                      placeholder="请输入11位手机号码"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 md:mt-0.5 text-xs md:text-[10px] text-red-600 dark:text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs md:text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 md:mb-0.5">
                      需求描述 *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      maxLength={500}
                      className={`w-full px-3 py-3 md:px-2 md:py-1 rounded-lg border ${
                        errors.message
                          ? "border-red-500 dark:border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      } bg-gray-50 dark:bg-[#0f1419] text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "focus:ring-red-500 dark:focus:ring-red-500"
                          : "focus:ring-blue-500 dark:focus:ring-cyan-400"
                      } focus:border-transparent resize-none transition-all text-base md:text-xs min-h-[88px] md:min-h-0`}
                      placeholder="请详细描述您的需求（至少10个字符）..."
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    <div className="flex items-center justify-between mt-1 md:mt-0.5">
                      {errors.message ? (
                        <p id="message-error" className="text-xs md:text-[10px] text-red-600 dark:text-red-400">
                          {errors.message}
                        </p>
                      ) : (
                        <div></div>
                      )}
                      <p className="text-xs md:text-[10px] text-gray-500 dark:text-gray-400">
                        {formData.message.length}/500
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 md:px-4 md:py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white rounded-lg font-bold hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm md:text-sm min-h-[48px] md:min-h-0"
                    aria-label="提交咨询表单"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 md:w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-3 h-3" />
                        提交咨询
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动提示 - 移动端隐藏 */}
        <div className="hidden md:block">
          <ScrollHint />
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
