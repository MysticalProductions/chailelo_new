import React from "react";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-64 h-64 transform translate-x-1/2`}
        onClick={onClick}
      >
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
      </svg>
    </div>
  );
}
export default NextArrow;
