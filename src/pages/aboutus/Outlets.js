import React from "react";
import GalleryCard from "./../../components/GalleryCard";
import ScrollContainer from "react-indiana-drag-scroll";

function Outlets() {
  return (
    <div className="">
      <div className="xl:px-24 pt-5 pb-12 mx-auto">
        <div className="my-12">
          <div className="text-6xl font-extrabold text-primary-p text-center mb-12">
            Our Current Outlets
          </div>

          <ScrollContainer className="flex gap-5">
            {[
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
            ].map(({ title, src, type }) => {
              return <GalleryCard src={src} title={title} type={type} />;
            })}
          </ScrollContainer>
        </div>
        <div className="my-12">
          <div className="text-6xl font-extrabold text-primary-p text-center mb-12">
            Our Current Outlets
          </div>

          <ScrollContainer className="flex gap-5">
            {[
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
              { src: "/logo512.png", title: "Something", type: "outlet" },
            ].map(({ title, src, type }) => {
              return (
                <div className="bg-primary-l flex flex-col items-center p-12 justify-center text-white gap-5 w-96 flex-shrink-0">
                  {/* <div className="flex flex-col gap-3 justify-center"> */}
                  <div className="flex justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-24 h-24"
                    >
                      <path
                        d="M12 23C12 23 21 17 21 10C21 7.61305 20.0518 5.32387 18.364 3.63604C16.6761 1.94821 14.3869 1 12 1C9.61305 1 7.32387 1.94821 5.63604 3.63604C3.94821 5.32387 3 7.61305 3 10C3 14.2913 6.38233 18.2067 9 20.5944M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 10.6134 9.18408 11.1837 9.5 11.6589"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="text-2xl">Corporate Offices</div>
                </div>
                // </div>
              );
            })}
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
}

export default Outlets;
