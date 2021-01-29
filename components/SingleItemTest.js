import React, {useState} from "react";
import Carousel from "./Carousel";
import ReactPlayer from "react-player";

function SingleItemTest(props) {
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => setPlaying(true)

  switch (props.acf_fc_layout) {
    case "single_item_video":
      const url = new URL(props.content_video);
      const ratios = props.video_ratio.split("/");
      const video_ratio = (parseFloat(ratios[1]) / parseFloat(ratios[0])) * 100;
      return (
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
              onClickPreview={()=> handlePlay()}
            />
          </div>
        </div>
      );
    case "single_item_text_block":
      return (
        <p className={`font-tdsans text-xl md:text-2xl lg:text-3xl font-medium sm:font-normal ${props.text_item_classes}`}>
          {props.content_text_item}
        </p>
      );
    case "single_item_image":
      return (
        <img
          className={props.image_item_classes}
          src={props.content_image.url}
        ></img>
      );
    case "single_item_image_carousel":
      return <Carousel {...props} />;
    default:
      return null;
  }
}

export default SingleItemTest;
