import React from "react"
import "./tab.scss"
import SectionEditorial from "../section-editorial/section-editorial"

import { Tab as TabBI } from "bootstrap-italia/dist/bootstrap-italia.esm"
const tabDummy = TabBI //trick treeshaking

const Tab = ({
  tab01,
  tab02,
  tab03
}) => {
  return (
    <div className="tab pt-5 pt-lg-6">
      <ul className="nav nav-tabs nav-tabs-cards" id="card-simple" role="tablist">
      <li className="nav-item-filler flex-grow-0"></li>
        <li className="nav-item">
          <a className="nav-link active" id="card-simple1-tab" data-bs-toggle="tab" href="#card-simpletab1" role="tab" aria-controls="card-simpletab1" aria-selected="true">{tab01.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="card-simple2-tab" data-bs-toggle="tab" href="#card-simpletab2" role="tab" aria-controls="card-simpletab2" aria-selected="false">{tab02.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="card-simple3-tab" data-bs-toggle="tab" href="#card-simpletab3" role="tab" aria-controls="card-simpletab3" aria-selected="false">{tab03.title}</a>
        </li>
        <li className="nav-item-filler"></li>
      </ul>
      <div className="tab-content" id="card-simpleContent">
        <div className="tab-pane py-5 fade show active" id="card-simpletab1" role="tabpanel" aria-labelledby="card-simple1-tab">

          {tab01.sectionsEditorial && tab01.sectionsEditorial.map((section,index) => {
            return(
              <SectionEditorial key={"sectionEditorialTab01-"+index} {...section}/>
            )
          })}

        </div>
        <div className="tab-pane py-5 fade" id="card-simpletab2" role="tabpanel" aria-labelledby="card-simple2-tab">

          {tab02.sectionsEditorial && tab02.sectionsEditorial.map((section,index) => {
            return(
              <SectionEditorial key={"sectionEditorialTab02-"+index} {...section}/>
            )
          })}

        </div>
        <div className="tab-pane py-5 fade" id="card-simpletab3" role="tabpanel" aria-labelledby="card-simple3-tab">

          {tab03.sectionsEditorial && tab03.sectionsEditorial.map((section,index) => {
            return(
              <SectionEditorial key={"sectionEditorialTab03-"+index} {...section}/>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Tab
