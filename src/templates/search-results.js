import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

import Skiplinks from "../components/skiplinks/skiplinks"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"
import HeaderSlim from "../components/header-slim/header-slim"
import HeaderPre from "../components/header-pre/header-pre"
import NavWrapper from "../components/nav-wrapper/nav-wrapper"
import HeaderCenter from "../components/header-center/header-center"
import HeaderNav from "../components/header-nav/header-nav"
import LastUpdate from "../components/last-update/last-update"
import Feedback from "../components/feedback/feedback"

import Hero from "../components/hero/hero"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"

import SearchMain from "../components/search-main/search-main"

const Template = ({Pagedata, pageContext, location, lastModified}) => {
	return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre}/>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
        <HeaderSlim data={HeaderData.headerSlim}/>
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter}/>
          <HeaderNav data={HeaderData.navbar} />
        </NavWrapper>
      </Header>
      <main id="main">
        {Pagedata.components.hero && <Hero {...Pagedata.components.hero} pageContext={pageContext} {...Pagedata.seo}></Hero>}
        {Pagedata.components.searchMain && <SearchMain {...Pagedata.components.searchMain} location={location}></SearchMain>}
        {lastModified && <LastUpdate lastModified={lastModified} {...Pagedata.lastUpdate} {...location} {...pageContext}/>}
        <Feedback/>
      </main>
      <Footer {...FooterData.footer}>
      </Footer>
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
        ariaLabel={FooterData.footer.backToTop.ariaLabel}
      />
    </div>
	)
}

export default Template
