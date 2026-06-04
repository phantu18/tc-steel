import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CgArrowLongRight } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaChevronLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import { products } from "../data/products";

export default function OurProducts() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sản Phẩm Của Chúng Tôi
          </h2>
          <p className="text-gray-500 mt-4">
            Biến ý tưởng thiết kế thành sản phẩm thực tế với độ chính xác cao và
            chất lượng bền vững theo thời gian
          </p>
          <div className="flex justify-center mt-6">
            <span className="w-32 h-[3px] bg-red-600" />
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={32}
          speed={600}
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
              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px]
                    object-cover
                    transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:rotate-[0.5deg]
                  "
                />

                {/* GRADIENT OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition duration-300 ease-out
                  "
                />

                {/* SHINE EFFECT */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-700
                    before:absolute before:inset-0
                    before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                    before:translate-x-[-100%]
                    group-hover:before:translate-x-[100%]
                    before:transition before:duration-700
                  "
                />

                {/* BORDER */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    border border-white/10
                    group-hover:border-red-500/60
                    transition duration-300
                  "
                />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* TITLE */}
                  <h3
                    className="
                      text-lg md:text-xl font-semibold mb-2
                      translate-y-6 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300 ease-out
                    "
                  >
                    {item.name}
                  </h3>

                  {/* SUBTEXT */}
                  <p
                    className="
                      text-sm text-gray-300 mb-4
                      translate-y-6 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300 ease-out delay-75
                    "
                  >
                    {item.p}
                  </p>

                  {/* BUTTON */}
                  <div
                    className="
                      translate-y-6 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300 ease-out delay-150
                    "
                  >
                    <button
                      className="
                        inline-flex items-center gap-2
                        text-sm font-medium
                        border border-white/70
                        px-4 py-2 rounded-full
                        backdrop-blur-sm
                        hover:bg-red-600 hover:border-red-600
                        transition duration-300
                      "
                    >
                      View Project
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <CgArrowLongRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            className="
              products-prev
              w-12 h-12 border border-gray-300
              flex items-center justify-center
              hover:bg-red-600 hover:text-white
              transition duration-300
            "
          >
            <FaChevronLeft />
          </button>

          <button
            className="
              products-next
              w-12 h-12 border border-gray-300
              flex items-center justify-center
              hover:bg-red-600 hover:text-white
              transition duration-300
            "
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={products.map((p) => ({ src: p.image }))}
      />
    </section>
  );
}
