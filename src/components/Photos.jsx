import React from "react";

function Photos({ urls: { regular }, alt_description }) {
  return (
    <div className="single-photo">
      <img src={regular} alt={alt_description} />
    </div>
  );
}

export default Photos;
