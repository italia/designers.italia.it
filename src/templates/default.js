import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"
import HeaderSlim from "../components/header-slim/header-slim"
import HeaderData from '../data/header.json'

const MainTemplate = ({children}) => {
	return (
    <>
	 	<HeaderSlim data={HeaderData.header_slim}></HeaderSlim>
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
