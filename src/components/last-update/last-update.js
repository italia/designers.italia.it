import classNames from "classnames";
import React from "react";
import Icon from "../icon/icon";
import Link from "../link/link";
import "./last-update.scss";

function LastUpdate({ pathname, lastModified, noPadding }) {
  let editGithubUrl = `https://github.com/italia/designers.italia.it/tree/main/src/data/content/`;
  if (pathname) {
    const filePath =
      pathname === "/" ? "index" : pathname.slice(1).replace(/^\/|\/$/g, "");

    editGithubUrl += `${filePath}.yaml`;
  }

  const columnStyle = "col-12 g-0";

  const paddingStyle = classNames("px-3", { "px-lg-5": !noPadding });

  return (
    <div className="last-update py-5 py-lg-7">
      <div className="container-xxl">
        <div className="row">
          <div className={columnStyle}>
            <div className={paddingStyle}>
              <p>
                <small>
                  <span>Ultimo aggiornamento: </span>
                  <time dateTime={lastModified} title={lastModified}>
                    {new Date(lastModified).toLocaleDateString("it-IT", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    to="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
                    target="_blank"
                    rel="noreferrer"
                    className="d-block d-md-inline-block text-decoration-none mt-2 mt-md-0 ms-md-5"
                  >
                    <strong className="d-inline-block me-2">
                      Licenza CC BY-SA 4.0
                      <span className="visually-hidden">
                        (si apre in una nuova finestra)
                      </span>
                      <Icon
                        icon="sprites.svg#it-external-link"
                        size="md"
                        color="primary"
                        addonClasses="align-middle"
                      />
                    </strong>
                  </Link>
                </small>
              </p>
              <p className="mb-0">
                <small>
                  <Link
                    to={editGithubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block text-decoration-none"
                  >
                    <strong className="d-inline-block me-2">
                      Proponi una modifica a questa pagina
                      <span className="visually-hidden">
                        (si apre in una nuova finestra)
                      </span>
                    </strong>
                    <Icon
                      icon="sprites.svg#it-pencil"
                      size="sm"
                      color="primary"
                    />
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastUpdate;
