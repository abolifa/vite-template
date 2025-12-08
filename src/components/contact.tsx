"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Smartphone } from "lucide-react";

export default function ContactFresco() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("to", "info@fresco.com.ly");

    try {
      const res = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: data,
      });

      const text = await res.text();
      if (text.includes("OK")) {
        setSent(true);
        form.reset();
      } else {
        setError("فشل إرسال الرسالة");
      }
    } catch {
      setError("خطأ في الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-[#faf8f3] overflow-hidden"
    >
      {/* Fresco floating glows */}
      <motion.div
        className="absolute top-20 left-10 w-60 h-60 bg-[#0B5C4A]/20 blur-3xl rounded-full"
        animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-[#E8A12B]/20 blur-2xl rounded-full"
        animate={{ y: [0, 20, 0], x: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      {/* Subtle Fresco pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/meta/fresco-pattern.png')] bg-repeat"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#0B5C4A] via-[#0b6d57] to-[#E8A12B]"
          dir="rtl"
        >
          تواصل معنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto"
          dir="rtl"
        >
          نرحب بتواصلكم للإستفسار حول خدمات فريسكو أو عقد شراكات جديدة.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 1 }}
          className="h-1 bg-[#E8A12B] mx-auto mt-6 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 relative z-10 bg-white/50 rounded-3xl backdrop-blur-md border border-[#0B5C4A]/10">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-[#0B5C4A]/10"
          dir="rtl"
        >
          <h3 className="text-2xl font-bold text-[#0B5C4A] mb-4">
            معلومات التواصل
          </h3>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#E8A12B] w-6 h-6" />
            <p className="text-gray-700 leading-relaxed">مصراتة – ليبيا</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#0B5C4A] w-6 h-6" />
            <p dir="ltr" className="text-gray-700">
              +218 91 210 6763
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Smartphone className="text-[#0B5C4A] w-6 h-6" />
            <p dir="ltr" className="text-gray-700">
              +218 91 211 1619
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#0B5C4A] w-6 h-6" />
            <p className="text-gray-700 break-all">info@fresco.com.ly</p>
          </div>

          <iframe
            width="100%"
            height="250"
            loading="lazy"
            allowFullScreen
            className="rounded-xl mt-4 border border-[#0B5C4A]/20"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5524.533532359537!2d15.117399608909873!3d32.37459573015587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sly!4v1733691600000"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-[#0B5C4A]/10 space-y-6"
          dir="rtl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              required
              placeholder="الاسم الكامل"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B5C4A] outline-none"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="البريد الإلكتروني"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B5C4A] outline-none"
            />
          </div>

          <input
            name="subject"
            type="text"
            required
            placeholder="الموضوع"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B5C4A] outline-none"
          />

          <textarea
            name="message"
            rows={5}
            required
            placeholder="رسالتك"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0B5C4A] outline-none"
          ></textarea>

          {sent && (
            <p className="text-green-700 font-bold text-sm">
              تم إرسال رسالتك بنجاح ✔
            </p>
          )}
          {error && <p className="text-red-600 font-bold text-sm">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 bg-[#0B5C4A] text-white rounded-xl font-semibold shadow-md hover:bg-[#094f3b] transition"
            type="submit"
            disabled={loading}
          >
            {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
