import React from "react";
import "./skiplinks.scss";

function Skiplinks({ data }) {

  const skiplinks = data.skiplinks
  const skiplinksLabel = data.skiplinksLabel
  let skiplinksItems;

  if (skiplinks) {
    skiplinksItems = skiplinks.map((item, index) => (
      <li className="visually-hidden-focusable">
        <a
          key={`skiplink-${index}`}
          href={item.url}
        >
          {item.label}
        </a>
      </li>
    ));
  }

  return (
    <nav className="skiplinks" aria-label={skiplinksLabel}>
      <ul>
        {skiplinksItems}
      </ul>
    </nav>
  )
}

export default Skiplinks;
