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
import Tab from "../components/tab/tab"

import NavSidebar from "../components/nav-sidebar/nav-sidebar"
import Hero from "../components/hero/hero"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"
import dsNav from "../data/dsnav.yaml"


const Template = ({Pagedata,pageContext,location}) => {
  const variantMock = require(`../data/content/design-system/componenti/${Pagedata.metadata.json}`)
	return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre}/>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
        <HeaderSlim data={HeaderData.headerSlim}/>
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter}/>
          <HeaderNav data={HeaderData.navbar} page={Pagedata.title}/>
        </NavWrapper>
      </Header>
      <div className="bg-light">
        <div className="container-xxl">
          <div className="row">
            <NavSidebar page={Pagedata.components.hero.title} {...dsNav}/>
            <main id="main" className="col-12 col-lg-9 px-lg-0 content-column bg-white">
              { Pagedata.components.hero && <Hero {...Pagedata.components.hero} pageContext={pageContext} {...Pagedata.seo}></Hero>}
              <Tab
                tab01={Object.assign({}, Pagedata.tabs[0], { variants: variantMock })}
                tab02={Pagedata.tabs[1]}
                tab03={Object.assign({}, Pagedata.tabs[2], { variants: variantMock })}
              />
              {Pagedata.lastUpdate && <LastUpdate {...Pagedata.lastUpdate} {...location} {...pageContext}/>}
            </main>
          </div>
        </div>

        <Feedback/>
      </div>
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
