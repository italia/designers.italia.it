import * as React from "react"
import { graphql } from "gatsby"

import TemplateBase from "../templates/base"
import TemplateDSComponent from "../templates/design-system-component"
import TemplateDSIndex from "../templates/design-system-index"
import TemplateHome from "../templates/home"
import TemplateSearchResults from "../templates/search-results"
import TemplateLV1Community from "../templates/level-1-community"
import TemplateLV1 from "../templates/level-1"
import TemplateLV2 from "../templates/level-2"
import TemplateLV3 from "../templates/level-3"
import TemplateLV4 from "../templates/level-4"
import { Seo } from "../components/seo/seo"

const TEMPLATES = {
  'community' : TemplateLV1Community,
  'level1' : TemplateLV1,
  'level2' : TemplateLV2,
  'level3' : TemplateLV3,
  'level4' : TemplateLV4,
  'base' : TemplateBase,
  'home' : TemplateHome,
  'search-results' : TemplateSearchResults,
  'design-system-index' : TemplateDSIndex,
  'design-system-component' : TemplateDSComponent
}

const Page = ({ pageContext, location, data: { content } }) => {
  const Template = content.metadata.template ? TEMPLATES[content.metadata.template.name] : TemplateBase
  const lastModified = content?.parent?.fields?.gitLogLatestDate || new Date(0).toISOString()

  return(
    <Template Pagedata={content} pageContext={pageContext} location={location} lastModified={lastModified}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export const query = graphql`
  query ($id: String!) {
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
        image
        twitterImage
        # canonical
        pathname
      }
      lastUpdate {
        title
        licence {
          label
          url
          icon {
            icon
            size
            color
            addonClasses
          }
          blank
        }
        edit {
          label
          url
          icon {
            icon
            size
            color
          }
          blank
        }
        column
        noPadding
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
            color
            icon {
              icon
              size
              color
            }
            tags
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
                  iconRight
                  icon {
                    icon
                    color
                    size
                    # list
                  }
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
          titleTag {
            label
            url
            addonClasses
            screenReaderText
          }
          noBorder
          iconImgAlt
        }
        sectionIntro {
          section
          id
          headingLevel
          title
          text
          moreButton
          moreButtonClose
          icon {
            icon
            color
            size
          }
          moreText
          isHome
        }
        titleText {
          title
        }
        highlightCardsLoop {
          id
          title
          headingLevel
          text
          col4
          background
          buttons {
            type
            btnStyle
            label
            addonStyle
            disabled
            url
            blank
            icon {
              icon
              color
              align
              size
              addonClasses
            }
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
        highlightsLoop {
          title
          subtitle
          id
          headingLevel
          big
          background
          specular
          buttons {
            label
            btnStyle
            url
            addonStyle
            disabled
          }
          text
        }
        highlightsLoop1 {
          title
          id
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
            disabled
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
        highlightsLoop2 {
          title
          id
          headingLevel
          big
          background
          specular
          subtitle
          buttons {
            label
            btnStyle
            url
            addonStyle
            disabled
          }
        }
        searchMain {
          disabled
          isResultsPage
          useSuggestionEngine
          background
          title
          text
          formId
          label
          inputId
          inputName
          howMany
          button {
            label
            # type
            btnStyle
            iconRight
            icon {
              icon
              # color
              addonClasses
            }
          }
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
          id
          specular
          img
          alt
          headingLevel
          background
          buttons {
            label
            btnStyle
            url
            addonStyle
          }
          padBottom
        }
        highlightCards {
          id
          title
          text
          background
          col4
          cards {
            title
            img
            alt
            text
            imgRatio
            imgPlaceholder
            fullHeight
            imgRounded
            noShadow
            url
            textSerif
            headingLevel
            rounded
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
            # tags
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
            type
            btnStyle
            label
            url
            blank
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
          background
          nopadtop
          hasCustomCols
          buttons {
            type
            btnStyle
            label
            url
            addonStyle
          }
          cards {
            title
            headingLevel
            customCol
            img
            alt
            imgRatio
            imgPlaceholder
            fullHeight
            rounded
            url
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
            tags
            text
            dateInfo
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
          background
          menu
          centered
          text
          components {
            name
            title
            headingLevel
            specular
            text
            noSpace
            responsive
            head {
              text
            }
            rows {
              cols {
                text
                scope
                tag {
                  label
                  # addonClasses
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
          cards {
            title
            imgRatio
            rounded
            imgPlaceholder
            fullHeight
            url
            text
            tags
          }
        }
        sectionsEditorial2 {
          full
          noSpace
          title
          components {
            name
            # responsive
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
                size
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
      navPreFooter {
        navOtherPrevNext {
          next {
            label
            url
            blank
            specular
            icon {
              icon
              size
              align
              color
              hidden
              addonClasses
            }
          }
        }
      }
      tabs {
        title
        componentVariant {
          id
          idPrefix
          title
          accordionOpen
          accordionLabel
          accordionUrl
          accordionSrLabel
          accordionSrCopyLabel
        }
        sectionsEditorial {
          full
          noSpace
          title
          components {
            name
            noSpace
            text
            title
            responsive
            headingLevel
            # specular
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
          buttons {
            label
            blank
            btnStyle
            url
            icon {
              icon
              size
              color
              align
              addonClasses
            }
          }
        }
      }
    }
  }
`
export default Page

export const Head = ({ data: { content } }) => (
  <Seo
    title = {content.seo.name}
    description = {content.seo.description}
    image = {content.seo.image}
    twitterImage = {content.seo.twitterImage}
    pathname = {content.seo.pathname}
    canonical = {content.seo.canonical}
  >
  </Seo>
)
