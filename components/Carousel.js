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
  const carouselBreakpoints = {
      '@0.85': {
        slidesPerView: 2,
      },
      '@1.5': {
        slidesPerView: 3,
      },
      '@2.00': {
        slidesPerView: 4,
      },
    }

  useEffect(() => {
    
    arrowPrev = document.querySelector(".swiper-button-prev");
    arrowNext = document.querySelector(".swiper-button-next");
    if (size.width < 768) {
      arrowPrev.style.display = "none";
      arrowNext.style.display = "none";
    } else {
      arrowPrev.style.display = "flex";
      arrowNext.style.display = "flex";
    }
    // let res = Math.ceil(size.width / (size.height * 0.75));
    // setNumOfSlides(res);
  }, [size]);
  const slides = [];

  props.content_carousel.forEach((el, i) => {
    return slides.push(
      <SwiperSlide key={i}>
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-full carouselHeight object-contain" src={el.url}></img>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className={props.carousel_item_classes}>
        <Swiper
          breakpoints={ props.slides_per_view == 0 ? carouselBreakpoints : {'@0.00': { slidesPerView: props.slides_per_view}} }
          id="main"
          speed={600}
          className="td-swiper-design"
          autoplay={{ delay: 4000 }}
          navigation={showArrows}
          pagination={{dynamicBullets: true, dynamicMainBullets: 3, clickable: true, }}
          centeredSlides
          centerInsufficientSlides
          grabCursor
          spaceBetween={24}
          slidesPerView={props.slides_per_view == 0 ? 1 : props.slides_per_view}
        >
          {slides}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
