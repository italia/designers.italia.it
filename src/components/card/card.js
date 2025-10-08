import * as React from "react";
import slugify from "slugify";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import ImageResponsive from "../image-responsive/image-responsive";
import SimpleCta from "../simple-cta/simple-cta";
import Chip from "../chip/chip";
import Icon from "../icon/icon";
import Link from "../link/link";
import Button from "../button/button";
import ShareButton from "../share-button/share-button";
import Tag from "../tag/tag";

import "./card.scss";

// ISO dates in HTML 'datetime' must be in the format YYYY-MM-DD
const convertItalianDateToHTML = (italianDate) => {
  const mesi = {
    gennaio: "01",
    febbraio: "02",
    marzo: "03",
    aprile: "04",
    maggio: "05",
    giugno: "06",
    luglio: "07",
    agosto: "08",
    settembre: "09",
    ottobre: "10",
    novembre: "11",
    dicembre: "12",
  };
  const [giorno, mese, anno] = italianDate?.split(" ") ?? [];
  const meseNum = mesi[mese?.toLowerCase()];
  if (!meseNum || !giorno || !anno) return "";
  return `${anno}-${meseNum}-${giorno.padStart(2, "0")}`;
};

function MarkdownParagraph({ node, ...props }) {
  return <p className="it-card-text" {...props} />;
}

function Card({
  title,
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
  const styles = classNames(
    "it-card it-card-image border it-card-height-full",
    {
      fullheight: fullHeight,
      rounded,
      "shadow-sm": !noShadow,
      "text-serif": textSerif,
      "has-button": buttonBottom,
    },
  );

  const imgStyle = classNames("ratio", {
    [`ratio-${imgRatio}`]: imgRatio,
    "img-placeholder": imgPlaceholder,
    "icon-img": iconImg,
    rounded: imgRounded,
  });

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h3`;
  }

  const id = uniqueCardId || slugify(title, { lower: true, strict: true });
  // New template: title -> image -> body -> footer
  const titleClass = iconOverlay
    ? "it-card-title it-card-title-icon"
    : "it-card-title";

  return (
    <article aria-labelledby={id} className={styles}>
      {HLevel && (
        <HLevel id={id} className={titleClass}>
          <Link
            to={url}
            target={blank ? "_blank" : undefined}
            rel={blank ? "noreferrer" : undefined}
          >
            {title}
            {externalLink && !externalLink.url && (
              <SimpleCta {...externalLink} />
            )}

            <div className="it-card-title-icon-wrapper">
              {iconOverlay && <Icon {...iconOverlay} />}
            </div>
          </Link>
        </HLevel>
      )}

      {(img || imgPlaceholder || iconImg) && (
        <div className="it-card-image-wrapper">
          <div className={imgStyle}>
            {img && !imgPlaceholder && <ImageResponsive src={img} alt={alt} />}
            {iconImg && <ImageResponsive src={iconImg} alt={iconImgAlt} />}
          </div>
        </div>
      )}

      <div className="it-card-body">
        {dateOverlay && (
          <p className="it-card-subtitle">
            {dateOverlay.day} {dateOverlay.month} {dateOverlay.year}
          </p>
        )}

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
        {moreInfo && (
          <span className="more-info font-monospace">{moreInfo}</span>
        )}
        {buttonBottom && (
          <div className="button-wrapper mt-4">
            <Button {...buttonBottom} />
          </div>
        )}
      </div>
      {(tag || tags || share || chips || dateInfo) && (
        <footer className="it-card-related it-card-footer">
          <div className="it-card-taxonomy w-75">
            {tags && (
              <ul className="it-card-chips" aria-label="Argomenti correlati:">
                {tags.map((t, index) => (
                  <li className="list-item" key={`list-chip-${index}`}>
                    <Chip key={`chip-${index}`} label={t} size="sm" />
                  </li>
                ))}
              </ul>
            )}
            {tag && <Tag {...tag} as="span" addonClasses="py-1 px-2" />}
          </div>

          {(tags && share) || dateInfo ? (
            <div className="it-card-meta">
              {dateInfo &&
                (() => {
                  const htmlDate = convertItalianDateToHTML(dateInfo);
                  return htmlDate ? (
                    <time className="it-card-date w-auto" dateTime={htmlDate}>
                      {dateInfo}
                    </time>
                  ) : (
                    <span className="it-card-date w-auto">{dateInfo}</span>
                  );
                })()}
              <ShareButton url={url} title={title} small />
            </div>
          ) : (
            <>
              {dateInfo &&
                (() => {
                  const htmlDate = convertItalianDateToHTML(dateInfo);
                  return htmlDate ? (
                    <time className="it-card-date" dateTime={htmlDate}>
                      {dateInfo}
                    </time>
                  ) : (
                    <span className="it-card-date">{dateInfo}</span>
                  );
                })()}
              {(url || share) && <ShareButton url={url} title={title} small />}
            </>
          )}
        </footer>
      )}
    </article>
  );
}

export default Card;
