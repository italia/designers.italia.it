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

  let addonClasses = full ? ' px-0 mx-0 w-100' : 'col col-md-10 offset-md-1 col-lg-7'

  return (
    <div className="resource-list py-5">
      <div className="container-xxl">
        <div className="row">
          <div className={addonClasses}>
              <div className="px-3 px-lg-0">
                {title && <HLevel className="mb-4">{title}</HLevel>}
                <List {...list}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceList
