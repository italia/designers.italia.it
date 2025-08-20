import { useState } from "react";
import PropTypes from "prop-types";

import "./subscribe.scss";

const messages = {
  it: {
    header: "Le nostre iniziative, direttamente nella tua mail",
    title:
      "Lasciaci la tua email e ti aggiorneremo sulle nostre prossime iniziative",
    loading: "Caricamento...",
    placeholder: "indirizzo email",
    errorText: "Qualcosa è andato storto 😔 Riprova più tardi",
    successText:
      "Ti abbiamo mandato un’email, segui il collegamento per confermare la tua iscrizione",
    privacyText: "leggi l’informativa",
  },
  en: {
    header: "Our initiatives, right in your email",
    title: "Leave us your email address and we’ll keep you posted",
    loading: "Loading...",
    placeholder: "email address",
    errorText: "Something went wrong 😔 Please try again later",
    successText:
      "We sent you an email, follow the link to confirm your subscription",
    privacyText: "privacy policy",
  },
};

const StateClass = Object.freeze({
  START: { className: "" },
  LOADING: { className: "success" },
  SUCCESS: { className: "success" },
  ERROR: { className: "danger" },
});

function Subscribe({
  label,
  id,
  idForm,
  sendportalArgs,
  button,
  labelClass,
  lang,
}) {
  const [state, setState] = useState(StateClass.START);
  const [message, setMessage] = useState("");

  const t = (key) => messages[lang][key];

  const onSubmit = async (e) => {
    const endpoint = "https://sendportal.developers.italia.it/api/v1/subscribe";
    const data = {};

    new FormData(e.target).forEach((value, key) => {
      data[key] = value;
    });

    e.preventDefault();

    try {
      setState(StateClass.LOADING);

      const r = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!r.ok) {
        throw new Error(`HTTP response: ${r.status}`);
      }
    } catch (ex) {
      setState(StateClass.ERROR);
      // eslint-disable-next-line no-console
      console.error(`Mailing list subscribe error: ${ex}`);
      setMessage(t("errorText"));

      return;
    }

    setState(StateClass.SUCCESS);
    setMessage(t("successText"));
  };

  return (
    <div className="subscribe">
      <form id={idForm} onSubmit={onSubmit}>
        <div className="form-group mb-0 me-3">
          <label htmlFor={id} className={`active ${labelClass}`}>
            {label}
          </label>
          <input
            type="email"
            className="form-control"
            autoComplete="email"
            required
            id={id}
            name="email"
          />
          {Object.entries(sendportalArgs).map(([argName, argValue], i) => (
            <input type="hidden" name={argName} value={argValue} key={i} />
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={state === StateClass.LOADING}
        >
          {state === StateClass.LOADING ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">{t("loading")}</span>
            </>
          ) : (
            <span>{button.label}</span>
          )}
        </button>
      </form>
      <div
        className={`alert alert-${state.className} bg-light mt-2`}
        style={{
          visibility:
            state === StateClass.SUCCESS || state === StateClass.ERROR
              ? "visible"
              : "hidden",
        }}
        role="alert"
      >
        {message}
      </div>
    </div>
  );
}

Subscribe.propTypes = {
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  idForm: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  lang: PropTypes.string,
  sendportalArgs: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Subscribe.defaultProps = {
  labelClass: "",
  sendportalArgs: "{}",
  lang: "it",
};

Subscribe.displayName = "Subscribe";

export default Subscribe;
