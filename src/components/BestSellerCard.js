import React from "react";

function BestSellerCard({ name, src }) {
  return (
    <div className="focus:outline-none">
      <div className="flex flex-col items-center gap-8 p-5 bg-white rounded-xl border">
        <div
          // alt=""
          // src={src}
          className="h-96 flex-shrink rounded-xl bg-black w-80"
        />
        <div className="text-center text-4xl text-primary-p">{name}</div>
      </div>
    </div>
  );
}

export default BestSellerCard;
