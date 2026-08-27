import classNames from "classnames";
import React from "react";
import "./custom-props-table.scss";
import customProperties from "../../data/components_json/bsi/custom_properties.json";

function CustomPropsTable({
  title,
}) {
  // heading level
  console.log(customProperties);
  return (
    <div className="custom-props-table">
      {title && <h2 className="mb-3">{customProperties.acceptoverlay[0].description}</h2>}
    </div>
  );
}

export default CustomPropsTable;
