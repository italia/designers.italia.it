import * as React from "react"
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

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className='col col-md-10 offset-md-1 col-lg-7'>
              <div className="px-3 px-lg-0">
                {title && <HLevel id={id} className="mb-4">{title}</HLevel>}
                <ReactMarkdown>{text}</ReactMarkdown>

                {moreButton &&
                  <a href="#" role="button" className="read-more mt-3 mb-4 d-inline-flex align-items-center text-decoration-none" data-bs-toggle="collapse" data-bs-target={'#'+id+'ReadMore'} aria-expanded="false" aria-controls={id+'ReadMore'}>
                    <span>Leggi di più</span>
                    <Icon {...icon}/>
                  </a>
                }
                {moreText &&
                  <div className="collapse" id={id+'ReadMore'}>
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
