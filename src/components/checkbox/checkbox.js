/* 
Create a checkbox functional component. 
Toggle the text of a paragraph with the checkbox using the 'useState' hook. 
*/

import React, { useState } from 'react';

const Checkbox = (props) => {
    const {
        id,
        label,
        checked,
        customStyle,
        handleChange,
    } = props;
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const onClickEvent = (e) => {
        e.preventDefault();
        setIsChecked(!isChecked)
        handleChange(!isChecked)
    }
    return (
        <div className={"form-check " + customStyle} onClick={onClickEvent}>
            <input id={id} type="checkbox" checked={isChecked} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;