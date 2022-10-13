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
import HeaderNav from "../components/header-nav/header-nav"
import LastUpdate from "../components/last-update/last-update"
import Feedback from "../components/feedback/feedback"
import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"

const MainTemplate = ({children,page,lastUpdate}) => {
	return (
    <>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
			<HeaderSlim data={HeaderData.headerSlim}/>
			<NavWrapper>
				<HeaderCenter data={HeaderData.headerCenter}/>
				<HeaderNav data={HeaderData.navbar} page={page}/>
			</NavWrapper>
		</Header>
      <main id="main">
        {children}
        {lastUpdate ? <LastUpdate {...lastUpdate} /> : null }
        <Feedback/>
      </main>
      <Footer {...FooterData.footer}>
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
