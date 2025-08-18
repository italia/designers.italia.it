import classNames from "classnames";
import React, { useMemo } from "react";
import Card from "../card/card";
import Button from "../button/button";
import Topics from "../topics/topics";
import "./highlight-cards.scss";

function HighlightCards({
  id,
  background,
  title,
  headingLevel,
  text,
  cards,
  col4,
  buttons,
  topics,
  nospace,
  nopadtop,
  hasCustomCols,
  cardSettings,
  highlightedCards,
  editorialSections,
}) {
  const processedCards = useMemo(() => {
    // If no automation data provided, use original cards
    if (!editorialSections || !id || !highlightedCards?.edges?.length) {
      return cards;
    }

    const editorialSection = editorialSections.find((es) => es.section === id);
    if (!editorialSection || !editorialSection.highlighted?.length) {
      return cards;
    }

    const externalCardSections = ["articoli-di-approfondimento"];

    if (externalCardSections.includes(id)) {
      const externalCards = editorialSection.highlighted.map((cardData, cardIndex) => {
        const uniqueId = `external-${cardIndex}-${cardData.url?.replace(/[^a-zA-Z0-9]/g, '-') || 'unknown'}`;

        const finalCard = {
          ...cardSettings,
          ...cardData,
          uniqueCardId: uniqueId,
          blank: true,
          externalLink: {
            label: "Leggi su Medium",
            screenReaderText: " (si apre in una nuova finestra)",
            icon: {
              icon: "sprites.svg#it-external-link",
              size: "xs"
            }
          }
        };

        if (!cardSettings?.showTags) {
          delete finalCard.tags;
        }
        if (!cardSettings?.showDateInfo) {
          delete finalCard.dateInfo;
        }
        if (!cardSettings?.showTag) {
          delete finalCard.tag;
        }

        return finalCard;
      });

      return externalCards;
    }

    if (!highlightedCards?.edges?.length) {
      return cards;
    }

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

    const getImageAndAlt = (node, contentType) => {
      switch (contentType) {
        case "eventi": {
          return {
            img: normalizeImagePath(node.seo?.image),
            alt: node.components?.imageIcons?.alt || "",
          };
        }

        case "media": {
          return {
            img: normalizeImagePath(node.seo?.image),
            alt: node.components?.imageIcons?.alt || "",
          };
        }

        case "notizie": {
          const primaryImage = node.components?.imageIcons?.image;
          const fallbackImage = node.seo?.image;

          return {
            img: normalizeImagePath(primaryImage || fallbackImage),
            alt: node.components?.imageIcons?.alt || "",
          };
        }

        default: {
          return {
            img: normalizeImagePath(
              node.components?.imageIcons?.image || node.seo?.image,
            ),
            alt: node.components?.imageIcons?.alt || "",
          };
        }
      }
    };

    const automatedCards = highlightedCards.edges
      .filter(({ node }) => {
        const nodeTitle = node.components?.hero?.title;

        return editorialSection.highlighted.some((highlightedItem) => {
          if (typeof highlightedItem === "string") {
            return highlightedItem === nodeTitle;
          }
          return highlightedItem.title === nodeTitle;
        });
      })

      .map(({ node }, cardIndex) => {
        const contentType = node.metadata?.archive;
        const { img, alt } = getImageAndAlt(node, contentType);
        const uniqueId = `${contentType || "content"}-${cardIndex}-${node.seo?.pathname?.replace(/\//g, "-") || "unknown"
          }`;

        const cardData = {
          title: node.components?.hero?.title,
          img,
          alt,
          url: node.seo?.pathname,
          uniqueCardId: uniqueId,
        };

        if (contentType === "notizie") {
          cardData.text = node.seo?.description;
        }

        if (contentType !== "media" && contentType !== "eventi") {
          cardData.tags = node.components?.hero?.kangaroo?.tags || [];
        }

        if (node.components?.hero?.tag?.label) {
          cardData.tag = {
            label: node.components.hero.tag.label,
            addonClasses: node.components.hero.tag.addonClasses,
          };
        }

        const personalInfo =
          node.components?.hero?.kangaroo?.personalInfo?.items;
        const eventInfo = node.components?.hero?.kangaroo?.eventInfo?.items;

        if (personalInfo) {
          const dataItem = personalInfo.find((item) => item.title === "Data");
          if (dataItem) {
            cardData.dateInfo = dataItem.label;
          }
        } else if (eventInfo) {
          const dataItem = eventInfo.find(
            (item) => item.title === "Data e orario",
          );
          if (dataItem) {
            cardData.dateInfo = dataItem.label;

            const dateMatch = dataItem.label.match(/(\d+)\s+(\w+)\s+(\d+)/);
            if (dateMatch && contentType === "eventi") {
              cardData.dateOverlay = {
                day: dateMatch[1],
                month: dateMatch[2],
                year: dateMatch[3],
              };
            }
          }
        }

        if (contentType === "eventi") {
          cardData.cardEvent = true;
          if (cardData.dateInfo && !cardData.dateOverlay) {
            const dateMatch = cardData.dateInfo.match(/(\d+)\s+(\w+)\s+(\d+)/);
            if (dateMatch) {
              cardData.dateOverlay = {
                day: dateMatch[1],
                month: dateMatch[2],
                year: dateMatch[3],
              };
            }
          }
        }

        if (contentType === "media") {
          cardData.iconOverlay = {
            icon: "sprites.svg#it-video",
            ariaLabel: "Video",
          };
          cardData.cardEvent = true;
        }

        const finalCard = {
          ...cardSettings,
          ...cardData,
        };

        if (
          !cardSettings?.showTags ||
          contentType === "media" ||
          contentType === "eventi"
        ) {
          delete finalCard.tags;
        }

        if (!cardSettings?.showDateInfo || contentType === "eventi") {
          delete finalCard.dateInfo;
        }

        if (!cardSettings?.showDateOverlay || contentType !== "eventi") {
          delete finalCard.dateOverlay;
        }

        if (!cardSettings?.showIconOverlay || contentType !== "media") {
          delete finalCard.iconOverlay;
        }

        if (!cardSettings?.showTag) {
          delete finalCard.tag;
        }

        return finalCard;
      })
      .sort((a, b) => {
        if (a.dateInfo && b.dateInfo) {
          return new Date(b.dateInfo) - new Date(a.dateInfo);
        }
        return 0;
      });

    return automatedCards;
  }, [editorialSections, id, highlightedCards, cards, cardSettings]);

  const styles =
    "highlight-cards" +
    `${background ? ` bg-${background}` : ""}` +
    `${nospace ? "" : " py-5 py-lg-7"}` +
    `${nopadtop ? " no-pad-top" : ""}`;

  let cardStyles = classNames("col-12 col-md-6 mb-3 mb-md-4", {
    "col-lg-4": !col4,
    "col-lg-3": col4,
  });

  const styleCustomCols = classNames("row pb-4", {
    "justify-content-center": hasCustomCols,
  });

  let cardsItems;
  let buttonsItems;

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h2`;
  }

  if (processedCards) {
    cardsItems = processedCards.map((item, index) => {
      const cardKey = item.uniqueCardId || `cardcol-${index}`;

      if (!item.customCol) {
        return (
          <div className={cardStyles} key={cardKey}>
            <Card {...item} />
          </div>
        );
      }
      cardStyles = `col-12 col-md-6 mb-3 mb-md-4 ${item.customCol}`;
      return (
        <div className={cardStyles} key={cardKey}>
          <Card {...item} />
        </div>
      );
    });
  }

  if (buttons) {
    buttonsItems = buttons.map((item, index) => (
      <Button {...item} key={`button-${index}`} />
    ));
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        {title && (
          <div className="row mb-4 mb-md-5 intro">
            <div className="col-12 g-0">
              <div className="px-3 px-lg-5">
                {title && (
                  <HLevel id={id} className="mb-2">
                    {title}
                  </HLevel>
                )}
                <p className="lead">{text}</p>
              </div>
            </div>
          </div>
        )}
        {cardsItems && <div className={styleCustomCols}>{cardsItems}</div>}
        {topics && <Topics {...topics} />}
        {buttonsItems && (
          <div className="row buttons">
            <div className="col col-md-10 offset-md-1 justify-content-center d-md-flex">
              {buttonsItems}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HighlightCards;
