import * as React from "react"
import ReactMarkdown from "react-markdown"
import "./editorial-content.scss"
import Icon from "../icon/icon"

const EditorialContent = ({
  fullWidth,
  section,
  id,
  background,
  title,
  headingLevel,
  text,
  moreButton,
  moreText,
  paddingTop,
  paddingBottom
}) => {

  let CustomTag

  section ? CustomTag = 'section' : CustomTag = "div"

  let styles = 'editorial-content'
	+ `${background ? ' bg-'+background : ''}`
  + `${paddingTop ? ' pt-'+paddingTop : ''}`
  + `${paddingBottom ? ' pb-'+paddingBottom : ''}`

  let columnStyles = 'col'
	+ `${fullWidth ? '' : ' col-md-10 offset-md-1 col-lg-7'}`

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
    <CustomTag className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className={columnStyles}>
              <div className="px-3 px-md-0">
                {title ? <HLevel id={id} className="mb-4">{title}</HLevel> : null}
                <ReactMarkdown>{text}</ReactMarkdown>

                {moreButton ? <a href="#" role="button" class="read-more mt-3 mb-4 d-inline-flex align-items-center fw-bold text-decoration-none" data-bs-toggle="collapse" data-bs-target={'#'+id+'ReadMore'} aria-expanded="false" aria-controls={id+'ReadMore'}>
                  <span>Leggi di più</span>
                  <Icon {...icon}/>
                </a> : null}
                {moreText ? <div class="collapse" id={id+'ReadMore'}>
                  <ReactMarkdown>{moreText}</ReactMarkdown>
                </div> : null}
              </div>
          </div>
        </div>
      </div>
    </CustomTag>
  )
}

export default EditorialContent
