import React from "react";
import { Link } from "react-router-dom";

function Story() {
  return (
    <div className="w-full p-5 bg-primary-i py-16">
      <div className="grid grid-cols-7 max-w-screen-2xl mx-auto justify-center items-center">
        <div className="w-full col-span-3">
          <img alt="" src="/assets/graphics/OrangeCup.svg" className="" />
        </div>
        <div className="flex flex-col col-span-4">
          <div>
            <div className="text-7xl font-extrabold text-primary-p text-left mb-12">
              Our Delicious Story
            </div>
            <div className="text-3xl font-light leading-relaxed">
              Dolor dolor et sed dolor invidunt sit clita nonumy eirmod erat,
              justo ipsum dolore eos duo sed vero. Diam magna aliquyam kasd
              ipsum erat amet et. Lorem aliquyam dolore ipsum sadipscing
              voluptua gubergren, accusam lorem kasd lorem et eos eos sed amet.
              Takimata kasd magna accusam at invidunt voluptua no. Ea stet rebum
              dolore vero duo lorem. Consetetur nonumy ea sed stet no takimata
              sadipscing erat. Nonumy dolores sit lorem dolor diam erat et kasd
              rebum,
            </div>
          </div>
          <Link
            className="rounded-2xl text-white bg-primary-f text-4xl px-16 py-4 font-light self-start mt-5"
            to="/about"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Story;
