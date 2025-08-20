import Button from "../button/button";
import List from "../list/list";
import "./dropdown.scss";

function Dropdown({
  btnId,
  dropUp,
  dropEnd,
  dropStart,
  list,
  children,
  button,
  customStyle,
  shareUrl,
  shareTitle,
}) {
  const styles =
    "dropdown" +
    `${dropUp ? " dropup" : ""}` +
    `${dropEnd ? " dropend" : ""}` +
    `${dropStart ? " dropstart" : ""}` +
    `${customStyle ? ` ${customStyle}` : ""}`;

  let btnComponents;
  if (button) {
    btnComponents = (
      <Button
        id={btnId}
        ariaExpanded="false"
        ariaHaspopup="true"
        dataBsToggle="dropdown"
        {...button}
      />
    );
  }

  return (
    <div className={styles}>
      {btnComponents}
      <div className="dropdown-menu" aria-labelledby={btnId}>
        {list ? (
          <List
            {...list}
            shareUrl={shareUrl}
            shareTitle={shareTitle}
            isMenu
            isDropdown
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default Dropdown;
