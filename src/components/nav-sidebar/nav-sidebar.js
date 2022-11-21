import React from "react"
import Tag from "../tag/tag"
import "./nav-sidebar.scss"

const NavSidebar = ({

}) => {

  let tag = {
    label: "v 2.0.8",
    addonClasses: "bg-primary mt-2"
  }

  return (
    <div className="nav-sidebar">

      <nav className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side border-start-0" data-bs-navscroll aria-label="Navigazione Design System">
        <button className="custom-navbar-toggler" type="button" aria-controls="navSidebarDs" aria-expanded="false" aria-label="Toggle navigation" data-bs-toggle="navbarcollapsible" data-bs-target="#navSidebarDs"><span className="it-list"></span>Menu navigazione
        </button>
        <div className="navbar-collapsable" id="navSidebarDs">
          <div className="overlay"></div>
          <div className="close-div visually-hidden">
            <button className="btn close-menu" type="button">
              <span className="it-close"></span>Navigazione Design System
            </button>
          </div>
          <a className="it-back-button" href="#" role="button">
            <svg className="icon icon-sm icon-primary align-top">
              <use href="/svg/sprites.svg#it-chevron-left"></use>
            </svg>
            <span>Indietro</span>
          </a>
          <div className="menu-wrapper">

          <div className="nav-sidebar-header mx-4 mx-lg-3 mb-4 mb-lg-5 mt-0 mt-lg-3">
            <img src="/images/design-system-menu.svg" className="header-image my-2" alt="Design System"/>
            <h2 className="h4 text-primary">Design system</h2>
            <Tag {...tag}/>
          </div>

            <div className="link-list-wrapper">
              <ul className="link-list">
                <li>
                  <a className="list-item text-uppercase right-icon active" href="#collapseOne" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                  <span className="list-item-title-icon-wrapper">
                    <span>Come iniziare (attivo)</span>
                    <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg>
                  </span>
                  </a>
                  <ul className="link-sublist collapse show" id="collapseOne">
                    <li><a className="list-item active" href="#"><span>Link lista 1.1 (attivo)</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 1.2</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 1.3</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="list-item text-uppercase right-icon" href="#collapseTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
                    <span className="list-item-title-icon-wrapper">
                    <span>Fondamenti</span>
                    <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg>
                    </span>
                  </a>
                  <ul className="link-sublist collapse" id="collapseTwo">
                    <li><a className="list-item" href="#"><span>Link lista 2.1</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 2.2</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 2.3</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="list-item text-uppercase right-icon" href="#collapseThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                    <span className="list-item-title-icon-wrapper">
                    <span>Fondamenti</span>
                    <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg>
                    </span>
                  </a>
                  <ul className="link-sublist collapse" id="collapseThree">
                    <li><a className="list-item" href="#"><span>Link lista 3.1</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 3.2</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 3.3</span></a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="list-item text-uppercase right-icon" href="#collapseFour" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                    <span className="list-item-title-icon-wrapper">
                    <span>Design pattern</span>
                    <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg>
                    </span>
                  </a>
                  <ul className="link-sublist collapse" id="collapseFour">
                    <li><a className="list-item" href="#"><span>Link lista 4.1</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 4.2</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 4.3</span></a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="list-item text-uppercase right-icon" href="#collapseFive" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                    <span className="list-item-title-icon-wrapper">
                    <span>Showcase</span>
                    <svg className="icon icon-sm icon-primary right" aria-hidden="true"><use href="/svg/sprites.svg#it-expand"></use></svg>
                    </span>
                  </a>
                  <ul className="link-sublist collapse" id="collapseFive">
                    <li><a className="list-item" href="#"><span>Link lista 5.1</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 5.2</span></a>
                    </li>
                    <li><a className="list-item" href="#"><span>Link lista 5.3</span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-linklist-wrapper linklist-secondary">
            <div className="link-list-wrapper">
              <ul className="link-list">
                <li><a className="list-item active" href="#"><span>Come contribuire</span></a>
                </li>
                <li><a className="list-item" href="#"><span>Versionamento</span></a>
                </li>
                <li><a className="list-item" href="#"><span>Risorse</span></a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavSidebar
