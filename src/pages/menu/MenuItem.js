import React from "react";

function MenuItem({ heading, sub_heading, description, price }) {
  return (
    <div className="p-5 flex gap-2 justify-between items-center">
      <div className="flex flex-col">
        <div className="text-3xl font-medium">{heading}</div>
        <div className="text-2xl">{sub_heading}</div>
        <div className="text-primary-s text-lg">{description}</div>
      </div>
      <div className="whitespace-nowrap text-2xl font-semibold">
        <span className="font-serif">₹</span>
        <span> {`${price.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

export default MenuItem;
