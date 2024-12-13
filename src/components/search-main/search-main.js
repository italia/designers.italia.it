import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";

import Button from "../button/button";
import Tag from "../tag/tag";
import ListItem from "../list-item/list-item";
import "./search-main.scss";

function SearchMain({ location, maxResults, title, suggest }) {
  const [input, setInput] = useState(() => location?.state?.searchTerm);
  const [searchTerm, setSearchTerm] = useState(
    () => location?.state?.searchTerm,
  );
  const [formSubmitted, setFormSubmitted] = useState(
    () => !!location?.state?.searchTerm,
  );
  const [storedInput, setStoredInput] = useState(
    () => location?.state?.searchTerm,
  );

  const iconOpt = {
    icon: "sprites.svg#it-file",
    size: "sm",
    color: "primary",
    addonClasses: "mt-1 flex-shrink-0 me-1 me-md-3",
  };

  const {
    localSearchPages: { index, store },
  } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);

  const liveRegionRef = useRef(null);
  const firstRound = useRef(true);
  useEffect(() => {
    if (firstRound.current) {
      firstRound.current = false;
      return;
    }
    if (liveRegionRef.current) {
      liveRegionRef.current.focus();
    }
  }, [storedInput]);

  const searchLabelRef = useRef(null);
  useEffect(() => {
    if (searchLabelRef.current && input) {
      searchLabelRef.current.className = "active";
    }
  }, [storedInput, input]);

  const search = (term) => {
    setSearchTerm(term);
    setFormSubmitted(true);
    setStoredInput(term);
  };

  const formSubmit = (ev) => {
    ev.preventDefault();
    search(ev.target.elements.search.value);
    setFormSubmitted(true);
    setStoredInput(input);
  };

  const searchOptions = {
    limit: maxResults,
    // if true "fill" the spaces with suggestions, useful for multiple words query XXX
    suggest: false,
  };

  const results = useFlexSearch(searchTerm, index, store, searchOptions);

  const styles = classNames("search-main bg-light");

  const searchButton = {
    label: "Cerca",
    btnStyle: "primary",
    iconRight: true,
    icon: {
      icon: "sprites.svg#it-search",
      addonClasses: "ms-1 icon-search",
    },
  };

  return (
    <section className={styles} aria-labelledby="searchHomeTitle" role="search">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div
              className="search-main-content px-3 py-5 px-lg-0 px-lg-5 py-lg-6"
            >
              {title && (
                <div className="text-container mb-5">
                  {title && <h2 id="searchHomeTitle">{title}</h2>}
                </div>
              )}
              {suggest && (
                <div className="suggest-wrapper d-lg-flex mb-3">
                  <h3 className="mb-4">{suggest.title}</h3>
                  {suggest.items && (
                    <div className="items-wrapper d-flex flex-wrap ms-lg-5">
                      <ul className="list-inline d-flex flex-wrap">
                        {suggest.items.map((suggestItem, suggestIndex) => (
                          <li
                            className="list-item me-3 mb-3"
                            key={suggestIndex}
                          >
                            <Button
                              onClick={() => {
                                setInput(suggestItem.label);
                                search(suggestItem.label);
                              }}
                              type="submit"
                              size="md"
                              btnStyle="outline-secondary"
                            >
                              {suggestItem.label}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              <div className="search-form px-3 px-sm-4 pb-4 mb-5 shadow-lg">
                <form id="searchForm" onSubmit={formSubmit}>
                  <div className="d-flex flex-column align-items-center flex-sm-row w-100">
                    <div className="form-group mb-0 flex-grow-1 me-sm-4 w-100">
                      <label ref={searchLabelRef} htmlFor="searchInput">
                        Cerca
                      </label>
                      <input
                        type="search"
                        className="border-search form-control form-control-lg rounded-0 search"
                        name="search"
                        id="searchInput"
                        placeholder=""
                        autoComplete="off"
                        minLength="3"
                        required
                        onChange={(ev) => setInput(ev.target.value)}
                        value={input || ""}
                      />
                    </div>
                    <div className="button-wrapper mt-4 mt-sm-0">
                      <Button submit label="Cerca" {...searchButton} />
                    </div>
                  </div>
                  {(results.length > 0 || formSubmitted) && (
                    <div id="results">
                      <div className="it-list-wrapper">
                        <div className="fw-normal text-muted">
                          <div
                            className="live-region"
                            tabIndex="-1"
                            ref={liveRegionRef}
                          >
                            {formSubmitted && results.length > 0 && (
                              <div className="mt-2 px-sm-2 px-md-4 pt-4">
                                <p>
                                  Di seguito i migliori risultati per &ldquo;
                                  <strong>
                                    <mark>{storedInput}</mark>
                                  </strong>
                                  &rdquo;:
                                </p>
                              </div>
                            )}
                            {formSubmitted && results.length === 0 && (
                              <div className="mt-2 px-sm-2 px-md-4 pt-4">
                                <p>
                                  Non ci sono risultati utili per &ldquo;
                                  <strong>
                                    <mark>{storedInput}</mark>
                                  </strong>
                                  &rdquo;, possiamo aiutarti in altro modo?
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        <ul className="it-list mt-4 mt-md-3">
                          {results.map((result) => (
                            <ListItem
                              url={result.relativePath}
                              key={result.id}
                              iconLeft
                              icon={iconOpt}
                              addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4"
                            >
                              <div className="d-md-flex">
                                <h3 className="h6 mb-0">
                                  <strong>{result.title}</strong>
                                </h3>
                                <div>
                                  {result.tag !== "undefined" ? (
                                    <div className="mb-2 mt-1 mb-md-0 mt-md-0">
                                      <Tag
                                        label={result.tag}
                                        addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal"
                                      />
                                    </div>
                                  ) : null}
                                  {result.template === "level1" ||
                                  result.template === "community" ? (
                                    <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block ">
                                      <Tag
                                        label="Panoramica"
                                        addonClasses="ms-md-4 text-uppercase bg-primary px-2 py-0 fw-normal"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <p className="text-secondary fw-normal d-block mb-3 listTextSmall">
                                {result.description !== null ? (
                                  <span>{result.description}</span>
                                ) : null}
                              </p>
                            </ListItem>
                          ))}
                        </ul>
                        {results.length === maxResults && (
                          <div className="mt-4 ps-4 pt-4 d-block border-top">
                            <strong>
                              <Link
                                to="/ricerca/"
                                state={{ searchTerm: input }}
                              >
                                Scopri più risultati
                              </Link>
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchMain;
