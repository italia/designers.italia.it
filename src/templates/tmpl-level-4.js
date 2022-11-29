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
import NavPreFooter from "../components/nav-pre-footer/nav-pre-footer"
import ResourceList from "../components/resource-list/resource-list"

import Hero from "../components/hero/hero"
import ImageIcons from "../components/image-icons/image-icons"
import SectionEditorial from "../components/section-editorial/section-editorial"
import HighlightCards from "../components/highlight-cards/highlight-cards"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"
import Kangaroo from "../components/kangaroo/kangaroo"

const Template = ({children,Pagedata,pageContext,pageTitle}) => {
	return (
    <>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
        <HeaderPre data={HeaderData.headerPre}/>
        <HeaderSlim data={HeaderData.headerSlim}/>
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter}/>
          <HeaderNav data={HeaderData.navbar} page={Pagedata.seo.page}/>
        </NavWrapper>
      </Header>
      <main id="main">
        <Hero {...Pagedata.components.hero} pageContext={pageContext} pageTitle={pageTitle}></Hero>
        {Pagedata.components.imageIcons && <ImageIcons {...Pagedata.components.imageIcons}/>}
        {Pagedata.components.sectionsEditorial && Pagedata.components.sectionsEditorial.map((section,index) => {
          return(
            <SectionEditorial key={"sectionEditorial-"+index} {...section}/>
          )
        })}
        {Pagedata.components.resourceList && <ResourceList {...Pagedata.components.resourceList}/>}
        {Pagedata.components.highlightCards && <HighlightCards {...Pagedata.components.highlightCards}></HighlightCards>}
        {Pagedata.components.sectionsEditorial2 && Pagedata.components.sectionsEditorial2.map((section,index) => {
          return(
            <SectionEditorial key={"sectionEditorial2-"+index} {...section}/>
          )
        })}
        {children}
        {Pagedata.lastUpdate && <LastUpdate {...Pagedata.lastUpdate} />}
        {Pagedata.kangaroo &&
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <Kangaroo {...Pagedata.kangaroo} />
              </div>
            </div>
          </div>
        }
        {Pagedata.navPreFooter && <NavPreFooter {...Pagedata.navPreFooter} />}
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
