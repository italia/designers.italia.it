import * as React from "react"

import "../scss/styles.scss"
import "../js/globals"

import Link from "../components/link/link"
import ListItem from "../components/list-item/list-item"
import Tag from "../components/tag/tag"
import { graphql } from "gatsby"

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

import Hero from "../components/hero/hero"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import TagPageData from "../data/tag.yaml"
import skipLinksData from "../data/skiplinks.yaml"

const Tags = ({ children, pageContext, location, data }) => {
  const lastModified = data.content?.parent?.fields?.gitLogLatestDate || new Date(0).toISOString()

  const { tag } = pageContext
  const { edges, totalCount } = data.allContentByTag
  const tagHeader = `C${totalCount === 1 ? "'è" : "i sono"} ${totalCount} pagin${totalCount === 1 ? "a" : "e"} su questo argomento`

  const iconOpt = {
    icon: 'sprites.svg#it-file',
    size: 'sm',
    color: "primary",
    addonClasses: 'mt-1 flex-shrink-0 me-1 me-md-3'
  }

  let container = "container-xxl"
  let row = "row"

  let styles = 'section-editorial'

  return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre} />
      <Skiplinks data={skipLinksData.skiplinks} />
      <Header data={HeaderData}>
        <HeaderSlim data={HeaderData.headerSlim} />
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter} />
          <HeaderNav data={HeaderData.navbar} page={TagPageData.seo.page} />
        </NavWrapper>
      </Header>
      <main id="main">
        <Hero {...TagPageData.components.hero} title={`Argomento: "${tag}"`} pageContext={pageContext} {...TagPageData.seo}></Hero>
        <section className={styles} aria-describedby="archive-list-title">
          <div className={container}>
            <div className={row}>
              <div className="col-12 g-0">
                <div className="px-3 px-lg-0 px-lg-5">
                  <h2 className="border-bottom pb-4" id="archive-list-title">{tagHeader}</h2>
                  <div className="it-list-wrapper">
                    <ul className="it-list mt-4 mt-md-3">
                      {edges.map(({ node }) => {
                        const { id } = node
                        const { pathname } = node.seo
                        const { title } = node.components?.hero
                        const { description } = node.seo
                        return (
                          <ListItem url={pathname} key={id} iconLeft icon={iconOpt} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
                            <div className="d-md-flex">
                              <h3 className="h6 mb-0">
                                <strong>{title}</strong>
                              </h3>
                              <div>
                                {node.components?.hero?.tag?.label &&
                                  <div className="mb-2 mt-1 mb-md-0 mt-md-0">
                                    <Tag label={node.components?.hero?.tag?.label} addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal"></Tag>
                                  </div>
                                }
                                {node.metadata?.template?.name &&
                                  (node.metadata?.template?.name === 'level1' || node.metadata?.template?.name === 'community') ?
                                  <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block ">
                                    <Tag label="Panoramica" addonClasses="ms-md-4 text-uppercase bg-primary px-2 py-0 fw-normal"></Tag>
                                  </div>
                                  : null}
                              </div>
                            </div>
                            {(node.components?.hero?.kangaroo?.personalInfo?.items || description) &&
                              <p className="text-secondary fw-normal d-block mb-3">
                                {node.components?.hero?.kangaroo?.personalInfo?.items &&
                                  <small>{node.components?.hero?.kangaroo?.personalInfo?.items[1].label}</small>} {/*// XXX WE NEED AN UNIVERSAL NEWS DATE FIELD */}
                                <small> — {description}</small>
                              </p>
                            }
                          </ListItem>
                        )
                      })}
                    </ul>
                    <div className="my-5 mx-5">
                      <Link to="/argomenti/"><strong>Scopri tutti gli argomenti</strong></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {children}
        {lastModified && <LastUpdate lastModified={lastModified} {...TagPageData.lastUpdate} {...location} {...pageContext} />}
        {TagPageData.navPreFooter && <NavPreFooter {...TagPageData.navPreFooter} />}
        <Feedback />
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
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentByTag: allContent(
      filter: {components: {hero: {kangaroo: {tags: {in: [$tag]}}}}}
      sort: {order: ASC, fields: components___hero___title}
    ) {
      totalCount
      edges {
        node {
          id
          metadata {
            template {
              name
            }
          }
          components {
            hero {
              title
              tag {
                label
              }
              kangaroo {
                personalInfo {
                  items {
                    title
                    label
                  }
                }
              }
            }
          }
          seo {
            description
            pathname
          }
        }
      }
    }
  }
`
