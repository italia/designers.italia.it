import * as React from "react"
import './section-editorial.scss'
import ReactMarkdown from "react-markdown"
import TextImageCta from "../text-image-cta/text-image-cta"
import Numbers from "../numbers/numbers"
import TitleText from "../title-text/title-text"
import ImgFull from "../img-full/img-full"
import Highlight from "../highlight/highlight"
import Card from "../card/card"
import Kangaroo from "../kangaroo/kangaroo"
import ImageIcons from "../image-icons/image-icons"
import Table from "../table/table"
import Button from "../button/button"

const SectionEditorial = ({
  title,
  headingLevel,
  text,
  buttons,
  full,
  centered,
  fullColumn,
  background,
  components,
  menu,
  noSpace,
  id
}) => {

  const SwitchComponents = {
    Highlight,
    Card,
    Kangaroo,
    TextImageCta,
    Numbers,
    TitleText,
    ImgFull,
    ImageIcons,
    Table,
  };

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

  let container=""
  + `${fullColumn ? 'fullcolumn-editorial' : ' container-xxl'}`

  let row="row"
  + `${menu ? ' flex-lg-row-reverse' : ''}`

  let grid
  if(full) {
    grid="col-12"
  }else{
    grid="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-1"
    + `${centered ? ' m-auto' : ''}`
  }
  if(full && menu){
    grid="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-0"
  }
  if(fullColumn) {
    grid=""
    row=""
  }

  let styles = 'section-editorial'
	+ `${background ? ' bg-'+background : ''}`
  + `${noSpace ? ' py-0' : ''}`
  + `${background==="dark" ? ' text-white' : ''}`

  //buttons
	let ButtonsRender
	if (buttons) {
		ButtonsRender = buttons.map((btn,index) => {
			return(
			   <Button key={"button-"+index} {...btn}/>
			)
		})
	}

  //xxx a11y downgrade if title is not set, quick fix to review asap
  if (!title) {
    id = undefined
  }

  return(
    <section className={styles} aria-describedby={id}>
        <div className={container}>
          <div className={row}>
          {menu &&
              <div className="d-none d-lg-block col-lg-3 offset-lg-1 affix-parent">
                <div className="sidebar-wrapper my-lg-0 affix-top">
                  <div className="sidebar-linklist-wrapper">
                    <div className="link-list-wrapper">
                      <ul className="link-list">
                        <li><a className="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
                        </li>
                        <li><a className="list-item medium" href="#"><span>Link lista 3</span></a>
                        </li>
                        <li><a className="list-item medium" href="#"><span>Link lista 4</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            }
            <div className={grid}>
              <div className="px-3 p-md-0">
                {title && <HLevel className={text ? "mb-1" : "mb-0"} id={id}>{title}</HLevel>}
                {text &&
                  <div className="text-container mb-5">
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                }
								{ButtonsRender && <div className="buttons-wrapper mt-5">{ButtonsRender}</div>}
                {components &&
                  components.map((item,index) => {
                    const Switcher = SwitchComponents[item.name]
                    return(
                      <Switcher key={"switcher-"+index} {...item}/>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SectionEditorial
