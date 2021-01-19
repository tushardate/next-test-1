import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay])

function Carousel(props) {
  const slides = [];
  props.content_carousel.forEach((el, i) => {
    return slides.push(
      <SwiperSlide key={i}>
        <div className="w-full h-full flex justify-center">
          <img className="h-full object-scale-down" src={el.url}></img>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <p className="text-5xl py-32">Carousel</p>
      <div className={props.carousel_item_classes}>
        <Swiper id="main" className="w-full h-full pb-10" autoplay={{delay: 4000}} navigation pagination centeredSlides spaceBetween={24}>{slides}</Swiper>
      </div>
    </>
  );
}

export default Carousel;
