import ReactMarkdown from "react-markdown";
import Icon from "../icon/icon";
import Link from "../link/link";
import Tooltip from "../tooltip/tooltip";
import "./nav-position.scss";

function NavPosition({ items, footerVersion }) {
  const containerStyles =
    "nav-position" +
    `${
      footerVersion
        ? " py-5 border-top neutral-1-border-color-a3 border-end-0 border-start-0 border-bottom-0"
        : ""
    }`;

  let linkItems;

  if (items) {
    linkItems = items.map((item, index) => {
      // eslint-disable-next-line no-param-reassign
      item.icon.addonClasses = "flex-shrink-0 me-3";
      // eslint-disable-next-line no-param-reassign
      item.icon.hidden = true;
      return (
        <div key={`linkItems-${index}`}>
          <div className="d-inline-flex align-items-center me-lg-5 my-2 tag-small-size">
            <Icon {...item.icon} />
            <span className="text-uppercase text-secondary me-2">
              <strong>{item.title}</strong>
            </span>
            {item.tooltip && <Tooltip label={item.tooltip} />}
            <div className="ms-3">
              {item.url ? (
                <Link
                  to={item.url}
                  target={item.blank ? "_blank" : undefined}
                  rel={item.blank ? "noreferrer" : undefined}
                >
                  {item.label}
                  {item.screenReaderText && (
                    <span className="visually-hidden">
                      {item.screenReaderText}
                    </span>
                  )}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          </div>
          <div>{item.text && <ReactMarkdown>{item.text}</ReactMarkdown>}</div>
        </div>
      );
    });
  }
  return (
    <div className={containerStyles}>
      <div className="container-xxl">
        <div className="row">{linkItems}</div>
      </div>
    </div>
  );
}

export default NavPosition;
