import ImageResponsive from "../image-responsive/image-responsive";

function Avatar({ size, img, alt }) {
  return (
    <div className={`avatar ${size ? `size-${size}` : undefined}`}>
      <ImageResponsive src={img} alt={alt} />
    </div>
  );
}

export default Avatar;
