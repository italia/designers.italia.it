import React, { useCallback, useState, useRef } from "react";
import ImageResponsive from "../../../image-responsive/image-responsive";
import LabelTextArea from "../../../label-textarea/label-text-area";
import Icon from "../../../icon/icon";

import FeedbackState from "../../state";

import "./form-no.scss";

const ICON_USER = {
  icon: "sprites.svg#it-user",
  size: "lg",
  color: "secondary",
  addonClasses: "align-middle me-3",
  hidden: true,
};

const ICON_HELP = {
  icon: "sprites.svg#it-help-circle",
  size: "lg",
  color: "secondary",
  addonClasses: "align-middle me-3",
  hidden: true,
};

const ICON_INFO = {
  icon: "sprites.svg#it-info-circle",
  size: "lg",
  color: "secondary",
  addonClasses: "align-middle me-3",
  hidden: true,
};

function FormNo({ onResult, state }) {
  const rootRef = useRef(null);

  const [who, setWho] = useState(null);
  const [from, setFrom] = useState(null);
  const [details, setDetails] = useState(null);

  const handleClick = useCallback(() => {
    onResult({ who, from, details });
  }, [who, from, details, onResult]);

  return (
    <div ref={rootRef}>
      <form>
        <ImageResponsive src="/images/kit-analitics.svg" alt="" />
        <h2 className="mb-3" id="feedbackNoTitle">
          Grazie per la tua risposta!
        </h2>

        <h3 className="mb-3">
          Aiutaci a migliorare dandoci qualche dettaglio in più.
        </h3>
        <p>
          Quanto segue è una raccolta di informazioni anonima, che ci aiuta a
          capire come migliorare la tua esperienza sul sito senza trattare dati
          personali. Se sei un developer puoi scoprire come funziona questo
          meccanismo nella{" "}
          <a
            href="https://github.com/italia/feedback.designers.italia.it"
            target="_blank"
            rel="noreferrer"
            aria-label="repository GitHub dedicata (si apre in una nuova finestra"
          >
            repository GitHub dedicata
          </a>
          .
        </p>

        <fieldset>
          <legend className="d-flex mb-3 px-0 align-items-center w-75">
            <Icon {...ICON_USER} />
            <span className="text-secondary">Sei:</span>
          </legend>
          <div className="px-3 px-lg-5 py-3 py-lg-5 rounded shadow-lg">
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt1"
                value="Designer"
                checked={who === "Designer"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt1">Designer</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt2"
                value="Developer"
                checked={who === "Developer"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt2">Developer</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt3"
                value="Dirigente"
                checked={who === "Dirigente"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt3">Dirigente</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt4"
                value="Docente"
                checked={who === "Docente"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt4">Docente</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt5"
                value="Editor"
                checked={who === "Editor"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt5">Editor</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt6"
                value="Legale"
                checked={who === "Legale"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt6">Legale</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt7"
                value="Personale amministrativo"
                checked={who === "Personale amministrativo"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt7">Personale amministrativo</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt8"
                value="Project manager"
                checked={who === "Project manager"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt8">Project manager</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt9"
                value="Specialista comunicazione"
                checked={who === "Specialista comunicazione"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt9">Specialista comunicazione</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt10"
                value="Studente"
                checked={who === "Studente"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt10">Studente</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep1"
                type="radio"
                id="optsStep1Opt11"
                value="Qui per curiosità / interesse"
                checked={who === "Qui per curiosità / interesse"}
                onChange={(e) => setWho(e.target.value)}
              />
              <label htmlFor="optsStep1Opt11">
                Qui per curiosità / interesse
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex mb-3 px-0 pt-5 align-items-center w-75">
            <Icon {...ICON_HELP} />
            <span className="text-secondary">
              Hai trovato questa pagina grazie a:
            </span>
          </legend>
          <div className="px-3 px-lg-5 py-3 py-lg-5 rounded shadow-lg">
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt1"
                value="altro sito web"
                checked={from === "altro sito web"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt1">Altro sito web</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt2"
                value="funzione Cerca del sito"
                checked={from === "funzione Cerca del sito"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt2">Funzione Cerca del sito</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt3"
                value="motore di ricerca"
                checked={from === "motore di ricerca"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt3">Motore di ricerca</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt4"
                value="messaggio social"
                checked={from === "messaggio social"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt4">Messaggio social</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt5"
                value="navigazione del sito"
                checked={from === "navigazione del sito"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt5">Navigazione del sito</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt6"
                value="posta elettronica"
                checked={from === "posta elettronica"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt6">Posta elettronica</label>
            </div>
            <div className="form-check form-check-group">
              <input
                name="optsStep2"
                type="radio"
                id="optsStep2Opt7"
                value="altro"
                checked={from === "altro"}
                onChange={(e) => setFrom(e.target.value)}
              />
              <label htmlFor="optsStep2Opt7">Altro</label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex pt-5 pb-4 px-0 align-items-center w-75">
            <Icon {...ICON_INFO} />
            <span className="text-secondary">
              Come possiamo migliorare questa pagina?
            </span>
          </legend>
          <div className="px-3 px-lg-5 pt-5 pb-1 rounded shadow-lg">
            <div className="form-group">
              <LabelTextArea
                ariadescribedby="helperText"
                id="feedbackText"
                label="Risposta"
                rows="3"
                maxLength="200"
                value={details || ""}
                onChange={(e) => setDetails(e.target.value)}
              />
              <small id="helperText" className="form-control form-text">
                Hai a disposizione 200 caratteri. Per favore non inserire dati
                personali in questo campo.
              </small>
            </div>
          </div>
        </fieldset>

        <div className="mt-5">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              (!who && !from && !details) || state === FeedbackState.Loading
            }
            onClick={handleClick}
          >
            {state === FeedbackState.Loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only">Invio in corso...</span>
              </>
            ) : (
              "Invia dettagli"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormNo;
