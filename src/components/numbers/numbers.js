import Icon from "../icon/icon";
import "./numbers.scss";

function Numbers({ items, inline }) {
  const styles =
    "numbers-wrapper d-sm-flex flex-wrap align-items-end" +
    `${inline ? " inline-numbers" : ""}`;

  // numbers
  let NumbersRender;
  if (items) {
    NumbersRender = items.map((num, index) => (
      <div className="numbers mb-4 mb-sm-4" key={`number-${index}`}>
        <div className="label mb-2">
          <strong>{num.label}</strong>
        </div>
        <div className="d-flex align-items-center">
          <Icon icon={num.icon} size="lg" addonClasses="mt-1 me-2" hidden />
          <div className="number font-monospace fw-normal display-1">
            {num.number}
          </div>
        </div>
      </div>
    ));
  }

  return <div className={styles}>{NumbersRender}</div>;
}

export default Numbers;
