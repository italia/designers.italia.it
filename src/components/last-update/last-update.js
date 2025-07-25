import React from "react";
import Icon from "../icon/icon";
import Link from "../link/link";
import "./last-update.scss";

function LastUpdate({ pathname, lastModified }) {
  let editGithubUrl = `https://github.com/italia/designers.italia.it/tree/main/src/data/content/`;
  if (pathname) {
    const filePath =
      pathname === "/" ? "index" : pathname.slice(1).replace(/^\/|\/$/g, "");

    editGithubUrl += `${filePath}.yaml`;
  }

  const columnStyle = "col-12 g-0";

  return (
    <div className="last-update py-4">
      <div className="container-xxl">
        <div className="row">
          <div className={columnStyle}>
            <div className="d-flex flex-column flex-lg-row justify-content-lg-between px-3 px-lg-5">
              <div className="text-secondary mb-2 mb-lg-0">
                <strong>Ultimo aggiornamento: </strong>
                <time dateTime={lastModified} title={lastModified}>
                  {new Date(lastModified).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div>
                <Link
                  to="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary me-0 me-md-5 d-block d-md-inline-block mt-3 mt-md-0"
                >
                  Licenza CC BY-SA 4.0
                  <span className="visually-hidden">
                    (si apre in una nuova finestra)
                  </span>
                  <Icon
                    icon="sprites.svg#it-external-link"
                    size="sm"
                    color="secondary"
                    addonClasses="ms-1 mb-1"
                  />
                </Link>
                <Link
                  to={editGithubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="d-block d-md-inline-block text-secondary mt-3 mt-md-0"
                >
                  Proponi una modifica a questa pagina
                  <span className="visually-hidden">
                    (si apre in una nuova finestra)
                  </span>
                  <Icon
                    icon="sprites.svg#it-pencil"
                    size="sm"
                    color="secondary"
                    addonClasses="ms-1 mb-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastUpdate;
