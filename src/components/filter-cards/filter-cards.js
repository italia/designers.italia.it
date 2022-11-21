import React from "react";
import Card from "../card/card";

import "./filter-cards.scss"

const FilterCards = ({
  id,
  background,
  title,
  headingLevel,
  text,
  cards,
  col2,
  nospace
}) => {

  let styles = 'filter-cards px-3 p-md-0'
	+ `${background ? ' bg-'+background : ''}`
  + `${nospace ? '' : ' py-5 py-lg-6'}`

  let cardStyles = 'col-12 col-md-6 mb-3 mb-md-4'
	+ `${col2 ? '' : ' col-lg-4'}`

  let cardsItems

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
        <div className={cardStyles}>
          <Card {...item} key={"card-"+index}/>
        </div>
      )
    })
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          {title && <HLevel id={id} className="mb-5">{title}</HLevel>}
          <form className="">

          </form>
        </div>
        <div className="row cards-wrapper">
          {cardsItems}
        </div>
      </div>


    </section>
  )
}


export default FilterCards
