import * as React from "react"
import ReactMarkdown from "react-markdown"
import "./title-text.scss"

const TitleText = ({
  id,
  title,
  background,
  headingLevel,
  text
}) => {

  let styles = 'title-text py-5 '
	+ `${background ? ' bg-'+background : ''}`

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

  return (
    <div className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className='col col-md-10 offset-md-1 col-lg-7'>
              <div className="px-3 px-lg-0">
                {title && <HLevel className={text ? "mb-4" : "mb-0"} id={id}>{title}</HLevel>}
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleText
