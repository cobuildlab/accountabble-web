import React from "react";

const MediaQuote = ({ innextText, image }) => {
  return (
    <div className="media mt-4">
      <div
        className={"image-quote"}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="media-body ml-3 mt-5">
        <h6 style={{ fontSize: 22 }}>
          <q>{innextText}</q>
        </h6>
      </div>
    </div>
  );
};

export default MediaQuote;
