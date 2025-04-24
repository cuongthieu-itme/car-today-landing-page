
const HeroContent = () => {
  return (
    <div>
      <h1
        data-aos="fade-right"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
      >
        Xe Hôm Nay - Cùng bạn trên mọi nẻo đường.
      </h1>
      <p
        data-aos="fade-left"
        data-aos-delay="150"
        className="mt-6 text-sm md:text-base text-white text-opacity-60"
      >
        Khám phá trải nghiệm thuê xe tiện lợi, an toàn và nhanh chóng cùng Xe Hôm Nay. Dù là chuyến đi công tác, du lịch hay đơn giản là di chuyển hàng ngày, chúng tôi luôn sẵn sàng đồng hành, mang đến cho bạn sự thoải mái và an tâm trên từng hành trình. Với đội xe đa dạng, chất lượng cao và dịch vụ tận tâm, Xe Hôm Nay không chỉ là nơi thuê xe – mà là người bạn đồng hành đáng tin cậy của bạn.
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:PX-10 md:py-2 px-5 py-1.5 text-white font-semibold text-base duration-200 rounded-lg button_cls bg-green-700 hover:bg-green-900"
        >
          Bắt đầu ngay
        </button>
        <button data-aos="zoom-in"
          data-aos-delay="400" className="md:PX-10 md:py-2 px-5 py-1.5 text-white font-semibold text-base duration-200 rounded-lg button_cls bg-yellow-700 hover:bg-yellow-900">
          Tìm hiểu thêm
        </button>
      </div>

      {/* stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div data-aos="fade-up"
          data-aos-delay="600">
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            260+
          </p>
          <p className="w-[100px] h-[3px] bg-green-700 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">
            Du lịch
          </p>
        </div>

        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            2260+
          </p>
          <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">
            Khách hàng
          </p>
        </div>

        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            60+
          </p>
          <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">
            Địa điểm
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
