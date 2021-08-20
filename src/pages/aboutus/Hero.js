import React from "react";

function Hero() {
  return (
    <div className="bg-primary-a">
      <div className="max-w-screen-2xl xl:px-24 pt-5 pb-12 mx-auto">
        <div className="flex justify-around w-full px-5 items-center">
          <div className="flex flex-col gap-3 text-primary-p">
            <div className="text-7xl font-extrabold">ABOUT US</div>
          </div>
          <img
            alt=""
            src="/assets/graphics/orange BOOK.svg"
            className="w-1/3 flex-shrink"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
