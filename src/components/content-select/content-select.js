import { Children, useState } from "react";
import ContentSelectItem from "./components/content-select-item/content-select-item";
import Icon from "../icon/icon";

import "./content-select.scss";

const VARIANT_PREFIX = "variant-";

function ContentSelect({ id, title, textInfo, children, selectedIdx, label }) {
  // FIXME: Using Number.isNaN() breaks the component viewer in the *static*
  // build, while still working with the dev server. No clue why.
  // https://github.com/italia/designers.italia.it/pull/842#issuecomment-1691861173
  const [itemSelected, setItemSelected] = useState(
    // eslint-disable-next-line no-restricted-globals
    !isNaN(selectedIdx) ? VARIANT_PREFIX + selectedIdx : VARIANT_PREFIX + 0,
  );

  const changeValue = (evt) => {
    setItemSelected(evt.currentTarget.value);
  };

  const variants = [];
  Children.forEach(children, (child, idx) => {
    if (child.type === ContentSelectItem) {
      variants.push({
        name: child.props.name,
        value: VARIANT_PREFIX + idx,
        component: child,
      });
    } else {
      throw new Error(
        "ContentSelect accepts only ContentSelectItem as its children",
      );
    }
  });

  const selectedChild = variants.find((v) => itemSelected === v.value);

  const ICON_INFO = {
    icon: "sprites.svg#it-info-circle",
    size: "sm",
    color: "muted",
    addonClasses: "align-middle me-2 mb-1",
    ariaLabel: " Info",
  };

  return (
    <section className="container-xxl" aria-labelledby={id}>
      <div className="row">
        <div className="ps-lg-2">
          <div className="col-9 mb-5 ps-lg-5">
            <h2 id={id} className="">
              {title}
            </h2>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mb-4 ps-lg-5">
            <div className="select-wrapper">
              <label htmlFor={`${id}-select`}>{label}</label>
              <select
                value={itemSelected}
                onChange={changeValue}
                autoComplete="off"
                id={`${id}-select`}
              >
                {variants.map((v, idx) => (
                  <option key={`opt-${idx}`} value={v.value}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {textInfo && (
            <div className="col-md-6 ps-lg-5">
              <p className="small">
                <Icon {...ICON_INFO} /> {textInfo}
              </p>
            </div>
          )}
        </div>
        <div className="col-12">{selectedChild && selectedChild.component}</div>
      </div>
    </section>
  );
}

export default ContentSelect;
