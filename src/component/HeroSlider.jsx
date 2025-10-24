import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/3yf8H332/dawid-tkocz-Em-Tl8-Wi-Tv-Ss-unsplash.jpg",
      title: "Cozy Companions",
      text: "Keep your pets warm and stylish this winter with our soft knitwear.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/GvxpNpTg/j-f-a-Pdn-Pyq1iyg-unsplash.jpg",
      title: "Winter Adventures",
      text: "Gear up your furry friends for frosty outdoor fun!",
    },
    {
      id: 3,
      img: "https://i.ibb.co/TSMcBJ8/d-ng-ph-c-h-i-tri-u-7p-CAl-Pq-V3l0-unsplash.jpg",
      title: "Frosty Fashion",
      text: "Discover adorable sweaters and coats made for chilly days.",
    },
  ];

  


  return (
    <div className="w-full h-[80vh] relative mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              
              <div className="absolute inset-0 "></div>

             
              <div className="relative z-10 text-center text-blue-100 px-6 drop-shadow-lg">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-blue-100">
                  {slide.title}
                </h2>
                <p className="max-w-xl mx-auto text-lg md:text-xl mb-6 text-blue-200 opacity-90">
                  {slide.text}
                </p>
                <button className="bg-blue-200 text-blue-900 font-semibold py-2 px-6 rounded-md hover:bg-blue-100 hover:text-blue-950 transition">
                  Shop Winter Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;


