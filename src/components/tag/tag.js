import classNames from "classnames";
import * as React from "react";
import Link from "../link/link";
import "./tag.scss";

function Tag({ url, children, label, addonClasses, screenReaderText }) {
  const styles = classNames("chip chip-simple chip-sm", addonClasses); // don't use generic ".tag" > conflicts with Prism syntax highlighter

  if (url) {
    return (
      <Link to={url} className={styles}>
        {screenReaderText && (
          <span className="visually-hidden">{screenReaderText}</span>
        )}
        {label || children}
      </Link>
    );
  }
  return (
    <span className={styles}>
      <span className="chip-label">
        {screenReaderText && (
          <span className="visually-hidden">{screenReaderText}</span>
        )}
        {label || children}
      </span>
    </span>
  );
}

export default Tag;
