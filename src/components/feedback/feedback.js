import React, { useState } from "react"
import Button from "../button/button"
import "./feedback.scss"
import Icon from "../icon/icon"

import FormYes from "./components/form-yes/FormYes"
import FormNo from "./components/form-no/FormNo"

const BTN_INTRO = {
  label: "Conferma",
  btnStyle: "primary",
  type: "button",
  //addonStyle: "d-none"
}

const ICON_CLOSE = {
  icon: "sprites.svg#it-close",
  color: "primary",
  size: "lg",
}

const Feedback = ({

}) => {

  const [isChecked, setIsChecked] = useState(false)
  const [choiceVal, setChoiceVal] = useState(0)

  const onChange = (evt) => {
    if (evt.currentTarget.checked) {
      setIsChecked(true)
      setChoiceVal(evt.currentTarget.value)
    }
  }

  return (
    <section className="feedback bg-medium py-5 px-3 px-lg-0" aria-labelledby="feedbackSectionTitle">
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div>
                <div className="card-body p-5">
                  <div className="step" id="feedbackIntro">
                    <h2 className="mb-3 mb-mb-4" id="feedbackSectionTitle">Ciao, questa pagina è stata utile?</h2>

                    <form>
                      <fieldset className="d-flex">
                        <div className="form-check me-5">
                          <input name="feedbackValue" type="radio" id="feedbackValueYes" value="1" onChange={onChange} />
                          <label htmlFor="feedbackValueYes">Si</label>
                        </div>
                        <div className="form-check">
                          <input name="feedbackValue" type="radio" id="feedbackValueNo" value="0" onChange={onChange} />
                          <label htmlFor="feedbackValueNo">No</label>
                        </div>
                      </fieldset>
                      {isChecked && <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={parseInt(choiceVal) === 1 ? '#feedbackYes' : '#feedbackNo'}>{BTN_INTRO.label}</button>}
                    </form>
                    {/* demo buttons }
                    <p className="mt-4">Demo buttons (TEMP)</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#feedbackYes">Modale sì</button>
                    <button type="button" className="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#feedbackNo">Modale no</button>
                    {/* demo buttons */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" role="dialog" id="feedbackYes" aria-labelledby="feedbackYesTitle">
        <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-close flex-shrink-0" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
                <Icon {...ICON_CLOSE} />
              </button>
            </div>
            <div className="modal-body pt-0 pb-4 pb-md-0 px-md-4">
              <FormYes />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" role="dialog" id="feedbackNo" aria-labelledby="feedbackNoTitle">
        <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <button className="btn-close flex-shrink-0" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
                <Icon {...ICON_CLOSE} />
              </button>
            </div>
            <div className="modal-body pt-0 pb-4 pb-md-5 px-md-4">
              <FormNo />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Feedback
