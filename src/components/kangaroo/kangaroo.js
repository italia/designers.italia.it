import * as React from "react"
import "./kangaroo.scss"
import Icon from "../icon/icon"
import Chip from "../chip/chip"
import Dropdown from "../dropdown/dropdown"
import NavPosition from "../nav-position/nav-position"

function Kangaroo({
  id,
  titleSr,
  tagsLabel,
  tagsDesignSystemLabel,
  icon,
  chips,
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

  const styles = "kangaroo px-3"
    + `${noPadding ? ' ' : ' px-lg-5'}`

  const colorStyle = `${color ? ` text-${color}` : ''}`

  const tagsLabelStyle = `text-uppercase small ${colorStyle}`

  return (
    <section className={styles} aria-labelledby={id}>
      {titleSr && <h2 className="visually-hidden" id={id}>{titleSr}</h2>}
      <div className="kangaroo-wrapper py-4 d-lg-flex justify-content-between align-items-top">
        {dropdown &&
          <div className="left-zone col-12 col-lg-4 d-flex pt-3 pb-4">
            <div className="dropdwon-zone mt-4 mt-lg-0">
              <Dropdown {...dropdown} />
            </div>
          </div>
        }
        <div className="right-zone">
          {navposition &&
            <div className="navposition-wrapper">
              <NavPosition {...navposition} />
            </div>
          }
          {personalInfo &&
            <div className="personal-info-wrapper">
              <NavPosition {...personalInfo} />
            </div>
          }
          {eventInfo &&
            <div className="event-info-wrapper">
              <NavPosition {...eventInfo} />
            </div>
          }
          {otherInfo &&
            <div className="other-info-wrapper">
              <NavPosition {...otherInfo} />
            </div>
          }
          {(tagsLabel && tags) && (tags.length > 0) &&
            <div className="pills-wrapper d-md-flex align-items-start pt-3 pt-md-2">
              <div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0">
                <Icon {...icon} addonClasses="me-3" />
                <span className={tagsLabelStyle}><strong>{tagsLabel}</strong></span>
              </div>
              <div className="chips ms-md-3 mb-2 mb-lg-0">
                {tags.map((tag, index) => (
                  <Chip key={`chip-${index}`} label={tag} size="lg" color="primary" />
                ))}
              </div>
            </div>
          }
          {(tagsDesignSystemLabel && tagsDesignSystem) && (tagsDesignSystem.length > 0) &&
            <div className="pills-wrapper d-md-flex align-items-start">
              <div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0">
                <Icon {...icon} addonClasses="me-3" />
                <span className={tagsLabelStyle}><strong>{tagsDesignSystemLabel}</strong></span>
              </div>
              <div className="chips ms-md-3 mb-2 mb-lg-0">
                {tagsDesignSystem.map((tag, index) => (
                  <Chip key={`chip-${index}`} label={tag} size="lg" color="primary" path="design-system/componenti/utili-per" />
                ))}
              </div>
            </div>
          }

        </div>
      </div>
    </section>
  )
}

export default Kangaroo
