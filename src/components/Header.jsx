import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logoDark from "../assets/logota04-01.png";

import { FiPhone, FiMenu, FiX } from "react-icons/fi";
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // scroll effect + auto-hide
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y > lastScrollY.current && y > 120) setHidden(true);
      else setHidden(false);

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  return (
    <header className="relative w-full z-[9999]">
      {/* TOP BAR - Desktop only */}
      <div className="hidden lg:block bg-white text-gray-900 text-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FiPhone className="text-red-600 text-2xl" />
              0868.978.046
            </span>

            <span className="flex items-center gap-2">
              <LuMail className="text-red-600 text-2xl" />
              satthepta@gmail.com
            </span>

            <span className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-red-600 text-2xl" />
              Đồng Nai
            </span>

            <span className="flex items-center gap-2">
              <IoTimeOutline className="text-red-600 text-2xl" />
              Mon-Sat: 7:00pm - 5:00am
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div
        className={`
          bg-white w-full z-[9999]
          transition-all duration-300
          ${scrolled ? "fixed left-0 top-0 shadow-lg" : "relative shadow-sm"}
        `}
        style={{
          transform: hidden ? "translateY(-110%)" : "translateY(0)",
        }}
      >
        <div
          className={`${scrolled ? "backdrop-blur-sm bg-white/95" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logoDark}
                alt="Logo"
                className="h-10 md:h-11 object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `
                    relative font-semibold transition-colors duration-200
                    ${isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"}
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600
                    after:transition-all after:duration-300
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="
                  bg-red-600 text-white px-7 py-3 font-semibold
                  transition-all duration-300
                  hover:bg-red-700 hover:-translate-y-[2px] hover:shadow-lg
                  active:translate-y-0
                "
              >
                Đặt Hàng Ngay →
              </Link>
            </div>

            {/* MOBILE MENU BTN */}
            <button
              className="
                lg:hidden w-10 h-10 flex items-center justify-center
                 
              "
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* SPACER ANTI-JUMP */}
      {scrolled && <div className="h-20" />}

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <img src={logoDark} alt="Logo" className="h-9 object-contain" />

              <button
                className="w-10 h-10  flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-semibold transition ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-800 hover:text-red-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-4 bg-red-600 text-white px-6 py-3 font-semibold
                  hover:bg-red-700 transition text-center
                  hover:shadow-lg
                "
              >
                Đặt Hàng Ngay →
              </Link>
            </div>

            <div className="mt-10 text-sm text-xl space-y-2">
              <p className="flex items-center gap-2">
                <FiPhone className="text-red-600" />
                0868.978.046
              </p>
              <p className="flex items-center gap-2">
                <LuMail className="text-red-600" />
                satthepta@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-red-600" />
                Đồng Nai
              </p>
              <span className="flex items-center gap-2">
                <IoTimeOutline className="text-red-600 text-2xl" />
                T2 - T7: 7:00pm - 5:00am
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
