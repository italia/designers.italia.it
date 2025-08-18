// Save scroll positions when navigating away
exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (typeof window === 'undefined') return;
  
  // Disable browser's native scroll restoration to let us handle it
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
};

exports.shouldUpdateScroll = ({
  routerProps: { location, action },
  getSavedScrollPosition,
}) => {
  // SSR guard
  if (typeof window === "undefined") return true;

  // Handle hash navigation
  if (location.hash) {
    requestAnimationFrame(() => {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
    return true;
  }

  const isBackForward = action === "POP";

  if (isBackForward) {
    // Restore saved position for back/forward
    const savedPosition =
      getSavedScrollPosition && getSavedScrollPosition(location);

    if (
      savedPosition &&
      Array.isArray(savedPosition) &&
      savedPosition.length >= 2
    ) {
      requestAnimationFrame(() => {
        try {
          window.scrollTo(savedPosition[0], savedPosition[1]);
          console.log("Scrolled to saved position:", savedPosition);
        } catch (e) {
          window.scrollTo(0, savedPosition[1] || 0);
        }
      });
      return false;
    }

    // If no saved position, let Gatsby try its default restoration
    return true;
  }

  // Scroll to top for regular navigation
  requestAnimationFrame(() => {
    try {
      window.scrollTo(0, 0);
      if (
        document.scrollingElement &&
        document.scrollingElement.scrollTop !== 0
      ) {
        document.scrollingElement.scrollTop = 0;
      }
      if (document.body && document.body.scrollTop !== 0) {
        document.body.scrollTop = 0;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      // console.warn("Scroll to top failed:", e);
    }
  });

  return false;
};
