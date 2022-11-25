import React, { useState, useEffect, useRef } from "react"
import ImageResponsive from "../../../image-responsive/image-responsive"

import Button from "../../../button/button"

import './form-no.scss'

const BTN_BK = {
  label: "Indietro",
  btnStyle: "outline-primary",
  type: "button",
  addonStyle: "me-3"
}

const BTN_FW = {
  label: "Avanti",
  btnStyle: "primary",
  type: "button",
}

const BTN_SUBSCRIBE = {
  label: "Iscriviti",
  btnStyle: "primary",
  type: "button",
  addonStyle: "text-uppercase"
}

const SELECTOR_STEP = '.step'

const CLASS_SHOW = 'show'

const FormNo = ({

}) => {

  const rootRef = useRef(null);

  const [steps, setSteps] = useState([]);
  const [stepIdx, setStepIdx] = useState(0);

  const showStep = () => {
    steps.forEach((step, idx) => idx === stepIdx ? step.classList.add(CLASS_SHOW) : step.classList.remove(CLASS_SHOW))
  }

  const changeStep = (incr) => {
    const result = stepIdx + incr
    if (result < 0) {
      setStepIdx(0)
    } else if (result >= steps.length) {
      setStepIdx(steps.length -1)
    } else {
      setStepIdx(result)
    }
  }

  useEffect(() => {
    if (rootRef.current) {
      setSteps(rootRef.current.querySelectorAll(SELECTOR_STEP))
    }
  }, [rootRef]);

  useEffect(() => {
    showStep()
  }, [steps, stepIdx])

  return <div ref={rootRef}>
    <form action="#">

      {/* ----------- feedback step 1 ----------- */}
      <div className="step feedback-formno-step">
        <h2 className="mb-3" id="feedbackNoTitle">Grazie per la tua risposta! Aiutaci a migliorare.</h2>
        <fieldset>
          <legend className="d-flex mb-3 px-0 w-100"><span className="w-75">Sei:</span><span className="w-25 text-end">1/3</span></legend>
          <div className="form-check pb-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt1" value="progettista" />
            <label htmlFor="optsStep1Opt1">progettista</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt2" value="sviluppatore" />
            <label htmlFor="optsStep1Opt2">sviluppatore</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt3" value="funzionario della Pubblica Amministrazione" />
            <label htmlFor="optsStep1Opt3">funzionario della Pubblica Amministrazione</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt4" value="fornitore" />
            <label htmlFor="optsStep1Opt4">fornitore</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt5" value="esperto di temi legali" />
            <label htmlFor="optsStep1Opt5">esperto di temi legali</label>
          </div>
          <div className="form-check pt-2 pb-5">
            <input name="optsStep1" type="radio" id="optsStep1Opt6" value="altro" />
            <label htmlFor="optsStep1Opt6">altro</label>
          </div>
        </fieldset>
      </div>

      {/* ----------- feedback step 2 ----------- */}
      <div className="step feedback-formno-step">
        <h2 className="mb-3">Ancora una curiosità</h2>
        <fieldset>
          <legend className="d-flex mb-3 px-0 w-100"><span className="w-75">Hai trovato questa pagina grazie a:</span><span className="w-25 text-end">2/3</span></legend>
          <div className="form-check pb-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt1" value="motore di ricerca" />
            <label htmlFor="optsStep2Opt1">motore di ricerca</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt2" value="altro sito web" />
            <label htmlFor="optsStep2Opt2">altro sito web</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt3" value="funzione “Cerca” del sito" />
            <label htmlFor="optsStep2Opt3">funzione “Cerca” del sito</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt4" value="navigazione del sito" />
            <label htmlFor="optsStep2Opt4">navigazione del sito</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt5" value="messaggio social" />
            <label htmlFor="optsStep2Opt5">messaggio social</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt6" value="posta elettronica" />
            <label htmlFor="optsStep2Opt6">posta elettronica</label>
          </div>
          <div className="form-check pt-2 pb-5">
            <input name="optsStep2" type="radio" id="optsStep2Opt7" value="altro" />
            <label htmlFor="optsStep2Opt7">altro</label>
          </div>
        </fieldset>

      </div>

      {/* ----------- feedback step 3 ----------- */}
      <div className="step feedback-formno-step">
        <h2 className="mb-4">Il tuo parere è importante per noi, se hai ancora tempo</h2>
        <fieldset>
          <legend className="d-flex mb-5 px-0 w-100"><span className="w-75">Come possiamo migliorare questa pagina?</span><span className="w-25 text-end">3/3</span></legend>
          <div className="form-group">
            <label htmlFor="feedbackText" className="custom-label">Risposta</label>
            <input type="text" className="form-control" id="feedbackText" name="feedbackText" />
            <small className="form-control form-text">Hai a disposizione 200 caratteri</small>
          </div>
        </fieldset>
      </div>

      { stepIdx > 0 && stepIdx < steps.length -1 && <Button {...BTN_BK} onClick={() => changeStep(-1)} /> }
      { stepIdx < steps.length -1 && <Button {...BTN_FW} onClick={() => changeStep(1)} /> }
    </form>

    {/* ----------- feedback step 4 ----------- */}
    <div className="step feedback-formno-step">
      <ImageResponsive src="/images/kit-analitics.svg" alt="" />
      <h2 className="mb-3 h4">Grazie davvero, il tuo contributo ci aiuterà a migliorare il progetto Designers Italia!</h2>
      <div className="lead mb-3">Se vuoi lasciaci la tua email e ti terremo aggiornato sulle prossime iniziative di Designers Italia e Developers Italia.</div>
      <div className="p mb-5"><a href="#">Leggi l’informativa sulla privacy</a></div>
      <form action="#">
        <div className="d-md-flex align-items-start">
          <div className="form-group w-75 me-5">
            <label htmlFor="feedbackMailNo" className="custom-label">Email</label>
            <input type="text" className="form-control" id="feedbackMailNo" name="feedbackMail" />
          </div>
          <Button {...BTN_SUBSCRIBE} />
        </div>
      </form>
    </div>

  </div>
}

export default FormNo
