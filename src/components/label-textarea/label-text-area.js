import React, { useEffect, useState } from "react";

import { Input } from "bootstrap-italia";

function LabelTextArea(props) {
  const { id, value, onChange, label = "", ...opts } = props;
  const [message, setMessage] = useState(value);
  const handleChange = (event) => {
    setMessage(event.target.value);
    if (typeof onChange === "function") {
      onChange({
        value: event.target.value,
      });
    }
  };
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Input(document.getElementById(id));
  });
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className="form-control"
        onChange={handleChange}
        autoComplete="off"
        {...opts}
      >
        {message}
      </textarea>
    </>
  );
}

export default LabelTextArea;
