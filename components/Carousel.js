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
    if (size.width < 800) {
      setNumOfSlides(1);
      arrowPrev.style.display = 'none';
      arrowNext.style.display = 'none';
    } else {
      setNumOfSlides(2);
      arrowPrev.style.display = 'flex';
      arrowNext.style.display = 'flex';
    }
  }, [size]);
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
