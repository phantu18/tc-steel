import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import logoDark from "../assets/logo2.png";

import { FiPhone, FiMenu, FiX, FiChevronRight } from "react-icons/fi";

import { LuMail } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const navLinks = [
  { label: "Trang Chủ", to: "/" },
  { label: "Về Công Ty", to: "/about" },
  { label: "Dịch Vụ", to: "/services" },
  { label: "Sản Phẩm", to: "/projects" },
  { label: "Liên Hệ", to: "/contact" },
];

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);
  const location = useLocation();

  // SCROLL EFFECT
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (mobileOpen) return;

      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 5) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 5) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mobileOpen]);

  // CLOSE DRAWER WHEN ROUTE CHANGES
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // LOCK BODY SCROLL + ESCAPE KEY
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const navClass = ({ isActive }) =>
    `relative py-2 text-sm font-bold transition-colors duration-300
    ${
      isActive
        ? "text-red-600 after:w-full"
        : "text-gray-800 hover:text-red-600 after:w-0 hover:after:w-full"
    }
    after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:bg-red-600 after:transition-all after:duration-300`;

  return (
    <header className="relative w-full z-[9999]">
      {/* TOP INFORMATION BAR */}
      <div className="hidden lg:block bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:0862885060"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FiPhone className="text-red-500 text-base" />
              0862 885 060
            </a>

            <a
              href="mailto:satthepta@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <LuMail className="text-red-500 text-base" />
              satthepta@gmail.com
            </a>

            <span className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-red-500 text-base shrink-0" />
              ĐT 741, KP Tiến Hưng 1, Phường Bình Phước, Đồng Nai
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IoTimeOutline className="text-red-500 text-base" />
            <span>Thứ 2 – Thứ 7: 7:00 – 17:00</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <motion.div
        animate={{
          y: hidden && !mobileOpen ? "-110%" : "0%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`w-full z-[9999] bg-white ${
          scrolled ? "fixed top-0 left-0 shadow-lg" : "relative shadow-sm"
        }`}
      >
        <div
          className={`${
            scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[76px] md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center shrink-0"
              aria-label="Sắt Thép Tuấn Anh - Trang chủ"
            >
              <img
                src={logoDark}
                alt="Sắt Thép Tuấn Anh"
                className="h-14 sm:h-16 md:h-[68px] w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((item) => (
                <NavLink key={item.label} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://zalo.me/0862885060"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 font-bold text-sm transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative z-10">ĐẶT HÀNG NGAY</span>

                <FiChevronRight className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1" />

                <span className="absolute inset-0 bg-gray-950 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-gray-900 hover:text-red-600 transition"
              aria-label="Mở menu"
              aria-expanded={mobileOpen}
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* SPACER WHEN HEADER IS FIXED */}
      {scrolled && <div className="h-[76px] md:h-20" />}

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[99999] lg:hidden">
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src={logoDark}
                    alt="Sắt Thép Tuấn Anh"
                    className="h-14 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-50 hover:text-red-600 transition"
                  aria-label="Đóng menu"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* MOBILE NAVIGATION */}
              <nav className="flex-1 px-6 py-7 overflow-y-auto">
                <p className="text-xs font-bold tracking-[0.2em] text-red-600 mb-6 uppercase">
                  Menu
                </p>

                <div className="flex flex-col">
                  {navLinks.map((item, index) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 border-b border-gray-100 font-bold transition-colors ${
                          isActive
                            ? "text-red-600"
                            : "text-gray-800 hover:text-red-600"
                        }`
                      }
                    >
                      <span>{item.label}</span>

                      <FiChevronRight className="text-lg" />
                    </NavLink>
                  ))}
                </div>

                {/* MOBILE CTA */}
                <a
                  href="https://zalo.me/0862885060"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 flex items-center justify-center gap-3 bg-[#2391FF] text-white py-4 font-bold text-sm  transition"
                >
                  ĐẶT HÀNG QUA ZALO
                  <FiChevronRight className="text-lg" />
                </a>
              </nav>

              {/* MOBILE CONTACT */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
