import React from "react";

function SingleItem(props) {
  switch (props.acf_fc_layout) {
    case "single_item_video":
      return (
        <iframe
          src={`http://player.vimeo.com/video/${props.content_video_id}?title=0&amp;byline=0&amp;portrait=0&amp;color=006eff`}
          width="700"
          height="394"
          frameborder="0"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      );
    case "single_item_text_block":
      return <p>Text</p>;
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
