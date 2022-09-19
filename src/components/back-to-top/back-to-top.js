import React from "react"
import { useEffect } from 'react';
import { BackToTop } from 'bootstrap-italia'
import Icon from '../icon/icon'
import "./back-to-top.scss"

const BackToTopEl = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const backToTop = new BackToTop(document.getElementsByClassName('back-to-top')[0])
  });
  return (
    <a href="#" aria-hidden="true" data-bs-toggle="backtotop" class="back-to-top">
      {/*<svg class="icon icon-light"><use href="/svg/sprites.svg#it-arrow-up"></use></svg>*/}
      <Icon icon="sprites.svg#it-arrow-up" color="light"/>
    </a>
  )
}

export default BackToTopEl
