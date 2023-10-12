import classNames from "classnames";
import React from "react";
import Card from "../card/card";
import Button from "../button/button";
import Topics from "../topics/topics";
// import ReactMarkdown from "react-markdown"
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
}) {
  const styles =
    "highlight-cards" +
    `${background ? ` bg-${background}` : ""}` +
    `${nospace ? "" : "  py-5 py-lg-7"}` +
    `${nopadtop ? "  no-pad-top" : ""}`;

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

  if (cards) {
    cardsItems = cards.map((item, index) => {
      if (!item.customCol) {
        return (
          <div className={cardStyles} key={`cardcol-${index}`}>
            <Card {...item} />
          </div>
        );
      }
      cardStyles = `col-12 col-md-6 mb-3 mb-md-4 ${item.customCol}`;
      return (
        <div className={cardStyles} key={`cardcol-${index}`}>
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
              {/* <div className='col col-md-10 offset-md-1'> */}
              <div className="px-3 px-lg-5">
                {title && (
                  <HLevel id={id} className="mb-2">
                    {title}
                  </HLevel>
                )}
                <p className="lead">{text}</p>{" "}
                {/* <ReactMarkdown>{text}</ReactMarkdown> */}
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
