import * as React from "react";
import slugify from "slugify";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import ImageResponsive from "../image-responsive/image-responsive";
import SimpleCta from "../simple-cta/simple-cta";
import Chip from "../chip/chip";
import Tag from "../tag/tag";
import Icon from "../icon/icon";
import Link from "../link/link";
import Button from "../button/button";
import ShareButton from "../share-button/share-button";

import "./card.scss";

function Card({
  cardEvent,
  title,
  // titleSmall,
  // titleBig,
  headingLevel,
  url,
  blank,
  text,
  textSerif,
  tag,
  share,
  img,
  imgRounded,
  noShadow,
  alt,
  imgRatio,
  iconOverlay,
  dateOverlay,
  chips,
  tags,
  externalLink,
  moreInfo,
  dateInfo,
  imgPlaceholder,
  iconImg,
  iconImgAlt,
  fullHeight,
  rounded,
  buttonBottom,
}) {
  const styles = classNames("di-card d-md-flex flex-md-column w-100", {
    fullheight: fullHeight,
    rounded,
    // "title-small": titleSmall,
    // "title-big": titleBig,
    "shadow-lg": !noShadow,
    "text-serif": textSerif,
    "has-button": buttonBottom,
  });

  const imgStyle = classNames("img-wrapper ratio", {
    [`ratio-${imgRatio}`]: imgRatio,
    "img-placeholder": imgPlaceholder,
    "icon-img": iconImg,
    "mb-4 negative-margin": cardEvent,
    rounded: imgRounded,
  });

  const styleBody = classNames(
    "di-card-body bg-white p-4 d-md-flex flex-md-column justify-content-between",
    {
      rounded,
    },
  );

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h3`;
  }

  const id = slugify(title, { lower: true, strict: true });

  if (cardEvent) {
    return (
      <article aria-labelledby={id}>
        <div className={styles}>
          <div className={styleBody}>
            <div className="text-zone">
              {HLevel && (
                <HLevel id={id}>
                  <Link
                    to={url}
                    target={blank ? "_blank" : undefined}
                    rel={blank ? "noreferrer" : undefined}
                  >
                    {title}
                    {externalLink && !externalLink.url && (
                      <SimpleCta {...externalLink} />
                    )}
                  </Link>
                </HLevel>
              )}
              {dateInfo && (
                <span className="date-info font-monospace mb-3">
                  {dateInfo}
                </span>
              )}
              {text && <ReactMarkdown>{text}</ReactMarkdown>}
              {externalLink && externalLink.url && (
                <SimpleCta {...externalLink} />
              )}
              {moreInfo && (
                <span className="more-info font-monospace">{moreInfo}</span>
              )}
            </div>
            <div className="di-card-footer">
              <div className={imgStyle}>
                {img && !imgPlaceholder && (
                  <ImageResponsive src={img} alt={alt} />
                )}
                {iconImg && <ImageResponsive src={iconImg} alt={iconImgAlt} />}
                {dateOverlay && (
                  <div className="date-overlay d-flex flex-column justify-content-center">
                    <span className="day font-monospace">
                      {dateOverlay.day}
                    </span>
                    <span className="month">{dateOverlay.month}</span>
                    <span className="month">{dateOverlay.year}</span>
                  </div>
                )}
                {iconOverlay && (
                  <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
                    <Icon {...iconOverlay} />
                  </div>
                )}
              </div>
              <div className="di-card-footer-content d-flex justify-content-between align-items-end">
                {tags && (
                  <div className="chips-list-wrapper">
                    <ul
                      className="chips-list chips d-flex flex-wrap mb-0"
                      aria-label="Argomenti correlati:"
                    >
                      {tags.map((t, index) => (
                        <li className="list-item" key={`list-chip-${index}`}>
                          <Chip
                            key={`chip-${index}`}
                            label={t}
                            size="sm"
                            color="secondary"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tag && (
                  <div className="tag-container">
                    <Tag {...tag} />
                  </div>
                )}
                {}
                {url && <ShareButton url={url} title={title} small />}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  return (
    <article aria-labelledby={id}>
      <div className={styles}>
        {(img || imgPlaceholder || iconImg) && (
          <div className={imgStyle}>
            {img && !imgPlaceholder && <ImageResponsive src={img} alt={alt} />}
            {iconImg && <ImageResponsive src={iconImg} alt={iconImgAlt} />}
            {dateOverlay && (
              <div className="date-overlay d-flex flex-column justify-content-center">
                <span className="day font-monospace">{dateOverlay.day}</span>
                <span className="month">{dateOverlay.month}</span>
              </div>
            )}
            {iconOverlay && (
              <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
                <Icon {...iconOverlay} />
              </div>
            )}
          </div>
        )}
        <div className={styleBody}>
          <div className="text-zone">
            {HLevel && (
              <HLevel id={id}>
                <Link
                  to={url}
                  target={blank ? "_blank" : undefined}
                  rel={blank ? "noreferrer" : undefined}
                >
                  {title}
                  {externalLink && !externalLink.url && (
                    <SimpleCta {...externalLink} />
                  )}
                </Link>
              </HLevel>
            )}
            {dateInfo && (
              <span className="date-info font-monospace mb-3">{dateInfo}</span>
            )}
            {text && <ReactMarkdown>{text}</ReactMarkdown>}
            {externalLink && externalLink.url && (
              <SimpleCta {...externalLink} />
            )}
            {moreInfo && (
              <span className="more-info font-monospace">{moreInfo}</span>
            )}
            {buttonBottom && (
              <div className="button-wrapper mt-4">
                <Button {...buttonBottom} />
              </div>
            )}
          </div>
          {(tag || tags || share || chips) && (
            <div className="di-card-footer">
              <div className="di-card-footer-content d-flex justify-content-between align-items-end">
                {tags && (
                  <div className="chips-list-wrapper">
                    <ul
                      className="chips-list chips d-flex flex-wrap mb-0"
                      aria-label="Argomenti correlati:"
                    >
                      {tags.map((t, index) => (
                        <li className="list-item" key={`list-chip-${index}`}>
                          <Chip
                            key={`chip-${index}`}
                            label={t}
                            size="sm"
                            color="secondary"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tag && (
                  <div className="tag-container">
                    <Tag {...tag} />
                  </div>
                )}
                {url && <ShareButton url={url} title={title} small />}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
