import * as React from "react"
import './hero.scss'
import ReactMarkdown from 'react-markdown'
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Dropdown from "../dropdown/dropdown"

const Hero =({
	breadcrumbs,
	share,
	tag,
	background,
	title,
	subtitle,
	pretext,
	text,
	img,
	bgImg,
	Kangaroo

})=>{
  let styles = 'hero'
  + `${background ? ' '+background : ''}`
	return(
		<div className={styles}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-top px-3 px-md-0 px-lg-3 py-3">
              <Breadcrumbs {...breadcrumbs}></Breadcrumbs>
              {share  && <Dropdown {...share}></Dropdown>}
            </div>
            <div className="hero-main">

            </div>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Hero
