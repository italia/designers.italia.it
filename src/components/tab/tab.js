import React from "react";
import "./tab.scss";
import SectionEditorial from "../section-editorial/section-editorial";
import ComponentView from "../component-view/component-view";
import ContentSelect from "../content-select/content-select";
import ContentSelectItem from "../content-select/components/content-select-item/content-select-item";

import TabButton from "./tabbutton";

function Tab({ componentSource, tab01, tab02, tab03 }) {
  return (
    <div className="tab pt-5 /*pt-lg-6*/">
      <div className="">
        <ul
          className="nav nav-tabs nav-tabs-cards auto"
          id="card-simple"
          role="tablist"
        >
          <li className="nav-item">
            <TabButton
              className="nav-link active"
              id="card-simple1-tab"
              href="#card-simpletab1"
              role="tab"
              aria-controls="card-simpletab1"
              aria-selected="true"
            >
              {tab01.title}
            </TabButton>
          </li>
          <li className="nav-item">
            <TabButton
              className="nav-link"
              id="card-simple2-tab"
              href="#card-simpletab2"
              role="tab"
              aria-controls="card-simpletab2"
              aria-selected="false"
            >
              {tab02.title}
            </TabButton>
          </li>
          <li className="nav-item">
            <TabButton
              className="nav-link"
              id="card-simple3-tab"
              href="#card-simpletab3"
              role="tab"
              aria-controls="card-simpletab3"
              aria-selected="false"
            >
              {tab03.title}
            </TabButton>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="card-simpleContent">
        <div
          className="tab-pane py-5 fade show active"
          id="card-simpletab1"
          role="tabpanel"
          aria-labelledby="card-simple1-tab"
        >
          {tab01.variants && (
            <ContentSelect label="Variante" {...tab01.componentVariant}>
              {tab01.variants.map((v, idx) => (
                <ContentSelectItem key={`item-${idx}`} name={v.name}>
                  <ComponentView
                    variantName={v.name}
                    source={componentSource}
                    content={v.content}
                    sourceKit={v.kitUrl}
                    contentKit={v.kitContent}
                    idPrefix="use-preview-"
                    viewerHeight={tab01.componentVariant.viewerHeight}
                    accordionUrl={tab01.componentVariant.accordionUrl}
                    accordionOpen={tab01.componentVariant.accordionOpen}
                    accordionShow={tab01.componentVariant.accordionShow}
                  />
                </ContentSelectItem>
              ))}
            </ContentSelect>
          )}

          {tab01.sectionsEditorial &&
            tab01.sectionsEditorial.map((section, index) => (
              <SectionEditorial
                key={`sectionEditorialTab01-${index}`}
                {...section}
              />
            ))}
        </div>
        <div
          className="tab-pane py-5 fade"
          id="card-simpletab2"
          role="tabpanel"
          aria-labelledby="card-simple2-tab"
        >
          {tab02.variants && (
            <ContentSelect {...tab02.componentVariant}>
              {tab02.variants.map((v, idx) => (
                <ContentSelectItem
                  label="Variante"
                  key={`item-${idx}`}
                  name={v.name}
                >
                  <ComponentView
                    variantName={v.name}
                    source={componentSource}
                    content={v.content}
                    sourceKit={v.kitUrl}
                    contentKit={v.kitContent}
                    idPrefix="des-preview-"
                    viewerHeight={tab02.componentVariant.viewerHeight}
                    accordionUrl={tab02.componentVariant.accordionUrl}
                    accordionOpen={tab02.componentVariant.accordionOpen}
                    accordionShow={tab02.componentVariant.accordionShow}
                  />
                </ContentSelectItem>
              ))}
            </ContentSelect>
          )}

          {tab02.sectionsEditorial &&
            tab02.sectionsEditorial.map((section, index) => (
              <SectionEditorial
                key={`sectionEditorialTab02-${index}`}
                {...section}
              />
            ))}
        </div>
        <div
          className="tab-pane py-5 fade"
          id="card-simpletab3"
          role="tabpanel"
          aria-labelledby="card-simple3-tab"
        >
          {tab03.variants && (
            <ContentSelect label="Variante" {...tab03.componentVariant}>
              {tab03.variants.map((v, idx) => (
                <ContentSelectItem key={`item-${idx}`} name={v.name}>
                  <ComponentView
                    variantName={v.name}
                    source={componentSource}
                    content={v.content}
                    sourceKit={v.kitUrl}
                    contentKit={v.kitContent}
                    idPrefix="dev-preview-"
                    viewerHeight={tab03.componentVariant.viewerHeight}
                    accordionUrl={tab03.componentVariant.accordionUrl}
                    accordionOpen={tab03.componentVariant.accordionOpen}
                    accordionShow={tab03.componentVariant.accordionShow}
                  />
                </ContentSelectItem>
              ))}
            </ContentSelect>
          )}

          {tab03.sectionsEditorial &&
            tab03.sectionsEditorial.map((section, index) => (
              <SectionEditorial
                key={`sectionEditorialTab03-${index}`}
                {...section}
              />
            ))}
        </div>
        {/* <div
          className="tab-pane py-5 fade"
          id="card-simpletab4"
          role="tabpanel"
          aria-labelledby="card-simple4-tab"
        >
          <iframe
            id={`-sbiframe`}
            height={"800px%"}
            src="https://italia.github.io/dev-kit-italia/iframe.html?args=&id=componenti-accordion--documentazione"
            className={`w-100 iframe-example shadow-sm `}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Tab;
