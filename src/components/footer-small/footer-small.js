import React from "react"

const FooterSmall = ({
  items
}
) => {
  return (
    <div className="it-footer-small-prints clearfix">
      <div className="container-xxl">
        <h3 className="visually-hidden">Sezione Link Utili</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          {items.map((value,index)=>{
            return(
              <li key={"item-"+index} className="list-inline-item" >
                <a
                  href={value.url}
                  target={value.blank ? "_blank" : undefined}
                >{value.title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default FooterSmall
