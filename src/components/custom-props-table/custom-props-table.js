import classNames from "classnames";
import React from "react";
import "./custom-props-table.scss";


function CustomPropsTable({
  title,
}) {
  // heading level

  return (
    <div className="custom-props-table">
      {title && <h2 className="mb-3">{title}</h2>}
    </div>
  );
}

export default CustomPropsTable;
