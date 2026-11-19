import React from "react";
import { motion } from "framer-motion";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuClock8 } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const contactItems = [
  {
    icon: <LuClock8 />,
    title: "Giờ Làm Việc",
    content: (
      <>
        T2 - T7: 7:00 AM - 11:00 AM
        <br />
        1:00 PM - 5:00 PM
      </>
    ),
  },
  {
    icon: <BiHomeAlt2 />,
    title: "Văn Phòng Làm Việc",
    content: (
      <>
        ĐT 741, KP Tiến Hưng 1,
        <br />
        Phường Bình Phước, Đồng Nai.
      </>
    ),
  },
];

const Map = () => {
  return (
    <section className="w-full py-12 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-3 bg-red-600/5 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1" />

            <div className="relative w-full h-[380px] lg:h-[520px] overflow-hidden rounded-xl shadow-xl border border-gray-200">
              <iframe
                title="Sắt Thép Tuấn Anh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.34824969665698!2d106.89184815816158!3d11.51076669498669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174a136ae58c8d1%3A0xf2e239ad2d5e5644!2zU-G6r3QgVGjDqXAgVHXhuqVuIEFuaA!5e0!3m2!1svi!2s!4v1795103965001!5m2!1svi!2s"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* MAP LABEL */}
            <div className="absolute bottom-5 left-5 bg-white shadow-lg rounded-lg px-5 py-3 flex items-center gap-3">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-800">
                Vị trí của chúng tôi
              </span>
            </div>
          </motion.div>

          {/* CONTACT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* SMALL TITLE */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-7"
            >
              <span className="text-red-600 text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap">
                Office Address
              </span>
              <div className="flex-1 h-px bg-gray-300" />
            </motion.div>

            {/* MAIN TITLE */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Đặt Hàng Trực Tiếp Tại
                <span className="text-red-600"> Sắt Thép Tuấn Anh </span>
              </h2>

              <p className="text-gray-500 mt-4 mb-9 leading-relaxed text-sm md:text-base">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ mọi nhu cầu của quý
                khách hàng. Hãy liên hệ với chúng tôi để được tư vấn nhanh
                chóng.
              </p>
            </motion.div>

            {/* WORKING TIME & ADDRESS */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-7"
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-red-50 text-red-600 text-2xl rounded-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-7">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* PHONE */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8 pt-7 border-t border-gray-200"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-red-50 text-red-600 text-xl rounded-lg">
                <FiPhone />
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Số Điện Thoại</h3>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  <a
                    href="tel:0862885060"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    0862 885 060
                  </a>

                  <span className="text-gray-300">|</span>

                  <a
                    href="tel:0908401638"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    0908 401 638
                  </a>

                  <span className="text-gray-400">(KTSX)</span>
                </div>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-6">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-red-50 text-red-600 text-xl rounded-lg">
                <FiMail />
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>

                <a
                  href="mailto:satthepta@gmail.com"
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  satthepta@gmail.com
                </a>
              </div>
            </motion.div>

            {/* DIRECTIONS BUTTON */}
            <motion.div variants={itemVariants} className="mt-9">
              <a
                href="https://maps.app.goo.gl/SMRe73b6bmpcgYmv7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:gap-5 shadow-lg shadow-red-600/20"
              >
                Chỉ đường đến chúng tôi
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
