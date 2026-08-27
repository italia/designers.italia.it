import classNames from "classnames";
import React from "react";
import "./custom-props-table.scss";
import customProperties from "../../data/components_json/bsi/custom_properties.json";

function CustomPropsTable({
  title,
  selector
}) {
  // heading level
  console.log(selector);
  const currentVariables = customProperties[selector];
  console.log(currentVariables);

  const staticVariables = currentVariables.filter((track) => {return !track.other_values || track.other_values.length === 0});
  const dynamicVariables = currentVariables.filter((track) => {return track.other_values && track.other_values.length > 0});

  return (
    <div className="custom-props-table">
      {title && <h2 className="mb-3">Properties {title}</h2>}

      <p>Il selettore da utilizzare per le sovrascrittura delle property è `{selector}`.</p>
      <p>La descrizione delle custom properties è in inglese perché risiede nei files `.scss` dei componenti.</p>

      <h3 className="mb-3">Properties statiche</h3>

      <div className="table-responsive" style={{ fontSize: "1rem" }}>
        <table className="table table-simple">
          <thead>
            <tr>
              <th>Variabile CSS</th>
              <th>Descrizione (Inglese)</th>
              <th>Predefinito</th>
            </tr>
          </thead>
          <tbody>
            {staticVariables.map((track) => (
              <tr>
                <td><code>{ track['variable-name'] }</code></td>
                <td>{ track['description'] }</td>
                <td><code>{ track['value'] }</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {dynamicVariables.length > 0 && (
      <div>
        <h3 className="mb-3">Properties dinamiche {title}</h3>

      <p>Nella colonna `"Valori predefiniti"` è possibile trovare varianti responsive/tema/stato della property stessa,
        si prega di far riferimento al codice per personalizzare il comportamento.
      </p>

      <div className="table-responsive" style={{ fontSize: "1rem" }}>
        <table className="table table-simple">
          <thead>
            <tr>
              <th>Variabile CSS</th>
              <th>Descrizione (Inglese)</th>
              <th>Valori predefiniti</th>
            </tr>
          </thead>
          <tbody>
            {dynamicVariables.map((track) => (
              <tr>
                <td><code>{ track['variable-name'] }</code></td>
                <td>{ track['description'] }</td>
                <td><code>{ track['value'] }</code>&nbsp;{track['other_values'].map((v) => <code>{ v }</code>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      )}
    </div>
  );
}


export default CustomPropsTable;
