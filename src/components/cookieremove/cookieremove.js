import React from "react"
import Button from "../button/button"


const isServiceRemembered = (serviceKey) => {
  const services = JSON.parse(localStorage.getItem('bs-ck3') || "{}")
  return services[serviceKey]
}

function CookieRemove({ title, cookies }) {
  const cookieItems = cookies.map((cookie) => (
    isServiceRemembered(cookie.key) && <div className="row" key={cookie.key}>
      <div className="col-12 col-md-6 mt-2">
        <span>{cookie.label}</span>
      </div>
      <div className="col-12 col-md-6">
       <Button btnStyle="secondary" onClick={() => { localStorage.removeItem('bs-ck3'); location.reload(); }} aria-label="{accordionSrCopyLabel}">Rimuovi</Button>
      </div>
    </div>
  ))
  return (
    localStorage.getItem("bs-ck3") !== null && <div className="content w-100">
      <h2>{title}</h2>
      {cookieItems}
    </div>
  );
}

export default CookieRemove
