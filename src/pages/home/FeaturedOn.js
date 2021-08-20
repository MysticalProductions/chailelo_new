import React from "react";
import Slider from "react-slick";
import NextArrow from "./../../components/NextArrow";
import PrevArrow from "./../../components/PrevArrow";

function FeaturedOn() {
  return (
    <div className="">
      <div className="max-w-screen-2xl xl:px-24 pt-5 pb-12 mx-auto">
        <div className="text-7xl font-extrabold text-primary-p text-center mb-12">
          Featured On
        </div>

        <Slider
          dots={false}
          className=""
          arrows={true}
          infinite={true}
          slidesPerRow={3}
          variableWidth={true}
          slidesToScroll={1}
          slidesToShow={1}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          <div className="focus:outline-none">
            <img
              alt=""
              src="/assets/graphics/OrangeCup.svg"
              className="-m-16 flex-shrink"
            />
          </div>
          <div className="focus:outline-none">
            <img
              alt=""
              src="/assets/graphics/OrangeCup.svg"
              className="-m-16 flex-shrink"
            />
          </div>
          <div className="focus:outline-none">
            <img
              alt=""
              src="/assets/graphics/OrangeCup.svg"
              className="-m-16 flex-shrink"
            />
          </div>
          <div className="focus:outline-none">
            <img
              alt=""
              src="/assets/graphics/OrangeCup.svg"
              className="-m-16 flex-shrink"
            />
          </div>
          <div className="focus:outline-none">
            <img
              alt=""
              src="/assets/graphics/OrangeCup.svg"
              className="-m-16 flex-shrink"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedOn;
