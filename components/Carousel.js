import React, { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Carousel(props) {
  const size = useWindowSize();
  const [numOfSlides, setNumOfSlides] = useState(1);
  const [showArrows, setShowArrows] = useState(true);
  let arrowPrev = undefined;
  let arrowNext = undefined;

  useEffect(() => {
    arrowPrev = document.querySelector(".swiper-button-prev");
    arrowNext = document.querySelector(".swiper-button-next");
    if (size.width < 768) {
      arrowPrev.style.display = 'none';
      arrowNext.style.display = 'none';
    } else {
      arrowPrev.style.display = 'flex';
      arrowNext.style.display = 'flex';
    }
    let res = Math.ceil(size.width / (size.height * 0.75));
    setNumOfSlides(res);
  }, [size]);
  const slides = [];

  props.content_carousel.forEach((el, i) => {
    return slides.push(
      <SwiperSlide key={i}>
        <div className="w-full flex justify-center">
          <img className="w-full h-full object-contain" src={el.url}></img>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className={props.carousel_item_classes}>
        <Swiper
          id="main"
          className="w-full h-full pb-6"
          autoplay={{ delay: 4000 }}
          navigation={showArrows}
          pagination
          centeredSlides
          spaceBetween={24}
          slidesPerView={numOfSlides}
        >
          {slides}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
