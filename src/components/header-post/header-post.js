import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import Icon from "../icon/icon";
import Link from "../link/link";
import "./header-post.scss";

let styles;
const iconNewsletter = {
  icon: "sprites.svg#it-mail",
  size: "sm",
  align: "middle",
  color: "primary",
  hidden: true,
  addonClasses: "ms-2",
};

function HeaderPost({ data, editorialSections }) {
  const automatedData = useMemo(() => {
    if (!editorialSections?.length || !data?.nav) {
      return data;
    }

    const editorialSection = editorialSections.find(
      (es) => {
        return es.section === "header-bookmarks";
      }
    );

    if (!editorialSection || !editorialSection.highlighted?.length) {
      return data;
    }

    const automatedItems = editorialSection.highlighted.map((bookmark) => {
      return {
        title: bookmark.title,
        url: bookmark.url,
        blank: bookmark.blank || false,
        ariaLabel: bookmark.ariaLabel || null,
        icon: {
          icon: bookmark.icon || "sprites.svg#it-bookmark",
          size: "sm",
          align: "middle",
          color: "primary",
          hidden: true,
          addonClasses: "me-2",
        },
      };
    });

    const result = {
      ...data,
      nav: {
        ...data.nav,
        items: automatedItems,
      },
    };

    return result;
  }, [editorialSections, data]);

  const safeItems = automatedData?.nav?.items || [];

  if (automatedData?.isActive) {
    return (
      <section aria-labelledby={automatedData.nav.id}>
        <div className="it-header-slim-wrapper p-0 h-100">
          <div className="header-pre bg-white border-bottom border-100 w-100 shadow-sm">
            <div className="container-xxl">
              <div className="row ">
                <div className="col-12 g-0">
                  <div className="header-post-wrapper">
                    <span id={automatedData.nav.id} className="visually-hidden">
                      {automatedData.nav.ariaLabel}
                    </span>
                    <ul className="list-inline py-4 px-4 px-lg-5 mb-0 d-flex align-items-center flex-nowrap overflow-x-list">
                      {safeItems.map((value, index) => {
                        if (index + 1 === safeItems.length) {
                          // last on the left side has "me-auto"
                          styles = "list-item text-nowrap me-5 me-md-auto";
                        } else {
                          styles = "list-item text-nowrap me-5";
                        }
                        return (
                          <li key={`banner-item-${index}`} className={styles}>
                            <Link
                              to={value.url}
                              target={value.blank ? "_blank" : undefined}
                              rel={value.blank ? "noreferrer" : undefined}
                            >
                              <Icon {...value.icon} />
                              {value.title && (
                                <ReactMarkdown components={{ p: "span" }}>
                                  {value.title}
                                </ReactMarkdown>
                              )}
                            </Link>
                          </li>
                        );
                      })}

                      {automatedData.nav.newsletter && (
                        <li
                          key={`banner-item-${safeItems.length}${1}`}
                          className="list-item text-nowrap ms-5 me-md-0"
                        >
                          <Link
                            className="simple-cta fw-semibold"
                            to={automatedData.nav.newsletter.url}
                            target={
                              automatedData.nav.newsletter.blank
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              automatedData.nav.newsletter.blank
                                ? "noreferrer"
                                : undefined
                            }
                          >
                            <span className="text-end">
                              {automatedData.nav.newsletter.title}
                            </span>
                            <Icon {...iconNewsletter} />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default HeaderPost;
