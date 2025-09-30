import * as React from "react";
import Icon from "../icon/icon";
import Link from "../link/link";
import "./simple-cta.scss";

function SimpleCta({ icon, children, label, url, blank, screenReaderText }) {
  return (
    <>
      {url && (
        <Link
          className="simple-cta pt-2 mb-2"
          to={url}
          target={blank ? "_blank" : undefined}
          rel={blank ? "noreferrer" : undefined}
        >
          <span className="text">{label || children}</span>
          <span className="visually-hidden">{screenReaderText}</span>
          <Icon {...icon} />
        </Link>
      )}
      {!url && (
        <span className="simple-cta pt-3 mb-2">
          <span className="text">{label || children}</span>
          <span className="visually-hidden">{screenReaderText}</span>
          <Icon {...icon} />
        </span>
      )}
    </>
  );
}

export default SimpleCta;
