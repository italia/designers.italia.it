import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

import Skiplinks from "../components/skiplinks/skiplinks"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"
import HeaderSlim from "../components/header-slim/header-slim"
import NavWrapper from "../components/nav-wrapper/nav-wrapper"
import HeaderCenter from "../components/header-center/header-center"
import HeaderData from '../data/header.yaml'
import FooterData from '../data/footer.yaml'
import HeaderNav from "../components/header-nav/header-nav"

const MainTemplate = ({children}) => {
	return (
    <>
      <Skiplinks/>
      <Header data={HeaderData}>
			<HeaderSlim data={HeaderData.headerSlim}/>
			<NavWrapper>
				<HeaderCenter data={HeaderData.headerCenter}/>
				<HeaderNav data={HeaderData.navbar}/>
			</NavWrapper>
		</Header>
      <main id="main">
        {children}
      </main>
      <Footer data={FooterData.footer}>
      </Footer>
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
      />
    </>
	)
}

export default MainTemplate
