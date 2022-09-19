import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"
import { BackToTop } from 'bootstrap-italia'

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

const MainTemplate = ({children}) => {
	return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
	)
}

export default MainTemplate
