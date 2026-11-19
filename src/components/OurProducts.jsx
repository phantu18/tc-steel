import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { motion, useReducedMotion } from "framer-motion";

import { CgArrowLongRight } from "react-icons/cg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "swiper/css";
import "swiper/css/navigation";

import { products } from "../data/products";

// ========================================
// ANIMATION VARIANTS
// ========================================

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ========================================
// MAIN COMPONENT
// ========================================

export default function OurProducts() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="block text-red-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4"
          >
            Our Collection
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Sản Phẩm Của Chúng Tôi
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 mt-5 leading-relaxed"
          >
            Biến ý tưởng thiết kế thành sản phẩm thực tế với độ chính xác cao và
            chất lượng bền vững theo thời gian
          </motion.p>

          {/* ANIMATED LINE */}
          <motion.div variants={fadeUp} className="flex justify-center mt-7">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block h-[3px] bg-red-600"
            />
          </motion.div>
        </motion.div>

        {/* ================= SLIDER ================= */}

        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={32}
          speed={800}
          freeMode={{
            enabled: true,
            momentumRatio: 0.5,
            momentumBounce: false,
          }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3.2 },
          }}
          navigation={{
            prevEl: ".products-prev",
            nextEl: ".products-next",
          }}
        >
          {products.map((item, i) => (
            <SwiperSlide key={item.id}>
              {/* CARD */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut",
                        },
                      }
                }
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                {/* IMAGE */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  initial={{
                    scale: shouldReduceMotion ? 1 : 1.18,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.1,
                          transition: {
                            duration: 0.8,
                            ease: "easeOut",
                          },
                        }
                  }
                  className="
                    w-full
                    h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px]
                    object-cover
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/85 via-black/40 to-transparent
                    opacity-50
                    group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* SHINE EFFECT */}
                <div
                  className="
                    absolute inset-0
                    pointer-events-none
                    overflow-hiddens
                    before:absolute before:inset-0
                    before:-translate-x-full
                    group-hover:before:translate-x-full
                    before:transition-transform
                    before:duration-1000
                  "
                />

                {/* BORDER */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    border border-white/10
                    group-hover:border-red-500/70
                    transition-colors duration-500
                    pointer-events-none
                  "
                />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">
                  {/* SMALL LINE */}
                  <div
                    className="
                      
                    "
                  />

                  {/* TITLE */}
                  <h3
                    className="
                      text-lg md:text-xl font-semibold mb-2
                      translate-y-5 opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all duration-500 ease-out
                    "
                  >
                    {item.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-sm text-gray-300 mb-5
                      translate-y-5 opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all duration-500 ease-out delay-75
                    "
                  >
                    {item.p}
                  </p>

                  {/* BUTTON */}
                  <div
                    className="
                      translate-y-5 opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all duration-500 ease-out delay-150
                    "
                  >
                    <button
                      type="button"
                      className="
                        inline-flex items-center gap-3
                        text-sm font-medium
                        border border-white/70
                        px-5 py-2.5 rounded-full
                        backdrop-blur-sm
                        hover:bg-red-600 hover:border-red-600
                        transition-all duration-300
                      "
                    >
                      View Project
                      <CgArrowLongRight
                        className="
                          text-lg
                          transition-transform duration-300
                          group-hover:translate-x-2
                        "
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= NAVIGATION ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button
            type="button"
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.1,
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                  }
            }
            whileTap={
              shouldReduceMotion
                ? {}
                : {
                    scale: 0.9,
                  }
            }
            className="
              products-prev
              w-12 h-12
              border border-gray-300
              flex items-center justify-center
              transition-colors duration-300
              cursor-pointer
            "
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            type="button"
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.1,
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                  }
            }
            whileTap={
              shouldReduceMotion
                ? {}
                : {
                    scale: 0.9,
                  }
            }
            className="
              products-next
              w-12 h-12
              border border-gray-300
              flex items-center justify-center
              transition-colors duration-300
              cursor-pointer
            "
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={products.map((p) => ({
          src: p.image,
        }))}
      />
    </section>
  );
}
