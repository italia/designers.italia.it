import React from "react";
import Card from "../card/card";

function HighlightedCards({ data }) {
  const cardStyles = "col-12 col-md-6 mb-3 mb-md-4 col-lg-4";

  return (
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
                Sandbox page query
              </h2>
              <div className="row pb-4">
                {data.edges.map(({ node }) => {
                  console.log("DEBUG - Node data:", {
                    title: node.components?.hero?.title,
                    imagePath: node.components?.imageIcons?.image,
                    fullNode: node,
                  });

                  return (
                    <div
                      key={node.seo?.title || node.id}
                      className={cardStyles}
                    >
                      <Card
                        img={node.components?.imageIcons?.image}
                        title={node.components?.hero?.title}
                        url={node.seo?.pathname}
                        description={node.seo?.description}
                        fullHeight
                        imgRatio="16x9"
                        // tag={node.components?.hero?.tag}
                        tags={node.components?.hero?.kangaroo?.tags}
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

export default HighlightedCards;
