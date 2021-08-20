import React from "react";

const icons = {
  product: "/assets/icons/Heart.svg",
  media: "/assets/icons/Coverage.svg",
  outlet: "/assets/icons/Location.svg",
  moments: "/assets/icons/Star.js",
};

function GalleryCard({ src, title, type }) {
  return (
    <div
      className="flex relative h-128 border bg-cover bg-center w-128 flex-shrink-0"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute bottom-0 inset-x-0 w-full bg-white rounded-t-3xl flex px-8 py-5 gap-12 items-center shadow-md">
        <img src={icons[type]} alt="" className="w-6 h-6" />
        <div>{title}</div>
      </div>
    </div>
  );
}

export default GalleryCard;
