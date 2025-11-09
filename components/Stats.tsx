"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 200,
    suffix: "+",
    label: "成功项目",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "客户信赖",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    value: 5,
    suffix: "",
    label: "服务年限",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "团队成员",
    color: "from-green-500 to-emerald-500",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const Icon = stat.icon;

  return (
    <div
      ref={cardRef}
      className="text-center"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* 数字 */}
      <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
        {isVisible ? count : 0}
        {stat.suffix}
      </div>

      {/* 标签 */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-yellow-50/30 dark:bg-[#1a2332]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

