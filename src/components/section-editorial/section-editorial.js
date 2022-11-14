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

const SectionEditorial = ({
  title,
  headingLevel,
  text,
  full,
  centered,
  bgColor,
  components,
  menu,
  noSpace
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
  };

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

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

  let styles = "section-editorial"
  + `${bgColor=="light" ? ' bg-light' : ''}`
  + `${bgColor=="primary-light" ? ' bg-primary-light' : ''}`
  + `${noSpace ? ' py-0' : ''}`

  return(
    <section className={styles}>
        <div className="container-xxl">
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
                {title && <HLevel className={text ? "mb-1" : "mb-0"}>{title}</HLevel>}
                {text &&
                  <div className="text-container mb-5">
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                }
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
