import React from "react"
import Button from "../button/button"
import "./feedback.scss"

const Feedback = ({

}) => {

  let introBtn1 = ({
    label: "Si",
    btnStyle: "secondary",
    type: "button",
    addonStyle: "me-3"
  })

  let introBtn2 = ({
    label: "No",
    btnStyle: "secondary",
    type: "button",
  })

  let btnFw = ({
    label: "Indietro",
    btnStyle: "outline-primary",
    type: "button",
    addonStyle: "me-3"
  })

  let btnBk = ({
    label: "Avanti",
    btnStyle: "primary",
    type: "button",
  })

  let btnSubscribe = ({
    label: "Iscriviti",
    btnStyle: "primary",
    type: "button",
    addonStyle: "text-uppercase"
  })

  return (
    <div className="feedback bg-medium py-5 px-3 px-lg-0">
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div className="cmp-rating__card-first">
                <div className="card-body p-5">
                  {/* ----------- feedback intro  ----------- */}
                  <div className="step" id="feedbackIntro">
                    <h2 className="mb-4">Ciao, questa pagina è stata utile?</h2>
                    <Button {...introBtn1}/>
                    <Button {...introBtn2}/>
                  </div>
                  {/* ----------- feedback step 1 ----------- */}
                  <div className="step" id="feedbackStep1">
                    <h2 className="mb-3">Grazie per la tua risposta! Aiutaci a migliorare.</h2>
                    <form>
                      <fieldset>
                        <legend className="d-flex mb-3 px-0 w-100"><span className="w-75">Sei:</span><span className="w-25 text-end">1/3</span></legend>
                        <div class="form-check pb-2 border-bottom">
                          <input name="optsStep1" type="radio" id="optsStep1Opt1" value="progettista" />
                          <label for="optsStep1Opt1">progettista</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep1" type="radio" id="optsStep1Opt2" value="sviluppatore" />
                          <label for="optsStep1Opt2">sviluppatore</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep1" type="radio" id="optsStep1Opt3" value="funzionario della Pubblica Amministrazione" />
                          <label for="optsStep1Opt3">funzionario della Pubblica Amministrazione</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep1" type="radio" id="optsStep1Opt4" value="fornitore" />
                          <label for="optsStep1Opt4">fornitore</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep1" type="radio" id="optsStep1Opt5" value="esperto di temi legali" />
                          <label for="optsStep1Opt5">esperto di temi legali</label>
                        </div>
                        <div class="form-check pt-2 pb-5">
                          <input name="optsStep1" type="radio" id="optsStep1Opt6" value="altro" />
                          <label for="optsStep1Opt6">altro</label>
                        </div>
                      </fieldset>
                      <Button {...btnFw}/>
                      <Button {...btnBk}/>
                    </form>
                  </div>
                  {/* ----------- feedback step 2 ----------- */}
                  <div className="step" id="feedbackStep2">
                    <h2 className="mb-3">Ancora una curiosità</h2>
                    <form>
                      <fieldset>
                        <legend className="d-flex mb-3 px-0 w-100"><span className="w-75">Hai trovato questa pagina grazie a:</span><span className="w-25 text-end">2/3</span></legend>
                        <div class="form-check pb-2 border-bottom">
                          <input name="optsStep2" type="radio" id="optsStep2Opt1" value="motore di ricerca" />
                          <label for="optsStep2Opt1">motore di ricerca</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep2" type="radio" id="optsStep2Opt2" value="altro sito web" />
                          <label for="optsStep2Opt2">altro sito web</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep2" type="radio" id="optsStep2Opt3" value="funzione “Cerca” del sito" />
                          <label for="optsStep2Opt3">funzione “Cerca” del sito</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep2" type="radio" id="optsStep2Opt4" value="navigazione del sito" />
                          <label for="optsStep2Opt4">navigazione del sito</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep2" type="radio" id="optsStep2Opt5" value="messaggio social" />
                          <label for="optsStep2Opt5">messaggio social</label>
                        </div>
                        <div class="form-check py-2 border-bottom">
                          <input name="optsStep2" type="radio" id="optsStep2Opt6" value="posta elettronica" />
                          <label for="optsStep2Opt6">posta elettronica</label>
                        </div>
                        <div class="form-check pt-2 pb-5">
                          <input name="optsStep2" type="radio" id="optsStep2Opt7" value="altro" />
                          <label for="optsStep2Opt7">altro</label>
                        </div>
                      </fieldset>
                      <Button {...btnFw}/>
                      <Button {...btnBk}/>
                      {/* ----------- feedback step 3 ----------- */}
                      <div className="step" id="feedbackStep3">
                        <h2 className="mb-4">Il tuo parere è importante per noi, se hai ancora tempo</h2>
                        <fieldset>
                          <legend className="d-flex mb-5 px-0 w-100"><span className="w-75">Come possiamo migliorare questa pagina?</span><span className="w-25 text-end">3/3</span></legend>
                          <div class="form-group">
                            <label for="feedbackText" className="custom-label">Risposta</label>
                            <input type="text" class="form-control" id="feedbackText" name="feedbackText"/>
                            <small class="form-control form-text">Hai a disposizione 200 caratteri</small>
                          </div>
                        </fieldset>
                        <Button {...btnFw}/>
                        <Button {...btnBk}/>
                      </div>
                      {/* ----------- feedback end ----------- */}
                      <div className="step" id="feedbackEnd">
                        <h2 className="mb-3">Grazie davvero, il tuo contributo ci aiuterà a migliorare il progetto Designers Italia!</h2>
                        <p>Se vuoi lasciaci la tua email e ti terremo aggiornato sulle prossime iniziative di Designers Italia e Developers Italia</p>
                        <p className="mb-5"><a href="#">Leggi l’informativa sulla privacy</a></p>
                        <div className="d-md-flex align-items-start">
                          <div class="form-group w-75 me-5">
                            <label for="feedbackMail" className="custom-label">Email</label>
                            <input type="text" class="form-control" id="feedbackMail" name="feedbackMail"/>
                          </div>
                          <Button {...btnSubscribe}/>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Feedback
