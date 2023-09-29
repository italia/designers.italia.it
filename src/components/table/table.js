import React from "react"
import ReactMarkdown from "react-markdown"
import Tag from "../tag/tag"
import SimpleCta from "../simple-cta/simple-cta"
import "./table.scss"

function Table({
  title,
  head,
  rows,
  addonClasses,
  responsive,
  headingLevel
}) {

	const HLevel = headingLevel ? `h${headingLevel}` : "h3";
  const tableClasses = "table y-4"
    + `${addonClasses ? ` ${addonClasses}` : ''}`

  let headItems
  let rowItems
	let CellType
  let CellScope

  if (head) {
    headItems = head.map((item,index) => (
        <th scope="col" key={`th-${index}`}>
          {item.text}
          { item.tag && <Tag {...item.tag}/>}
          </th>
      ))
  }
  

  if (rows) {
    rowItems = rows.map((rowItem,index) => (
        <tr key={`tr-${index}`}>{
          rowItem.cols.map((tdItem,index) => {
            if (tdItem.scope) {
              CellType = `th`
              CellScope = 'row'
            } else {
              CellType = `td`
              CellScope = null
            }
            const tagsItems = tdItem.tags?.map((item,index) => (
              <div>
                <Tag {...item} key={`tag-${index}`}/>
              </div>
              ));
            return(
              <CellType scope={CellScope} key={`td-${index}`} className={tdItem.addonClasses}>
                { tdItem.text && <ReactMarkdown>{tdItem.text}</ReactMarkdown>}
                { tdItem.tags && <div>{tagsItems}</div>}
                { tdItem.tag && <Tag {...tdItem.tag}/>}
                { tdItem.simpleCta && <SimpleCta {...tdItem.simpleCta} />}
              </CellType>
            )
          })
        }</tr>
      ))
  }

  return (
    <div className={responsive}>
      {title && <HLevel>{title}</HLevel>}
      
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
