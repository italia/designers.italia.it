import { Suspense, lazy } from "react";
import classNames from "classnames";
import Button from "../button/button";
import CookieRemove from "../cookieremove/cookieremove";
import "./section-media.scss";

// Define the lazy component outside the component
const LazyMediaPlayer = lazy(() => import("../media-player/media-player"));

// Define the wrapper component outside render
function MediaPlayerWithSuspense(props) {
  return (
    <Suspense fallback={<div>Loading media player...</div>}>
      <LazyMediaPlayer {...props} />
    </Suspense>
  );
}
function SectionMedia({
  title,
  hiddenSectionTitle,
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
}) {
  const SwitchComponents = {
    CookieRemove,
    MediaPlayer: MediaPlayerWithSuspense,
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
    "col-12 g-0": full && !fullColumn,
    "col-md-10 offset-md-1 col-lg-8 offset-lg-0": full && menu && !fullColumn,
    "col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-1": !full && !fullColumn,
    "m-auto": !full && centered && !fullColumn,
  });

  const styles = classNames("section-media", {
    [`bg-${background}`]: background,
    "py-0": noSpace,
    "text-white": background === "dark",
    "ps-lg-4 ps-xl-5": paddingLeft,
  });

  const titleStyles = classNames({
    "mb-1": text,
    "mb-0": !text,
    "visually-hidden": hiddenSectionTitle,
  });

  const textContainerStyles = "text-container px-3 px-lg-5 text-center pb-5";
  const textStyles = "text-container mb-5 d-flex justify-content-center";
  const textStylesP = "lead font-sans-serif mb-auto text-center";

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
          <div className={grid}>
            <div>
              <div className={textContainerStyles}>
                {title && (
                  <HLevel className={titleStyles} id={id}>
                    {title}
                  </HLevel>
                )}
                {text && (
                  <div className={textStyles}>
                    <p className={textStylesP}>{text}</p>
                  </div>
                )}
                {ButtonsRender && (
                  <div className="buttons-wrapper mt-5">
                    <div>{ButtonsRender}</div>
                  </div>
                )}
              </div>
              <div className="img-container">
                {components?.map((item, index) => {
                  const Switcher = SwitchComponents[item.name];
                  return <Switcher key={`switcher-${index}`} {...item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMedia;
