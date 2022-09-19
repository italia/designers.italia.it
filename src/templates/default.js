import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

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
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
      />
    </>
	)
}

export default MainTemplate
