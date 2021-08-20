import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import GalleryCard from "./../../components/GalleryCard";

function Gallery() {
  return (
    <div className="">
      <div className="xl:px-24 pt-5 pb-12 mx-auto">
        <div className="text-7xl font-extrabold text-primary-p text-center mb-12">
          Gallery
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
        <ScrollContainer className="flex gap-5">
          {/* <div className="flex gap-8 my-12 w-full"> */}
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
          {/* </div> */}
        </ScrollContainer>
        {/* </Slider> */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-1 px-12 py-3 text-3xl rounded-xl bg-primary-f text-white font-extralight">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
