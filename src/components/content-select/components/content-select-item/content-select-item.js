import React from "react"

const ContentSelectItem = ({
  name,
  children
}) => {

  return (
    <div className="content-select-item">
      { children }
    </div>
  )
}

export default ContentSelectItem
