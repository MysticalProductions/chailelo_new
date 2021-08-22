import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import BestSellerCard from "../../components/BestSellerCard";
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
            {[
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
              { name: "Some Meal name", src: "/assets/graphics/OrangeCup.svg" },
            ].map(({ name, src }) => (
              <BestSellerCard name={name} src={src} />
            ))}
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
