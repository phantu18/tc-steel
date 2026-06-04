import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

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

  // message UI (thay alert)
  const [status, setStatus] = useState({
    type: "", // "success" | "error"
    text: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // xóa lỗi từng field khi người dùng nhập lại
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });

    // xóa status khi người dùng sửa nội dung
    if (status.text) setStatus({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_zg0y04n",
        "template_b8p640j",
        {
          // ✅ sửa đúng keys giống template của bạn
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "isZjGJfFQU0afVZew",
      );

      setStatus({
        type: "success",
        text: "✅ Your message has been sent successfully. We will contact you soon!",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.log("EMAILJS ERROR:", err);

      setStatus({
        type: "error",
        text: "❌ Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24  relative overflow-hidden">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0  pointer-events-none " />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-lg p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Tư Vấn Báo Giá
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              Vui lòng điền đầy đủ thông tin để được tư vấn.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <input
                  type="text"
                  placeholder="Họ Và Tên*"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* SUBJECT */}
              <div>
                <input
                  type="text"
                  placeholder="Yêu Cầu Của Bạn Về..."
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows="4"
                  placeholder="Lời Nhắn*"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                />
                {errors.message && (
                  <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                )}
              </div>

              {/* STATUS MESSAGE */}
              {status.text && (
                <div
                  className={`
                    text-sm px-4 py-3 border
                    ${
                      status.type === "success"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-red-50 text-red-700 border-red-200"
                    }
                  `}
                >
                  {status.text}
                </div>
              )}

              {/* BUTTON */}
              <button
                disabled={loading}
                type="submit"
                className="
                  w-full bg-red-600 text-white py-3 font-medium
                  hover:bg-red-700 transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {loading ? "Đang Gửi..." : "Gửi"}
              </button>
            </form>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Câu Hỏi Thường Gặp Của Khách Hàng
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Nếu bạn có bất kỳ thắc mắc nào, vui lòng hỏi chúng tôi và chúng
              tôi sẽ trả lời sớm nhất có thể.
            </p>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = active === i;

                return (
                  <div key={i} className="border bg-white">
                    <button
                      onClick={() => setActive(isOpen ? null : i)}
                      className={`
                        w-full px-5 py-4 flex justify-between items-center font-medium text-left
                        transition-colors
                        ${isOpen ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
                      `}
                    >
                      {faq.question}
                      <span
                        className={`
                          w-7 h-7 flex items-center justify-center text-sm font-bold
                          ${isOpen ? "bg-white text-gray-900" : "bg-red-600 text-white"}
                        `}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed border-t">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
