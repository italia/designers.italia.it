exports.shouldUpdateScroll = ({ 
  routerProps: { location, action }, 
  getSavedScrollPosition 
}) => {
  // If there's a hash, let Gatsby handle scrolling to the element
  if (location.hash) {
    return true;
  }
  
  // Check if this is back/forward navigation using history action
  if (action === 'POP') {
    const savedPosition = getSavedScrollPosition(location);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(...savedPosition);
      }, 0);
      return false;
    }
    return true;
  }
  
  // For PUSH/REPLACE navigation (menu clicks, direct navigation)
  setTimeout(() => {
    window.scrollTo(0, 0);
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, 0);
  
  return false;
};
