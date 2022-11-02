import * as React from "react"
import './section-editorial.scss'
import ReactMarkdown from "react-markdown"
import TextImageCta from "../text-image-cta/text-image-cta"
import Highlight from "../highlight/highlight"
import Card from "../card/card"
import Kangaroo from "../kangaroo/kangaroo"

const SectionEditorial = ({
  title,
  headingLevel,
  text,
  full,
  centered,
  bgColor,
  components,
}) => {

  const SwitchComponents = {
    Highlight,
    Card,
    Kangaroo,
    TextImageCta
  };

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

  return(
    <section className="section-editorial">
        <div className="container-xxl">
          <div className="row">
            <div className="col-10 offset-1 col-lg-7 offset-lg-1">
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
    </section>
  )
}

export default SectionEditorial
