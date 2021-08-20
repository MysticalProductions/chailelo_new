import React from "react";
import Slider from "react-slick";

function Hero() {
  return (
    <div className="bg-primary-a">
      <div className="max-w-screen-2xl xl:px-24 pt-5 pb-12 mx-auto">
        <Slider
          fade={true}
          autoplay={true}
          dots={true}
          dotsClass="slick-dots blue-dots"
          customPaging={(i) => (
            <div className="cursor-pointer border-4 rounded-full border-primary-m w-8 h-8 flex items-center justify-center">
              <span className="rounded-full w-3.5 h-3.5 bg-primary-n transition-all duration-150 ease-in-out"></span>
            </div>
          )}
          infinite={true}
          speed={1500}
          pauseOnHover={true}
        >
          <div className="">
            <div className="flex justify-around w-full px-5 items-center">
              <div className="flex flex-col gap-3 text-primary-p">
                <div className="text-8xl font-extrabold">Chai</div>
                <div className="text-4xl">[chaa-ae] • noun</div>
                <div className="text-4xl font-medium mt-5">
                  A solution for any emotion.
                </div>
                <div className="mt-5">
                  <button className="rounded-2xl text-white bg-primary-f text-4xl px-16 py-4 font-light">
                    Order Now
                  </button>
                </div>
              </div>
              <img
                alt=""
                src="/assets/graphics/OrangeCup.svg"
                className="w-1/2 -m-16 flex-shrink"
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-around w-full px-5 items-center">
              <div className="flex flex-col gap-3 text-primary-p">
                <div className="text-8xl font-extrabold">Chai</div>
                <div className="text-4xl">[chaa-ae] • noun</div>
                <div className="text-4xl font-medium mt-5">
                  A solution for any emotion.
                </div>
                <div className="mt-5">
                  <button className="rounded-2xl text-white bg-primary-f text-4xl px-16 py-4 font-light">
                    Order Now
                  </button>
                </div>
              </div>
              <img
                alt=""
                src="/assets/graphics/OrangeCup.svg"
                className="w-1/2 -m-16 flex-shrink"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
