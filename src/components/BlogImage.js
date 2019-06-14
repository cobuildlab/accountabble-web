import React from "react";

const BlogImage = ({ url }) => {
  return (
    <div className={"view"}>
      <div
        className={"Ripple-parent image-source"}
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className={"mask rgba-white-slight"} />
      <div className={"Ripple is-reppling imagex-"} />
    </div>
  );
};

export default BlogImage;
