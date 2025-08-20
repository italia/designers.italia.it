import classNames from "classnames";
import ImageResponsive from "../image-responsive/image-responsive";
import Icon from "../icon/icon";
import Link from "../link/link";
import "./link-custom.scss";

function LinkCustom({
  label,
  labelSmall,
  url,
  image,
  imageClass,
  blank,
  specular,
  icon,
}) {
  const linkStyles = classNames(
    "link-custom d-inline-flex align-items-center text-decoration-none",
    { "flex-row-reverse text-end": specular },
  );
  const imageStyles = classNames("flex-shrink-0", imageClass);

  return (
    <Link
      className={linkStyles}
      to={url}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noreferrer" : undefined}
    >
      {icon ? <Icon {...icon} /> : ""}
      {image ? (
        <ImageResponsive
          src={image}
          aria-hidden="true"
          imgClassName={imageStyles}
        />
      ) : (
        ""
      )}
      <strong className={labelSmall ? "small" : null}>{label}</strong>
    </Link>
  );
}

export default LinkCustom;
