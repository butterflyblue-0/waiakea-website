import React from "react";
import "./InstagramSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Images 
import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import insta4 from "../assets/insta4.jpg";
import insta5 from "../assets/insta5.jpg";
import insta6 from "../assets/insta6.jpg";
import insta7 from "../assets/insta7.jpg";
import insta8 from "../assets/insta8.jpg";


const InstagramSlider = () => {
  const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8];

  return (
    <div className="instagram-slider-section">
      <h2 className="instagram-title">Follow us on Instagram @waiakea</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        className="instagram-swiper"
        breakpoints={{
          320: { slidesPerView: 1.3 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Insta ${idx + 1}`} className="insta-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramSlider;
