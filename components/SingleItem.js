import React from "react";
import { container } from "tailwindcss/defaultTheme";

function SingleItem(props) {
  switch (props.acf_fc_layout) {
    case "single_item_video":
      const url = new URL(props.content_video);
      const video_id = url.pathname.slice(1);
      const video_src = url.hostname.toLowerCase().includes("you")
        ? `https://www.youtube.com/embed/${video_id}`
        : `http://player.vimeo.com/video/${video_id}?title=0&amp;byline=0&amp;portrait=0&amp;color=006eff`;

      const ratios = props.video_ratio.split("/");
      const video_ratio = (parseFloat(ratios[1]) / parseFloat(ratios[0])) * 100;
      return (
        <div className={props.video_item_classes}>
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingTop: `${video_ratio}%` }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              width="700"
              height="394"
              src={video_src}
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
