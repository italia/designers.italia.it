exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  window.history.scrollRestoration = "manual"
  const currentPosition = getSavedScrollPosition(location)

  window.setTimeout(() => {
    window.scrollTo(...(currentPosition || [0, 0]))
  }, 100 )

  return false
}