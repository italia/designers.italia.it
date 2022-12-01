import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

import Skiplinks from "../components/skiplinks/skiplinks"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"
import HeaderPre from "../components/header-pre/header-pre"
import HeaderSlim from "../components/header-slim/header-slim"
import NavWrapper from "../components/nav-wrapper/nav-wrapper"
import HeaderCenter from "../components/header-center/header-center"
import HeaderNav from "../components/header-nav/header-nav"
import LastUpdate from "../components/last-update/last-update"
import Feedback from "../components/feedback/feedback"

import Hero from "../components/hero/hero"
import SectionIntro from "../components/section-intro/section-intro"
import TitleText from "../components/title-text/title-text"
import Highlight from "../components/highlight/highlight"
import ImageIcons from "../components/image-icons/image-icons"
import HighlightCards from "../components/highlight-cards/highlight-cards"
import Topics from "../components/topics/topics"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"

const Template = ({children,Pagedata,pageContext,location}) => {
	return (
    <>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
        <HeaderPre data={HeaderData.headerPre}/>
        <HeaderSlim data={HeaderData.headerSlim}/>
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter}/>
          <HeaderNav data={HeaderData.navbar} page={Pagedata.seo.name}/>
        </NavWrapper>
      </Header>
      <main id="main">

        { Pagedata.components.hero && <Hero {...Pagedata.components.hero} pageContext={pageContext} {...Pagedata.seo}></Hero>}
        { Pagedata.components.sectionIntro && <SectionIntro {...Pagedata.components.sectionIntro}/>}
        { Pagedata.components.titleText && <TitleText {...Pagedata.components.titleText}/>}

        { Pagedata.components.highlightsLoop1 && Pagedata.components.highlightsLoop1.map((hl,index) => {
          return(
            <Highlight key={"hl-"+index} {...hl}/>
          )
        })}

        { Pagedata.components.imageIcons && <ImageIcons {...Pagedata.components.imageIcons}/>}

        { Pagedata.components.highlightCards && <HighlightCards {...Pagedata.components.highlightCards} /> }

        { Pagedata.components.highlightsLoop2 && Pagedata.components.highlightsLoop2.map((hl,index) => {
          return(
            <Highlight key={"hl-"+index} {...hl}/>
          )
        })}

        { Pagedata.components.topics && <Topics {...Pagedata.components.topics}/> }

        {children}
        {Pagedata.lastUpdate && <LastUpdate {...Pagedata.lastUpdate} {...location}/>}
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
    </>
	)
}

export default Template
