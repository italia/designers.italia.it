// gatsby-browser.js
import React from 'react';

// Make React available globally for older third-party libraries
if (typeof window !== 'undefined') {
  window.React = React;
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash === "") {
    window.scrollTo(0, 0);
    document.scrollingElement.scrollTop = 0;
  }
  return false;
};