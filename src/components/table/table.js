import React from "react"
import "./table.scss"

const Table = ({
  data
}) => {
  return (
    <table className="table mb-4">
      <thead>
        <tr>
          <th scope="col">Caratteristica</th>
          <th scope="col">Stato</th>
          <th scope="col">Descrizione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Visivamente accessibile</th>
          <td>Pronto</td>
          <td>Uso e contrasto dei colori, leggibilità</td>
        </tr>
        <tr>
          <th scope="row">Amichevole con lettori di schermo</th>
          <td>Pronto</td>
          <td>Struttura titolazioni, etichette e testi alternativi</td>
        </tr>
        <tr>
          <th scope="row">Navigabile</th>
          <td>In revisione</td>
          <td>Focus, struttura, navigazione da tastiera o altri device</td>
        </tr>
        <tr>
          <th scope="row">Comprensibile</th>
          <td>Da rivedere</td>
          <td>Comprensibile, prevedibile, gestione semplice dell’errore</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
