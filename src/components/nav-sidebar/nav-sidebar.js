import classNames from "classnames";
import React, { useRef, useEffect } from "react";
import { NavBarCollapsible, Sticky } from "bootstrap-italia";
import Tag from "../tag/tag";
import Link from "../link/link";
import "./nav-sidebar.scss";

import Icon from "../icon/icon";

import "../../scss/bootstrap-italia-TEMP-FIXES-REMOVEME.scss";

function NavSidebar({
  id,
  title,
  subTitle,
  img,
  alt,
  tag,
  toggleLabel,
  toggleAriaLabel,
  ariaLabel,
  backLabel,
  buttonCloseAriaLabel,
  list,
  secondaryList,
  page,
}) {
  let links;
  let linksStyle;
  let subLinks;
  let expandSublinks;
  let subStyles;
  let secondaryLinks;

  const GATSBY_ACTIVE = "active";
  const navCollRef = useRef(null);
  const navStickyRef = useRef(null);

  const ICON_CHEVRON_RIGHT = {
    icon: "sprites.svg#it-chevron-right",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle",
    ariaLabel: " (Link esterno)",
  };

  // XXX We are currently using and repurposing the "navscroll" component of BSI, there may be some improvements to be made in a11y

  if (list) {
    links = list.map((item, index) => {
      expandSublinks = false;

      linksStyle =
        "list-item text-uppercase right-icon nav-link" +
        `${item.label === page ? " active" : ""}` +
        `${item.disabled ? " disabled" : ""}`;

      if (item.subList) {
        subLinks = item.subList.map((subItem, indexSub) => {
          if (subItem.label === page) {
            expandSublinks = true;
            linksStyle += " contains-active";
          }

          let subLiStyle = "nav-link";

          if (subItem.disabled) {
            subLiStyle += " disabled";
          }

          return (
            <li key={`subl-${indexSub}`}>
              {subItem.url && (
                <Link
                  to={subItem.url}
                  className={subLiStyle}
                  activeClassName={GATSBY_ACTIVE}
                >
                  <span>{subItem.label}</span>
                </Link>
              )}
              {!subItem.url && (
                <span className="d-flex px-3 py-1 my-1">
                  {subItem.label}
                  <span className="visually-hidden">
                    (Pagina non ancora disponibile)
                  </span>
                </span>
              )}
            </li>
          );
        });

        subStyles = classNames("link-sublist collapse", {
          show: expandSublinks,
        });

        return (
          <li key={`l-${index}`}>
            <button
              type="button"
              className={linksStyle}
              data-bs-target={`#collapseNav-${index}`}
              data-bs-toggle="collapse"
              aria-expanded={expandSublinks}
              aria-controls={`collapseNav-${index}`}
            >
              <span className="list-item-title-icon-wrapper list-item-title-icon-wrapper d-flex justify-content-between align-items-center">
                <span>{item.label}</span>
                <svg
                  role="img"
                  className="icon icon-sm icon-primary right"
                  aria-hidden="true"
                >
                  <use href="/svg/sprites.svg#it-expand" />
                </svg>
              </span>
            </button>
            <ul className={subStyles} id={`collapseNav-${index}`}>
              {subLinks}
            </ul>
          </li>
        );
      }
      return (
        <li key={`l-${index}`}>
          <Link
            className={linksStyle}
            to={item.url}
            activeClassName={GATSBY_ACTIVE}
          >
            <span>{item.label}</span>
          </Link>
        </li>
      );
    });
  }

  if (secondaryList) {
    secondaryLinks = secondaryList.map((item, index) => {
      const secondaryItemStyle = classNames("list-item", {
        disabled: item.disabled,
      });

      return (
        <li key={`sl-${index}`}>
          <Link
            className={secondaryItemStyle}
            to={item.url}
            activeClassName={GATSBY_ACTIVE}
          >
            <span>{item.label}</span>
          </Link>
        </li>
      );
    });
  }

  useEffect(() => {
    const navColl = navCollRef.current;
    const navSticky = navStickyRef.current;
    if (navSticky) {
      // eslint-disable-next-line no-new
      new Sticky(navSticky, {
        stackable: true,
        paddingTop: 100,
      });
    }
    return () => {
      if (navColl) {
        const navCollObj = new NavBarCollapsible(navColl);
        if (navCollObj) {
          navCollObj.hide();
        }
      }
    };
  });

  return (
    <div
      className="col-12 col-lg-3 px-lg-0 pb-lg-5 bg-light menu-column border-end position-sticky"
      ref={navStickyRef}
    >
      <div className="nav-sidebar">
        <nav
          className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-right-side border-end-0"
          aria-label={ariaLabel}
        >
          <button
            className="custom-navbar-toggler"
            type="button"
            aria-controls={id}
            aria-expanded="false"
            aria-label={toggleAriaLabel}
            data-bs-toggle="navbarcollapsible"
            data-bs-target="#navSidebarDs"
          >
            <span className="it-list" />
            <Icon {...ICON_CHEVRON_RIGHT} />
            {toggleLabel}
          </button>
          <div className="navbar-collapsable" id={id} ref={navCollRef}>
            <div className="overlay" />
            <div className="menu-wrapper">
              <button
                className="it-back-button btn w-100 text-start rounded-0"
                type="button"
                aria-label={buttonCloseAriaLabel}
              >
                <svg role="img" className="icon icon-sm icon-primary align-top">
                  <use href="/svg/sprites.svg#it-chevron-left" />
                </svg>
                <span>{backLabel}</span>
              </button>

              <div className="nav-sidebar-header mx-4 mb-3 mt-0 mt-lg-2">
                <img src={img} className="header-image" alt={alt} />
                <h2 className="h3 px-0 my-1">{title}</h2>
                <p className="fw-normal w-75 mb-0">{subTitle}</p>
              </div>

              <div className="link-list-wrapper">
                <ul className="link-list">{links}</ul>
              </div>

              {secondaryLinks && (
                <div className="sidebar-linklist-wrapper linklist-secondary">
                  <div className="link-list-wrapper">
                    <div className="pt-3">{tag && <Tag {...tag} />}</div>
                    <ul className="link-list">{secondaryLinks}</ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavSidebar;
