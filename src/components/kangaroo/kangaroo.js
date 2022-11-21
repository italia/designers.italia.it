import * as React from "react"
import "./kangaroo.scss"
import Icon from "../icon/icon"
import Chip from "../chip/chip"
import Dropdown from "../dropdown/dropdown"
import NavPosition from "../nav-position/nav-position"

const Kangaroo = ({
  id,
  titleSr,
  tagsLabel,
  icon,
  chips,
  dropdown,
  color,
  navposition,
  personalInfo,
  otherInfo,
}) =>{

	let colorStyle = `${color ? ' text-'+color : ''}`

  let tagsLabelStyle="text-uppercase small "+colorStyle

	return(
		<section className="kangaroo px-3 px-lg-0" aria-labelledby={id}>
      { titleSr && <h2 className="visually-hidden" id={id}>{titleSr}</h2>}
			<div className="kangaroo-wrapper py-4 d-lg-flex justify-content-between align-items-top">
        <div className="left-zone">
          {navposition &&
            <div className="navposition-wrapper">
              <NavPosition {...navposition}></NavPosition>
            </div>
          }
          {personalInfo &&
            <div className="personal-info-wrapper">
              <NavPosition {...personalInfo}></NavPosition>
            </div>
          }
          {otherInfo &&
            <div className="other-info-wrapper">
              <NavPosition {...otherInfo}></NavPosition>
            </div>
          }
          <div className="pills-wrapper d-md-flex align-items-start">
            {tagsLabel &&
              <div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase flex-shrink-0">
                <Icon {...icon} addonClasses="me-2"></Icon>
                <span className={tagsLabelStyle}><strong>{tagsLabel}</strong></span>
              </div>
            }
            {
              chips &&
              <div className="chips  ms-md-3 mb-2 mb-lg-0">
                {chips.map((chip,index)=>{
                  return(
                    <Chip key={'chip-' + index} {...chip}></Chip>
                  )
                })}
              </div>
            }
          </div>

        </div>
        <div className="right-zone">
          {dropdown &&
            <div className="dropdwon-zone mt-4 mt-lg-0">
              <Dropdown {...dropdown}></Dropdown>
            </div>
          }
        </div>
			</div>
		</section>
	)
}

export default Kangaroo
