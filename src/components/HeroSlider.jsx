import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "../data/heroSlides";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.25,
    },
  },
};

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[75vh] min-h-[520px] max-h-[800px] md:h-[calc(100vh-100px)] overflow-hidden bg-gray-950">
      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        loop={heroSlides.length > 1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActive(swiper.realIndex);
        }}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full overflow-hidden">
              {/* BACKGROUND IMAGE */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                initial={{ scale: 1.12 }}
                animate={{
                  scale: active === index ? 1 : 1.12,
                }}
                transition={{
                  duration: 6,
                  ease: "linear",
                }}
              />

              {/* DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
              <div className="absolute inset-0 bg-black/10" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
                  <AnimatePresence mode="wait">
                    {active === index && (
                      <motion.div
                        key={slide.id}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="max-w-3xl pb-5"
                      >
                        {/* BRAND LABEL */}
                        <motion.div
                          variants={textItem}
                          className="flex items-center gap-3 mb-6"
                        >
                          <span className="w-10 h-[2px] bg-red-600" />

                          <span className="text-red-500 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                            TUAN ANH STEEL
                          </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.h1
                          variants={textItem}
                          className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                        >
                          {slide.title}
                        </motion.h1>

                        {/* RED LINE */}
                        <motion.div
                          variants={textItem}
                          className="w-20 h-1 bg-red-600 mt-6"
                        />

                        {/* DESCRIPTION */}
                        <motion.p
                          variants={textItem}
                          className="text-gray-200 mt-6 text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl"
                        >
                          {slide.description}
                        </motion.p>

                        {/* BUTTONS */}
                        <motion.div
                          variants={textItem}
                          className="mt-8 flex flex-wrap items-center gap-4"
                        >
                          {/* ABOUT BUTTON */}
                          <a
                            href="#about"
                            className="group relative overflow-hidden inline-flex items-center gap-3 bg-red-600 text-white px-6 sm:px-7 py-3.5 font-bold text-sm transition-all duration-300"
                          >
                            <span className="relative z-10">VỀ CHÚNG TÔI</span>

                            <FaArrowRightLong className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />

                            <span className="absolute inset-0 bg-gray-900 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                          </a>

                          {/* SERVICES BUTTON */}
                          <a
                            href="#services"
                            className="group inline-flex items-center gap-3 border border-white/70 text-white px-6 sm:px-7 py-3.5 font-bold text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
                          >
                            KHÁM PHÁ DỊCH VỤ
                            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
                          </a>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SLIDE INDICATORS */}
      {heroSlides.length > 1 && (
        <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              aria-label={`Chuyển đến slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              className="group flex items-center justify-center py-1"
            >
              <motion.div
                animate={{
                  height: active === index ? 42 : 18,
                  backgroundColor: active === index ? "#dc2626" : "#ffffff",
                  opacity: active === index ? 1 : 0.55,
                }}
                transition={{ duration: 0.3 }}
                className="w-1.5 rounded-full"
              />
            </button>
          ))}
        </div>
      )}

      {/* BOTTOM DECORATIVE LINE */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          key={active}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5.5,
            ease: "linear",
          }}
          className="h-full bg-red-600"
        />
      </div>

      {/* SLIDE NUMBER */}
      {heroSlides.length > 1 && (
        <div className="absolute bottom-7 right-6 md:right-10 z-20 text-white/80 text-xs font-bold tracking-widest">
          <span className="text-red-500">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mx-2">/</span>
          {String(heroSlides.length).padStart(2, "0")}
        </div>
      )}
    </section>
  );
}
