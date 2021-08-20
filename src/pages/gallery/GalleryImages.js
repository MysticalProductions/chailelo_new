import React, { useMemo, useState } from "react";
import GalleryCard from "../../components/GalleryCard";

function Filter({ images, type, children }) {
  const filtered = useMemo(() => {
    if (type) {
      return images.filter((el) => el.type === type);
    }
    return images;
  }, [images, type]);
  return children(filtered);
}
function GalleryImages() {
  const [filter, setFilter] = useState(null);
  return (
    <div className="my-12 w-full max-w-screen-2xl mx-auto">
      <div className="flex gap-12 text-primary-r text-3xl">
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter(null);
          }}
          className={`font-semibold ${filter === null ? "text-primary-u" : ""}`}
        >
          All
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter("product");
          }}
          className={`font-semibold ${
            filter === "product" ? "text-primary-u" : ""
          }`}
        >
          Product Gallery
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter("outlet");
          }}
          className={`font-semibold ${
            filter === "outlet" ? "text-primary-u" : ""
          }`}
        >
          Outlet Gallery
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter("moments");
          }}
          className={`font-semibold ${
            filter === "moments" ? "text-primary-u" : ""
          }`}
        >
          Customer Moments
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter("coverage");
          }}
          className={`font-semibold ${
            filter === "coverage" ? "text-primary-u" : ""
          }`}
        >
          Media Coverage
        </button>
      </div>
      <Filter
        images={[
          { src: "/logo512.png", title: "Something", type: "outlet" },
          { src: "/logo512.png", title: "Something", type: "outlet" },
        ]}
        type={filter}
      >
        {(images) => {
          return (
            <div className="grid grid-cols-3 gap-8 my-12">
              {images.map(({ src, title, type }) => (
                <GalleryCard {...{ src, title, type }} />
              ))}
            </div>
          );
        }}
      </Filter>
    </div>
  );
}

export default GalleryImages;
