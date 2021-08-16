import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PlayButton from "./PlayButton";

function SingleItemTest(props) {
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => setPlaying(true);
  let component;

  const { ref, inView, entry } = useInView({
    rootMargin: "0% 0% 30px 0%",
    triggerOnce: true,
  });

  const singleReveal = {
    initial: {
      opacity: 0,
      scale: 0.92,
      y: 30,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  switch (props.acf_fc_layout) {
    case "single_item_video":
      const url = new URL(props.content_video);
      const ratios = props.video_ratio.split("/");
      const video_ratio = (parseFloat(ratios[1]) / parseFloat(ratios[0])) * 100;
      component = (
        <div className={props.video_item_classes}>
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingTop: `${video_ratio}%` }}
          >
            <ReactPlayer
              url={props.content_video}
              playsinline={true}
              playing={playing}
              className="absolute inset-0 w-full h-full"
              light={true}
              width="100%"
              height="100%"
              playIcon={<PlayButton></PlayButton>}
              onClickPreview={() => handlePlay()}
            />
          </div>
        </div>
      );
      break;
    case "single_item_text_block":
      component = (
        <p
          className={`font-tdsans text-xl md:text-2xl lg:text-3xl font-medium sm:font-normal ${props.text_item_classes}`}
          dangerouslySetInnerHTML={{__html: props.content_text_item}}
        />
      );
      break;
    case "single_item_image":
      component = (
        <img
          className={props.image_item_classes}
          src={props.content_image.url}
        ></img>
      );
      break;
    case "single_item_image_carousel":
      component = <Carousel {...props} />;
      break;
    default:
      component = null;
  }

  return (
    <motion.div
      ref={ref}
      initial={singleReveal.initial}
      animate={inView ? singleReveal.animate : singleReveal.exit}
    >
      {component}
    </motion.div>
  );
}

export default SingleItemTest;
