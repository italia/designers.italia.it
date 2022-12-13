import React, { useState, useRef, useEffect } from "react"
import { Modal } from "bootstrap-italia/dist/bootstrap-italia.esm"
//import Button from "../button/button"
import "./feedback.scss"
import Icon from "../icon/icon"

import FormNo from "./components/form-no/FormNo"

const BTN_INTRO = {
  label: "Invia",
  btnStyle: "primary",
  type: "button",
}

const ICON_CLOSE = {
  icon: "sprites.svg#it-close",
  color: "primary",
  size: "lg",
}

const ICON_CONFIRM = {
  icon: "sprites.svg#it-check-circle",
  color: "primary",
  size: "lg",
  align : "middle",
  addonClasses: "me-2"
}

const CLASS_SLIDE_ANIMEND = 'slidedown-animend'

const Feedback = ({

}) => {

  const [isChecked, setIsChecked] = useState(false)
  const [choiceVal, setChoiceVal] = useState(0)
  const [slideHeight, setSlideHeight] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)

  const sliderWrapperRef = useRef(null)
  const sliderRef = useRef(null)
  const modalYes = useRef(null)
  const modalNo = useRef(null)

  const onChange = (evt) => {
    if (evt.currentTarget.checked) {
      setIsChecked(true)
      setChoiceVal(evt.currentTarget.value)
    }
  }

  const animEnd = () => {
    if (!sliderWrapperRef.current.classList.contains(CLASS_SLIDE_ANIMEND)) {
      sliderWrapperRef.current.classList.add(CLASS_SLIDE_ANIMEND)
    }
  }

  const submit = () => {
    setIsSubmit(true)
  }

  const openModal = () => {
    if (parseInt(choiceVal) === 0) {
      new Modal(modalNo.current).show()
    }
  }

  useEffect(() => {
    if (sliderRef.current) {
      setSlideHeight(sliderRef.current.offsetHeight)
    }
  }, [isChecked])

  useEffect(() => {
    if (sliderWrapperRef.current) {
      sliderWrapperRef.current.addEventListener('transitionend', animEnd)
    }
    return () => {
      if (sliderWrapperRef.current) {
        sliderWrapperRef.current.removeEventListener('transitionend ', animEnd)
      }
    }
  }, [sliderWrapperRef])

  return (
    <section className="feedback bg-medium py-5 px-3 px-lg-0" aria-labelledby="feedbackSectionTitle" id="feedbackSection">
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div>
                <div className="card-body p-4 p-md-5">
                  <div className="step" id="feedbackIntro">
                    <h2 className="mb-0 h5 fw-semibold" id="feedbackSectionTitle">
                      {!isSubmit && <span className="feedback-title">Ciao, questa pagina è stata utile?</span>}
                      {isSubmit && <span className="feedback-confirm d-flex align-items-center"><Icon {...ICON_CONFIRM} /> Feedback inviato. Grazie.</span>}
                    </h2>
                    {!isSubmit && <form className="mt-3 mt-md-3">
                      <fieldset className="d-flex">
                        <div className="form-check me-4">
                          <input name="feedbackValue" type="radio" id="feedbackValueYes" value="1" onChange={onChange} />
                          <label className="mb-0" htmlFor="feedbackValueYes">Si</label>
                        </div>
                        <div className="form-check">
                          <input name="feedbackValue" type="radio" id="feedbackValueNo" value="0" onChange={onChange} />
                          <label className="mb-0" htmlFor="feedbackValueNo">No</label>
                        </div>
                      </fieldset>

                      <div ref={sliderWrapperRef} className="slidedown" style={{height: slideHeight + 'px'}}>
                        <div ref={sliderRef}>
                          <button type="button" className="btn btn-primary mt-4" disabled={!isChecked} onClick={() => { openModal(); submit(); }}>{BTN_INTRO.label}</button>
                        </div>
                      </div>
                    </form>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={modalNo} className="modal fade" tabIndex="-1" role="dialog" id="feedbackNo" aria-labelledby="feedbackNoTitle">
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
