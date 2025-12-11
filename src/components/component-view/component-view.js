import classNames from "classnames";
import React, { useState, useEffect } from "react";
import slugify from "slugify";

import loadable from "@loadable/component";
import { Notification } from "bootstrap-italia";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import Icon from "../icon/icon";

import "./component-view.scss";
import viewerData from "../../data/component-viewer.yaml";

const SyntaxHighlighter = loadable(() => import("./syntax-highlighter"));

function ComponentView({
  variantName,
  source,
  content,
  idPrefix,
  viewerHeight,
  minHeight,
  accordionOpen,
  accordionShow,
  accordionUrl,
  accordionSrCopyLabel,
  componentViewerData,
}) {
  let contentTrimmed = content?.trim();

  if (componentViewerData?.variants) {
    // it is not a Componenti page, but a Fondamenti with one or more viewers...
    contentTrimmed = componentViewerData.variants
      .filter((item) => item.name === variantName)[0]
      ?.content?.trim();
  }

  const { viewer, accordionLabel, accordionSrLabel } = viewerData;

  const ICON_INFO = {
    icon: "sprites.svg#it-info-circle",
    size: "sm",
    color: "white",
    addonClasses: "align-middle",
    ariaLabel: " (Link esterno)",
  };

  const ICON_COPY_CODE = {
    icon: "sprites.svg#it-copy",
    size: "sm",
    color: "white",
    addonClasses: "align-middle",
    ariaLabel: " Copia il codice negli appunti",
  };

  const ICON_FULLSCREEN = {
    icon: "sprites.svg#it-external-link",
    size: "sm",
    color: "white",
    addonClasses: "align-middle",
    ariaLabel: " Apri l'anteprima in una nuova finestra",
  };

  const ICON_SUCCESS = {
    icon: "sprites.svg#it-check-circle",
  };

  const initAutoHeight = () => {
    const iframe = document.getElementById(`${idPrefix}-iframe`);
    if (!iframe) return;
    const exampleContainer =
      iframe.contentWindow.document.getElementsByClassName("bd-example")[0];
    if (!exampleContainer) return;
    if (viewerHeight === 0 || !viewerHeight) {
      // auto height
      if (!minHeight) {
        iframe.classList.add("min-default-height");
      } else {
        iframe.style.minHeight = `${minHeight}px`;
      }
      iframe.height = exampleContainer.clientHeight + 50;
      exampleContainer.addEventListener("click", () => {
        setTimeout(() => {
          iframe.height = exampleContainer.clientHeight + 50;
        }, 50);
      });
      const tabs = document.querySelector(".nav-tabs");
      if (!tabs) return;
      tabs.addEventListener("click", () => {
        setTimeout(() => {
          iframe.height = exampleContainer.clientHeight + 50;
        }, 50);
      });
    } else if (viewerHeight > 0) {
      // fixed width
      iframe.height = viewerHeight + 50;
      exampleContainer.classList.add("h-100");
    }
  };

  useEffect(() => {
    initAutoHeight();
    const iframe = document.getElementById(`${idPrefix}-iframe`);
    if (!iframe) return;
    iframe.addEventListener("load", initAutoHeight);
    iframe.addEventListener("transitionend", initAutoHeight);

    const sbiframe = document.getElementById(`${idPrefix}-sbiframe`);
    if (!sbiframe) return;
    sbiframe.addEventListener("load", initAutoHeight);
    sbiframe.addEventListener("transitionend", initAutoHeight);
  });

  const copyToClipboard = (e, code) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    const notification = new Notification(
      document.getElementById(`${idPrefix}-copyToast`),
      {
        timeout: 3000,
      },
    );
    notification.show();
  };

  const id = slugify(variantName, { lower: true, strict: true });
  const uuid = `${idPrefix}-component-view-id_${id}`;
  const accId = `${uuid}-accordion`;
  const headId = `${uuid}-heading`;
  const collId = `${uuid}-collapse`;
  const [wrappedCode, setWrappedCode] = useState(false);

  const [previewWidth, setPreviewWidth] = useState(" viewer-full");
  const changeResolution = (e) => {
    e.preventDefault();
    const res = e.target.textContent; // mobile, tablet, full
    setPreviewWidth(` viewer-${res}`);
  };

  let responsiveButtonsItems;
  if (viewer) {
    responsiveButtonsItems = viewer.responsiveButtons.map((item, index) => (
      <Button
        onClick={(e) => changeResolution(e)}
        key={`rb${index}`}
        {...item}
      />
    ));
  }

  const componentStyles = classNames("d-flex flex-column align-items-center", {
    "me-lg-4 me-xl-5": componentViewerData?.variants,
  });

  const accordionHeadingStyle =
    "d-flex justify-content-between align-items-center";

  const accordionContainerStyle = classNames(
    "accordion accordion-left-icon py-2 border-bottom-0",
    {
      "me-lg-4 me-xl-5": componentViewerData?.variants,
    },
  );

  const accordionStyle = classNames("accordion-collapse collapse", {
    show: accordionOpen,
    hide: !accordionOpen,
  });

  const accordionButtonStyle = classNames(
    "accordion-button border-top-0 collapsed",
    {
      collapsed: accordionOpen,
    },
  );

  const BSIExampleUrl = `/examples/${source}/${slugify(
    variantName,
  ).toLowerCase()}.html`;

  return (
    <div id={uuid} className="pb-4 mb-5">
      {contentTrimmed && (
        <div className={componentStyles}>
          <div className="w-100 d-flex align-items-end justify-content-end py-3">
            {responsiveButtonsItems && (
              <div className="responsive-buttons d-none d-lg-block">
                {viewer.responsiveLabel && (
                  <span className="me-4">{viewer.responsiveLabel}</span>
                )}
                <div
                  className="btn-group"
                  role="group"
                  aria-label={viewer.responsiveAriaLabel}
                >
                  {responsiveButtonsItems}
                </div>
              </div>
            )}
            <div className="ms-2">
              <a
                href={BSIExampleUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-xs btn-primary p-2"
              >
                <Icon {...ICON_FULLSCREEN} />
              </a>
            </div>
          </div>
          <span className="visually-hidden">Inizio anteprima:</span>
          {/* <iframe
            id={`${idPrefix}-sbiframe`}
            src="https://italia.github.io/dev-kit-italia/iframe.html?args=&id=componenti-accordion--documentazione"
            className={`w-100 iframe-example rounded border shadow-sm ${previewWidth}`}
          /> */}
          <iframe
            id={`${idPrefix}-iframe`}
            src={BSIExampleUrl}
            title={`Variante: ${variantName}`}
            className={`w-100 iframe-example rounded border shadow-sm ${previewWidth}`}
          />
          <span className="visually-hidden">Fine anteprima.</span>
        </div>
      )}
      {contentTrimmed && accordionShow && (
        <div className={accordionContainerStyle} id={accId}>
          <div className="accordion-item">
            <div className={accordionHeadingStyle} id={headId}>
              <h2 id={`${idPrefix}-codeViewer`} className="accordion-header ">
                <button
                  className={accordionButtonStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collId}`}
                  aria-expanded={accordionOpen}
                  aria-controls={collId}
                >
                  {accordionLabel}
                </button>
              </h2>
              <div className="d-flex justify-content-between align-items-center">
                {contentTrimmed && (
                  <Button
                    onClick={(e) => copyToClipboard(e, contentTrimmed)}
                    aria-label={accordionSrCopyLabel}
                    addonStyle="shadow-none btn btn-xs btn-secondary p-2 me-2"
                  >
                    <Icon {...ICON_COPY_CODE} />
                  </Button>
                )}
                {accordionUrl && (
                  <a
                    href={accordionUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={accordionSrLabel}
                    className="shadow-none btn btn-xs btn-primary p-2"
                  >
                    <Icon {...ICON_INFO} />
                  </a>
                )}
              </div>
            </div>

            <div
              id={collId}
              className={accordionStyle}
              data-bs-parent={`#${accId}`}
              role="region"
              aria-labelledby={headId}
            >
              <div className="accordion-body syntax-highlight-scope p-0 position-relative">
                <div
                  aria-hidden="true"
                  className="position-absolute end-0 split-code-checkbox"
                >
                  {contentTrimmed && (
                    <Checkbox
                      id={`${idPrefix}-wrap`}
                      label="Mostra codice a capo"
                      customStyle="me-4"
                      checked={wrappedCode}
                      handleChange={(val) => setWrappedCode(val)}
                    />
                  )}
                </div>

                {contentTrimmed && (
                  <SyntaxHighlighter
                    language="markup"
                    showLineNumbers
                    wrapLines={wrappedCode}
                    lineProps={{
                      style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                    }}
                  >
                    {contentTrimmed}
                  </SyntaxHighlighter>
                )}
              </div>
            </div>
            <div
              className="notification with-icon right-fix success dismissable fade"
              role="alert"
              aria-labelledby={`${idPrefix}-not1d-title`}
              id={`${idPrefix}-copyToast`}
            >
              <span id={`${idPrefix}-not1d-title`} className="h5 ">
                <Icon {...ICON_SUCCESS} />
                Codice copiato negli appunti
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentView;
