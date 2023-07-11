import React from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import SliderMenu1 from "./SliderMenu1";
import SliderMenu2 from "./SliderMenu2";
import SliderMenu3 from "./SliderMenu3";

const Slider = () => {

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SliderMenu1/></SwiperSlide>
        <SwiperSlide><SliderMenu2/></SwiperSlide>
        <SwiperSlide><SliderMenu3/></SwiperSlide>
                
      </Swiper>
    </div>
  );
};

export default Slider;
