import React from "react"
import Card from "../card/card"
import Button from "../button/button"
import Topics from "../topics/topics"
import ReactMarkdown from "react-markdown"
import "./highlight-cards.scss"

const HighlightCards = ({
  id,
  background,
  title,
  headingLevel,
  text,
  cards,
  col4,
  buttons,
  topics,
  nospace
}) => {

  let styles = 'highlight-cards'
	+ `${background ? ' bg-'+background : ''}`
  + `${nospace ? '' : '  py-5 py-lg-6'}`

  let cardStyles = 'col-12 col-md-6 mb-3 mb-md-4'
	+ `${col4 ? ' col-lg-3' : ' col-lg-4'}`

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
      return(
        <div className={cardStyles} key={"cardcol-"+index}>
          <Card {...item} />
        </div>
      )
    })
  }

  if (buttons) {
    buttonsItems = buttons.map((item,index) => {
      return(
        <Button {...item} key={"button-"+index}/>
      )
    })
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        {
          title && <div className="row mb-4 mb-md-5 intro">
            <div className='col col-md-10 offset-md-1'>
                <div className="px-3 px-lg-0">
                  {title && <HLevel id={id} className="mb-2">{title}</HLevel>}
                  <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
          </div>
        }
        {cardsItems &&
          <div className="row pb-4">
            {cardsItems}
          </div>
        }
        {topics &&
          <Topics {...topics}/>
        }
        {buttonsItems &&
          <div className="row buttons">
            <div className='col col-md-10 offset-md-1 justify-content-center d-md-flex'>
              {buttonsItems}
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default HighlightCards
