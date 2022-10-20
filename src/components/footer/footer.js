import React from "react"
import FooterBrand from "../footer-brand/footer-brand"
import FooterMain from "../footer-main/footer-main"
import FooterSmall from "../footer-small/footer-small"


const Footer = ({
  footerProject,
  footerContribute,
  footerMain,
  footerSmall,
}) => {

  return (
	<footer className="it-footer">
		{footerProject && <FooterBrand {...footerProject}/>}
		{footerContribute && <FooterBrand {...footerContribute}/>}
		{footerMain && <FooterMain {...footerMain}/>}
		{footerSmall && <FooterSmall {...footerSmall}/>}
	</footer>
  )
}

export default Footer
