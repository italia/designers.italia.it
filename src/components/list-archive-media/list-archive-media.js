import * as React from "react";

import "../../scss/styles.scss";
import "../../js/globals";

import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";
import Card from "../card/card";

function ListArchiveMedia({ background, noSpace }) {
  const data = useStaticQuery(graphql`
    query {
      allContent(
        filter: { 
        metadata: { 
          archive: { in: "media" },
          unpublished: { ne: true }
        } 
        sort: { seo: { pathname: DESC } }
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
                subtitle
                tag {
                  label
                }
              }
            }
            seo {
              description
              pathname
              image
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allContent;
  const tagHeader = "Esplora l’archivio";

  const styles = classNames("section-editorial", {
    [`bg-${background}`]: background,
    "py-0": noSpace,
    "text-white": background === "dark",
  });

  const cardStyles = "col-12 col-md-6 mb-3 mb-md-4 col-lg-4";

  const iconOverlay = {
    icon: "sprites.svg#it-video",
    ariaLabel: "video",
  };

  return (
    <section className={styles} aria-labelledby="archive-list-title">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div className="px-3 px-lg-0 px-lg-5">
              <h2
                className="border-bottom pb-4 mb-4 mb-md-5"
                id="archive-list-title"
              >
                {tagHeader}
              </h2>
              <div className="row pb-4">
                {edges.map(({ node }) => {
                  const { id } = node;
                  const { pathname } = node.seo;
                  const { title } = node.components?.hero || "";
                  const { tag } = node.components?.hero || "";
                  const { image } = node.seo;
                  return (
                    <div className={cardStyles} key={id}>
                      <Card
                        title={title}
                        url={pathname}
                        cardEvent="true"
                        img={image}
                        alt=""
                        imgRatio="16x9"
                        fullHeight="true"
                        tag={tag}
                        iconOverlay={iconOverlay}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListArchiveMedia;
