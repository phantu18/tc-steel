import React from "react";
import { motion } from "framer-motion";

import logo from "../assets/logo1.png";
import location from "../assets/location.png";
import phone from "../assets/telephone.png";
import mail from "../assets/mail (1).png";
import iconWeb from "../assets/instagram.png";
import iconFacebook from "../assets/communication.png";
import iconInstagram from "../assets/tiktok.png";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Trang Chủ", href: "#" },
    { name: "Về Công Ty", href: "/about" },
    { name: "Dịch Vụ", href: "/services" },
    { name: "Sản Phẩm", href: "/projects" },
    { name: "Liên Hệ", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: iconWeb,
      name: "Website",
      href: "https://www.instagram.com/steeltuananh_26/",
    },
    {
      icon: iconFacebook,
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61593336252734",
    },
    {
      icon: iconInstagram,
      name: "TikTok",
      href: "https://www.tiktok.com/@tuananhsteel",
    },
  ];

  return (
    <footer className="bg-white text-gray-700 overflow-hidden border-t border-gray-100">
      {/* MAIN FOOTER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="
          max-w-7xl mx-auto px-6
          py-12 lg:py-14
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-9 lg:gap-12
        "
      >
        {/* BRAND */}

        {/* BRAND */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-5">
            <motion.img
              src={logo}
              alt="Sắt Thép Tuấn Anh"
              className="h-16 w-auto object-contain shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-extrabold tracking-wider text-[#00105B] leading-tight whitespace-nowrap">
                TUAN ANH
              </h3>

              <span className="text-sm font-bold tracking-[0.32em] text-[#00105B] mt-1">
                STEEL
              </span>
            </div>
          </div>

          <p className="text-sm leading-7 text-gray-600 max-w-xs">
            Sắt Thép Tuấn Anh cung cấp dịch vụ gia công CNC Laser, Chấn CNC, Uốn
            Ống và Thiết kế bản vẽ kỹ thuật với độ chính xác cao.
          </p>

          <div className="w-12 h-1 bg-red-600 mt-5" />
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={itemVariants}>
          <h4 className="text-gray-900 font-bold text-base mb-6">Danh Mục</h4>

          <ul className="space-y-3 text-sm">
            {links.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                >
                  <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={itemVariants}>
          <h4 className="text-gray-900 font-bold text-base mb-6">
            Địa Chỉ Liên Hệ
          </h4>

          <ul className="space-y-5 text-sm">
            {/* ADDRESS */}
            <li className="flex items-start gap-3 group">
              <img
                src={location}
                alt="Địa chỉ"
                className="w-6 h-6 object-contain shrink-0 mt-1"
              />

              <span className="text-gray-600 leading-6 group-hover:text-red-600 transition-colors">
                ĐT 741, KP Tiến Hưng 1, Phường Bình Phước, Đồng Nai.
              </span>
            </li>

            {/* PHONE */}
            <li className="flex items-start gap-3 group">
              <img
                src={phone}
                alt="Điện thoại"
                className="w-6 h-6 object-contain shrink-0"
              />

              <div className="flex flex-col gap-2">
                <a
                  href="tel:0862885060"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  0862 885 060
                </a>

                <a
                  href="tel:0908401638"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  0908 401 638 (KTSX)
                </a>
              </div>
            </li>

            {/* EMAIL */}
            <li className="flex items-center gap-3 group">
              <img
                src={mail}
                alt="Email"
                className="w-6 h-6 object-contain shrink-0"
              />

              <a
                href="mailto:satthepta@gmail.com"
                className="text-gray-600 hover:text-red-600 transition-colors break-all"
              >
                satthepta@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* SOCIAL */}
        <motion.div variants={itemVariants}>
          <h4 className="text-gray-900 font-bold text-base mb-6">
            Mạng Xã Hội
          </h4>

          <p className="text-sm text-gray-600 leading-6 mb-5">
            Theo dõi chúng tôi để cập nhật những thông tin và dịch vụ mới nhất.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                title={social.name}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                target="_blank"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  border border-gray-200
                  bg-gray-50
                  hover:border-red-600
                  transition-colors duration-300
                  
                "
              >
                <img
                  src={social.icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div
          className="
            max-w-7xl mx-auto px-6
            py-5
            flex flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            text-xs text-gray-500
          "
        >
          <p className="text-center md:text-left">
            © {currentYear} Sắt Thép Tuấn Anh. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="hover:text-red-600 transition-colors cursor-pointer">
              PAT
            </span>

            <span className="w-px h-3 bg-gray-300" />

            <span className="hover:text-red-600 transition-colors cursor-pointer">
              2004
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
