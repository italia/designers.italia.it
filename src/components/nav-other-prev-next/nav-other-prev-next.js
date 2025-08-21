import LinkCustom from "../link-custom/link-custom";

function NavOtherPrevNext({ prev, next }) {
  if (prev) {
    // eslint-disable-next-line no-param-reassign
    prev.imageClass = "mx-3";
  }

  if (next) {
    // eslint-disable-next-line no-param-reassign
    next.imageClass = "mx-3";
  }

  return (
    <div className="nav-other-prev-next pb-5 border neutral-1-border-color-a3 pt-5 border-end-0 border-start-0 border-bottom-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col mb-4 mb-md-0 col-md-5 col-lg-4 col-xl-3">
            {prev && <LinkCustom {...prev} />}
          </div>
          <div className="col col-md-5 offset-md-2 col-lg-4 offset-lg-4 col-xl-3 offset-xl-6 d-flex justify-content-end">
            {next && <LinkCustom {...next} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavOtherPrevNext;
