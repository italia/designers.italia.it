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

const MarkdownParagraph = ({ node, ...props }) => <p className="it-card-text" {...props} />;

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
  uniqueCardId,
}) {
  const styles = classNames("it-card it-card-image border it-card-height-full", {
    fullheight: fullHeight,
    rounded,
    // "title-small": titleSmall,
    // "title-big": titleBig,
    "shadow-sm": !noShadow,
    "text-serif": textSerif,
    "has-button": buttonBottom,
  });

  const imgStyle = classNames("ratio", {
    [`ratio-${imgRatio}`]: imgRatio,
    "img-placeholder": imgPlaceholder,
    "icon-img": iconImg,
    "mb-4 negative-margin": cardEvent,
    rounded: imgRounded,
  });

  // const styleBody = classNames(
  //   "bg-white",
  //   {
  //     rounded,
  //   },
  // );

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h3`;
  }

  const id = uniqueCardId || slugify(title, { lower: true, strict: true });
  // New template: title -> image -> body -> footer
  return (
    <article aria-labelledby={id} className={styles}>
      {HLevel && (
        <HLevel id={id} className="it-card-title">
          <Link
            to={url}
            target={blank ? "_blank" : undefined}
            rel={blank ? "noreferrer" : undefined}
          >
            {title}
            {externalLink && !externalLink.url && <SimpleCta {...externalLink} />}
          </Link>
        </HLevel>
      )}

      {(img || imgPlaceholder || iconImg) && (
        <div className="it-card-image-wrapper">
          <div className={imgStyle}>
            {img && !imgPlaceholder && <ImageResponsive src={img} alt={alt} />}
            {iconImg && <ImageResponsive src={iconImg} alt={iconImgAlt} />}
            {dateOverlay && (
              <div className="date-overlay d-flex flex-column justify-content-center">
                <span className="day font-monospace">{dateOverlay.day}</span>
                <span className="month">{dateOverlay.month}</span>
                {dateOverlay.year && <span className="month">{dateOverlay.year}</span>}
              </div>
            )}
            {iconOverlay && (
              <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
                <Icon {...iconOverlay} />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="it-card-body">
        {text && (
              // keep markdown rendering, ensure generated <p> has the it-card-text class
              <ReactMarkdown
                components={{
                  p: MarkdownParagraph,
                }}
              >
                {text}
              </ReactMarkdown>
            )}
        {/* {dateInfo && <span className="date-info font-monospace mb-3">{dateInfo}</span>} */}
        {externalLink && externalLink.url && <SimpleCta {...externalLink} />}
        {moreInfo && <span className="more-info font-monospace">{moreInfo}</span>}
        {buttonBottom && (
          <div className="button-wrapper mt-4">
            <Button {...buttonBottom} />
          </div>
        )}

      </div>
      {(tag || tags || share || chips || dateInfo) && (
        <footer className="it-card-related it-card-footer">

          <div className="it-card-taxonomy">
            {tags && (
              // <div className="chips-list-wrapper">
                <ul className="it-card-chips" aria-label="Argomenti correlati:">
                  {tags.map((t, index) => (
                    <li className="list-item" key={`list-chip-${index}`}>
                      <Chip key={`chip-${index}`} label={t} size="sm" />
                    </li>
                  ))}
                </ul>
              // </div>
            )}

            {tag && (
              <ul className="it-card-chips chips-list" aria-label="Argomenti correlati:">
                <Chip {...tag} as="span" />
              </ul>
            )}
          </div>
          {dateInfo && (
            <time className="it-card-date" dateTime={dateInfo}>
              {dateInfo}
            </time>
          )}
          {url && <ShareButton url={url} title={title} small />}

        </footer>
      )}
    </article>
  );
}

export default Card;
