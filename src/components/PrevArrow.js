import React from "react";
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={style} className={className}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        className={`w-64 h-64 transform -translate-x-1/2`}
      >
        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
      </svg>
    </div>
  );
}
export default PrevArrow;
