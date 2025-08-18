exports.shouldUpdateScroll = ({ 
  routerProps: { location, action }, 
  getSavedScrollPosition 
}) => {
  // SSR guard
  if (typeof window === 'undefined') return true;
  
  // Handle hash navigation
  if (location.hash) {
    requestAnimationFrame(() => {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
    return true;
  }
  
  const isBackForward = action === 'POP';
  
  if (isBackForward) {
    // Restore saved position for back/forward
    const savedPosition = getSavedScrollPosition && getSavedScrollPosition(location);
    
    if (savedPosition && Array.isArray(savedPosition) && savedPosition.length >= 2) {
      requestAnimationFrame(() => {
        try {
          window.scrollTo(savedPosition[0], savedPosition[1]);
        } catch (e) {
          window.scrollTo(0, savedPosition[1] || 0);
        }
      });
      return false;
    }
    
    return true;
  }
  
  // Scroll to top for regular navigation
  requestAnimationFrame(() => {
    try {
      window.scrollTo(0, 0);
      if (document.scrollingElement && document.scrollingElement.scrollTop !== 0) {
        document.scrollingElement.scrollTop = 0;
      }
      if (document.body && document.body.scrollTop !== 0) {
        document.body.scrollTop = 0;
      }
    } catch (e) {
      console.warn('Scroll to top failed:', e);
    }
  });
  
  return false;
};
