/* eslint-disable import/prefer-default-export */
// Make React available globally for older third-party libraries
import React from "react";

if (typeof window !== "undefined") {
  window.React = React;
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash === "") {
    window.scrollTo(0, 0);
    document.scrollingElement.scrollTop = 0;
  }
  return false;
};
