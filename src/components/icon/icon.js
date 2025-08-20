function Icon({
  icon, // url of icon 'sprites.svg#it-tool'
  size, // xs, sm, lg xl
  padded, // true, no prop
  bg, // light, dark
  align, // bottom,middle,top
  color, // primary,secondary,success,warning,danger,light,white
  hidden,
  addonClasses,
  ariaLabel,
}) {
  const styles =
    "icon" +
    `${padded ? " icon-padded" : ""}` +
    `${size ? ` icon-${size}` : ""}` +
    `${bg ? ` bg-${bg}` : ""}` +
    `${align ? ` align-${align}` : ""}` +
    `${color ? ` icon-${color}` : ""}` +
    `${addonClasses ? ` ${addonClasses}` : ""}`;

  return (
    <svg
      role="img"
      className={styles}
      aria-hidden={hidden}
      aria-label={ariaLabel}
    >
      <use href={`/svg/${icon}`} />
    </svg>
  );
}

export default Icon;
