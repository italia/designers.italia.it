import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"
import { BackToTop } from 'bootstrap-italia'

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"

const MainTemplate = ({children}) => {
	return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <BackToTopEl/>
    </>
	)
}

export default MainTemplate
