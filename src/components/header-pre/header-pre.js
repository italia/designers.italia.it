/* eslint-disable react/jsx-no-useless-fragment */
import Link from "../link/link";

function HeaderPre({ data }) {
  if (typeof window === "undefined") {
    return <></>;
  }

  return window.location.hostname === data.showOn ? (
    <div className="header-pre bg-white py-2 small">
      <div className="container-xxl">
        <div className="text-center">
          <span className="fw-semibold">{data.title}</span> -{" "}
          <Link to={`https://designers.italia.it${window.location.pathname}`}>
            {data.link}
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default HeaderPre;
