import React from "react"
import Button from "../button/button"

export const isBrowser = () => typeof window !== "undefined"

const isServiceRemembered = (serviceKey) => {
  const services = isBrowser() ? JSON.parse(localStorage.getItem('bs-ck3') || "{}") : {}
  return services[serviceKey]
}

const isSectionShowable = () => {
  const services = isBrowser() ? JSON.parse(localStorage.getItem('bs-ck3') || "{}") : {}
  for (const service in services) {
    if (services[service] === true) {
      return true
    }
  }
  return false
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
    isBrowser() && isSectionShowable() && <div className="content w-100">
      <h2>{title}</h2>
      {cookieItems}
    </div>
  );
}

export default CookieRemove
