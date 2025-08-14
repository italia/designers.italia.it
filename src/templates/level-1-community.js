import * as React from "react";
import "../scss/styles.scss";
import "../js/globals";

import Skiplinks from "../components/skiplinks/skiplinks";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BackToTopEl from "../components/back-to-top/back-to-top";
import HeaderSlim from "../components/header-slim/header-slim";
import HeaderPre from "../components/header-pre/header-pre";
// import HeaderPost from "../components/header-post/header-post"
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
  console.log("🔍 Template data:", {
    highlightedCards,
    pageContext,
    highlighted: pageContext?.highlighted,
  });
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
          Pagedata.components.highlightCardsLoop.map((hlc, index) => {
            let sectionData = hlc;

            if (
              pageContext.editorialSections &&
              hlc.id &&
              highlightedCards?.edges?.length > 0
            ) {
              const editorialSection = pageContext.editorialSections.find(
                (es) => es.section === hlc.id,
              );

              if (
                editorialSection &&
                editorialSection.highlighted?.length > 0
              ) {
                const filteredCards = highlightedCards.edges
                  .filter(({ node }) => {
                    const nodeTitle = node.components?.hero?.title;
                    return editorialSection.highlighted.includes(nodeTitle);
                  })

                  // Update your card transformation to conditionally include text:

                  .map(({ node }) => {
                    const contentType = node.metadata?.archive;

                    // 🎯 NORMALIZE IMAGE PATHS - Remove domain to make relative
                    const normalizeImagePath = (imagePath) => {
                      if (!imagePath) return null;

                      // Remove "https://designers.italia.it" from the beginning if present
                      if (imagePath.startsWith('https://designers.italia.it')) {
                        return imagePath.replace('https://designers.italia.it', '');
                      }

                      // Remove "http://designers.italia.it" from the beginning if present
                      if (imagePath.startsWith('http://designers.italia.it')) {
                        return imagePath.replace('http://designers.italia.it', '');
                      }

                      // If it's already relative or from a different domain, return as-is
                      return imagePath;
                    };

                    // 🎯 CONTENT-TYPE-SPECIFIC IMAGE SELECTION
                    const getImageAndAlt = (node, contentType) => {
                      switch (contentType) {
                        case 'eventi':
                          return {
                            img: normalizeImagePath(node.seo?.image),       // ✅ Events use seo.image (normalized)
                            alt: node.components?.imageIcons?.alt || ""
                          };

                        case 'media':
                          return {
                            img: normalizeImagePath(node.seo?.image),       // ✅ Media use seo.image (normalized)
                            alt: node.components?.imageIcons?.alt || ""
                          };

                        case 'notizie':
                          return {
                            img: normalizeImagePath(node.components?.imageIcons?.image), // ✅ News use imageIcons.image (normalized)
                            alt: node.components?.imageIcons?.alt || ""
                          };

                        default:
                          return {
                            img: normalizeImagePath(node.components?.imageIcons?.image || node.seo?.image),
                            alt: node.components?.imageIcons?.alt || ""
                          };
                      }
                    };

                    const { img, alt } = getImageAndAlt(node, contentType);

                    // 🎯 CARD DATA TRANSFORMATION WITH CONDITIONAL TEXT
                    const cardData = {
                      title: node.components?.hero?.title,
                      img: img,
                      alt: alt,
                      url: node.seo?.pathname,
                    };

                    // 🎯 CONDITIONAL TEXT - Only add text for news, not for events/media
                    if (contentType === "notizie") {
                      cardData.text = node.seo?.description;               // ✅ Only news get text content
                    }
                    // Events and media deliberately have NO text content (matching original static cards)

                    // 🔍 DEBUG CARD CONTENT
                    console.log(`🖼️ Card content for "${cardData.title}" (${contentType}):`, {
                      hasText: !!cardData.text,
                      textContent: cardData.text || 'NO TEXT (events/media)',
                      normalizedImg: cardData.img,
                      source: contentType === 'eventi' ? 'seo.image' :
                        contentType === 'media' ? 'seo.image' :
                          contentType === 'notizie' ? 'imageIcons.image' : 'fallback'
                    });

                    // 🎯 CONDITIONAL TAGS - Only add if not media/events
                    if (contentType !== "media" && contentType !== "eventi") {
                      cardData.tags = node.components?.hero?.kangaroo?.tags || [];
                    }

                    // 🎯 HANDLE TAGS FROM HERO
                    if (node.components?.hero?.tag?.label) {
                      cardData.tag = {
                        label: node.components.hero.tag.label,
                        addonClasses: node.components.hero.tag.addonClasses,
                      };
                    }

                    // 🎯 EXTRACT DATE INFORMATION
                    const personalInfo = node.components?.hero?.kangaroo?.personalInfo?.items;
                    const eventInfo = node.components?.hero?.kangaroo?.eventInfo?.items;

                    if (personalInfo) {
                      const dataItem = personalInfo.find((item) => item.title === "Data");
                      if (dataItem) {
                        cardData.dateInfo = dataItem.label;
                      }
                    } else if (eventInfo) {
                      const dataItem = eventInfo.find((item) => item.title === "Data e orario");
                      if (dataItem) {
                        cardData.dateInfo = dataItem.label;

                        // 🎯 PARSE DATE FOR OVERLAY (Events only)
                        const dateMatch = dataItem.label.match(/(\d+)\s+(\w+)\s+(\d+)/);
                        if (dateMatch && contentType === "eventi") {
                          cardData.dateOverlay = {
                            day: dateMatch[1],
                            month: dateMatch[2],
                            year: dateMatch[3],
                          };
                        }
                      }
                    }

                    // 🎯 CONTENT TYPE SPECIFIC SETTINGS
                    if (contentType === "eventi") {
                      cardData.cardEvent = true;
                      // Ensure date overlay is visible
                      if (cardData.dateInfo && !cardData.dateOverlay) {
                        // Fallback date parsing for events
                        const dateMatch = cardData.dateInfo.match(/(\d+)\s+(\w+)\s+(\d+)/);
                        if (dateMatch) {
                          cardData.dateOverlay = {
                            day: dateMatch[1],
                            month: dateMatch[2],
                            year: dateMatch[3],
                          };
                        }
                      }
                    }

                    if (contentType === "media") {
                      // 🎯 ENSURE VIDEO OVERLAY FOR MEDIA
                      cardData.iconOverlay = {
                        icon: "sprites.svg#it-video",
                        ariaLabel: "Video",
                      };
                      cardData.cardEvent = true; // Media cards need this for proper styling
                    }

                    // 🎯 APPLY SECTION CARD SETTINGS
                    const cardSettings = hlc.cardSettings || {};

                    // Merge with section settings, but preserve content-type-specific settings
                    const finalCard = {
                      ...cardSettings, // Apply base settings first
                      ...cardData, // Then card-specific data
                    };

                    // 🎯 CONDITIONAL SETTING APPLICATION

                    // Only show tags if section allows it AND content type allows it
                    if (
                      !cardSettings.showTags ||
                      contentType === "media" ||
                      contentType === "eventi"
                    ) {
                      delete finalCard.tags;
                    }

                    // 🎯 REMOVE DATE INFO TEXT FROM EVENTS - Events only use date overlay, not date text
                    if (!cardSettings.showDateInfo || contentType === "eventi") {
                      delete finalCard.dateInfo;
                    }

                    // Only show date overlay if section allows it AND it's an event
                    if (
                      !cardSettings.showDateOverlay ||
                      contentType !== "eventi"
                    ) {
                      delete finalCard.dateOverlay;
                    }

                    // Only show icon overlay if section allows it AND it's media
                    if (
                      !cardSettings.showIconOverlay ||
                      contentType !== "media"
                    ) {
                      delete finalCard.iconOverlay;
                    }

                    // Only show tag if section allows it
                    if (!cardSettings.showTag) {
                      delete finalCard.tag;
                    }

                    console.log(`🎯 Final card for ${finalCard.title}:`, {
                      contentType,
                      hasImg: !!finalCard.img,
                      hasText: !!finalCard.text,
                      hasDateInfo: !!finalCard.dateInfo,           // ✅ Should be false for events
                      hasIconOverlay: !!finalCard.iconOverlay,
                      hasDateOverlay: !!finalCard.dateOverlay,     // ✅ Should be true for events
                      hasTags: !!finalCard.tags,
                      hasTag: !!finalCard.tag,
                      cardEvent: finalCard.cardEvent,
                    });

                    return finalCard;
                  })

                  .sort((a, b) => {
                    // Sort by date if available (newest first)
                    if (a.dateInfo && b.dateInfo) {
                      return new Date(b.dateInfo) - new Date(a.dateInfo);
                    }
                    return 0;
                  });

                console.log(
                  `✅ Processed ${filteredCards.length} cards for section ${hlc.id}`,
                );

                if (filteredCards.length > 0) {
                  sectionData = {
                    ...hlc,
                    cards: filteredCards,
                  };
                }
              }
            }

            return <HighlightCards key={`hcl-${index}`} {...sectionData} />;
          })}
        {/* {Pagedata.components?.highlightCardsLoop &&
          Pagedata.components.highlightCardsLoop.map((hlc, index) => (
            <HighlightCards key={`hcl-${index}`} {...hlc} />
          ))} */}
        {/* {Pagedata.components?.highlightsLoop &&
          Pagedata.components.highlightsLoop.map((hl, index) => (
            <Highlight key={`hl-${index}`} {...hl} />
          ))} */}
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
