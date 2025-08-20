import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import Tag from "../tag/tag";
import SimpleCta from "../simple-cta/simple-cta";
import "./table.scss";

function Table({ title, head, rows, addonClasses, responsive, headingLevel }) {
  const HLevel = headingLevel ? `h${headingLevel}` : "h3";
  const tableClasses = classNames("table y-4", addonClasses);

  let headItems;
  let rowItems;
  let CellType;
  let CellScope;

  if (head) {
    headItems = head.map((item, index) => (
      <th scope="col" key={`th-${index}`}>
        {item.text}
        {item.tag && <Tag {...item.tag} />}
      </th>
    ));
  }

  if (rows) {
    rowItems = rows.map((rowItem, rowIndex) => (
      <tr key={`tr-${rowIndex}`}>
        {rowItem.cols.map((tdItem, tdIndex) => {
          if (tdItem.scope) {
            CellType = `th`;
            CellScope = "row";
          } else {
            CellType = `td`;
            CellScope = null;
          }
          const tagsItems = tdItem.tags?.map((item, itemIndex) => (
            <div>
              <Tag {...item} key={`tag-${itemIndex}`} />
            </div>
          ));
          return (
            <CellType
              scope={CellScope}
              key={`td-${tdIndex}`}
              className={tdItem.addonClasses}
            >
              {tdItem.text && <ReactMarkdown>{tdItem.text}</ReactMarkdown>}
              {tdItem.tags && <div>{tagsItems}</div>}
              {tdItem.tag && <Tag {...tdItem.tag} />}
              {tdItem.simpleCta && <SimpleCta {...tdItem.simpleCta} />}
            </CellType>
          );
        })}
      </tr>
    ));
  }

  return (
    <div className={responsive}>
      {title && <HLevel>{title}</HLevel>}

      <table className={tableClasses}>
        {headItems && (
          <thead>
            <tr>{headItems}</tr>
          </thead>
        )}
        <tbody>{rowItems}</tbody>
      </table>
    </div>
  );
}

export default Table;
