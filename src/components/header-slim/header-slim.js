import { useRef, useEffect } from "react";
import { Collapse } from "bootstrap-italia";
import Icon from "../icon/icon";
import List from "../list/list";
import ListItem from "../list-item/list-item";
import Dropdown from "../dropdown/dropdown";
import "./header-slim.scss";

function HeaderSlim({ data }) {
  const collRef = useRef(null);
  const collObjRef = useRef(null);

  const toggleAria = (element) => {
    const ariaAttr = element.getAttribute("aria-expanded");
    let newVal = "true";
    if (ariaAttr === "true") {
      newVal = "false";
    }
    element.setAttribute("aria-expanded", newVal);
  };

  const collapseToggle = (evt) => {
    evt.preventDefault();
    if (collObjRef.current) {
      collObjRef.current.toggle();
      toggleAria(evt.currentTarget);
    }
  };

  useEffect(() => {
    collObjRef.current = new Collapse(collRef.current, { toggle: false });
  });

  return (
    <div className="it-header-slim-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="it-header-slim-wrapper-content">
              <div className="navbar-brand d-none d-lg-block">
                <span>
                  <a
                    target="_blank"
                    className="me-2"
                    href="https://innovazione.gov.it"
                    rel="noreferrer"
                  >
                    Dipartimento per la trasformazione digitale
                  </a>
                  +
                  <a
                    target="_blank"
                    className="ms-2"
                    href="https://agid.gov.it"
                    rel="noreferrer"
                  >
                    Agenzia per l&rsquo;Italia digitale
                  </a>
                </span>
              </div>
              <div className="nav-mobile">
                <nav aria-label={data.nav.ariaLabel}>
                  <div className="d-flex align-items-center">
                    <div className="navbar-brand d-lg-none">
                      <span>
                        <a
                          target="_blank"
                          className="p-2"
                          href="https://innovazione.gov.it"
                          rel="noreferrer"
                        >
                          DTD
                        </a>{" "}
                        +{" "}
                        <a
                          target="_blank"
                          className="p-2"
                          href="https://agid.gov.it"
                          rel="noreferrer"
                        >
                          AGID
                        </a>
                      </span>
                    </div>
                    <a
                      className="it-opener d-lg-none p-2 collapsed"
                      onClick={collapseToggle}
                      href={`#${data.nav.id}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={data.nav.id}
                      data-focus-mouse="false"
                    >
                      <span className="visually-hidden">
                        Apri/chiudi menu secondario
                      </span>
                      <Icon icon="sprites.svg#it-expand" />
                    </a>
                  </div>
                  <List ref={collRef} id={data.nav.id} isMenu collapsable>
                    {data.nav.items.map((value, index) => (
                      <ListItem
                        key={`list-item-${index}`}
                        url={value.url}
                        active={value.active}
                      >
                        {value.title}
                      </ListItem>
                    ))}
                  </List>
                </nav>
              </div>
              {data.langs && (
                <div className="it-header-slim-right-zone">
                  <Dropdown {...data.langs} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlim;
