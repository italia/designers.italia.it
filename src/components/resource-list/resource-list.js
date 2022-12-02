import React from "react"
import List from "../list/list"

const ResourceList = ({
  title,
  headingLevel,
  list,
  full
}) => {

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}

  let addonClasses = full ? ' px-0 mx-0 w-100 pb-5' : 'col-12 col-md-10 offset-md-1 col-lg-9 offset-lg-0 pb-5'
  let listItem

  if (list) {
    listItem = list.map((item,index) => {
      return(
        <div className={addonClasses} key={"list-"+index}>
            <div className="px-3 px-lg-0">
              <List {...item}/>
            </div>
        </div>
      )
    })
  }

  return (
    <div className="resource-list py-5">
      <div className="container-xxl">
        <div className="row justify-content-lg-center">
          <div className={addonClasses}>
              <div className="px-3 px-lg-0">
                {title && <HLevel className="mb-0">{title}</HLevel>}
              </div>
          </div>
          {listItem}
        </div>
      </div>
    </div>
  )
}

export default ResourceList
