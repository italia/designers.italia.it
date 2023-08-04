import React from "react"

function ContentSelectItem({
  name,
  children
}) {

  return (
    <div className="content-select-item">
      { children }
    </div>
  )
}

export default ContentSelectItem
