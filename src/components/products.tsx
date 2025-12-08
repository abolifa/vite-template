"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const linePath =
  "M400 10 C450 400 200 800 400 1200 C600 1600 250 2000 450 2400 C650 2800 350 3200 400 3600";

const timelineItems = [
  {
    top: 200,
    side: "left",
    title: "الأجبان والألبان",
    text: "مجموعة واسعة من منتجات الأجبان والألبان عالية الجودة، مختارة بعناية لضمان النكهة الممتازة والقيمة الغذائية العالية.",
    image: "/products/cheese.png",
    tilt: 0,
  },
  {
    top: 850,
    side: "right",
    title: "المكسرات والبقوليات",
    text: "نوفر مجموعة متنوعة من المكسرات والبقوليات الطازجة والمستوردة، المناسبة للاستخدامات المنزلية والتجارية.",
    image: "/products/nuts.png",
    tilt: 0,
  },
  {
    top: 1500,
    side: "left",
    title: "المنتجات المعلبة",
    text: "منتجات معلبة عالية الجودة تشمل التونة، الخضروات المعلبة، الصلصات وغيرها، بمعايير سلامة وجودة عالمية.",
    image: "/products/canned.png",
    tilt: 0,
  },
  {
    top: 2150,
    side: "right",
    title: "الزيوت والمواد الغذائية الأساسية",
    text: "نوفر زيوت الطهي والمواد الغذائية الأساسية بجودة ممتازة تلبي احتياجات السوق الليبي.",
    image: "/products/oils.png",
    tilt: 0,
  },
];

const Products = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 20,
    mass: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[2800px] bg-[#f8f4f0] overflow-hidden"
      id="products"
    >
      {/* TIMELINE LINE */}
      <motion.svg
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2800px]"
        viewBox="0 0 800 3600"
        preserveAspectRatio="xMidYMin slice"
      >
        <motion.path
          d={linePath}
          stroke="#0B5C4A"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          fill="none"
        />
      </motion.svg>

      {/* TIMELINE ITEMS */}
      <div className="relative max-w-6xl mx-auto">
        {timelineItems.map((item) => (
          <motion.div
            key={item.title}
            className={`absolute max-w-md ${
              item.side === "left" ? "left-[6%]" : "right-[6%]"
            }`}
            style={{ top: item.top }}
            initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: false }}
          >
            <div className="flex flex-col items-center gap-4">
              {item.image && (
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="max-h-96 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ rotate: item.tilt }}
                />
              )}

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-extrabold text-[#0B5C4A] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-[#0B5C4A] leading-relaxed">
                  {item.text}
                </p>

                {/* Accent Line */}
                <div className="w-24 h-1 bg-[#E8A12B] mx-auto mt-3 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
