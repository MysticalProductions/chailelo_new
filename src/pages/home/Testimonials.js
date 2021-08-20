import React from "react";
import Slider from "react-slick";
import NextArrow from "../../components/NextArrow";
import PrevArrow from "../../components/PrevArrow";

function Testimonials() {
  return (
    <div className="bg-primary-h">
      <div className="max-w-screen-2xl xl:px-24 pt-5 pb-12 mx-auto">
        <Slider
          fade={true}
          autoplay={true}
          dots={false}
          infinite={true}
          speed={1500}
          pauseOnHover={true}
          arrows={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          <div className="">
            <div className="flex flex-col justify-center w-full px-5 items-center gap-5 py-12">
              <img
                alt=""
                src="/assets/graphics/OrangeCup.svg"
                className="rounded-full w-40 h-40 flex-shrink-0 border"
              />
              <div className="text-3xl">Name</div>
              <div className="mt-8 text-2xl text-center">
                Duo eirmod et diam amet consetetur sanctus dolor tempor sit
                diam. Et magna magna justo et, dolor dolor et amet.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
