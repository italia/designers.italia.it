import React from "react"
import Card from "../card/card"
import Button from "../button/button"
import ReactMarkdown from "react-markdown"
import "./highlight-cards.scss"

const HighlightCards = ({
  id,
  background,
  title,
  headingLevel,
  text,
  cards,
  buttons
}) => {

  let styles = 'highlight-cards py-5 py-lg-6'
	+ `${background ? ' bg-'+background : ''}`

  let cardsItems
  let buttonsItems

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

  if (cards) {
    cardsItems = cards.map((item,index) => {
      //item.icon.addonClasses = "flex-shrink-0"
      return(
        <div className="col col-md-6 col-lg-4">
          <Card {...item} key={"card-"+index}/>
        </div>
      )
    })
  }

  if (buttons) {
    buttonsItems = buttons.map((item,index) => {
      //item.icon.addonClasses = "flex-shrink-0"
      return(
        <Button {...item} key={"button-"+index}/>
      )
    })
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row mb-4 mb-md-5 intro">
          <div className='col col-md-10 offset-md-1'>
              <div className="px-3 px-lg-0">
                {title ? <HLevel id={id} className="mb-2">{title}</HLevel> : null}
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
          </div>
        </div>
        {cardsItems ?
          <div className="row g-3 mb-4 mb-md-5">
            {cardsItems}
          </div> : null
        }
        {buttonsItems ?
          <div className="row buttons">
            <div className='col col-md-10 offset-md-1 justify-content-center d-md-flex'>
              {buttonsItems}
            </div>
          </div> : null
        }
      </div>
    </section>
  )
}

export default HighlightCards
