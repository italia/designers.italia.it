import React from "react"
import Tag from "../tag/tag"
import SimpleCta from "../simple-cta/simple-cta"
import "./table.scss"

const Table = ({
  head,
  rows
}) => {

  let headItems
  let rowItems
	let CellType
  let CellScope

  if (head) {
    headItems = head.map((item,index) => {
      return(
        <th scope="col" key={"th-"+index}>{item.text}</th>
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
              <CellType scope={CellScope} key={"td-"+index}>
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
    <table className="table mb-4">
      { headItems && <thead>
        <tr>
          {headItems}
        </tr>
      </thead> }
      <tbody>
        {rowItems}
      </tbody>
    </table>
  )
}

export default Table
