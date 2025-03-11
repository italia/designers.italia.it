import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import List from "../list/list";
import ListItem from "../list-item/list-item";
import Button from "../button/button";
import Subscribe from "../subscribe/subscribe";
import Link from "../link/link";
import "./footer-main.scss";

import Chip from "../chip/chip";

function FooterMain({ id, title, cols, tagsNo, social, community, subscribe }) {
  const data = useStaticQuery(graphql`
    query {
      footerTags: allContent {
        group(field: { components: { hero: { kangaroo: { tags: SELECT } } } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  data.footerTags.group.sort(
    (a, b) => parseFloat(b.totalCount) - parseFloat(a.totalCount),
  );
  const footerTags = data.footerTags.group.slice(0, tagsNo);

  return (
    <div className="it-footer-main py-5" id={id}>
      <div className="container-xxl">
        <section>
          {title && (
            <div className="row clearfix pb-4">
              <div className="col-12">
                <h3 className="footer-title">{title}</h3>
              </div>
            </div>
          )}
        </section>
        <section>
          {footerTags && (
            <div className="row">
              <div className="chips-list-wrapper">
                <ul
                  className="chips-list chips d-flex flex-wrap"
                  aria-label="Esplora gli argomenti: "
                >
                  {footerTags.map((tag) => (
                    <ListItem
                      key={tag.fieldValue}
                      addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4"
                    >
                      <Chip label={tag.fieldValue} size="lg" color="primary" />
                    </ListItem>
                  ))}
                </ul>
                <div className="text-end">
                  <Link className="text-white" to="/argomenti/">
                    <strong>Scopri tutti gli argomenti</strong>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {cols && (
            <div className="row">
              {cols.map((value, colsIndex) => (
                <div
                  key={`item-${colsIndex}`}
                  className="col-12 col-md-6 col-lg-3 col-sm-6 pb-mb-2 pb-lg-0"
                >
                  <List {...value}>
                    {value.items.map((item, itemsIndex) => (
                      <ListItem {...item} key={`subitem-${itemsIndex}`} />
                    ))}
                  </List>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="footer-utilities mt-5 pt-5">
          <div className="row">
            {community && (
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h3 className="footer-title pb-4">{community.title}</h3>

                <List {...community.list}>
                  {community.list.items.map((item, index) => (
                    <ListItem {...item} key={`subitem-${index}`} />
                  ))}
                </List>
              </div>
            )}

            {social && (
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h3 className="footer-title pb-4">{social.title}</h3>
                {social.buttons.map((button, index) => (
                  <Button key={`social-${index}`} {...button} />
                ))}
              </div>
            )}

            {subscribe && (
              <div className="col-12 col-lg-6">
                <div className="title-wrapper d-flex justify-content-between">
                  <h3 className="footer-title pb-4">{subscribe.title}</h3>
                  {subscribe.link && (
                    <Link
                      className="text-white"
                      to={subscribe.link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={subscribe.link.ariaLabel}
                    >
                      {subscribe.link.label}
                    </Link>
                  )}
                </div>
                {subscribe.subscribe && (
                  <div className="subscribe-wrapper mt-4">
                    <span className="bg-dark">
                      <Subscribe {...subscribe.subscribe} />
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default FooterMain;
