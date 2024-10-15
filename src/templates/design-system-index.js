import * as React from "react";
import "../scss/styles.scss";
import "../js/globals";

import Skiplinks from "../components/skiplinks/skiplinks";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BackToTopEl from "../components/back-to-top/back-to-top";
import HeaderSlim from "../components/header-slim/header-slim";
import HeaderPre from "../components/header-pre/header-pre";
import NavWrapper from "../components/nav-wrapper/nav-wrapper";
import HeaderCenter from "../components/header-center/header-center";
import HeaderNav from "../components/header-nav/header-nav";
import LastUpdate from "../components/last-update/last-update";
import Feedback from "../components/feedback/feedback";

import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import Hero from "../components/hero/hero";
import SectionEditorial from "../components/section-editorial/section-editorial";
import FilterCards from "../components/filter-cards/filter-cards";

import HeaderData from "../data/header.yaml";
import FooterData from "../data/footer.yaml";
import skipLinksData from "../data/skiplinks.yaml";
import dsNav from "../data/dsnav.yaml";

function Template({ children, Pagedata, pageContext, location, lastModified }) {
  const variantMock = Pagedata.metadata.json
    ? // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`../data/components_json/${Pagedata.metadata.json}`)
    : null;
  return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre} location={location} />
      <Header data={HeaderData}>
        <Skiplinks data={skipLinksData} />
        <HeaderSlim data={HeaderData.headerSlim} />
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter} />
          <HeaderNav data={HeaderData.navbar} page={Pagedata.seo.name} />
        </NavWrapper>
      </Header>
      <div className="bg-light">
        <div className="container-xxl">
          <div className="row design-system">
            <NavSidebar page={Pagedata.seo.name} {...dsNav} />
            <main
              id="main"
              className="col-12 col-lg-9 px-lg-0 content-column bg-white"
            >
              {Pagedata.components.hero && (
                <Hero
                  {...Pagedata.components.hero}
                  pageContext={pageContext}
                  {...Pagedata.seo}
                />
              )}
              {Pagedata.components.sectionsEditorial?.map((section, index) => (
                <SectionEditorial
                  key={`sectioneditorial-${index}`}
                  componentViewerData={
                    variantMock ? { variants: variantMock } : undefined
                  }
                  {...section}
                />
              ))}

              {Pagedata.components.filterCards && (
                <FilterCards {...Pagedata.components.filterCards} />
              )}

              {Pagedata.components.sectionsEditorial2 &&
                Pagedata.components.sectionsEditorial2.map((section, index) => (
                  <SectionEditorial
                    key={`sectionEditorial2-${index}`}
                    {...section}
                  />
                ))}
              {lastModified && (
                <LastUpdate
                  lastModified={lastModified}
                  {...Pagedata.lastUpdate}
                  {...location}
                  {...pageContext}
                />
              )}
            </main>
          </div>
        </div>
        {children}
        <Feedback />
      </div>
      <Footer {...FooterData.footer} />
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
        ariaLabel={FooterData.footer.backToTop.ariaLabel}
        className="back-to-top mb-5 mb-lg-0"
      />
    </div>
  );
}

export default Template;
