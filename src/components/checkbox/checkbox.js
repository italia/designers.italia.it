/*
Create a checkbox functional component.
Toggle the text of a paragraph with the checkbox using the 'useState' hook.
*/

import React, { useState } from "react";

function Checkbox(props) {
  const { id, label, checked, customStyle, handleChange } = props;
  const defaultChecked = checked || false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const onChangeEvent = (e) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    handleChange(newChecked);
  };

  return (
    <div className={`form-check ${customStyle}`}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChangeEvent}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
