// ========================================
// CLEAN TEMPLATE - level-1-community.js
// ========================================

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

import Hero from "../components/hero/hero";
import SectionIntro from "../components/section-intro/section-intro";
import Highlight from "../components/highlight/highlight";
import TitleText from "../components/title-text/title-text";
import HighlightCards from "../components/highlight-cards/highlight-cards";
import SectionEditorial from "../components/section-editorial/section-editorial";

import HeaderData from "../data/header.yaml";
import FooterData from "../data/footer.yaml";
import skipLinksData from "../data/skiplinks.yaml";

function Template({
  children,
  Pagedata,
  pageContext,
  location,
  lastModified,
  highlightedCards,
}) {
  let activePage = null;

  if (Pagedata.metadata?.activeLabel) {
    activePage = Pagedata.metadata.activeLabel;
  }

  return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre} location={location} />
      <Header data={HeaderData}>
        <Skiplinks data={skipLinksData} />
        <HeaderSlim data={HeaderData.headerSlim} />
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter} />
          <HeaderNav data={HeaderData.navbar} page={activePage} />
        </NavWrapper>
      </Header>
      <main id="main">
        {Pagedata.components?.hero && (
          <Hero
            {...Pagedata.components.hero}
            pageContext={pageContext}
            {...Pagedata.seo}
          />
        )}
        {Pagedata.components?.sectionIntro && (
          <SectionIntro {...Pagedata.components.sectionIntro} />
        )}
        {Pagedata.components.highLights &&
          Pagedata.components.highLights.map((hl, index) => (
            <Highlight key={`hl-${index}`} {...hl} />
          ))}
        {Pagedata.components?.titleText && (
          <TitleText {...Pagedata.components.titleText} />
        )}

        {Pagedata.components?.highlightCardsLoop &&
          Pagedata.components.highlightCardsLoop.map((hlc, index) => (
            <HighlightCards
              key={`hcl-${index}`}
              {...hlc}
              highlightedCards={highlightedCards}
              editorialSections={pageContext?.editorialSections}
            />
          ))}

        {Pagedata.components.sectionsEditorial &&
          Pagedata.components.sectionsEditorial.map((section, index) => (
            <SectionEditorial key={`sectionEditorial-${index}`} {...section} />
          ))}
        {children}
        {lastModified && (
          <LastUpdate
            lastModified={lastModified}
            {...Pagedata.lastUpdate}
            {...location}
            {...pageContext}
          />
        )}
        <Feedback />
      </main>
      <Footer {...FooterData.footer} />
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
        ariaLabel={FooterData.footer.backToTop.ariaLabel}
      />
    </div>
  );
}

export default Template;
