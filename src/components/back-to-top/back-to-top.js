import { useEffect } from "react";
import { BackToTop } from "bootstrap-italia";
import Icon from "../icon/icon";

function BackToTopEl({
  positionTop,
  scrollLimit,
  duration,
  easing,
  ariaLabel,
  ...opts
}) {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new BackToTop(document.getElementById("backToTop"), {
      positionTop,
      scrollLimit,
      duration,
      easing,
    });
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      aria-label={ariaLabel}
      className="back-to-top"
      id="backToTop"
      {...opts}
    >
      <Icon icon="sprites.svg#it-arrow-up" color="light" />
    </a>
  );
}

export default BackToTopEl;
