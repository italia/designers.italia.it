import Link from "../link/link";
import Icon from "../icon/icon";
import "./footer-small.scss";

function FooterSmall({ items }) {
  return (
    <div className="it-footer-small-prints clearfix">
      <div className="container-xxl">
        <h3 className="visually-hidden text-white">Sezione Link Utili</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          {items.map((value, index) => (
            <li key={`foot-item-${index}`} className="list-inline-item">
              <Link
                to={value.url}
                target={value.blank ? "_blank" : undefined}
                rel={value.blank ? "noreferrer" : undefined}
                aria-label={value.ariaLabel}
              >
                {value.title}
                {value.icon && <Icon {...value.icon} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterSmall;
