import * as React from "react";

import "../../scss/styles.scss";
import "../../js/globals";

import { useStaticQuery, graphql } from "gatsby";
import ListItem from "../list-item/list-item";
import Chip from "../chip/chip";

function ListArchiveDSTags() {
  const data = useStaticQuery(graphql`
    query {
      tagsDesignSystem: allContent {
        group(
          field: {
            components: { hero: { kangaroo: { tagsDesignSystem: SELECT } } }
          }
        ) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <section className="pb-5" aria-labelledby="archive-list-title">
      <div className="d-md-flex flex-row align-items-center">
        <h3 className="border-end pe-4" id="archive-list-title">
          Esplora per utilizzo
        </h3>
        <div className="chips-list-wrapper ps-md-4">
          <ul className="chips-list chips mt-4 mt-md-3 d-flex flex-wrap">
            {data.tagsDesignSystem.group.map((tag) => (
              <ListItem
                key={tag.fieldValue}
                addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4"
              >
                <Chip
                  label={tag.fieldValue}
                  size="lg"
                  color="primary"
                  path="design-system/componenti/utili-per"
                >
                  <span className="ms-2 badge bg-primary rounded-pill small">
                    <span className="visually-hidden">[</span>
                    {tag.totalCount}
                    {tag.totalCount === 1 ? (
                      <span className="visually-hidden"> componente ]</span>
                    ) : (
                      <span className="visually-hidden"> componenti ]</span>
                    )}
                  </span>
                </Chip>
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ListArchiveDSTags;
