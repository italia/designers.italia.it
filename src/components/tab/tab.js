import React from "react"
import "./tab.scss"
import SectionEditorial from "../section-editorial/section-editorial"
import ComponentView from "../component-view/component-view"
import ContentSelect from "../content-select/content-select"
import ContentSelectItem from "../content-select/components/content-select-item/content-select-item"

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
        <li className="nav-item-filler flex-grow-0 px-3 p-md-0"></li>
        <li className="nav-item">
          <a className="nav-link active" id="card-simple1-tab" data-bs-toggle="tab" href="#card-simpletab1" role="tab" aria-controls="card-simpletab1" aria-selected="true">{tab01.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="card-simple2-tab" data-bs-toggle="tab" href="#card-simpletab2" role="tab" aria-controls="card-simpletab2" aria-selected="false">{tab02.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="card-simple3-tab" data-bs-toggle="tab" href="#card-simpletab3" role="tab" aria-controls="card-simpletab3" aria-selected="false">{tab03.title}</a>
        </li>
        <li className="nav-item-filler px-3 p-md-0"></li>
      </ul>
      <div className="tab-content" id="card-simpleContent">
        <div className="tab-pane py-5 fade show active" id="card-simpletab1" role="tabpanel" aria-labelledby="card-simple1-tab">

          {tab01.variants && <ContentSelect label="Variante" {...tab01.componentVariant}>
              { tab01.variants.map((v, idx) => <ContentSelectItem key={'item-' + idx} name={v.name}>
                  <ComponentView
                    content={v.content}
                    viewer={tab01.componentVariant.viewer}
                    accordionLabel={tab01.componentVariant.accordionLabel}
                    accordionUrl={tab01.componentVariant.accordionUrl}
                    accordionSrLabel={tab01.componentVariant.accordionSrLabel}
                    accordionOpen={tab01.componentVariant.accordionOpen}
                  />
              </ContentSelectItem>) }
            </ContentSelect>}

          {tab01.sectionsEditorial && tab01.sectionsEditorial.map((section,index) => {
            return(
              <SectionEditorial key={"sectionEditorialTab01-"+index} {...section}/>
            )
          })}

        </div>
        <div className="tab-pane py-5 fade" id="card-simpletab2" role="tabpanel" aria-labelledby="card-simple2-tab">

          {tab02.variants && <ContentSelect {...tab02.componentVariant}>
              { tab02.variants.map((v, idx) => <ContentSelectItem label="Variante" key={'item-' + idx} name={v.name}>
              <ComponentView
                  content={v.content}
                  viewer={tab02.componentVariant.viewer}
                  accordionLabel={tab02.componentVariant.accordionLabel}
                  accordionUrl={tab02.componentVariant.accordionUrl}
                  accordionSrLabel={tab02.componentVariant.accordionSrLabel}
                  accordionOpen={tab02.componentVariant.accordionOpen}
                />
              </ContentSelectItem>) }
            </ContentSelect>}

          {tab02.sectionsEditorial && tab02.sectionsEditorial.map((section,index) => {
            return(
              <SectionEditorial key={"sectionEditorialTab02-"+index} {...section}/>
            )
          })}

        </div>
        <div className="tab-pane py-5 fade" id="card-simpletab3" role="tabpanel" aria-labelledby="card-simple3-tab">

          {tab03.variants && <ContentSelect label="Variante" {...tab03.componentVariant}>
              { tab03.variants.map((v, idx) => <ContentSelectItem key={'item-' + idx} name={v.name}>
                <ComponentView
                  content={v.content}
                  viewer={tab03.componentVariant.viewer}
                  accordionLabel={tab03.componentVariant.accordionLabel}
                  accordionUrl={tab03.componentVariant.accordionUrl}
                  accordionSrLabel={tab03.componentVariant.accordionSrLabel}
                  accordionOpen={tab03.componentVariant.accordionOpen}
                />
              </ContentSelectItem>) }
            </ContentSelect>}

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
