import React from "react";
import classNames from "classnames";
import ImageResponsive from "../image-responsive/image-responsive";
import "./img-full.scss";

function ImgFull({ img, alt, isDSPreview }) {
  const imgStyle = classNames("img-full", {
    "mb-5": !isDSPreview,
    "mb-3 mt-3": isDSPreview,
  });

  return (
    <div className={imgStyle}>
      <ImageResponsive imgClassName="w-100 img-fluid" src={img} alt={alt} />
    </div>
  );
}

export default ImgFull;
