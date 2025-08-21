import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import SimpleCta from "../simple-cta/simple-cta";
import "./text-image-cta.scss";
import ImageResponsive from "../image-responsive/image-responsive";
import ContentCollapse from "../content-collapse/content-collapse";

function TextImageCta({
  title,
  headingLevel,
  lead,
  text,
  image,
  alt,
  specular,
  ctasVertical,
  ctas,
  noSpace,
  moreButton,
  moreButtonClose,
  moreText,
}) {
  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h3`;
  }

  let ctaItems;

  if (ctas) {
    ctaItems = ctas.map((item, index) => (
      <SimpleCta {...item} key={`cta-${index}`} />
    ));
  }

  const styles = classNames("text-image-cta d-flex", {
    "mb-0": noSpace,
    "mb-5": !noSpace,
    "flex-column flex-sm-row": image && specular,
    "flex-column flex-sm-row-reverse": image && !specular,
  });

  const ctasStyles = classNames("ctas mt-3 mb-4", {
    "d-lg-flex flex-wrap": !ctasVertical,
  });

  const imageWrapperStyles = classNames(
    "image-cta w-25 d-flex align-items-start",
    {
      "justify-content-end me-4": specular,
      "justify-content-start ms-sm-4": !specular,
    },
  );

  const contentStyles = classNames("content", {
    "w-75 pt-4 pt-sm-0": image,
    "w-100": !image,
  });

  return (
    <div className={styles}>
      {image && (
        <div className={imageWrapperStyles}>
          <ImageResponsive
            src={image}
            alt={alt}
            imgClassName="w-100 img-fluid img-main rounded"
          />
        </div>
      )}
      <div className={contentStyles}>
        {title && <HLevel className="/*mb-3*/">{title}</HLevel>}
        {lead && <p className="lead font-sans-serif">{lead}</p>}
        {text && <ReactMarkdown>{text}</ReactMarkdown>}
        {moreButton && (
          <ContentCollapse label={moreButton} labelClose={moreButtonClose}>
            {moreText}
          </ContentCollapse>
        )}
        {ctaItems && <div className={ctasStyles}>{ctaItems}</div>}
      </div>
    </div>
  );
}

export default TextImageCta;
