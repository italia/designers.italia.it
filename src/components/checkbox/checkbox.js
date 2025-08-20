/*
Create a checkbox functional component.
Toggle the text of a paragraph with the checkbox using the 'useState' hook.
*/

import { useState } from "react";

function Checkbox(props) {
  const { id, label, checked, customStyle, handleChange } = props;
  const defaultChecked = checked || false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const onClickEvent = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    handleChange(!isChecked);
  };
  return (
    <div className={`form-check ${customStyle}`} onClick={onClickEvent}>
      <input id={id} type="checkbox" checked={isChecked} onChange={() => {}} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
