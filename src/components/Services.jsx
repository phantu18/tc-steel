import { services } from "../data/services";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dịch Vụ Chúng Tôi Cung Cấp
          </h2>
          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Mang đến giải pháp gia công cơ khí chính xác, kết hợp công nghệ CNC
            hiện đại nhằm đáp ứng tối đa yêu cầu kỹ thuật và tối ưu hiệu quả sản
            xuất cho khách hàng
          </p>

          <div className="flex items-center justify-center mt-6">
            <span className="w-10 h-[2px] bg-gray-300" />
            <span className="w-10 h-[2px] bg-red-600 mx-2" />
            <span className="w-10 h-[2px] bg-gray-300" />
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((itemData) => (
            <motion.div
              key={itemData.id}
              variants={item}
              className="
                group bg-white border border-red-600
                px-8 pt-12 pb-10 text-center
              "
            >
              {/* ICON */}
              <div className="flex justify-center -mt-16 mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-white border border-red-600">
                  <img
                    src={itemData.icon}
                    alt={itemData.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {itemData.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {itemData.description}
              </p>

              {/* BUTTON */}
              <button
                className="
    relative overflow-hidden
    inline-flex items-center gap-2
    text-sm font-semibold
    px-6 py-3 border border-gray-300
    transition-all duration-300
    group
  "
              >
                {/* TEXT */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  CHI TIẾT
                </span>

                {/* ICON */}
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  <FaArrowRightLong />
                </span>

                {/* RED SLIDE */}
                <span
                  className="
      absolute inset-0
      bg-red-600
      origin-left scale-x-0
      transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
      group-hover:scale-x-100
    "
                ></span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
