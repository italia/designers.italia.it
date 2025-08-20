import FooterBrand from "../footer-brand/footer-brand";
import FooterMain from "../footer-main/footer-main";
import FooterSmall from "../footer-small/footer-small";

function Footer({
  title,
  footerProject,
  footerContribute,
  footerMain,
  footerSmall,
}) {
  return (
    <footer className="it-footer">
      <h2 className="visually-hidden">{title}</h2>
      {footerProject && <FooterBrand {...footerProject} />}
      {footerContribute && <FooterBrand {...footerContribute} />}
      {footerMain && <FooterMain {...footerMain} />}
      {footerSmall && <FooterSmall {...footerSmall} />}
    </footer>
  );
}

export default Footer;
