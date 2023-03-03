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

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Questa pagina non esiste</h1>
      <p style={paragraphStyles}>
        ✨ Vuoi proporti per scriverla? 🧐
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Siamo in locale, puoi crearla se vuoi a partire dalla root <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Vai all'inizio del sito Designers Italia</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
