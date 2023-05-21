import React from "react";
import Slider from "infinite-react-carousel";
import "./Slides.css"

const Slides = ({children,slidesToShow,arrowsScroll,title,dots=false}) => {
  return (
    <div className="px-96 pt-28">
      <h2 className="font-bold text-gray-500 text-3xl pb-10">{title}</h2>
      <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} dots={dots}>
        {
            children
        }
      </Slider>
    </div>
  );
};

export default Slides;
