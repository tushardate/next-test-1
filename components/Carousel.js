import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay])

function Carousel(props) {
  const slides = [];
  props.content_carousel.forEach((el, i) => {
    return slides.push(
      <SwiperSlide key={i}>
        <div className="w-full h-full flex justify-center carouselHeight">
          <img className="w-full object-scale-down" src={el.url}></img>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className={props.carousel_item_classes}>
        <Swiper id="main" className="w-full h-full pb-6" autoplay={{delay: 4000}} navigation pagination centeredSlides spaceBetween={12} slidesPerView={2}>{slides}</Swiper>
      </div>
    </>
  );
}

export default Carousel;
