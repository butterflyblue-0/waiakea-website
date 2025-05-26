
import React, { useRef } from "react";
import "./TestimonialSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="testimonial-background">
      <div className="testimonial-content">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="testimonial-swiper"
        >
          <SwiperSlide><img src={review1} alt="Review 1" /></SwiperSlide>
          <SwiperSlide><img src={review2} alt="Review 2" /></SwiperSlide>
          <SwiperSlide><img src={review3} alt="Review 3" /></SwiperSlide>
        </Swiper>

        <div className="testimonial-controls">
          <button ref={prevRef} className="testimonial-arrow">‹</button>
          <button ref={nextRef} className="testimonial-arrow">›</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
