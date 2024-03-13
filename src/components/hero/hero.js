import classNames from "classnames";
import * as React from "react";
import "./hero.scss";

import ReactMarkdown from "react-markdown";
import ImageResponsive from "../image-responsive/image-responsive";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Icon from "../icon/icon";
import ShareButton from "../share-button/share-button";
import Tag from "../tag/tag";
import Kangaroo from "../kangaroo/kangaroo";

function Hero({
  pageContext,
  name,
  crumbLabel,
  centered,
  column,
  specialKangarooComponent,
  tag,
  background,
  title,
  headingLevel,
  subtitle,
  pretext,
  text,
  img,
  alt,
  imgRatio,
  kangaroo,
  noBorder,
}) {
  const styles =
    "hero" +
    `${background ? ` bg-${background}` : ""}` +
    `${column ? " column-hero" : ""}`;
  // heading level
  let HLevel;
  let SubtitleLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
    SubtitleLevel = `h${headingLevel + 1}`;
  } else {
    HLevel = `h1`;
    SubtitleLevel = `p`;
  }

  const textStyle = classNames("texts py-3", {
    "pb-lg-4": centered,
    "pb-lg-5": !centered,
  });

  const imgStyle = classNames("img-wrapper ratio mb-4 mb-lg-3 rounded", {
    [`ratio-${imgRatio}`]: imgRatio,
  });

  const imgResponsiveStyle = "rounded";

  const breadcrumbsStyle = classNames("hero-top px-3 pt-4", {
    "px-lg-0 px-xl-4": column,
  });

  const rowStyle = classNames("row g-0", {
    "justify-content-lg-center": centered,
    "ps-lg-2": column,
  });

  const columnStyle = classNames({
    "col-12 g-0 px-3": !column,
    "col-12 col-md-8 px-3 ps-lg-4 ps-xl-5": column,
    "col-lg-7 offset-lg-0": centered,
    "ps-lg-5 pe-lg-0 col-lg-7": !centered && !column,
  });

  const kangarooZoneStyle = classNames("kangaroo-zone", {
    "no-border": noBorder,
    "pb-4 pb-md-5 pb-lg-0": specialKangarooComponent,
  });

  const rightColumnStyle = classNames({
    "col-12 col-md-12 col-lg-4 offset-lg-1 d-flex flex-column px-3 pe-lg-5 pt-4":
      !column,
    "col-12 col-md-3 offset-md-1 d-flex flex-column px-3 pe-lg-5 pt-md-4":
      column,
  });

  const kangarooColumnStyle = classNames("col-12 g-0", {
    "ps-lg-4 ps-xl-5": column && !specialKangarooComponent,
    "col-lg-7 offset-lg-0": centered,
  });

  const shareColor = background === ("primary" || "dark") ? "white" : "primary";

  const url = pageContext.breadcrumb.location;

  return (
    <div className={styles}>
      <div className="hero-content">
        {/* {bgImg && <div className="bg-image"><ImageResponsive src={bgImg} alt={bgImgAlt}/></div>} */}
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 g-0">
              <div className={breadcrumbsStyle}>
                {crumbLabel ? (
                  <Breadcrumbs
                    pageContext={pageContext}
                    crumbLabel={crumbLabel}
                    title={name}
                  />
                ) : (
                  <Breadcrumbs pageContext={pageContext} title={name} />
                )}
              </div>
              <div className="hero-main">
                <div className={rowStyle}>
                  <div className={columnStyle}>
                    <div className={textStyle}>
                      <div className="d-flex align-items-start flex-wrap">
                        <HLevel className="title">{title}</HLevel>
                      </div>
                      <SubtitleLevel className="subtitle fw-normal fs-10">
                        {subtitle}
                      </SubtitleLevel>
                      {tag && <Tag {...tag} />}
                      {pretext && (
                        <div className="bottom-text">
                          <div className="pre-text">
                            {pretext.icon && (
                              <Icon {...pretext.icon} addonClasses="me-2" />
                            )}
                            <span className="text-uppercase">
                              {pretext.text}
                            </span>
                          </div>
                          {text && <ReactMarkdown>{text}</ReactMarkdown>}
                        </div>
                      )}
                    </div>
                    {centered && (
                      <ShareButton title={title} url={url} color={shareColor} />
                    )}
                    {kangaroo && specialKangarooComponent && (
                      <div className="">
                        <div className={kangarooZoneStyle}>
                          <div className="container-xxl g-0">
                            <div className="row justify-content-lg-center">
                              {/* rowStyle */}
                              <div className={kangarooColumnStyle}>
                                <Kangaroo {...kangaroo} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {!centered && (
                    <div className={rightColumnStyle}>
                      {img && (
                        <div className={imgStyle}>
                          <ImageResponsive
                            src={img}
                            alt={alt}
                            imgClassName={imgResponsiveStyle}
                          />
                        </div>
                      )}
                      <ShareButton title={title} url={url} color={shareColor} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {kangaroo && !specialKangarooComponent && (
        <div className={kangarooZoneStyle}>
          <div className="container-xxl">
            <div className="row justify-content-lg-center">
              {/* rowStyle */}
              <div className={kangarooColumnStyle}>
                <Kangaroo {...kangaroo} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
