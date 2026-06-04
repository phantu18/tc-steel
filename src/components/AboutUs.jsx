import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import imgAboutUs from "../assets/pexels-davincidelasfotos-28824101.jpg";

export default function AboutSection() {
  // container chính (giống Services)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // item cho image
  const imageItem = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // container cho text
  const contentContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // từng dòng text
  const contentItem = {
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

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center"
        >
          {/* IMAGE */}
          <motion.div variants={imageItem}>
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-xl group">
              <img
                src={imgAboutUs}
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={contentContainer}>
            <motion.p
              variants={contentItem}
              className="text-red-600 font-semibold mb-2 text-sm md:text-base"
            >
              CÔNG TY CHÚNG TÔI
            </motion.p>

            <motion.div
              variants={contentItem}
              className="w-16 h-[3px] bg-red-600 mb-4"
            ></motion.div>

            <motion.h2
              variants={contentItem}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              Giải pháp gia công cơ khí chính xác cho mọi nhu cầu sản xuất
            </motion.h2>

            <motion.p
              variants={contentItem}
              className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base"
            >
              Sắt Thép Tuấn Anh cung cấp dịch vụ gia công CNC Laser, chấn CNC và
              thiết kế bản vẽ kỹ thuật với độ chính xác cao. Chúng tôi luôn tối
              ưu quy trình sản xuất nhằm mang đến sản phẩm chất lượng, bền bỉ và
              phù hợp với yêu cầu thực tế của khách hàng.
            </motion.p>

            {/* BUTTON */}
            <motion.div variants={contentItem}>
              <button className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 border border-red-600 text-red-600 font-semibold group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  TÌM HIỂU THÊM
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  <FaArrowRightLong />
                </span>

                {/* hiệu ứng slide đỏ */}
                <span className="absolute inset-0 bg-red-600 origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"></span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
