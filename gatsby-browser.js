exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location)

  window.scrollTo(...(currentPosition || [0, 0]))

  return false
}