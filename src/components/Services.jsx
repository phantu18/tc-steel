import { services } from "../data/services";
import { motion } from "framer-motion";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={item}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-3 text-red-600 text-sm font-bold tracking-[0.18em] uppercase mb-4">
            <span className="w-8 h-[2px] bg-red-600" />
            OUR SERVICE
            <span className="w-8 h-[2px] bg-red-600" />
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            GIẢI PHÁP GIA CÔNG
            <span className="text-red-600"> CƠ KHÍ CHUYÊN NGHIỆP</span>
          </h2>

          <p className="text-gray-500 mt-5 text-sm md:text-base leading-7">
            Sắt Thép Tuấn Anh cung cấp các giải pháp gia công cơ khí chính xác,
            ứng dụng công nghệ CNC hiện đại, đáp ứng đa dạng yêu cầu kỹ thuật và
            tối ưu hiệu quả sản xuất cho khách hàng.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={item}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white border border-gray-200 hover:border-red-600 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* TOP ACCENT */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-red-600 group-hover:w-full transition-all duration-500" />

              <div className="p-7 sm:p-8">
                {/* ICON */}
                <div className="flex items-center justify-between mb-7">
                  <div className="w-[72px] h-[72px] flex items-center justify-center bg-red-50 border border-red-100 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="text-4xl font-extrabold text-gray-100 group-hover:text-red-50 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm leading-7 min-h-[84px]">
                  {service.description}
                </p>

                {/* DIVIDER */}
                <div className="w-full h-px bg-gray-100 my-6" />

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <FaCheck className="text-red-600" />
                    Gia công theo yêu cầu
                  </div>

                  <a
                    href={service.link || "#contact"}
                    className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 border border-red-600 text-red-600 text-xs font-bold tracking-wide group/button"
                  >
                    <span className="relative z-10 group-hover/button:text-white transition-colors duration-300">
                      ĐẶT HÀNG
                    </span>

                    <FaArrowRightLong className="relative z-10 group-hover/button:text-white group-hover/button:translate-x-1 transition-all duration-300" />

                    <span className="absolute inset-0 bg-red-600 scale-x-0 origin-left group-hover/button:scale-x-100 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        {/* <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-600 text-sm md:text-base mb-5">
            Bạn đang cần giải pháp gia công cơ khí theo yêu cầu?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-red-600 text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300"
          >
            LIÊN HỆ TƯ VẤN
            <FaArrowRightLong />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
