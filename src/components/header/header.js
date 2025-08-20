import { useEffect } from "react";
import { HeaderSticky } from "bootstrap-italia";

function Header({ data, children }) {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new HeaderSticky(document.getElementById("header"));
  });
  const styles =
    "it-header-wrapper" +
    `${data.sticky ? " it-header-sticky" : ""}` +
    `${data.shadow ? " shadow" : ""}` +
    `${data.border ? " border-bottom border-white" : ""}`;

  return (
    <header
      className={styles}
      id="header"
      data-bs-position-type={data.sticky ? "fixed" : ""}
      data-bs-sticky-class-name={data.sticky ? "is-sticky" : ""}
      data-bs-target={`#${data.navbar.id}`}
    >
      {children}
    </header>
  );
}

export default Header;
