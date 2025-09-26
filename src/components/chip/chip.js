import * as React from "react";
import slugify from "slugify";

import "./chip.scss";
import Link from "../link/link";

function Chip({ size, color, path = "argomenti", label, children, as }) {
  const styles =
    "chip chip-simple" +
    `${size ? ` chip-${size}` : ""}` +
    `${color ? ` chip-${color}` : ""}`;

  if (as === "span") {
    return (
      <span className={styles}>
        <span className="visually-hidden">Argomento: </span>
        <span className="chip-label">{label}</span>
        {children}
      </span>
    );
  }

  return (
    <Link
      to={`/${path}/${slugify(label, { strict: true, lower: true })}/`}
      className={styles}
    >
      <span className="visually-hidden">Argomento: </span>
      <span className="chip-label">{label}</span>
      {children}
    </Link>
  );
}

export default Chip;
