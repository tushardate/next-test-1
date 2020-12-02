import React from "react";
import { container } from "tailwindcss/defaultTheme";

function SingleItem(props) {
  switch (props.acf_fc_layout) {
    case "single_item_video":
      return (
        <div className={props.video_item_classes}>
          <div className="relative w-full overflow-hidden pt-16/9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`http://player.vimeo.com/video/${props.content_video_id}?title=0&amp;byline=0&amp;portrait=0&amp;color=006eff`}
              width="700"
              height="394"
              frameborder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    case "single_item_text_block":
      return (
        <p className={`font-tdspace text-xl ${props.text_item_classes}`}>
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
    default:
      return null;
  }
}

export default SingleItem;
