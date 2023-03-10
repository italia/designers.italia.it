import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "24px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 820,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 48,
}

const paragraphStyles = {
  marginBottom: 24,
}
const codeStyles = {
  color: "#8a8a8a",
  padding: 4,
  backgroundColor: "#f4f4f4",
  fontSize: "1.25rem",
  borderRadius: 4,
}

let searchTerm = false

const searchResultsPage = ({location}) => {
  if (location.state) { searchTerm = location.state.searchTerm }
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Questa pagina è un segnaposto, qui sarà la lista risultati completa</h1>
      <p style={paragraphStyles}>
        {(searchTerm) ? <span>🔎 Hai cercato: <strong>{searchTerm}</strong></span> : <span>🙊 Non hai cercato nulla, magari hai semplicemente aperto questa pagina placeholder...</span> }
        <br />
        <br />
        <Link to="/">Torna all'inizio e fai una nuova ricerca</Link>.
      </p>
    </main>
  )
}

export default searchResultsPage
