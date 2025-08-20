import classNames from "classnames";
import Card from "../card/card";
import ListArchiveDSTags from "../list-archive-ds-tags/list-archive-ds-tags";

function FilterCards({
  id,
  background,
  title,
  headingLevel,
  cards,
  showTags,
  col2,
  noSpace,
  paddingX,
}) {
  const styles = classNames("filter-cards", {
    [`bg-${background}`]: background,
    "py-5 py-lg-6": !noSpace,
    "py-2 py-lg-5": noSpace,
    "px-lg-4 px-xl-5": paddingX,
  });

  const cardStyles = `col-12 col-md-6 mb-3 mb-md-4 ${col2 ? "" : " col-xl-4"}`;

  let cardsItems;

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h2`;
  }

  if (cards) {
    cardsItems = cards.map((item, index) => (
      <div className={cardStyles} key={`cardcol-${index}`}>
        <Card {...item} />
      </div>
    ));
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 mb-4">
            {title && <HLevel id={id}>{title}</HLevel>}
          </div>

          {showTags && <ListArchiveDSTags />}
        </div>
        <div className="row cards-wrapper">{cardsItems}</div>
      </div>
    </section>
  );
}

export default FilterCards;
