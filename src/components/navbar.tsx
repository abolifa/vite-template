"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navs = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "منتجاتنا", href: "#products" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm py-0"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <a href="#hero">
          <img src={"/meta/nav.png"} alt="Logo" className="h-18 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navs.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className="text-grey-800 hover:text-[#1a8160] transition-colors duration-300"
            >
              {nav.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:info@fresco.com.ly"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-9 h-9 flex items-center justify-center rounded-full border border-gray-800 p-2 hover:border-[#1a8160] transition-all"
          >
            <Mail
              size={32}
              className="text-gray-800 transition-all group-hover:text-[#1a8160] hover:shadow-2xl"
            />
          </a>

          <a
            href="https://wa.me/218912106763"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-9 h-9 flex items-center justify-center rounded-full border border-gray-800 p-2 hover:border-green-800 transition-all"
          >
            <FaWhatsapp
              size={32}
              className="text-gray-800 transition-all group-hover:text-green-800"
            />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <Menu
              size={32}
              className={cn("text-gray-800", { "text-green-800": open })}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-md mt-2 px-6 py-6 flex flex-col gap-6 text-lg text-gray-700">
          <a href="#about" className="hover:text-green-700">
            من نحن
          </a>
          <a href="#services" className="hover:text-green-700">
            خدماتنا
          </a>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            تواصل معنا
          </Button>
        </div>
      )}
    </header>
  );
}
