import React from "react";
import Card from "../card/card";
import Button from "../button/button";
import LabelInput from "../labelinput/labelinput";


import "./filter-cards.scss"

const FilterCards = ({
  id,
  background,
  title,
  headingLevel,
  idInput,
  button,
  cards,
  col2,
  noSpace
}) => {

  let styles = 'filter-cards px-3 p-md-0'
	+ `${background ? ' bg-'+background : ''}`
  + `${noSpace ? '' : ' py-5 py-lg-6'}`
  + `${col2 ? ' two-columns' : ''}`

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
        <div className={cardStyles} key={"cardcol-"+index}>
          <Card {...item} />
        </div>
      )
    })
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div  className="col-12 mb-5">
            {title && <HLevel id={id}>{title}</HLevel>}
          </div>

        {idInput &&  <div className="col-12 mb-3">
            <form className="" action="#">
              <div className="row">
                <div className="col-7 col-md-9 col-lg-10">
                  <LabelInput 
                    id={idInput} 
                    label='Filtra' // xxx move to data yaml this string
                    onChange={(e) => console.log(e.value)}
                    // value="Esempio di ricerca"
                    >
                  </LabelInput>
                </div>
                <div className="col-5 col-md-3 col-lg-2">
                  <Button {...button}/>
                </div>
              </div>
            </form>
          </div>
          }

        </div>
        <div className="row cards-wrapper">
          {cardsItems}
        </div>
      </div>


    </section>
  )
}


export default FilterCards
