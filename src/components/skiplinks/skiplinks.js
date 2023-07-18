import React from "react"

function Skiplinks({data}) {

  let skiplinksItems

  if (data) {
    skiplinksItems = data.map((item,index) => (
        <a className="visually-hidden-focusable" key={`skiplink-${index}`} href={item.url}>
          {item.label}
        </a>
      ))
  }

  return (
    <div className="skiplinks">
      {skiplinksItems}
    </div>
  )
}

export default Skiplinks
