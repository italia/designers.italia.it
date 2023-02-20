import React from "react"
import { useEffect } from "react";
import { BackToTop } from "bootstrap-italia"
import Icon from "../icon/icon"

const BackToTopEl = (props) => {
  useEffect(() => {
    new BackToTop(document.getElementById('backToTop'), {
      positionTop: props.positionTop,
      scrollLimit: props.scrollLimit,
      duration: props.duration,
      easing: props.easing,
    })
  });
  return (
    <a href="#" aria-label={props.ariaLabel} className="back-to-top" id="backToTop">
      <Icon icon="sprites.svg#it-arrow-up" color="light"/>
    </a>
  )
}

export default BackToTopEl
