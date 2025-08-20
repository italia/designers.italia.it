import classNames from "classnames";
import ImageResponsive from "../image-responsive/image-responsive";
import "./img-full.scss";

function ImgFull({ img, alt, isDSPreview }) {
  const containerStyle = classNames("img-full", {
    "mb-5": !isDSPreview,
    "mb-3 mt-3 border rounded design-system-preview": isDSPreview,
  });
  const imgStyle = classNames("w-100 img-fluid", {
    rounded: isDSPreview,
  });

  return (
    <div className={containerStyle}>
      <ImageResponsive imgClassName={imgStyle} src={img} alt={alt} />
    </div>
  );
}

export default ImgFull;
