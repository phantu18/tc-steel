import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ========================================
// FAQ DATA
// ========================================

const faqs = [
  {
    question: "Công ty chuyên cung cấp những sản phẩm và dịch vụ nào?",
    answer:
      "Công ty TNHH MTV Sắt Thép Tuấn Anh chuyên cung cấp và gia công các sản phẩm Sắt Thép & Inox & Thép hình chế tạo S45C. Chuyên cung cấp dịch vụ: Cắt Laser CNC, Chấn CNC, Cắt CNC Gas - Oxy, Uốn Ống Đa Hình, Cắt Láp.",
  },
  {
    question: "Công ty có nhận gia công theo bản vẽ riêng không?",
    answer:
      "Công ty cung cấp các dịch vụ gia công cơ khí như Cắt Laser CNC, Chấn CNC, Cắt CNC Oxy-Gas, Uốn ống và Gia công định hình thép tấm. Quý khách vui lòng gửi bản vẽ hoặc thông số kỹ thuật để chúng tôi kiểm tra khả năng đáp ứng và tư vấn phương án phù hợp.",
  },
  {
    question: "Công ty có hỗ trợ vận chuyển đến công trình không?",
    answer:
      "Việc giao hàng phụ thuộc vào địa điểm nhận hàng, khối lượng, kích thước sản phẩm và phương án vận chuyển phù hợp. Quý khách vui lòng cung cấp địa chỉ giao hàng khi yêu cầu báo giá để được xác nhận khả năng giao nhận và chi phí liên quan.",
  },
  {
    question: "Làm thế nào để liên hệ và đặt hàng tại Sắt Thép Tuấn Anh?",
    answer: `Quý khách có thể liên hệ với chúng tôi qua các kênh sau:

- Hotline: 0862 885 060
- Điện thoại KTSX: 0908 401 638 (Mr. Tuấn)
- Zalo: 0862 885 060 (Sắt Thép Tuấn Anh)
- Email: satthepta@gmail.com
- Địa chỉ: ĐT 741, KP Tiến Hưng 1, Phường Bình Phước, Đồng Nai.

Khi liên hệ, quý khách vui lòng cung cấp nhu cầu vật tư hoặc dịch vụ gia công, quy cách, số lượng và bản vẽ (nếu có) để được hỗ trợ nhanh chóng.`,
  },
];

// ========================================
// ANIMATION VARIANTS
// ========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const faqVariants = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ========================================
// MAIN COMPONENT
// ========================================

