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

import NavSidebar from "../components/nav-sidebar/nav-sidebar"
import Hero from "../components/hero/hero"
import SectionEditorial from "../components/section-editorial/section-editorial"
import FilterCards from "../components/filter-cards/filter-cards"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"
import dsNav from "../data/dsnav.yaml"

import { Sticky } from "bootstrap-italia/dist/bootstrap-italia.esm"
const sticky = Sticky //trick for treeshaking

const Template = ({children,Pagedata}) => {
	return (
    <>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
        <HeaderSlim data={HeaderData.headerSlim}/>
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter}/>
          <HeaderNav data={HeaderData.navbar} page={Pagedata.seo.name}/>
        </NavWrapper>
      </Header>
      <main id="main" className="bg-light">

        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-3 px-lg-0 bg-light menu-column bs-is-sticky" data-bs-toggle="sticky" data-bs-stackable="true">
              <NavSidebar page={Pagedata.seo.name} {...dsNav}/>
            </div>
            <div className="col-12 col-lg-9 px-lg-0 content-column bg-white">
              { Pagedata.components.hero && <Hero {...Pagedata.components.hero}></Hero>}
              {Pagedata.components.sectionsEditorial && Pagedata.components.sectionsEditorial.map((section,index) => {
                return(
                  <SectionEditorial key={"sectionEditorial-"+index} {...section}/>
                )
              })}

              { Pagedata.components.filterCards && <FilterCards {...Pagedata.components.filterCards}/>}

              {Pagedata.components.sectionsEditorial2 && Pagedata.components.sectionsEditorial2.map((section,index) => {
                return(
                  <SectionEditorial key={"sectionEditorial2-"+index} {...section}/>
                )
              })}
              {Pagedata.lastUpdate ? <LastUpdate {...Pagedata.lastUpdate} /> : null }
            </div>
          </div>
        </div>
        {children}
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

export default Template
