import * as React from "react";
import { graphql } from "gatsby";

// import Link from "../components/link/link";
import Card from "../components/card/card";

import Template from "../templates/base";

function sandboxTestPage({ data: { highlightedContent } }) {
  const cardStyles = "col-12 col-md-6 mb-3 mb-md-4 col-lg-4";

  return (
    <Template>
      <section
        className="section-editorial"
        aria-describedby="sandbox-list-title"
      >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 g-0">
              <div className="px-3 px-lg-0 px-lg-5">
                <h2
                  className="border-bottom pb-4 mb-4 mb-md-5"
                  id="sandbox-list-title"
                >
                  Sandbox loading dinamic cards
                </h2>
                <div className="row pb-4">
                  {highlightedContent.edges.map(({ node }) => (
                    <div key={node.seo.title} className={cardStyles}>
                      <Card
                        img={node.components.imageIcons.image}
                        title={node.components.hero.title}
                        url={node.seo.pathname}
                        description={node.seo.description}
                        fullHeight
                        // tag={node.components.hero.tag}
                        tags={node.components.hero.kangaroo.tags}
                      />
                      {/* <h3><Link to={node.seo.pathname}>{node.components.hero.title}</Link></h3> */}
                      {/* <p>{node.seo.description}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}

export default sandboxTestPage;

export function Head() {
  return <title>Sandbox Test Page - Designers Italia</title>;
}

export const query = graphql`
  query {
    highlightedContent: allContent(
      filter: {
        components: {
          hero: {
            title: {
              in: [
                "Il 2023 di Designers Italia ",
                "Esperienza del cittadino nei servizi pubblici: dalla Misura alla pratica",
                "Prendi parte anche tu all’evoluzione del design system del Paese",
                "Modelli di siti e servizi di Designers Italia: nuovi file in formato aperto"
              ]
            }
          }
        }
      }
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
          components {
            hero {
              title
              tag {
                label
                addonClasses
              }
              kangaroo {
                tags
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
  }
`;
