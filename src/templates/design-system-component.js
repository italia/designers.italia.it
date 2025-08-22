import * as React from "react";
import "../scss/styles.scss";
import "../js/globals";

import BackToTopEl from "../components/back-to-top/back-to-top";
import Skiplinks from "../components/skiplinks/skiplinks";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HeaderSlim from "../components/header-slim/header-slim";
import HeaderPre from "../components/header-pre/header-pre";
import NavWrapper from "../components/nav-wrapper/nav-wrapper";
import HeaderCenter from "../components/header-center/header-center";
import HeaderNav from "../components/header-nav/header-nav";
import LastUpdate from "../components/last-update/last-update";
import Feedback from "../components/feedback/feedback";
import Tab from "../components/tab/tab";

import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import Hero from "../components/hero/hero";

import HeaderData from "../data/header.yaml";
import FooterData from "../data/footer.yaml";
import skipLinksData from "../data/skiplinks.yaml";
import dsNav from "../data/dsnav.yaml";

import viewerData from "../data/component-viewer.yaml";

function Template({ Pagedata, pageContext, location, lastModified }) {
  if (!Pagedata.metadata.json) {
    throw new Error("json key is required for design-system-component!");
  }
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const variantMock = require(
    `../data/components_json/${Pagedata.metadata.json}`,
  );
  return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre} location={location} />
      <Header data={HeaderData}>
        <Skiplinks data={skipLinksData} />
        <HeaderSlim data={HeaderData.headerSlim} />
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter} />
          <HeaderNav data={HeaderData.navbar} page={Pagedata.title} />
        </NavWrapper>
      </Header>
      <div className="bg-light">
        <div className="container-xxl">
          <div className="row design-system">
            <NavSidebar page={Pagedata.components.hero.title} {...dsNav} />
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
              <Tab
                viewerData={viewerData}
                componentSource={Pagedata.metadata.json.replace(".json", "")}
                tab01={{ ...Pagedata.tabs[0], variants: variantMock }}
                tab02={Pagedata.tabs[1]}
                tab03={{ ...Pagedata.tabs[2], variants: variantMock }}
              />
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
