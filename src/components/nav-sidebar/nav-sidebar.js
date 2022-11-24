import React from "react"
import Tag from "../tag/tag"
import "./nav-sidebar.scss"

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
  let subLinksStyle
  let subLinks
  let expandSublinks
  let subStyles
  let secondaryLinks
  let secondaryLinksstyle

  if (list) {
    links = list.map((item,index) => {

      expandSublinks = ''

      linksStyle = "list-item text-uppercase right-icon"
        + `${(item.label === page) ? ' active' : ''}`

      if (item.subList) {

        subLinks = item.subList.map((subItem,index) => {

          if (subItem.label === page) {
            expandSublinks = true
          }

          subLinksStyle = "list-item"
            + `${(subItem.label === page) ? ' active' : ''}`

          return (
            <li key={"subl-"+index}>
              <a className={subLinksStyle} href={subItem.url}><span>{subItem.label}</span></a>
            </li>
          )
        })

        subStyles = "link-sublist collapse"
          + `${expandSublinks ? ' show' : ''}`

        return(
          <li key={"l-"+index}>
            <a className={linksStyle} href={"#collapseNav-"+index} data-bs-toggle="collapse" aria-expanded={expandSublinks} aria-controls={"collapseNav-"+index} >
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
            <a className={linksStyle} href={item.url}>
              <span>{item.label}</span>
            </a>
          </li>
        )
      }

    })
  }

  if (secondaryList) {

    let secondaryStyle

    secondaryLinks = secondaryList.map((item,index) => {
      secondaryStyle = "list-item"
        + `${(item.label === page) ? ' active' : ''}`
      return(
        <li key={"sl-"+index}>
          <a className={secondaryStyle} href={item.url}>
            <span>{item.label}</span>
          </a>
        </li>
      )
    })
  }

  return (
    <div className="nav-sidebar">

      <nav className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side border-start-0" aria-label={ariaLabel}>
        <button className="custom-navbar-toggler" type="button" aria-controls={id} aria-expanded="false" aria-label={toggleAriaLabel} data-bs-toggle="navbarcollapsible" data-bs-target="#navSidebarDs"><span className="it-list"></span>{toggleLabel}
        </button>
        <div className="navbar-collapsable" id={id}>
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
      </nav>
    </div>
  )
}

export default NavSidebar
