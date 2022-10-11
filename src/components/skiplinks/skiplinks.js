import React from "react"

const Skiplinks = (
  {data}
) => {

  let skiplinksItems

  if (data) {
    skiplinksItems = data.map((item,index) => {
      return(
        <a className="visually-hidden-focusable" key={"link-"+index} href={item.url}>
          {item.label}
        </a>
      )
    })
  }

  return (
    <div className="skiplinks">
      {skiplinksItems}
    </div>
  )
}

export default Skiplinks
