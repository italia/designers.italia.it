import React, { useState, useEffect, useRef } from "react"
import ImageResponsive from "../../../image-responsive/image-responsive"
import Link from "../../../link/link"

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

const BTN_SEND = {
  label: "Invia",
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

  return <div ref={rootRef}>
    <form action="#">

        <ImageResponsive src="/images/kit-analitics.svg" alt="" />
        <h2 className="mb-3" id="feedbackNoTitle">Grazie per la tua risposta!</h2>

        {/* <!-- XXX testi e item tutti da spostare nello yaml possibilmente --> */}
        <p className="lead mb-3">Aiutaci a migliorare dandoci qualche dettaglio in più.</p>
        <p>Quanto segue è una raccolta dati anonima, non raccogliamo i tuoi dati personali, usiamo solo le seguenti informazioni per capire come migliorare l'esperienza. Se vuoi puoi leggere <Link to="#">l’informativa sulla privacy</Link></p>

        <fieldset>
          <legend className="d-flex mb-3 px-0 w-100"><span className="w-75">Sei:</span><span className="w-25 text-end">ICONA</span></legend>
          <div className="form-check pb-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt1" value="Designer" />
            <label htmlFor="optsStep1Opt1">Designer</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt2" value="Developer" />
            <label htmlFor="optsStep1Opt2">Developer</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt3" value="Dirigente" />
            <label htmlFor="optsStep1Opt3">Dirigente</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt4" value="Docente" />
            <label htmlFor="optsStep1Opt4">Docente</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt5" value="Editor" />
            <label htmlFor="optsStep1Opt5">Editor</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt6" value="Legale" />
            <label htmlFor="optsStep1Opt6">Legale</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt7" value="Personale amministrativo" />
            <label htmlFor="optsStep1Opt7">Personale amministrativo</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt8" value="Project manager" />
            <label htmlFor="optsStep1Opt8">Project manager</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt9" value="Specialista comunicazione" />
            <label htmlFor="optsStep1Opt9">Specialista comunicazione</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep1" type="radio" id="optsStep1Opt10" value="Studente" />
            <label htmlFor="optsStep1Opt10">Studente</label>
          </div>
          <div className="form-check py-2 pb-5">
            <input name="optsStep1" type="radio" id="optsStep1Opt11" value="Qui per curiosità / interesse" />
            <label htmlFor="optsStep1Opt11">Qui per curiosità / interesse</label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex mb-3 px-0 pt-5 w-100"><span className="w-75">Hai trovato questa pagina grazie a:</span><span className="w-25 text-end">ICONA</span></legend>
          <div className="form-check pb-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt1" value="motore di ricerca" />
            <label htmlFor="optsStep2Opt1">Altro sito web</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt2" value="altro sito web" />
            <label htmlFor="optsStep2Opt2">Funzione "Cerca" del sito</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt3" value="funzione “Cerca” del sito" />
            <label htmlFor="optsStep2Opt3">Motore di ricerca</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt4" value="navigazione del sito" />
            <label htmlFor="optsStep2Opt4">Messaggio social</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt5" value="messaggio social" />
            <label htmlFor="optsStep2Opt5">Navigazione del sito</label>
          </div>
          <div className="form-check py-2 border-bottom">
            <input name="optsStep2" type="radio" id="optsStep2Opt6" value="posta elettronica" />
            <label htmlFor="optsStep2Opt6">Posta elettronica</label>
          </div>
          <div className="form-check pt-2 pb-5">
            <input name="optsStep2" type="radio" id="optsStep2Opt7" value="altro" />
            <label htmlFor="optsStep2Opt7">Altro</label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex mb-5 pt-5 px-0 w-100"><span className="w-75">Come possiamo migliorare questa pagina?</span><span className="w-25 text-end">ICONA</span></legend>
          <div className="form-group">
            <label htmlFor="feedbackText" className="custom-label">Risposta</label>
            <input type="text" className="form-control" id="feedbackText" name="feedbackText" />
            <small className="form-control form-text">Hai a disposizione 200 caratteri</small>
          </div>
        </fieldset>

        <Button {...BTN_SEND} />
 
    </form>

      {/* <ImageResponsive src="/images/kit-analitics.svg" alt="" />
      <h2 className="mb-3 h4">Grazie davvero, il tuo contributo ci aiuterà a migliorare il progetto Designers Italia!</h2> */}
      {/* <div className="lead mb-3">Se vuoi lasciaci la tua email e ti terremo aggiornato sulle prossime iniziative di Designers Italia e Developers Italia.</div>
      <div className="p mb-5"><Link to="#">Leggi l’informativa sulla privacy</Link></div>
      <form action="#">
        <div className="d-md-flex align-items-start">
          <div className="form-group w-75 me-5">
            <label htmlFor="feedbackMailNo" className="custom-label">Email</label>
            <input type="text" className="form-control" id="feedbackMailNo" name="feedbackMail" />
          </div>
          <Button {...BTN_SUBSCRIBE} />
        </div>
      </form> */}

  </div>
}

export default FormNo
