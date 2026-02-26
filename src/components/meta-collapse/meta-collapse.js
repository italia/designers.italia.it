import React, { useRef, useEffect, useState } from "react";
import { Collapse } from "bootstrap-italia";
import Icon from "../icon/icon";
import "./meta-collapse.scss";

function MetaCollapse({ label, labelClose, children }) {
  const icon = {
    icon: "sprites.svg#it-expand",
    size: "sm",
    align: "middle",
    color: "primary",
    hidden: true,
    addonClasses: "ms-2",
  };

  const collRef = useRef(null);
  const collObjRef = useRef(null);

  const [id, setId] = useState("meta-collapse-");

  const toggleAria = (element) => {
    const ariaAttr = element.getAttribute("aria-expanded");
    let newVal = "true";
    if (ariaAttr === "true") {
      newVal = "false";
    }
    element.setAttribute("aria-expanded", newVal);
  };
  const collapseToggle = (evt) => {
    evt.preventDefault();
    if (collObjRef.current) {
      collObjRef.current.toggle();
      toggleAria(evt.currentTarget);
    }
  };

  useEffect(() => {
    collObjRef.current = new Collapse(collRef.current, { toggle: false });
    setId(`meta-collapse-${new Date().getTime()}`);
  }, []);

  return (
    <div className="meta-collapse">
      <button
        href="#"
        type="button"
        onClick={collapseToggle}
        className="read-more mt-3 mb-3 d-inline-flex p-0 btn btn-dropdown dropdown-toggle"
        aria-expanded="false"
        aria-controls={id}
      >
        <span className="more-text">{label}</span>
        <span className="less-text">{labelClose}</span>
        <Icon {...icon} />
      </button>
      <div ref={collRef} className="collapse" id={id}>
        {children}
      </div>
    </div>
  );
}

export default MetaCollapse;
