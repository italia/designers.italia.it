import * as React from "react";
import { graphql } from "gatsby";

import TemplateBase from "../templates/base";
import TemplateArchiveAllTags from "../templates/archive-all-tags";
import TemplateArchiveDSTags from "../templates/archive-ds-tags";
import TemplateArchiveNews from "../templates/archive-news";
import TemplateArchiveEvents from "../templates/archive-events";
import TemplateArchiveMedia from "../templates/archive-media";
import TemplateDSComponent from "../templates/design-system-component";
import TemplateDSIndex from "../templates/design-system-index";
import TemplateHome from "../templates/home";
import TemplateSearchResults from "../templates/search-results";
import TemplateLV1Community from "../templates/level-1-community";
import TemplateLV1 from "../templates/level-1";
import TemplateLV2 from "../templates/level-2";
import TemplateLV3 from "../templates/level-3";
import TemplateLV4 from "../templates/level-4";

import { Seo } from "../components/seo/seo";

const TEMPLATES = {
  "archive-news": TemplateArchiveNews,
  "archive-all-tags": TemplateArchiveAllTags,
  "archive-ds-tags": TemplateArchiveDSTags,
  "archive-events": TemplateArchiveEvents,
  "archive-media": TemplateArchiveMedia,
  community: TemplateLV1Community,
  level1: TemplateLV1,
  level2: TemplateLV2,
  level3: TemplateLV3,
  level4: TemplateLV4,
  base: TemplateBase,
  home: TemplateHome,
  "search-results": TemplateSearchResults,
  "design-system-index": TemplateDSIndex,
  "design-system-component": TemplateDSComponent,
};

function Page({ pageContext, location, data: { content, highlightedCards } }) {
  const Template = content.metadata.template
    ? TEMPLATES[content.metadata.template.name]
    : TemplateBase;
  const lastModified =
    content?.parent?.fields?.gitLogLatestDate || new Date(0).toISOString();

  return (
    <Template
      Pagedata={content}
      highlightedCards={highlightedCards}
      pageContext={pageContext}
      location={location}
      lastModified={lastModified}
    >
      {/* place extra components / HTML here */}
    </Template>
  );
}

