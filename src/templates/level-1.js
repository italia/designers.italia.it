import * as React from "react";
import "../scss/styles.scss";
import "../js/globals";

import Skiplinks from "../components/skiplinks/skiplinks";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BackToTopEl from "../components/back-to-top/back-to-top";
import HeaderPre from "../components/header-pre/header-pre";
import HeaderSlim from "../components/header-slim/header-slim";
import NavWrapper from "../components/nav-wrapper/nav-wrapper";
import HeaderCenter from "../components/header-center/header-center";
import HeaderNav from "../components/header-nav/header-nav";
import LastUpdate from "../components/last-update/last-update";
import Feedback from "../components/feedback/feedback";

import Hero from "../components/hero/hero";
import SectionIntro from "../components/section-intro/section-intro";
import TitleText from "../components/title-text/title-text";
import SectionMedia from "../components/section-media/section-media";
import Highlight from "../components/highlight/highlight";
import ImageIcons from "../components/image-icons/image-icons";
import HighlightCards from "../components/highlight-cards/highlight-cards";
import Topics from "../components/topics/topics";

import HeaderData from "../data/header.yaml";
import FooterData from "../data/footer.yaml";
import skipLinksData from "../data/skiplinks.yaml";

function Template({ children, Pagedata, pageContext, location, lastModified }) {
  let activePage = null;

  if (Pagedata.metadata.activeLabel) {
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
        {Pagedata.components.hero && (
          <Hero
            {...Pagedata.components.hero}
            pageContext={pageContext}
            {...Pagedata.seo}
          />
        )}
        {Pagedata.components.sectionIntro && (
          <SectionIntro {...Pagedata.components.sectionIntro} />
        )}
        {Pagedata.components.titleText && (
          <TitleText {...Pagedata.components.titleText} />
        )}
        {Pagedata.components.sectionsMedia &&
          Pagedata.components.sectionsMedia.map((section, index) => (
            <SectionMedia key={`sectionMedia-${index}`} {...section} />
          ))}
        {Pagedata.components.highlightsLoop1 &&
          Pagedata.components.highlightsLoop1.map((hl, index) => (
            <Highlight key={`hl-${index}`} {...hl} />
          ))}

        {Pagedata.components.imageIcons && (
          <ImageIcons {...Pagedata.components.imageIcons} />
        )}

        {Pagedata.components.highlightCards && (
          <HighlightCards {...Pagedata.components.highlightCards} />
        )}

        {Pagedata.components.highlightsLoop2 &&
          Pagedata.components.highlightsLoop2.map((hl, index) => (
            <Highlight key={`hl-${index}`} {...hl} />
          ))}

        {Pagedata.components.topics && (
          <Topics {...Pagedata.components.topics} />
        )}

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