export default function ContactFaq() {
  const [active, setActive] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const shouldReduceMotion = useReducedMotion();

  // ========================================
  // VALIDATION
  // ========================================

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
    }

    if (!form.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email không đúng định dạng";
    }

    if (!form.message.trim()) {
      newErrors.message = "Vui lòng nhập lời nhắn";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ========================================
  // HANDLE INPUT
  // ========================================

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });

    if (status.text) {
      setStatus({
        type: "",
        text: "",
      });
    }
  };

  // ========================================
  // SEND EMAIL
  // ========================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_qfij7r4",
        "template_iee3sv6",
        {
          name: form.name,
          email: form.email,
          reply_to: form.email,
          subject: form.subject || "Yêu cầu tư vấn từ website",
          message: form.message,
        },
        "AMH8UGf4A9DVpICVE",
      );

      setStatus({
        type: "success",
        text: "Gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      console.error("EMAILJS STATUS:", err.status);
      console.error("EMAILJS TEXT:", err.text);
      console.error("EMAILJS FULL ERROR:", err);

      setStatus({
        type: "error",
        text: `Lỗi ${err.status}: ${err.text || "Không gửi được email"}`,
      });
    } finally {
      setLoading(false);
    }
  };

  // ========================================
  // INPUT ANIMATION
  // ========================================

  const inputClass = `
    w-full border border-gray-200 bg-white
    px-4 py-3.5 text-sm text-gray-800
    placeholder:text-gray-400
    outline-none
    transition-all duration-300
    focus:border-red-600
    focus:ring-2 focus:ring-red-600/10
    hover:border-gray-400
  `;

  const errorClass = "text-xs text-red-600 mt-1.5";

  // ========================================
  // RENDER
  // ========================================

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* SECTION HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-red-600 text-sm font-semibold tracking-[0.25em] uppercase"
          >
            Contact Us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3"
          >
            Liên Hệ Với Chúng Tôi
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Sắt Thép Tuấn Anh luôn sẵn sàng đồng hành cùng bạn. Hãy để lại thông
            tin để nhận tư vấn và báo giá nhanh chóng.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center mt-6">
            <span className="w-24 h-[3px] bg-red-600" />
          </motion.div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ================================== */}
          {/* CONTACT FORM */}
          {/* ================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-10"
          >
            {/* FORM HEADER */}
            <div className="mb-8">
              <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                Get In Touch
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                Tư Vấn Báo Giá
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Vui lòng điền đầy đủ thông tin bên dưới. Chúng tôi sẽ liên hệ
                lại với bạn trong thời gian sớm nhất.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* NAME */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên <span className="text-red-600">*</span>
                </label>

                <motion.div
                  whileFocus={{
                    scale: shouldReduceMotion ? 1 : 1.005,
                  }}
                >
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="Nhập họ và tên của bạn"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass}
                    aria-invalid={!!errors.name}
                  />
                </motion.div>

                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </motion.div>

              {/* EMAIL */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>

                <input
                  type="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClass}
                  aria-invalid={!!errors.email}
                />

                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </motion.div>

              {/* SUBJECT */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung yêu cầu
                </label>

                <input
                  type="text"
                  placeholder="Ví dụ: Báo giá thép tấm, gia công CNC..."
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={inputClass}
                />
              </motion.div>

              {/* MESSAGE */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lời nhắn <span className="text-red-600">*</span>
                </label>

                <textarea
                  rows={5}
                  placeholder="Mô tả nhu cầu, quy cách, số lượng sản phẩm..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`${inputClass} resize-none`}
                  aria-invalid={!!errors.message}
                />

                {errors.message && (
                  <p className={errorClass}>{errors.message}</p>
                )}
              </motion.div>

              {/* STATUS MESSAGE */}
              <AnimatePresence mode="wait">
                {status.text && (
                  <motion.div
                    key={status.type}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 10, height: 0 }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      height: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      overflow-hidden text-sm px-4 py-3 border
                      ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-red-50 text-red-700 border-red-200"
                      }
                    `}
                    role="status"
                    aria-live="polite"
                  >
                    {status.text}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={
                  shouldReduceMotion || loading
                    ? {}
                    : {
                        scale: 1.015,
                      }
                }
                whileTap={
                  shouldReduceMotion || loading
                    ? {}
                    : {
                        scale: 0.98,
                      }
                }
                className="
                  w-full bg-red-600 text-white
                  py-4 font-semibold text-sm
                  tracking-wide
                  hover:bg-red-700
                  transition-colors duration-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  flex justify-center items-center gap-3
                "
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ĐANG GỬI YÊU CẦU...
                  </>
                ) : (
                  <>
                    GỬI YÊU CẦU BÁO GIÁ
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-400 text-center">
                Thông tin của bạn sẽ được sử dụng để liên hệ và tư vấn.
              </p>
            </form>
          </motion.div>

          {/* ================================== */}
          {/* FAQ SECTION */}
          {/* ================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {/* FAQ HEADER */}
            <motion.div variants={fadeUp}>
              <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">
                FAQ
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Câu Hỏi Thường Gặp
              </h3>

              <p className="text-sm text-gray-500 mt-4 mb-8 leading-relaxed">
                Những thông tin dưới đây sẽ giúp bạn hiểu rõ hơn về sản phẩm,
                dịch vụ và quy trình làm việc của Sắt Thép Tuấn Anh.
              </p>
            </motion.div>

            {/* FAQ LIST */}
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = active === i;

                return (
                  <motion.div
                    key={i}
                    variants={faqVariants}
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    className={`
                      border bg-white overflow-hidden
                      transition-colors duration-300
                      ${isOpen ? "border-red-600 shadow-md" : "border-gray-200"}
                    `}
                  >
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className={`
                        w-full px-5 py-5
                        flex justify-between items-center gap-4
                        text-left font-medium text-sm md:text-base
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "bg-gray-900 text-white"
                            : "bg-white text-gray-900 hover:bg-gray-50"
                        }
                      `}
                    >
                      <span>{faq.question}</span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`
                          shrink-0 w-8 h-8
                          flex items-center justify-center
                          text-lg font-bold
                          ${
                            isOpen
                              ? "bg-red-600 text-white"
                              : "bg-red-600 text-white"
                          }
                        `}
                      >
                        +
                      </motion.span>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                              duration: 0.3,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{
                              y: 12,
                            }}
                            animate={{
                              y: 0,
                            }}
                            exit={{
                              y: 8,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="
                              px-5 py-5
                              text-sm text-gray-600
                              leading-7 whitespace-pre-line
                              border-t border-gray-100
                            "
                          >
                            {faq.answer}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* CONTACT INFORMATION */}
            <motion.div
              variants={fadeUp}
              className="mt-8 p-6 bg-gray-900 text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />

              <div className="relative">
                <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
                  Need Assistance?
                </span>

                <h4 className="text-xl font-bold mt-2">
                  Bạn cần tư vấn trực tiếp?
                </h4>

                <p className="text-gray-400 text-sm mt-2 mb-5">
                  Liên hệ với chúng tôi để được hỗ trợ nhanh chóng.
                </p>

                {/* Nút gọi điện */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Nút gọi điện */}
                  <a
                    href="tel:0862885060"
                    className="
      inline-flex items-center gap-3
      bg-red-600 hover:bg-red-700
      px-6 py-3 text-sm font-semibold
      transition-all duration-300
      hover:gap-5
    "
                  >
                    0862 885 060
                    <span>→</span>
                  </a>

                  {/* Nút Zalo */}
                  <a
                    href="https://zalo.me/0862885060"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      inline-flex items-center gap-3
      bg-[#0068FF] hover:bg-[#0054CC]
      px-6 py-3 text-sm font-semibold text-white
      transition-all duration-300
      hover:gap-5
    "
                  >
                    Chat qua Zalo
                    <span>→</span>
                  </a>
                </div>

                <p className="text-gray-400 text-xs mt-4">
                  Email: satthepta@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
