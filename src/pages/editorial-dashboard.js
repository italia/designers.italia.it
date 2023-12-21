import * as React from "react";
import { graphql } from "gatsby";

import Link from "../components/link/link";
import Card from "../components/card/card";

import Template from "../templates/base";

function sandboxTestPage({ data: { highlightedContent } }) {
  return (
    <Template>
      <section>
        <div className="container-xxl py-5 mb-5 pt-lg-6 pb-lg-6 overflow-hidden">
          <div className="row">
            <div className="col-12">
              <h1> Sandbox Test Filter Query</h1>
              <h2> Tutte le pagine filtrate per titolo </h2>
              <p> Stiamo leggendo i dati di tre notizie cercandole per il loro titolo. L'obiettivo è arrivare a generare elenchi di cards in automatico partendo da titoli unici o altri dettagli unici (id, etc.). Per ora testando pageQuery. </p>
              <ul>
                {highlightedContent.edges.map(({ node }) =>
                  <li key={node.seo.title} className="py-3">
                    <Card
                      img={node.seo.image.replace(/.*\/\/[^\/]*/, '')} // XXX 
                      title={node.components.hero.title}
                      url={node.seo.url}
                      description={node.seo.description}
                    >
                    </Card>
                    {/* <h3><Link to={node.seo.pathname}>{node.components.hero.title}</Link></h3> */}
                    {/* <p>{node.seo.description}</p> */}
                  </li>)
                }
              </ul>
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
    filter: { components: { hero: { title: { in: 
      [
        "Il 2023 di Designers Italia ",
      ] 
    } } } }
    sort: { seo: { pathname: DESC } }
  ) {
    totalCount
    edges {
      node {
        components {
          hero {
            title
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
`;