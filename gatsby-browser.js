exports.shouldUpdateScroll = ({ 
  routerProps: { location }, 
  getSavedScrollPosition 
}) => {
  // If there's a hash, let Gatsby handle it (scroll to element)
  if (location.hash) {
    return true;
  }
  // For back/forward navigation, restore saved scroll position
  const savedPosition = getSavedScrollPosition(location);
  if (savedPosition) {
    window.scrollTo(...savedPosition);
    return false;
  }
  // For new navigation (menu clicks, direct links), scroll to top
  window.scrollTo(0, 0);
  document.scrollingElement.scrollTop = 0;
  return false;
};
