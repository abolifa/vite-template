"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FooterFresco() {
  return (
    <footer className="relative w-full bg-[#0B5C4A] text-white pt-20 pb-10 overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/meta/fresco-pattern.png')] bg-repeat"></div>

      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E8A12B]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E8A12B]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14 z-10">
        {/* Logo + Description */}
        <div className="space-y-6" dir="rtl">
          <img
            src="/meta/logo-white.png"
            alt="Fresco Logo"
            className="w-40 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />

          <p className="text-white/80 leading-relaxed text-lg max-w-sm">
            شركة فريسكو لاستيراد المواد الغذائية والمواشي واللحوم — نعمل لتوفير
            منتجات موثوقة عالية الجودة للسوق الليبي عبر شبكة توريد عالمية
            ومعايير مهنية رفيعة.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/fresco.ly"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8A12B] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/fresco.ly/"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8A12B] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/218912186060"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8A12B] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6" dir="rtl">
          <h3 className="text-2xl font-bold text-[#E8A12B] mb-4">
            روابط سريعة
          </h3>

          <ul className="space-y-3 text-white/85">
            <li>
              <a href="#hero" className="hover:text-[#E8A12B] transition">
                الرئيسية
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#E8A12B] transition">
                من نحن
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#E8A12B] transition">
                خدماتنا
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-[#E8A12B] transition">
                المنتجات
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#E8A12B] transition">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6" dir="rtl">
          <h3 className="text-2xl font-bold text-[#E8A12B] mb-4">تواصل معنا</h3>

          <div className="flex items-start gap-4 text-white/85">
            <MapPin className="w-6 h-6 text-[#E8A12B]" />
            <p>مصراتة – ليبيا</p>
          </div>

          <div className="flex items-center gap-4 text-white/85">
            <Phone className="w-6 h-6 text-[#E8A12B]" />
            <p dir="ltr">+218 91 210 6763</p>
          </div>

          <div className="flex items-center gap-4 text-white/85">
            <Phone className="w-6 h-6 text-[#E8A12B]" />
            <p dir="ltr">+218 91 211 1619</p>
          </div>

          <div className="flex items-center gap-4 text-white/85">
            <Mail className="w-6 h-6 text-[#E8A12B]" />
            <p>info@fresco.com.ly</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-16 border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Fresco – جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
