"use client";
import { motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";

export default function HeroFresco() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/meta/fresco-pattern.png')] bg-repeat" />

      {/* Cinematic depth gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,150,0.25),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(11,92,74,0.08)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_80%)] mix-blend-multiply pointer-events-none" />

      {/* Wheat Icon */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.9 }}
        animate={{ opacity: 0.35, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-28 right-20"
      >
        <Wheat size={95} strokeWidth={2.2} color="#0b5c4a" />
      </motion.div>

      {/* Leaf Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 0.4, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-28 left-20"
      >
        <Leaf size={95} strokeWidth={2.2} color="#E8A12B" />
      </motion.div>

      {/* Custom Food Abstract Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-16 right-24"
      >
        <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
          <path
            d="M10 40C10 60 30 75 55 75C80 75 100 60 100 40H10Z"
            stroke="#0b5c4a"
            strokeWidth="4"
          />
          <path
            d="M25 35C30 25 50 20 55 28C60 20 80 25 85 35"
            stroke="#E8A12B"
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          src="/meta/logo.png"
          alt="Fresco Logo"
          className="w-56 md:w-96 mb-6 drop-shadow-[0_0_30px_rgba(232,161,43,0.25)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#0b5c4a] mb-4 leading-[1.2]"
          dir="rtl"
        >
          شركة فريسكو لاستيراد المواد الغذائية والمواشي واللحوم
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.45, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Quality food supply for the Libyan market with trusted international
          sourcing
        </motion.p>
      </motion.div>
    </section>
  );
}
