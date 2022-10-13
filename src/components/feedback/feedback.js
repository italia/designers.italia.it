import React from "react"
import Button from "../button/button"
import "./feedback.scss"

const Feedback = ({

}) => {

  let step1Btn1 = ({
    label: "Si",
    btnStyle: "secondary",
    type: "button",
    addonStyle: "me-3"
  })

  let step1Btn2 = ({
    label: "No",
    btnStyle: "secondary",
    type: "button",
  })

  return (
    <div className="feedback bg-medium py-5 px-3 px-lg-0">
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div className="cmp-rating__card-first">
                <div className="card-body p-5">
                  <h2 className="mb-4">Ciao, questa pagina è stata utile?</h2>
                  <Button {...step1Btn1}/>
                  <Button {...step1Btn2}/>
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
