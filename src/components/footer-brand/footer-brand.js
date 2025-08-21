import ReactMarkdown from "react-markdown";
import ImageResponsive from "../image-responsive/image-responsive";
import Link from "../link/link";
import "./footer-brand.scss";

function FooterBrand({ background, title, justifyLogos, logos }) {
  const styles =
    "footer-brand pt-5 pb-4" +
    `${background ? ` bg-${background}` : ""}` +
    `${background === "dark" || background === "primary" ? " text-white" : ""}`;

  const logosStyles =
    "logos list-unstyled d-flex flex-column flex-md-row flex-wrap align-items-center mb-0" +
    `${justifyLogos ? " justify-content-md-between" : ""}`;

  return (
    <div className={styles}>
      <div className="container-xxl">
        <div className="row">
          <div className="col px-4 text-center text-md-start">
            <ReactMarkdown className="small mb-4">{title}</ReactMarkdown>
          </div>
        </div>
        <div className="row">
          <div className="col px-4">
            <ul className={logosStyles}>
              {logos.map((value, index) => (
                <li key={`item-${index}`} className="mb-5 me-md-5 ">
                  <Link
                    to={value.url}
                    target={value.blank ? "_blank" : undefined}
                    rel={value.blank ? "noreferrer" : undefined}
                    className="d-block"
                  >
                    <ImageResponsive
                      src={value.img}
                      alt={value.ariaLabel}
                      className={value.small ? "small" : undefined}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBrand;
