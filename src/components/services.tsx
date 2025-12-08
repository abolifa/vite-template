"use client";
import { motion } from "framer-motion";
import { Package, Truck, Warehouse, Globe } from "lucide-react";

export default function ServicesFresco() {
  const services = [
    {
      icon: <Globe size={50} strokeWidth={1.8} />,
      title: "استيراد المواد الغذائية",
      text: "نستورد أفضل المنتجات الغذائية من موردين عالميين موثوقين، مع ضمان الجودة العالية والمعايير الصحية.",
    },
    {
      icon: <Truck size={50} strokeWidth={1.8} />,
      title: "التوزيع المحلي",
      text: "شبكة توزيع متكاملة تغطي أغلب المدن والمناطق، لضمان وصول المنتجات في الوقت المناسب وبأفضل حالة.",
    },
    {
      icon: <Warehouse size={50} strokeWidth={1.8} />,
      title: "التخزين وإدارة المخزون",
      text: "مستودعات مجهزة وفق أعلى معايير السلامة، مع نظام دقيق لإدارة المخزون والحفاظ على جودة المنتجات.",
    },
    {
      icon: <Package size={50} strokeWidth={1.8} />,
      title: "الخدمات اللوجستية",
      text: "حلول لوجستية متقدمة تشمل النقل، التحميل، التفريغ، والتوريد، بإدارة احترافية وموثوقية عالية.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-38 bg-white overflow-hidden"
    >
      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/meta/fresco-pattern.png')] bg-repeat pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-[#E8A12B] text-lg font-semibold"
        >
          ماذا نقدم؟
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#0B5C4A] mt-2 mb-14"
          dir="rtl"
        >
          خدماتنا
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              dir="rtl"
            >
              <div className="text-[#0B5C4A] flex justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0B5C4A] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {service.text}
              </p>

              <div className="w-16 h-1 bg-[#E8A12B] rounded-full mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
