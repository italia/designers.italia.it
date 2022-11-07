import React, { useState } from "react"

import Button from "../../../button/button"

const BTN_SUBSCRIBE = {
  label: "Iscriviti",
  btnStyle: "primary",
  type: "button",
  addonStyle: "text-uppercase"
}

const FormYes = ({

}) => {

  return <>
    <img src="/images/kit-analitics.svg" className="" alt="" />
    <h2 className="mb-3 h4" id="feedbackYesTitle">Grazie davvero, il tuo contributo ci aiuterà a migliorare il progetto Designers Italia!</h2>
    <div className="lead mb-3">Se vuoi lasciaci la tua email e ti terremo aggiornato sulle prossime iniziative di Designers Italia e Developers Italia.</div>
    <div className="p mb-5"><a href="#">Leggi l’informativa sulla privacy</a></div>
    <form action="#">
      <div className="d-md-flex align-items-start">
        <div className="form-group w-75 me-5">
          <label htmlFor="feedbackMail" className="custom-label">Email</label>
          <input type="text" className="form-control" id="feedbackMail" name="feedbackMail" />
        </div>
        <Button {...BTN_SUBSCRIBE} />
      </div>
    </form>
  </>
}

export default FormYes
