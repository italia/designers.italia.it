// Make React available globally during SSR
import React from 'react';
global.React = React;

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "it" });
};