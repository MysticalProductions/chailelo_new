import React from "react";
import MenuItem from "./MenuItem";

function MenuSectionCard({ heading, sub_heading, image, items }) {
  return (
    <div
      className="grid grid-cols-12 bg-transparent shadow"
      style={{ maxHeight: "45rem" }}
    >
      <div
        className=" col-span-4 bg-black p-12 flex flex-col max-h-full text-primary-v"
        style={{ borderTopLeftRadius: "60px" }}
      >
        <div className="text-4xl font-bold">{heading}</div>
        <div className="text-3xl font-semibold">{sub_heading}</div>
        <div className="flex max-h-96 flex-grow justify-center">
          <img
            alt="item preview"
            src={image}
            className="max-h-full object-contain object-center"
          />
        </div>
      </div>
      <div
        className="flex flex-col overflow-y-auto col-span-8 bg-white"
        style={{ maxHeight: "45rem" }}
      >
        {items.map((item) => {
          return <MenuItem {...item} />;
        })}
      </div>
    </div>
  );
}

export default MenuSectionCard;
