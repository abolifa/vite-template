"use client";
import { motion } from "framer-motion";
import { Wheat } from "lucide-react";

export default function AboutFresco() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      {/* Background Art Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('/meta/fresco-pattern.png')] bg-repeat"></div>

      {/* Left – Text Side */}
      <div className="relative bg-white flex items-center justify-center px-10 md:px-20 py-24">
        <div className="absolute top-20 right-20">
          <Wheat
            size={80}
            strokeWidth={2.2}
            color="#0b5c4a"
            className="opacity-25"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="max-w-xl space-y-6"
          dir="rtl"
        >
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[#E8A12B] text-lg font-semibold tracking-wide"
          >
            نبذة عن الشركة
          </motion.span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B5C4A] leading-tight">
            من نحن
          </h2>

          {/* Accent Line */}
          <div className="w-20 h-1 bg-[#E8A12B] rounded-full mb-4"></div>

          {/* Body Text */}
          <p className="text-lg text-gray-700 leading-relaxed">
            شركة فريسكو شركة ليبية رائدة في مجال استيراد المواد الغذائية
            والمواشي واللحوم، نعمل وفق أعلى المعايير الدولية لضمان الجودة وتوفير
            أفضل المنتجات للسوق المحلي.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            نحرص على بناء شراكات موثوقة مع أكبر الموردين حول العالم وتقديم خدمات
            متكاملة تلبي احتياجات العملاء بمهنية وموثوقية عالية.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#services"
              className="inline-block mt-4 px-6 py-3 bg-[#0B5C4A] text-white font-semibold rounded-full hover:bg-[#0a4e3f] transition-colors duration-300"
            >
              اكتشف خدماتنا
            </a>
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 border-2 border-[#E8A12B] text-[#E8A12B] font-semibold rounded-full hover:bg-[#E8A12B] hover:text-white transition-colors duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right – Image Side */}
      <div className="relative bg-[#E8A12B] flex items-center justify-center overflow-hidden">
        {/* Cinematic glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)] pointer-events-none"></div>

        {/* Soft shadow on ground */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/images/car.png"
          alt="Fresco Van"
          className="relative w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
      </div>
    </section>
  );
}
