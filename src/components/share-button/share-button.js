import * as React from "react";
import PropTypes from "prop-types";

import Dropdown from "../dropdown/dropdown";

function ShareButton({ title, url, color, small }) {
  // TODO: Compatibility structure that Dropdown understands.
  // Dropdown should not have the logic in it for the share UI
  const shareOpts = {
    button: {
      icon: {
        icon: "sprites.svg#it-more-items",
        size: "sm",
        color,
        addonClasses: "ms-3",
      },
    },
    list: {
      isShare: true,
    },
  };

  if (!small) {
    shareOpts.button.addonStyle = `btn-share-hero btn-dropdown text-${color} mb-5 mt-lg-4 ms-auto`;
    shareOpts.button.label = "Condividi";
    shareOpts.button.ariaLabel = `Condividi: ${title}`;
  } else {
    shareOpts.button.addonStyle = "icon-only-drop";
    shareOpts.button.ariaLabel = `Condividi: ${title}`;
  }

  return <Dropdown {...shareOpts} shareTitle={title} shareUrl={url} />;
}

ShareButton.defaultProps = {
  color: "primary",
  small: false,
};

ShareButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "white"]),
  small: PropTypes.bool,
};

export default ShareButton;
