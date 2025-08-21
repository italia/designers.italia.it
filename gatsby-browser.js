export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash === "") {
    window.scrollTo(0, 0);
    document.scrollingElement.scrollTop = 0;
  }
  return false;
};
