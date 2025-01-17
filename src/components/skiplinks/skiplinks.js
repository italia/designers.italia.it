import React from "react";

function Skiplinks({ data }) {
  const { skiplinks } = data;
  const { skiplinksLabel } = data;
  let skiplinksItems;

  if (skiplinks) {
    skiplinksItems = skiplinks.map((item, index) => (
      <li key={`skiplink-${index}`} className="visually-hidden-focusable">
        <a href={item.url}>
          {item.label}
        </a>
      </li>
    ));
  }

  return (
    <nav className="skiplinks" aria-label={skiplinksLabel}>
      <ul>{skiplinksItems}</ul>
    </nav>
  );
}

export default Skiplinks;
