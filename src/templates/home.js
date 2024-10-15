import * as React from "react";
import "../scss/styles.scss";
import "../js/globals";

import Skiplinks from "../components/skiplinks/skiplinks";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BackToTopEl from "../components/back-to-top/back-to-top";
import HeaderSlim from "../components/header-slim/header-slim";
import HeaderPre from "../components/header-pre/header-pre";
import HeaderPost from "../components/header-post/header-post";
import NavWrapper from "../components/nav-wrapper/nav-wrapper";
import HeaderCenter from "../components/header-center/header-center";
import HeaderNav from "../components/header-nav/header-nav";
import LastUpdate from "../components/last-update/last-update";
import Feedback from "../components/feedback/feedback";

import HeaderData from "../data/header.yaml";
import FooterData from "../data/footer.yaml";
import skipLinksData from "../data/skiplinks.yaml";

import Highlight from "../components/highlight/highlight";
import SearchMain from "../components/search-main/search-main";
import ContentCollapse from "../components/content-collapse/content-collapse";
import SectionIntro from "../components/section-intro/section-intro";
import HighlightCards from "../components/highlight-cards/highlight-cards";
import Testimonials from "../components/testimonials/testimonials";
import BannerTextCta from "../components/banner-text-cta/banner-text-cta";
import Numbers from "../components/numbers/numbers";
import ImageIcons from "../components/image-icons/image-icons";

function Template({ Pagedata, pageContext, location, lastModified }) {
  return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre} location={location} />
      <Header data={HeaderData}>
        <Skiplinks data={skipLinksData} />
        <HeaderSlim data={HeaderData.headerSlim} />
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter} />
          <HeaderNav data={HeaderData.navbar} />
        </NavWrapper>
      </Header>
      <HeaderPost data={HeaderData.headerPost} />
      <main id="main">
        <Highlight {...Pagedata.components.hero}>
          {Pagedata.components.hero.moreText && (
            <ContentCollapse
              label={Pagedata.components.hero.moreButton}
              labelClose={Pagedata.components.hero.moreButtonClose}
            >
              {Pagedata.components.hero.moreText}
            </ContentCollapse>
          )}
        </Highlight>
        {Pagedata.components.searchMain && (
          <SearchMain {...Pagedata.components.searchMain} />
        )}
        {Pagedata.components.sectionIntro && (
          <SectionIntro {...Pagedata.components.sectionIntro} />
        )}
        {Pagedata.components.highLights &&
          Pagedata.components.highLights.map((hl, index) => (
            <Highlight key={`hl-${index}`} {...hl} />
          ))}
        {Pagedata.components.highlightCards && (
          <HighlightCards {...Pagedata.components.highlightCards} />
        )}

        {Pagedata.components.imageIcons && (
          <ImageIcons {...Pagedata.components.imageIcons} />
        )}

        {Pagedata.components.sectionIntroImg && (
          <SectionIntro {...Pagedata.components.sectionIntroImg}>
            {Pagedata.components.sectionIntroImg.testimonials && (
              <div className="">
                <Testimonials
                  {...Pagedata.components.sectionIntroImg.testimonials}
                />
              </div>
            )}
          </SectionIntro>
        )}
        {Pagedata.components.highlightCards2 && (
          <HighlightCards {...Pagedata.components.highlightCards2} />
        )}
        {Pagedata.components.bannerTextCta && (
          <BannerTextCta {...Pagedata.components.bannerTextCta}>
            {Pagedata.components.bannerTextCta.numbers && (
              <Numbers {...Pagedata.components.bannerTextCta.numbers} />
            )}
          </BannerTextCta>
        )}
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
