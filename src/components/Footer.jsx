import logo from "../assets/logota04-01.png";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import iconWeb from "../assets/instagram.png";
import iconFacebook from "../assets/communication.png";
import iconInstagram from "../assets/tiktok.png";
import iconYoutube from "../assets/youtube.png";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <img src={logo} alt="Steeler Logo" className="h-10 mb-4" />

          <p className="text-sm leading-relaxed mb-6">
            Sắt Thép Tuấn Anh cung cấp dịch vụ gia công CNC Laser, chấn CNC và
            thiết kế bản vẽ kỹ thuật với độ chính xác cao.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-black font-semibold mb-4">Danh Mục</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500">
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Về Công Ty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Dịch Vụ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Sản Phẩm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-black font-semibold mb-4">Địa Chỉ Liên Hệ</h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-500">
                <FaLocationDot size={20} />
              </span>
              <span>
                Ql14, Phường Đồng Xoài, Đồng Xoài
                <br />
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-red-500">
                <HiPhone size={20} />
              </span>
              <span>0862.708.510 | 0868.978.046</span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-red-500">
                <MdEmail size={20} />
              </span>
              <span>tasteel@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* QUOTE FORM */}
        {/* <div>
          <h4 className="text-white font-semibold mb-4">Get Quotation</h4>

          <p className="text-sm mb-4">
            Leave your email and we will send you our quotation.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="
                w-full px-4 py-3 text-sm
                bg-gray-800 text-gray-200
                border border-gray-700
                focus:outline-none focus:border-red-600
              "
            />
            <button
              type="submit"
              className="
                px-6 py-3 bg-red-600 text-white
                font-medium hover:bg-red-700 transition
              "
            >
              Send
            </button>
          </form>
        </div> */}
        {/* SOCIAL */}
        <div className=" gap-4">
          <h4 className="text-black font-semibold">Mạng Xã Hội</h4>
          <div className="flex item-center gap-4 mt-4">
            <a href="#" className="hover:scale-110 transition">
              <img src={iconWeb} alt="web" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src={iconFacebook} alt="facebook" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src={iconInstagram} alt="instagram" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src={iconYoutube} alt="youtube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Sắt Thép Tuấn Anh</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500">
              PAT
            </a>
            <a href="#" className="hover:text-red-500">
              2004
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
