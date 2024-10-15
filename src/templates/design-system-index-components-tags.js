import * as React from "react";
import "../scss/styles.scss";
import "../js/globals";

import { graphql } from "gatsby";
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

import HeaderData from "../data/header.yaml";
import FooterData from "../data/footer.yaml";
import TagPageData from "../data/tag.yaml";
import skipLinksData from "../data/skiplinks.yaml";
import dsNav from "../data/dsnav.yaml";

import Link from "../components/link/link";
import ListItem from "../components/list-item/list-item";
import ListArchiveDSTags from "../components/list-archive-ds-tags/list-archive-ds-tags";

import { Seo } from "../components/seo/seo";

function TagsDesignSystem({ children, pageContext, location, data }) {
  const lastModified =
    data.content?.parent?.fields?.gitLogLatestDate || new Date(0).toISOString();

  const { tag } = pageContext;
  const { edges, totalCount } = data.allContentDesignSystemByTag;
  const tagHeader = `Esplora ${totalCount} component${
    totalCount === 1 ? "e" : "i"
  } utili`;

  const iconOpt = {
    icon: "sprites.svg#it-file",
    size: "sm",
    color: "primary",
    addonClasses: "mt-1 flex-shrink-0 me-1 me-md-3",
  };

  const container = "container-xxl";
  const row = "row";

  const styles = "section-editorial";

  const showTags = true;

  return (
    <div id="app">
      <HeaderPre data={HeaderData.headerPre} />
      <Header data={HeaderData}>
        <Skiplinks data={skipLinksData} />
        <HeaderSlim data={HeaderData.headerSlim} />
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter} />
          <HeaderNav data={HeaderData.navbar} page={TagPageData.seo.page} />
        </NavWrapper>
      </Header>
      <div className="bg-light">
        <div className="container-xxl">
          <div className="row design-system">
            <NavSidebar page="Panoramica componenti" {...dsNav} />
            <main
              id="main"
              className="col-12 col-lg-9 px-lg-0 content-column bg-white"
            >
              <Hero
                {...TagPageData.components.hero}
                title={tag}
                subtitle={`Tutti i componenti del design system utili per "${tag}"`}
                crumbLabel={tag}
                pageContext={pageContext}
                {...TagPageData.seo}
              />

              {/* { Pagedata.components.filterCards && <FilterCards {...Pagedata.components.filterCards}/>} */}

              <section className={styles} aria-describedby="archive-list-title">
                <div className={container}>
                  <div className={row}>
                    <div className="col-12 g-0">
                      <div className="px-3 px-lg-0 px-lg-5">
                        <h2
                          className="border-bottom pb-4 w-100"
                          id="archive-list-title"
                        >
                          {tagHeader}
                        </h2>
                        <div className="it-list-wrapper">
                          <ul className="it-list mt-4 mt-md-3">
                            {edges.map(({ node }) => {
                              const { id } = node;
                              const { pathname } = node.seo;
                              const title = node.components?.hero?.title;
                              const { description } = node.seo;
                              return (
                                <ListItem
                                  url={pathname}
                                  key={id}
                                  iconLeft
                                  icon={iconOpt}
                                  addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4"
                                >
                                  <div className="d-md-flex">
                                    <h3 className="h6 mb-0">
                                      <strong>{title}</strong>
                                    </h3>
                                    <div>
                                      {/* {node.components?.hero?.tag?.label &&
                                        <div className="mb-2 mt-1 mb-md-0 mt-md-0">
                                          <Tag label={node.components?.hero?.tag?.label} addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal"></Tag>
                                        </div>
                                      } */}
                                    </div>
                                  </div>
                                  {(node.components?.hero?.kangaroo
                                    ?.personalInfo?.items ||
                                    description) && (
                                    <p className="text-secondary fw-normal d-block mb-3 listTextSmall">
                                      <span>{description}</span>
                                    </p>
                                  )}
                                </ListItem>
                              );
                            })}
                          </ul>

                          <div className="mt-5 mb-4 border-top pt-4 px-4">
                            <Link to="/design-system/componenti/#esplora">
                              <strong>Esplora tutti i componenti</strong>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="mb-5 ps-4">
                        {showTags && <ListArchiveDSTags />}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        {children}
        {lastModified && (
          <LastUpdate
            lastModified={lastModified}
            {...TagPageData.lastUpdate}
            {...location}
            {...pageContext}
          />
        )}
        <Feedback />
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
    </div>
  );
}

export default TagsDesignSystem;

export const pageQuery = graphql`
  query ($tag: String) {
    allContentDesignSystemByTag: allContent(
      filter: {
        components: { hero: { kangaroo: { tagsDesignSystem: { in: [$tag] } } } }
      }
      sort: { components: { hero: { title: ASC } } }
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
`;

export function Head({ pageContext: { tag } }) {
  return (
    <Seo
      title={`${tag} - Designers Italia`}
      description={`Tutti i contenuti del design system relativi all'argomento "${tag}"`}
      pathname={`/design-system/argomenti/"${tag}"/`}
    />
  );
}
