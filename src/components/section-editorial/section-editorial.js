import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import TextImageCta from "../text-image-cta/text-image-cta";
import Numbers from "../numbers/numbers";
import TitleText from "../title-text/title-text";
import ImgFull from "../img-full/img-full";
import Highlight from "../highlight/highlight";
import Card from "../card/card";
import Kangaroo from "../kangaroo/kangaroo";
import ImageIcons from "../image-icons/image-icons";
import Table from "../table/table";
import Button from "../button/button";
import ComponentView from "../component-view/component-view";
import CookieRemove from "../cookieremove/cookieremove";
import "./section-editorial.scss";

function SectionEditorial({
  title,
  headingLevel,
  text,
  buttons,
  full,
  centered,
  fullColumn,
  paddingLeft,
  background,
  components,
  menu,
  noSpace,
  id,
  componentViewerData,
}) {
  const LoadableMediaPlayer = Loadable(() =>
    import("../media-player/media-player"),
  );

  const SwitchComponents = {
    Highlight,
    Card,
    Kangaroo,
    TextImageCta,
    CookieRemove,
    Numbers,
    TitleText,
    ImgFull,
    ImageIcons,
    Table,
    ComponentView,
    MediaPlayer: LoadableMediaPlayer,
  };

  // heading level
  let HLevel;
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h2`;
  }

  const container = classNames({
    "fullcolumn-editorial": fullColumn,
    "container-xxl": !fullColumn,
  });

  const row = classNames({
    row: !fullColumn,
    "flex-lg-row-reverse": menu && !fullColumn,
  });

  const grid = classNames({
    "col-12": full && !fullColumn,
    "col-md-10 offset-md-1 col-lg-8 offset-lg-0": full && menu && !fullColumn,
    "col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-1": !full && !fullColumn,
    "m-auto": !full && centered && !fullColumn,
  });

  const styles = classNames("section-editorial", {
    [`bg-${background}`]: background,
    "py-0": noSpace,
    "text-white": background === "dark",
    "ps-lg-4 ps-xl-5": paddingLeft,
  });

  // buttons
  let ButtonsRender;
  if (buttons) {
    ButtonsRender = buttons.map((btn, index) => (
      <Button key={`button-${index}`} {...btn} />
    ));
  }

  // xxx a11y downgrade if title is not set, quick fix to review asap
  if (!title) {
    // eslint-disable-next-line no-param-reassign
    id = undefined;
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className={container}>
        <div className={row}>
          {
            // XXX This is a section index template, don't remove
            /* menu && ( }
            <div className="d-none d-lg-block col-lg-3 offset-lg-1 affix-parent">
              <div className="sidebar-wrapper my-lg-0 affix-top">
                <div className="sidebar-linklist-wrapper">
                  <div className="link-list-wrapper">
                    <ul className="link-list">
                      <li>
                        <a className="list-item medium active" href="#">
                          <span>Link lista 1 (attivo)</span>
                        </a>
                      </li>
                      <li>
                        <a className="list-item medium" href="#">
                          <span>Link lista 3</span>
                        </a>
                      </li>
                      <li>
                        <a className="list-item medium" href="#">
                          <span>Link lista 4</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) */
          }
          <div className={grid}>
            <div>
              {title && (
                <HLevel className={text ? "mb-1" : "mb-0"} id={id}>
                  {title}
                </HLevel>
              )}
              {text && (
                <div className="text-container mb-5">
                  <ReactMarkdown>{text}</ReactMarkdown>
                </div>
              )}
              {ButtonsRender && (
                <div className="buttons-wrapper mt-5">{ButtonsRender}</div>
              )}
              {components?.map((item, index) => {
                const Switcher = SwitchComponents[item.name];

                return (
                  <Switcher
                    key={`switcher-${index}`}
                    componentViewerData={
                      item.name === "ComponentView"
                        ? componentViewerData
                        : undefined
                    }
                    {...item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionEditorial;
