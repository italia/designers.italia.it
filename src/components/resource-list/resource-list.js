import React from "react"
import List from "../list/list"

const ResourceList = ({
  title,
  headingLevel,
  list
}) => {

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}

  return (
    <div className="resource-list py-5">
      <div className="container-xxl">
        <div className="row">
          <div className='col col-md-10 offset-md-1 col-lg-7'>
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
