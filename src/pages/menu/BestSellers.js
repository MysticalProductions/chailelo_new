import React from "react";
import Slider from "react-slick";
import NextArrow from "./../../components/NextArrow";
import PrevArrow from "./../../components/PrevArrow";
import ScrollContainer from "react-indiana-drag-scroll";
function BestSellers() {
  return (
    <div className="">
      <div className="xl:px-24 pt-5 pb-12 mx-auto">
        <div className="text-7xl font-extrabold text-primary-p text-center mb-12">
          Best Sellers
        </div>
        {/* <Slider
          dots={false}
          className=""
          arrows={false}
          // slidesPerRow={3}
          variableWidth={true}
          slidesToScroll={1}
          slidesToShow={1}
        > */}
        <ScrollContainer className="scroll-container flex gap-3">
          <div className="flex gap-3 overflow-x-visible">
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
            <div className="focus:outline-none">
              <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
                <div
                  // alt=""
                  // src="/assets/graphics/OrangeCup.svg"
                  className="h-96 flex-shrink rounded-xl bg-black w-80"
                />
                <div className="text-center text-4xl text-primary-p">
                  Some Meal Name
                </div>
              </div>
            </div>
          </div>
        </ScrollContainer>
        {/* </Slider> */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-1 px-8 py-4 text-4xl rounded-xl bg-primary-f text-white font-extralight">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
