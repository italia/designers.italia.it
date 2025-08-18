/**
 * Manual scroll position saving and restoration for Gatsby
 * Bypasses Gatsby's unreliable getSavedScrollPosition with fallback strategy
 */

const SCROLL_KEY_PREFIX = "@@scroll";
const MAX_STORED_POSITIONS = 15;

/**
 * Clean up old scroll positions to prevent sessionStorage bloat
 */
const cleanupOldScrollPositions = () => {
  if (typeof window === "undefined") return;

  try {
    const scrollKeys = Object.keys(sessionStorage).filter((key) =>
      key.startsWith(SCROLL_KEY_PREFIX)
    );

    if (scrollKeys.length > MAX_STORED_POSITIONS) {
      // Remove excess entries (simple FIFO approach)
      const excessCount = scrollKeys.length - MAX_STORED_POSITIONS;
      scrollKeys.slice(0, excessCount).forEach((key) => {
        sessionStorage.removeItem(key);
      });
    }
  } catch (error) {
    console.warn("Failed to cleanup scroll positions:", error);
  }
};

/**
 * Get stored scroll position for a given pathname
 */
const getStoredScrollPosition = (pathname) => {
  if (typeof window === "undefined") return null;

  const scrollKey = `${SCROLL_KEY_PREFIX}${pathname}`;
  const stored = sessionStorage.getItem(scrollKey);

  if (!stored) return null;

  try {
    const position = JSON.parse(stored);
    return Array.isArray(position) && position.length >= 2 ? position : null;
  } catch (error) {
    // Clean up corrupted entry
    sessionStorage.removeItem(scrollKey);
    return null;
  }
};

/**
 * Save current scroll position for a given pathname
 */
const saveScrollPosition = (pathname) => {
  if (typeof window === "undefined") return;

  try {
    const scrollKey = `${SCROLL_KEY_PREFIX}${pathname}`;
    const scrollPosition = [window.pageXOffset, window.pageYOffset];
    sessionStorage.setItem(scrollKey, JSON.stringify(scrollPosition));
  } catch (error) {
    console.warn("Failed to save scroll position:", error);
  }
};

/**
 * Scroll to specified position with error handling
 */
const scrollToPosition = (x, y) => {
  try {
    window.scrollTo(x, y);

    // Additional fallback for browsers with scrolling issues
    if (document.scrollingElement?.scrollTop !== y) {
      document.scrollingElement.scrollTop = y;
    }
    if (document.body?.scrollTop !== y) {
      document.body.scrollTop = y;
    }
  } catch (error) {
    console.warn("Scroll operation failed:", error);
  }
};

/**
 * Handle smooth scrolling to hash targets
 */
const handleHashNavigation = (hash) => {
  requestAnimationFrame(() => {
    const element = document.getElementById(hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};

/**
 * Handle scroll restoration for back/forward navigation
 */
const handleBackForwardScroll = (location, getSavedScrollPosition) => {
  // Try Gatsby's built-in method first
  let savedPosition = getSavedScrollPosition?.(location);

  // Fallback to manual storage if Gatsby's method fails
  if (!savedPosition || !Array.isArray(savedPosition)) {
    savedPosition = getStoredScrollPosition(location.pathname);
  }

  // Debug logging
  console.log("Back/forward navigation:", {
    pathname: location.pathname,
    gatsbyPosition: getSavedScrollPosition?.(location) || "N/A",
    manualPosition: getStoredScrollPosition(location.pathname),
    finalPosition: savedPosition,
  });

  if (savedPosition) {
    requestAnimationFrame(() => {
      scrollToPosition(savedPosition[0], savedPosition[1]);
      console.log("Restored scroll position:", savedPosition);
    });
    return false;
  }

  // No saved position found - stay at current position
  return false;
};

/**
 * Handle scroll to top for regular navigation
 */
const handleRegularNavigation = () => {
  requestAnimationFrame(() => {
    scrollToPosition(0, 0);
  });
  return false;
};

// ====================
// Gatsby Plugin Exports
// ====================

/**
 * Save scroll positions when navigating away
 */
exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (typeof window === "undefined") return;

  // Disable browser's native scroll restoration
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Save previous page's scroll position
  if (prevLocation) {
    saveScrollPosition(prevLocation.pathname);
    cleanupOldScrollPositions();
  }
};

/**
 * Control scroll behavior on route changes
 */
exports.shouldUpdateScroll = ({ routerProps: { location, action }, getSavedScrollPosition }) => {
  // SSR guard
  if (typeof window === "undefined") return true;

  // Handle hash navigation
  if (location.hash) {
    handleHashNavigation(location.hash);
    return true;
  }

  const isBackForward = action === "POP";

  return isBackForward
    ? handleBackForwardScroll(location, getSavedScrollPosition)
    : handleRegularNavigation();
};
