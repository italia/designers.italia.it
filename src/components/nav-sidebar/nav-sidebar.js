import React, { useRef, useEffect } from "react"
import Tag from "../tag/tag"
import Link from "../link/link"
import "./nav-sidebar.scss"

import { NavBarCollapsible } from "bootstrap-italia/dist/bootstrap-italia.esm"

const NavSidebar = ({
  id,
  title,
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
  page
}) => {

  let links
  let linksStyle
  let subLinks
  let expandSublinks
  let subStyles
  let secondaryLinks

  const GATSBY_ACTIVE = "active"
  const navCollRef = useRef(null)

  if (list) {
    links = list.map((item,index) => {

      expandSublinks = false

      linksStyle = "list-item text-uppercase right-icon"
        + `${(item.label === page) ? ' active' : ''}`

      if (item.subList) {

        subLinks = item.subList.map((subItem,index) => {

          if (subItem.label === page) {
            expandSublinks = true
            linksStyle = linksStyle+' contains-active'
          }

          return (
            <li key={"subl-"+index}>
              <Link to={subItem.url} activeClassName={GATSBY_ACTIVE}><span>{subItem.label}</span></Link>
            </li>
          )
        })

        subStyles = "link-sublist collapse"
          + `${expandSublinks ? ' show' : ''}`

        return(
          <li key={"l-"+index}>
            <a className={linksStyle} href={"#collapseNav-"+index} data-bs-toggle="collapse" aria-expanded={expandSublinks} aria-controls={"collapseNav-"+index}>
              <span className="list-item-title-icon-wrapper">
                <span>{item.label}</span>
                <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg>
              </span>
            </a>
            <ul className={subStyles} id={"collapseNav-"+index}>
              {subLinks}
            </ul>
          </li>
        )
      } else {
        return(
          <li key={"l-"+index}>
            <Link className={linksStyle} to={item.url} activeClassName={GATSBY_ACTIVE}>
              <span>{item.label}</span>
            </Link>
          </li>
        )
      }

    })
  }

  if (secondaryList) {
    secondaryLinks = secondaryList.map((item,index) => {
      return(
        <li key={"sl-"+index}>
          <Link className="list-item" to={item.url} activeClassName={GATSBY_ACTIVE}>
            <span>{item.label}</span>
          </Link>
        </li>
      )
    })
  }

  useEffect(() => {
    const navColl = navCollRef.current
    return () => {
      if (navColl) {
        const navCollObj = NavBarCollapsible.getInstance(navColl)
        if (navCollObj) {
          navCollObj.hide()
        }
      }
    }
  })

  return (
    <div className="nav-sidebar">

      <nav className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side border-start-0" aria-label={ariaLabel}>
        <button className="custom-navbar-toggler" type="button" aria-controls={id} aria-expanded="false" aria-label={toggleAriaLabel} data-bs-toggle="navbarcollapsible" data-bs-target="#navSidebarDs"><span className="it-list"></span>{toggleLabel}
        </button>
        <div className="navbar-collapsable" id={id} ref={navCollRef}>
          <div className="overlay"></div>
          <div className="close-div visually-hidden">
            <button className="btn close-menu" type="button">
              <span className="it-close"></span>{buttonCloseAriaLabel}
            </button>
          </div>
          <a className="it-back-button" href="#" role="button">
            <svg className="icon icon-sm icon-primary align-top">
              <use href="/svg/sprites.svg#it-chevron-left"></use>
            </svg>
            <span>{backLabel}</span>
          </a>
          <div className="menu-wrapper">

          <div className="nav-sidebar-header mx-4 mx-lg-3 mb-4 mb-lg-5 mt-0 mt-lg-3">
            <img src={img} className="header-image my-2" alt={alt}/>
            <h2 className="h4 text-primary">{title}</h2>
            { tag && <Tag {...tag}/>}
          </div>

            <div className="link-list-wrapper">
              <ul className="link-list">
                {links}
              </ul>
            </div>

            { secondaryLinks &&
              <div className="sidebar-linklist-wrapper linklist-secondary">
                <div className="link-list-wrapper">
                  <ul className="link-list">
                    {secondaryLinks}
                  </ul>
                </div>
              </div>
            }

          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavSidebar
