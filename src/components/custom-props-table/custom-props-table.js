import React from "react";
import "./custom-props-table.scss";
import customProperties from "../../data/components_json/bsi/custom_properties.json";

function CustomPropsTable({ title, selector }) {
  // heading level
  const currentVariables = customProperties[selector];

  const staticVariables = currentVariables.filter((track) => {
    return !track.other_values || track.other_values.length === 0;
  });
  const dynamicVariables = currentVariables.filter((track) => {
    return track.other_values && track.other_values.length > 0;
  });

  return (
    <div className="custom-props-table">
      {title && <h2 className="mb-3">Properties {title}</h2>}

      <p>
        Il selettore da utilizzare per le sovrascrittura delle property è{" "}
        <code>{selector}</code>.
      </p>
      <p>
        La descrizione delle custom properties è in inglese perché risiede nei
        files <code>.scss</code> dei componenti.
      </p>

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
                <td>
                  <code>{track["variable-name"]}</code>
                </td>
                <td>{track.description}</td>
                <td>
                  <p>
                    <code>{track.value}</code>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {dynamicVariables.length > 0 && (
        <div>
          <h3 className="mb-3">Properties dinamiche {title}</h3>

          <p>
            Nella colonna <code>Valori predefiniti</code> è possibile trovare
            varianti responsive/tema/stato della property stessa, si prega di
            far riferimento al codice per personalizzare il comportamento.
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
                    <td>
                      <code>{track["variable-name"]}</code>
                    </td>
                    <td>{track.description}</td>
                    <td className="d-flex">
                      <p>
                        <code>{track.value}</code>
                      </p>
                      &nbsp;
                      {track.other_values.map((v) => (
                        <p>
                          <code>{v}</code>
                        </p>
                      ))}
                    </td>
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
