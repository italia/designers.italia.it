import Icon from "../icon/icon";
import Link from "../link/link";
import "./button.scss";

function Button({
  url,
  submit = false,
  size,
  id,
  label, // if data is yaml
  btnStyle, // primary,secondary,outline-primary,outline-secondary,success,warning,danger,info,dropdown
  customStyle,
  addonStyle,
  role, // button role for link <a>
  disabled, // true,no prop
  iconLeft, // icon in left position (component Icon)
  iconRight, // icon in right position  (component Icon)
  icon,
  iconRounded,
  ariaLabel, // for buttons icon only, text for screen reader
  ariaControls, // id for menu opened by button
  ariaExpanded, // true / no prop
  dataBsToggle, // navbarcollapsible,dropdown
  children,
  blank,
  title,
  onClick,
}) {
  let iconRendered;
  const btnStyles = `${customStyle ? "" : "btn"}${size ? ` btn-${size}` : ""}${
    btnStyle ? ` btn-${btnStyle}` : ""
  }${disabled ? " disabled" : ""}${
    iconLeft || (iconRight && !dataBsToggle) ? " btn-icon" : ""
  }${customStyle || ""}${addonStyle ? ` ${addonStyle}` : ""}`;

  let iconRender;
  if (icon) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    iconRender = <Icon {...icon} />;
  }

  if (label) {
    // eslint-disable-next-line no-param-reassign
    children = label;
  }

  // rounded icon wrapper
  if (iconRounded) {
    iconRendered = <span className="rounded-icon">{iconRender}</span>;
  } else {
    iconRendered = iconRender;
  }

  if (url) {
    return (
      <Link
        to={url}
        target={blank ? "_blank" : undefined}
        rel={blank ? "noreferrer" : undefined}
        id={id}
        className={btnStyles}
        role={role}
        aria-label={ariaLabel}
        data-disabled={disabled}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        data-bs-toggle={dataBsToggle}
        data-bs-target={ariaControls ? `#${ariaControls}` : undefined}
        aria-disabled={disabled ? true : undefined}
        onClick={onClick}
      >
        {iconLeft ? iconRendered : ""}
        <span>{children}</span>
        {iconRight ? iconRendered : ""}
        {!iconLeft && !iconRight && icon ? iconRendered : ""}
      </Link>
    );
  }
  return (
    <button
      id={id}
      type={submit ? "submit" : "button"}
      aria-label={ariaLabel}
      className={btnStyles}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      data-bs-toggle={dataBsToggle}
      data-bs-target={ariaControls ? `#${ariaControls}` : undefined}
      aria-disabled={disabled ? true : undefined}
      title={title}
      onClick={onClick}
    >
      {iconLeft ? iconRendered : ""}
      <span>{children}</span>
      {iconRight ? iconRendered : ""}
      {!iconLeft && !iconRight && icon ? iconRendered : ""}
    </button>
  );
}

export default Button;
