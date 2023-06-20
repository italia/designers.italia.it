import React from "react"
import Tag from "../tag/tag"
import SimpleCta from "../simple-cta/simple-cta"
import "./table.scss"

const Table = ({
  title,
  head,
  rows,
  addonClasses,
  responsive
}) => {

  let tableClasses = "table my-4"
    + `${addonClasses ? ' '+addonClasses : ''}`

  let headItems
  let rowItems
	let CellType
  let CellScope

  if (head) {
    headItems = head.map((item,index) => {
      return(
        <th scope="col" key={"th-"+index}>
          {item.text}
          { item.tag && <Tag {...item.tag}/>}
          </th>
      )
    })
  }

  if (rows) {
    rowItems = rows.map((rowItem,index) => {
      return(
        <tr key={"tr-"+index}>{
          rowItem.cols.map((tdItem,index) => {
            if (tdItem.scope) {
              CellType = `th`
              CellScope = 'row'
            } else {
              CellType = `td`
              CellScope = null
            }

            return(
              <CellType scope={CellScope} key={"td-"+index} className={tdItem.addonClasses}>
                { tdItem.text }
                { tdItem.tag && <Tag {...tdItem.tag}/>}
                { tdItem.simpleCta && <SimpleCta {...tdItem.simpleCta} />}
              </CellType>
            )
          })
        }</tr>
      )
    })
  }

  return (
    <div className={responsive}>
      {title && <h3 className="mt-4">{title}</h3>}
      <table className={tableClasses}>
        { headItems && <thead>
          <tr>
            {headItems}
          </tr>
        </thead> }
        <tbody>
          {rowItems}
        </tbody>
      </table>
    </div>
  )
}

export default Table
