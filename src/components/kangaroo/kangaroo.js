import classNames from "classnames";
import * as React from "react";
import "./kangaroo.scss";
import Icon from "../icon/icon";
import Chip from "../chip/chip";
import Dropdown from "../dropdown/dropdown";
import NavPosition from "../nav-position/nav-position";
import MetaCollapse from "../meta-collapse/meta-collapse";

function Kangaroo({
  id,
  titleSr,
  tagsLabel,
  tagsDesignSystemLabel,
  icon,
  tags,
  tagsDesignSystem,
  dropdown,
  color,
  navposition,
  personalInfo,
  otherInfo,
  noPadding,
  eventInfo,
}) {
  const styles = classNames("kangaroo px-3", { "px-lg-5": !noPadding });
  const colorStyle = classNames({ [`text-${color}`]: color });
  const tagsLabelStyle = classNames(
    "text-uppercase tag-small-size",
    colorStyle,
  );

  return (
    <section className={styles} aria-labelledby={id}>
      {titleSr && (
        <h2 className="visually-hidden" id={id}>
          {titleSr}
        </h2>
      )}
      <div className="kangaroo-wrapper row py-4 d-lg-flex justify-content-between align-items-center">
        {dropdown && (
          <div className="left-zone d-flex col-12 col-lg-4 mb-4 mb-lg-0">
            <div className="dropdown-zone mt-4 mt-lg-0">
              <Dropdown {...dropdown} />
            </div>
          </div>
        )}
        <div className="right-zone d-flex flex-column col-12 col-lg-8">
          {navposition && (
            <div className="navposition-wrapper">
              <NavPosition {...navposition} />
            </div>
          )}
          {personalInfo && (
            <div className="personal-info-wrapper">
              <NavPosition {...personalInfo} />
            </div>
          )}
          {eventInfo && (
            <div className="event-info-wrapper">
              <NavPosition {...eventInfo} />
            </div>
          )}
          {personalInfo || eventInfo || (otherInfo && tagsLabel) ? (
            <div>
              <MetaCollapse label="Più informazioni" labelClose="Chiudi">
                {otherInfo && (
                  <div className="other-info-wrapper">
                    <NavPosition {...otherInfo} />
                  </div>
                )}
                {tagsLabel && tags && tags.length > 0 && (
                  <div className="pills-wrapper d-md-flex align-items-start pt-3 pt-md-2">
                    <div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0">
                      <Icon {...icon} addonClasses="me-3" />
                      <span className={tagsLabelStyle}>
                        <strong>{tagsLabel}</strong>
                      </span>
                    </div>
                    <div className="chips ms-md-3 mb-2 mb-lg-0">
                      {tags.map((tag, index) => (
                        <Chip
                          key={`chip-${index}`}
                          label={tag}
                          size="lg"
                          color="primary"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </MetaCollapse>
            </div>
          )}
          {tagsLabel && tags && tags.length > 0 && (
            <div className="pills-wrapper d-md-flex align-items-start pt-3 pt-md-2">
              <div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0">
                <Icon {...icon} addonClasses="me-3" />
                <span className={tagsLabelStyle}>
                  <strong>{tagsLabel}</strong>
                </span>
              </div>
              <div className="chips ms-md-3 mb-2 mb-lg-0">
                <div className="chips-list-wrapper">
                  <ul
                    className="chips-list chips d-flex flex-wrap mb-0"
                    aria-label="Argomenti correlati:"
                  >
                    {tags.map((t, index) => (
                      <li className="list-item" key={`list-chip-${index}`}>
                        <Chip
                          key={`chip-${index}`}
                          label={t}
                          size="lg"
                          color="primary"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {tagsDesignSystemLabel &&
            tagsDesignSystem &&
            tagsDesignSystem.length > 0 && (
              <div className="pills-wrapper d-md-flex align-items-start">
                <div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0">
                  <Icon {...icon} addonClasses="me-3" />
                  <span className={tagsLabelStyle}>
                    <strong>{tagsDesignSystemLabel}</strong>
                  </span>
                </div>
                <div className="chips ms-md-3 mb-2 mb-lg-0">
                  <div className="chips-list-wrapper">
                    <ul
                      className="chips-list chips d-flex flex-wrap mb-0"
                      aria-label="Argomenti correlati:"
                    >
                      {tagsDesignSystem.map((t, index) => (
                        <li className="list-item" key={`list-chip-${index}`}>
                          <Chip
                            key={`chip-${index}`}
                            label={t}
                            size="lg"
                            color="primary"
                            path="design-system/componenti/utili-per"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

export default Kangaroo;
