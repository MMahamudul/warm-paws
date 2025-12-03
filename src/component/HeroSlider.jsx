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
      img: "https://i.ibb.co/Ng532P4F/WP-3.png",
      title: "Pamper Your Pet With Premium Grooming",
      text: "Book trusted grooming services for your furry friends — from bathing and nail trimming to full spa sessions, all handled by experienced groomers.",
      tag: "Grooming Service",
      button: "Book Grooming",
    },
    {
      id: 2,
      img: "https://i.ibb.co/C3scVrgh/WP-1.jpg",
      title: "Trusted Veterinary Care, Anytime",
      text: "Connect with qualified vets for health checkups, vaccinations, and tailored treatment plans to keep your pets happy and healthy all year round.",
      tag: "Veterinary Care",
      button: "Find a Vet",
    },
    {
      id: 3,
      img: "https://i.ibb.co/TD3Bhnt6/WP-2.jpg",
      title: "Daycare & Training Your Pet Will Love",
      text: "From puppy socialization to advanced obedience and safe daycare — give your pet the care, attention, and structure they deserve.",
      tag: "Daycare & Training",
      button: "Explore Services",
    },
  ];

  return (
    <div className="w-full h-[80vh] bg-blue-200">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full flex items-center bg-[#f4fbfd]">
              <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
                {/* Text side */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "order-1" : "order-2 md:order-1"
                  }`}
                >
                  {/* Tag / label */}
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-slate-900 mb-4">
                    {slide.tag}
                  </span>

                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-slate-900">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg mb-6 text-slate-800 max-w-md">
                    {slide.text}
                  </p>

                  {/* Button */}
                  <button className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-md hover:rounded-full transition">
                    {slide.button}
                  </button>
                </div>

                {/* Image side */}
                <div
                  className={`w-full md:w-1/2 flex justify-center ${
                    index % 2 === 0 ? "order-2" : "order-1 md:order-2"
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-[320px] h-[260px] md:w-[420px] md:h-[340px] lg:w-[680px] lg:h-[530px] object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-4xl text-slate-900">
          ❮
        </div>

        <div className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-4xl text-slate-900">
          ❯
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
