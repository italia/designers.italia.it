import { useEffect, useRef } from "react";
import { Tooltip as BSITooltip } from "bootstrap-italia";
import Icon from "../icon/icon";
import Button from "../button/button";

import "../../scss/bootstrap-italia-TEMP-FIXES-REMOVEME.scss";

function Tooltip({ label, children }) {
  const ICON_INFO = {
    icon: "sprites.svg#it-info-circle",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle",
    ariaLabel: " Informazioni",
  };

  const tooltip = useRef();
  const element = useRef();

  useEffect(() => {
    // eslint-disable-next-line no-new
    new BSITooltip(element.current.children[0], {
      container: tooltip.current,
      template: `<div class="tooltip tooltip-fix" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>`,
    });
  }, []);

  return (
    <span>
      <span ref={tooltip} />
      <span ref={element}>
        <Button addonStyle="btn p-0 shadow-none" title={label}>
          <Icon {...ICON_INFO} />
          {children}
        </Button>
      </span>
    </span>
  );
}

export default Tooltip;
