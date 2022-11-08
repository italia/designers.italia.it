import React, { useRef, useEffect } from "react"
import { Collapse } from "bootstrap-italia/dist/bootstrap-italia.esm"
import ReactMarkdown from "react-markdown"
import "./section-intro.scss"
import Icon from "../icon/icon"

const SectionIntro = ({
  id,
  background,
  title,
  headingLevel,
  text,
  moreButton,
  moreText,
}) => {

  let styles = 'section-intro py-5 '
	+ `${background ? ' bg-'+background : ''}`

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

  let icon = ({
    icon: "sprites.svg#it-arrow-down",
    size: "sm",
    align : "middle",
    color :"primary",
    hidden: true,
    addonClasses: "ms-2"
  })

  const collRef = useRef(null)
  const collObjRef = useRef(null)

  const collapseToggle = (evt) => {
    console.log('----');
    evt.preventDefault()
    if (collObjRef.current) {
      collObjRef.current.toggle()
      toggleAria(evt.currentTarget)
    }
  }

  const toggleAria = (element) => {
    const ariaAttr = element.getAttribute('aria-expanded')
    let newVal = 'true'
    if (ariaAttr === 'true') {
      newVal = 'false'
    }
    element.setAttribute('aria-expanded', newVal)
  }

  useEffect(() => {
    collObjRef.current = new Collapse(collRef.current, { toggle: false })
  })

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className='col col-md-10 offset-md-1 col-lg-7'>
              <div className="px-3 px-lg-0">
                {title && <HLevel id={id} className="mb-4">{title}</HLevel>}
                <ReactMarkdown>{text}</ReactMarkdown>

                {moreButton &&
                  <a href="#" role="button" onClick={collapseToggle} className="read-more mt-3 mb-4 d-inline-flex align-items-center text-decoration-none" /*data-bs-toggle="collapse" data-bs-target={'#'+id+'ReadMore'}*/ aria-expanded="false" aria-controls={id+'ReadMore'}>
                    <span>Leggi di più</span>
                    <Icon {...icon}/>
                  </a>
                }
                {moreText &&
                  <div ref={collRef} className="collapse" id={id+'ReadMore'}>
                    <ReactMarkdown>{moreText}</ReactMarkdown>
                  </div>
                }
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionIntro
