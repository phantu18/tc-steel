import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "../data/heroSlides";

/* CHA chứa text */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.2,
    },
  },
};

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[calc(100vh-120px)] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* BACKGROUND */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                animate={{ scale: active === index ? 1.05 : 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/45" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <AnimatePresence mode="wait">
                    {active === index && (
                      <motion.div
                        key={slide.id}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="max-w-3xl"
                      >
                        {/* TITLE */}
                        <motion.h1
                          variants={textItem}
                          className="
                            text-white font-bold
                            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                          "
                        >
                          {slide.title}
                        </motion.h1>

                        {/* DESCRIPTION */}
                        <motion.p
                          variants={textItem}
                          className="
                            text-gray-200 mt-4
                            text-sm sm:text-base md:text-lg
                          "
                        >
                          {slide.description}
                        </motion.p>

                        {/* BUTTONS */}
                        <motion.div
                          variants={textItem}
                          className="mt-6 flex flex-wrap gap-4"
                        >
                          <button
                            className="
                              bg-red-600 text-white font-medium
                              px-6 py-3
                              hover:bg-red-700 transition
                            "
                          >
                            Về Công Ty →
                          </button>

                          <button
                            className="
                              bg-white text-black font-medium
                              px-6 py-3
                              hover:bg-gray-100 transition
                            "
                          >
                            Dịch Vụ
                          </button>
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

      {/* INDICATOR */}
      <div
        className="
          absolute right-4 md:right-6
          top-1/2 -translate-y-1/2
          z-20 flex flex-col gap-4
        "
      >
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className="group"
          >
            <motion.div
              animate={{
                height: active === i ? 36 : 14,
                opacity: active === i ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
              className="w-1.5 bg-white rounded-full"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