export const query = graphql`
  query ($id: String!, $highlighted: [String!] = []) {
    contentOgImage(parent: { id: { eq: $id } }) {
      attributes {
        publicURL
      }
    }
    highlightedCards: allContent(
      filter: { components: { hero: { title: { in: $highlighted } } } }
      sort: { seo: { pathname: DESC } }
    ) {
      totalCount
      edges {
        node {
          seo {
            description
            pathname
            image
          }
          metadata {
            archive
            unpublished
          }
          components {
            hero {
              title
              tag {
                label
                addonClasses
              }
              kangaroo {
                tags
                personalInfo {
                  items {
                    title
                    label
                  }
                }
                eventInfo {
                  items {
                    title
                    label
                  }
                }
              }
            }
            imageIcons {
              image
              alt
            }
          }
        }
      }
    }
    content(id: { eq: $id }) {
      id
      parent {
        ... on File {
          fields {
            gitLogLatestDate
          }
        }
      }
      metadata {
        template {
          name
        }
        archive
        activeLabel
        json
      }
      seo {
        name
        description
        # canonical
        pathname
      }
      components {
        hero {
          background
          title
          subtitle
          imgRatio
          pretext {
            icon {
              icon
              size
            }
            text
          }
          text
          kangaroo {
            id
            titleSr
            tagsLabel
            tagsDesignSystemLabel
            color
            icon {
              icon
              size
              color
            }
            tags
            tagsDesignSystem
            dropdown {
              btnId
              button {
                addonStyle
                label
                iconRight
                icon {
                  icon
                  size
                  color
                  addonClasses
                }
              }
              list {
                listItems {
                  url
                  label
                  # iconRight
                  # icon {
                  #   icon
                  #   color
                  #   size
                  #   # list
                  # }
                }
              }
            }
            noPadding
            eventInfo {
              items {
                title
                icon {
                  icon
                  size
                  align
                  color
                }
                label
                url
                blank
                screenReaderText
                text
              }
            }
            personalInfo {
              items {
                title
                tooltip
                icon {
                  icon
                  size
                  align
                  color
                }
                label
              }
            }
            column
            navposition {
              items {
                title
                tooltip
                icon {
                  icon
                  size
                  align
                  color
                }
                label
                url
              }
            }
            otherInfo {
              items {
                title
                tooltip
                icon {
                  icon
                  size
                  align
                  color
                }
                label
                url
              }
            }
          }
          id
          headingLevel
          big
          specular
          reversedMobile
          buttons {
            label
            ariaLabel
            btnStyle
            url
            addonStyle
          }
          img
          alt
          fullImg
          tag {
            label
            addonClasses
          }
          centered
          column
          specialKangarooComponent
          noBorder
          iconImgAlt
        }
        sectionIntro {
          section
          id
          headingLevel
          title
          subtitle
          text
          moreButton
          moreButtonClose
          moreText
          icon {
            icon
            color
            size
          }
          isHome
        }
        titleText {
          title
          # text
        }
        highlightCardsLoop {
          id
          title
          headingLevel
          text
          col4
          background
          nopadtop
          buttons {
            btnStyle
            label
            addonStyle
            # disabled
            url
            blank
            ariaLabel
            icon {
              icon
              color
              align
              size
              addonClasses
            }
          }
          cardSettings {
            headingLevel
            customCol
            imgRatio
            imgPlaceholder
            fullHeight
            rounded
            showDateInfo
            showTags
            cardEvent
            titleSmall
            showDateOverlay
            showTag
            showIconOverlay
          }
          cards {
            title
            headingLevel
            cardEvent
            img
            alt
            imgRatio
            fullHeight
            imgPlaceholder
            iconOverlay {
              icon
              ariaLabel
            }
            dateOverlay {
              day
              month
              year
            }
            url
            tag {
              label
            }
            text
            rounded
            dateInfo
            tags
            blank
            externalLink {
              label
              screenReaderText
              icon {
                icon
                size
              }
            }
            moreInfo
          }
          topics {
            title
            headingLevel
            icon {
              icon
              color
              hidden
            }
            button {
              btnStyle
              label
              url
            }
            tags
          }
        }
        # highlightsLoop {
        #   title
        #   subtitle
        #   headingLevel
        #   big
        #   background
        #   specular
        #   buttons {
        #     label
        #     btnStyle
        #     url
        #     addonStyle
        #     # disabled
        #   }
        #   # text
        # }
        highlightsLoop1 {
          title
          headingLevel
          background
          big
          specular
          subtitle
          buttons {
            label
            btnStyle
            url
            addonStyle
            # disabled
          }
          img
          alt
          text
          numbers {
            items {
              icon
              number
              label
            }
          }
          overlayImg
          overlayAlt
        }
        # highlightsLoop2 {
        #  title
        #  headingLevel
        #  big
        #  background
        #  specular
        #  subtitle
        #  text
        # buttons {
        #  label
        #  btnStyle
        #  url
        #  addonStyle
        #  disabled
        #}
        #}
        searchMain {
          title
          maxResults
          suggest {
            title
            items {
              label
            }
          }
        }
        highLights {
          title
          subtitle
          big
          specular
          img
          alt
          headingLevel
          background
          buttons {
            label
            # ariaLabel
            btnStyle
            url
            addonStyle
          }
          padBottom
        }
        sectionsMedia {
          fullColumn
          full
          noSpace
          centered
          background
          id
          headingLevel
          title
          hiddenSectionTitle
          # buttons {
          #  label
          #  blank
          #  btnStyle
          #  url
          #  icon {
          #    icon
          #    size
          #    color
          #    align
          #    addonClasses
          #  }
          # }
          components {
            name
            lang
            url
            poster
            subtitles
            trascription
            trascriptionLabel
            trascriptionHeadingLevel
          }
        }
        highlightCards {
          id
          title
          text
          background
          col4
          cardSettings {
            headingLevel
            customCol
            imgRatio
            imgPlaceholder
            fullHeight
            rounded
            showDateInfo
            showTags
            showDateOverlay
            showIconOverlay
            showTag
          }
          cards {
            title
            img
            alt
            text
            imgRatio
            imgPlaceholder
            cardEvent
            iconOverlay {
              icon
              ariaLabel
            }
            fullHeight
            imgRounded
            noShadow
            url
            dateInfo
            textSerif
            headingLevel
            rounded
            blank
            dateInfo
            tags
            externalLink {
              label
              screenReaderText
              icon {
                icon
                size
              }
            }
            moreInfo
            tags
            titleSmall
            tag {
              label
            }
            customCol
            iconImg
            iconImgAlt
          }
          headingLevel
          buttons {
            btnStyle
            label
            url
            blank
            ariaLabel
            icon {
              icon
              color
              align
              size
              addonClasses
            }
          }
          nospace
          nopadtop
          hasCustomCols
        }
        imageIcons {
          image
          alt
          background
          # customStyle
          images {
            img
            alt
          }
        }
        sectionIntroImg {
          id
          title
          subtitle
          background
          isFull
          testimonials {
            items {
              icon {
                icon
              }
              text
              signature
            }
          }
        }
        highlightCards2 {
          id
          background
          nopadtop
          hasCustomCols
          buttons {
            btnStyle
            label
            url
            addonStyle
          }
          cardSettings {
            headingLevel
            customCol
            imgRatio
            imgPlaceholder
            fullHeight
            rounded
            showDateInfo
            showTags
            showTag
            showDateOverlay
            showIconOverlay
          }
        }
        bannerTextCta {
          id
          title
          background
          numbers {
            inline
            items {
              icon
              label
              number
            }
          }
        }
        sectionsEditorial {
          title
          headingLevel
          paddingLeft
          background
          menu
          centered
          text
          components {
            name
            title
            headingLevel
            specular
            cookies {
              label
              key
            }
            text
            noSpace
            responsive
            addonClasses
            moreButton
            moreButtonClose
            moreText
            head {
              text
              tag {
                label
                addonClasses
              }
            }
            rows {
              cols {
                text
                scope
                tag {
                  label
                  addonClasses
                }
                tags {
                  label
                  addonClasses
                }
                simpleCta {
                  label
                  url
                  blank
                  screenReaderText
                  icon {
                    icon
                    size
                  }
                }
              }
            }
            ctasVertical
            ctas {
              label
              url
              blank
              icon {
                icon
                color
                align
                hidden
                size
                addonClasses
              }
              screenReaderText
              color
            }
            image
            alt
            img
            items {
              label
              icon
              number
            }
            images {
              img
              alt
            }
            lang
            url
            trascription
            trascriptionLabel
            trascriptionHeadingLevel
            subtitles
            poster
            variantName
            source
            idPrefix
            viewerHeight
            accordionUrl
            accordionOpen
            accordionShow
            minHeight
          }
          id
          fullColumn
          noSpace
          full
        }
        filterCards {
          id
          title
          col2
          showTags
          noSpace
          paddingX
          cards {
            title
            imgRatio
            rounded
            imgPlaceholder
            fullHeight
            url
            text
            # tags
          }
        }
        sectionsEditorial2 {
          full
          noSpace
          title
          components {
            name
            # responsive
            # addonClasses
            title
            headingLevel
            specular
            text
            # head {
            #  text
            # }
            # rows {
            #  cols {
            #    text
            #    scope
            #   tag {
            #      label
            #      addonClasses
            #    }
            #    simpleCta {
            #      label
            #      url
            #      blank
            #      screenReaderText
            #      icon {
            #        icon
            #        size
            #      }
            #    }
            #  }
            # }
            noSpace
            ctas {
              label
              url
              screenReaderText
              blank
              icon {
                icon
                # color
                align
                hidden
                size
                addonClasses
              }
            }
            image
            alt
            # img
            # items {
            #  label
            #  icon
            #  number
            # }
            # images {
            #  img
            #  alt
            # }
          }
          background
          title
          text
          menu
          centered
        }
        tab {
          full
        }
        resourceList {
          title
          headingLevel
          list {
            simpleList
            headingLevel
            listItems {
              label
              srBefore
              srAfter
              text
              url
              blank
              actions {
                icon
                url
                ariaLabel
                blank
                # size
              }
            }
            title
          }
        }
      }
      kangaroo {
        navposition {
          id
          items {
            title
            icon {
              icon
              size
              align
              color
            }
            label
            url
          }
        }
      }
      # navPreFooter {
      #  navOtherPrevNext {
      #    next {
      #      label
      #      url
      #      blank
      #      specular
      #      icon {
      #        icon
      #        size
      #        align
      #        color
      #        hidden
      #        addonClasses
      #      }
      #    }
      #  }
      # }
      tabs {
        title
        componentVariant {
          id
          title
          textInfo
          viewerHeight
          # minHeight
          accordionUrl
          accordionOpen
          accordionShow
        }
        sectionsEditorial {
          full
          noSpace
          title
          paddingLeft
          components {
            name
            noSpace
            text
            title
            responsive
            # addonClasses
            headingLevel
            # specular
            img
            alt
            isDSPreview
            head {
              text
            }
            rows {
              cols {
                text
                scope
                tag {
                  label
                  addonClasses
                }
                simpleCta {
                  label
                  url
                  blank
                  screenReaderText
                  icon {
                    icon
                    size
                  }
                }
              }
            }
            ctas {
              label
              screenReaderText
              url
              blank
              icon {
                icon
                color
                align
                hidden
                size
                addonClasses
              }
            }
          }
          text
          id
          # buttons {
          #  label
          #  blank
          #  btnStyle
          #  url
          #  icon {
          #    icon
          #    size
          #    color
          #    align
          #    addonClasses
          #  }
          # }
        }
      }
    }
  }
`;
export default Page;

export function Head({ data: { content, contentOgImage } }) {
  return (
    <Seo
      title={content.seo.name}
      description={content.seo.description}
      image={contentOgImage.attributes.publicURL}
      pathname={content.seo.pathname}
      canonical={content.seo.canonical}
    />
  );
}
