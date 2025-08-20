import { useEffect } from "react";
import { Dropdown } from "bootstrap-italia";
import { Link } from "gatsby";
import Icon from "../icon/icon";

function HeaderMenuLink({ isDropDown, idMegamenu, label, url, page }) {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Dropdown(document.getElementById(idMegamenu), {});
  });

  const styles =
    "nav-link" +
    `${isDropDown ? " dropdown-toggle" : ""}` +
    `${page === label ? " active" : ""}` +
    " px-lg-2 px-xl-3 fw-semibold";

  // eslint-disable-next-line consistent-return
  function icon(boolean) {
    if (boolean) {
      return (
        <Icon icon="sprites.svg#it-expand" size="xs" addonClasses="ms-1" />
      );
    }
  }

  if (isDropDown) {
    return (
      <button
        type="button"
        className={styles}
        data-bs-toggle={isDropDown ? "dropdown" : undefined}
        aria-expanded={isDropDown ? "false" : undefined}
        id={idMegamenu}
      >
        <span>{label}</span>
        {icon(isDropDown)}
      </button>
    );
  }
  return (
    <Link
      className={styles}
      href={url || "#"}
      data-bs-toggle={isDropDown ? "dropdown" : undefined}
      aria-expanded={isDropDown ? "false" : undefined}
      id={idMegamenu}
    >
      <span>{label}</span>
      {icon(isDropDown)}
    </Link>
  );
}
export default HeaderMenuLink;
