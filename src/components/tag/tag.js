import classNames from "classnames";
import * as React from "react";
import Link from "../link/link";
import "./tag.scss";

function Tag({ url, children, label, addonClasses, screenReaderText }) {
  const styles = classNames("di-tag", addonClasses); // don't use generic ".tag" > conflicts with Prism syntax highlighter

  const Container = url ? Link : "div";
  const containerProps = url
    ? { to: url, className: styles }
    : { className: styles };

  return (
    <Container {...containerProps}>
      {screenReaderText && (
        <span className="visually-hidden">{screenReaderText}</span>
      )}
      <span>{label || children}</span>
    </Container>
  );
}

export default Tag;
