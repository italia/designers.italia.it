import * as React from "react";
import { useMemo } from "react";
import slugify from "slugify";
import "./highlight.scss";
import ReactMarkdown from "react-markdown";
import ImageResponsive from "../image-responsive/image-responsive";
import Button from "../button/button";
import Icon from "../icon/icon";
import Numbers from "../numbers/numbers";

function Highlight({
  background,
  img,
  alt,
  icon,
  overlayImg,
  overlayAlt,
  big,
  title,
  numbers,
  headingLevel,
  subtitle,
  text,
  buttons,
  specular,
  textSanSerif,
  fullImg,
  children,
  reversedMobile,
  padBottom,
  id,
  highlightedCards,
  editorialSections,
  highlightIndex, // Which highlight in the sequence (0, 1, 2...)
}) {
  const automatedData = useMemo(() => {
    // Only automate if we have editorial configuration and this is from home page highlights array
    if (
      !editorialSections ||
      !highlightedCards?.edges?.length ||
      highlightIndex === undefined
    ) {
      return null;
    }

    const editorialSection = editorialSections.find(
      (es) => es.section === "highlights-home",
    );
    if (!editorialSection || !editorialSection.highlighted?.length) {
      return null;
    }

    const editorialConfig = editorialSection.highlighted[highlightIndex];
    if (!editorialConfig) {
      return null;
    }

    const targetTitle =
      typeof editorialConfig === "string"
        ? editorialConfig
        : editorialConfig.title;
    const matchingNode = highlightedCards.edges.find(
      ({ node }) => node.components?.hero?.title === targetTitle,
    );

    if (!matchingNode) {
      return null;
    }

    const { node } = matchingNode;
    const normalizeImagePath = (imagePath) => {
      if (!imagePath) return null;
      if (imagePath.startsWith("https://designers.italia.it")) {
        return imagePath.replace("https://designers.italia.it", "");
      }
      if (imagePath.startsWith("http://designers.italia.it")) {
        return imagePath.replace("http://designers.italia.it", "");
      }
      return imagePath;
    };

    const customText =
      typeof editorialConfig === "object" ? editorialConfig.text : null;
    const customCta =
      typeof editorialConfig === "object" ? editorialConfig.cta : null;
    const buttonLabel = customCta || "Scopri di più";
    const articleTitle = node.components?.hero?.title;

    const createAriaLabel = (cta, title) => {
      // Handle different CTA patterns and create contextual aria-labels
      if (cta.toLowerCase().includes("scopri")) {
        return `Scopri di più su "${title}"`;
      }
      if (cta.toLowerCase().includes("esplora")) {
        return `Esplora "${title}"`;
      }
      if (cta.toLowerCase().includes("leggi")) {
        return `Leggi "${title}"`;
      }
      // Generic fallback
      return `${cta}: ${title}`;
    };

    return {
      title: node.components?.hero?.title,
      subtitle: customText || node.seo?.description,
      img: normalizeImagePath(
        node.components?.imageIcons?.image || node.seo?.image,
      ),
      alt: node.components?.imageIcons?.alt || "",
      buttons: [
        {
          label: buttonLabel,
          ariaLabel: createAriaLabel(buttonLabel, articleTitle),
          btnStyle: "primary",
          url: node.seo?.pathname,
          addonStyle: "mb-3",
        },
      ],
    };
  }, [editorialSections, highlightedCards, highlightIndex]);

  const finalData = automatedData || {
    title,
    subtitle,
    img,
    alt,
    buttons,
  };

  const styles =
    "highlight" +
    `${background ? ` bg-${background}` : ""}` +
    `${big ? " highlight-big" : ""}` +
    `${padBottom ? " mb-5" : ""}`;

  const classes =
    "highlight-content d-lg-flex" +
    `${!specular ? " flex-lg-row-reverse" : ""}` +
    `${reversedMobile ? " d-flex flex-column-reverse" : ""}` +
    `${finalData.img || overlayImg ? "" : " no-image"}`;

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h3`;
  }

  // buttons
  let ButtonsRender;
  if (finalData.buttons) {
    ButtonsRender = finalData.buttons.map((btn, index) => (
      <Button key={`h-button-${index}`} {...btn} />
    ));
  }

  let textClass;
  if (textSanSerif) {
    textClass = "h-text";
  } else {
    textClass = "h-text font-serif";
  }

  let ratioClass;
  if (fullImg) {
    ratioClass = "img-container full";
  } else {
    ratioClass = "img-container ratio ratio-16x9";
  }

  const elementId =
    id || slugify(finalData.title, { lower: true, strict: true });

  return (
    <section className={styles} aria-labelledby={elementId}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div className={classes}>
              <div className="text-container px-3 py-5 px-lg-5 py-lg-6">
                <HLevel id={elementId}>{finalData.title}</HLevel>
                {finalData.subtitle && (
                  <p className="lead mb-4">{finalData.subtitle}</p>
                )}
                {numbers && <Numbers {...numbers} />}
                {text && (
                  <div className={textClass}>
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                )}
                {ButtonsRender && (
                  <div className="buttons-wrapper mt-5">{ButtonsRender}</div>
                )}
                {children}
              </div>
              <div className={ratioClass}>
                {finalData.img && (
                  <ImageResponsive
                    className="main-image"
                    src={finalData.img}
                    alt={finalData.alt}
                  />
                )}
                {icon && <Icon {...icon} />}
                {overlayImg && (
                  <ImageResponsive
                    src={overlayImg}
                    alt={overlayAlt}
                    className="overlay-image"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlight;
