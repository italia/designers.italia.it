import React from "react"

const Skiplinks = (props) => {
  return (
    <div className="skiplinks">
      <a className="visually-hidden-focusable" href="#main">Vai al contenuto principale</a>
      <a className="visually-hidden-focusable" href="#footer">Vai al piede di pagina</a>
    </div>
  )
}

export default Skiplinks
