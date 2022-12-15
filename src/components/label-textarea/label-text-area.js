import React from "react"
import { useEffect, useState } from "react";
import { Input } from "bootstrap-italia"

const LabelTextArea = (props) => {
    const {
        id,
        value,
        onChange,
        label = "",
        ...opts
    } = props;
    const [message, setMessage] = useState(value);
    const handleChange = event => {
        setMessage(event.target.value);
        if (typeof onChange === "function") {
            onChange({
                value: event.target.value
            });
        }
    };
    useEffect(() => {
        new Input(document.getElementById(id))
    });
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className="form-control"
                onChange={handleChange}
                {...opts}
            >
              {message}
            </textarea>
        </>
    )
}

export default LabelTextArea
