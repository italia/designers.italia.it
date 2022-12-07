/* 
Create a checkbox functional component. 
Toggle the text of a paragraph with the checkbox using the 'useState' hook. 
*/

import React, { useState } from 'react';

const Checkbox = ({
    chkId,
    label,
    checked,
    customStyle,
    handleChange,
    ...props
}) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const onClickEvent = () => {
        setIsChecked(!isChecked)
        handleChange(!isChecked)
    }
    return (
        <div className={"form-check " + customStyle} onClick={() => onClickEvent()}>
            <input id={chkId} type="checkbox" checked={isChecked} {...props}/>
            <label htmlFor={chkId}>{label}</label>
        </div>
    );
};

export default Checkbox;