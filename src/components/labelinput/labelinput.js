import { useEffect, useState } from "react";
import { Input } from "bootstrap-italia";

function LabelInput(props) {
  const { id, value, onChange, label = "" } = props;
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
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={message}
        className="form-control"
        onChange={handleChange}
      />
    </div>
  );
}

export default LabelInput;
