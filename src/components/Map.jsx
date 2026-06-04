import React from "react";

const Map = () => {
  return (
    <section className="w-full  py-16">
      <div className="max-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* MAP */}
        <div className="w-full h-[400px] lg:h-[500px] overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.68388578879134!2d106.61605072647379!3d11.117684841562083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cc3cdaed5db7%3A0xfd66dac98d3e4368!2zQ8O0bmcgVHkgU-G6r3QgVGjDqXAgUGhvbmcgUGhp!5e0!3m2!1svi!2s!4v1766852563487!5m2!1svi!2s"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">
          {/* Title nhỏ */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm tracking-widest  uppercase">
              THÔNG TIN LIÊN HỆ
            </span>
            <div className="flex-1 h-[1px] bg-black"></div>
          </div>

          {/* Title lớn */}
          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-10">
            Chúng Tôi Rất Hân Hạnh <br /> Được Gặp Bạn
          </h2>

          {/* Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-semibold text-black mb-1">
                Văn Phòng Làm Việc
              </p>
              <p>Ql14, Phường Đồng Xoài, Tỉnh Đồng Nai.</p>
            </div>

            <div>
              <p className="font-semibold text-black mb-1">Số Điện Thoại</p>
              <p> 0862.708.510 | 0868.978.046</p>
            </div>

            <div>
              <p className="font-semibold text-black mb-1">Email</p>
              <p>satthepta@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
