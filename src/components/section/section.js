function Section({ background, bgImage, whiteText, describedBy, children }) {
  const sectionnStyles =
    "section" +
    `${background ? ` section-${background}` : ""}` + // muted, primary, neutral
    `${bgImage ? " section-image" : ""}` + // url
    `${whiteText ? " white-color" : ""}`; // boolean for white text

  return (
    <section
      className={sectionnStyles}
      aria-labelledby={describedBy}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
