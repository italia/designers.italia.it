exports.shouldUpdateScroll = ({
  routerProps: { location, action },
  getSavedScrollPosition,
}) => {
  if (action === "POP") {
    const savedPosition = getSavedScrollPosition(location);
    return savedPosition || true;
  }

  if (location.hash) {
    return true;
  }

  return [0, 0];
};
