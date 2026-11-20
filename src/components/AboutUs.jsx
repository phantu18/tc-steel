import { motion } from "framer-motion";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import imgAboutUs from "../assets/1795149769578_4083931076655783797_4083931076655783797_b5609fa13b50daad923903f55934c200.jpg";

export default function AboutSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentItem = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const features = [
    "Gia công CNC Laser chính xác cao",
    "Chấn CNC theo yêu cầu kỹ thuật",
    "Uốn Ống - Lốc theo yêu cầu",
    "Thiết kế bản vẽ kỹ thuật chuyên nghiệp",
    "Đảm bảo chất lượng và tiến độ sản xuất",
  ];

  return (
    <section
      id="about"
      className="relative py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* IMAGE */}
          <motion.div variants={imageItem} className="relative">
            <div className="relative pl-3 pb-3">
              {/* Khung trang trí */}
              <div className="absolute left-0 bottom-0 w-3/4 h-3/4 border-l-[5px] border-b-[5px] border-red-600" />

              <div className="relative h-[280px] sm:h-[360px] md:h-[430px] lg:h-[470px] overflow-hidden rounded-sm shadow-xl">
                <img
                  src={imgAboutUs}
                  alt="Quy trình gia công cơ khí tại Sắt Thép Tuấn Anh"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              {/* Nhãn thương hiệu */}
              <div className="absolute -bottom-1 right-0 sm:right-5 bg-red-600 text-white px-5 py-3 shadow-lg">
                <p className="text-xs tracking-[0.2em] font-medium">
                  TUAN ANH STEEL
                </p>
                <p className="text-sm font-bold mt-1">CHẤT LƯỢNG TẠO UY TÍN</p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={container} className="lg:pl-2">
            <motion.div variants={contentItem}>
              <span className="inline-flex items-center gap-3 text-red-600 font-bold text-sm tracking-[0.18em] uppercase">
                <span className="w-8 h-[2px] bg-red-400" />
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={contentItem}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight mt-5 mb-5"
            >
              CÔNG TY TNHH MTV
              <span className="text-[#00105B]"> SẮT THÉP</span>
              <span className=" text-red-600"> TUẤN ANH</span>
            </motion.h2>

            <motion.p
              variants={contentItem}
              className="text-gray-600 text-sm md:text-base leading-7 mb-6 text-justify"
            >
              Sắt Thép Tuấn Anh cung cấp dịch vụ gia công CNC Laser, chấn CNC và
              thiết kế bản vẽ kỹ thuật với độ chính xác cao. Chúng tôi không
              ngừng cải tiến quy trình sản xuất, chú trọng chất lượng trong từng
              công đoạn nhằm mang đến những sản phẩm bền bỉ, đáp ứng tốt yêu cầu
              thực tế của khách hàng.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              variants={contentItem}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                    <FaCheck size={10} />
                  </span>
                  <span className="text-gray-700 text-sm leading-6 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.div variants={contentItem}>
              <a
                href="#services"
                className="relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 bg-red-600 text-white font-bold text-sm tracking-wide group"
              >
                <span className="relative z-10">TÌM HIỂU THÊM</span>

                <FaArrowRightLong className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />

                <span className="absolute inset-0 bg-gray-900 translate-x-[-101%] transition-transform duration-300 group-hover:translate-x-0" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
