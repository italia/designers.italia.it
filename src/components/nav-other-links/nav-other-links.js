import Icon from "../icon/icon";
import LinkCustom from "../link-custom/link-custom";

function NavOtherLinks({ icon, title, items }) {
  let linkItems;

  if (items) {
    linkItems = items.map((item, index) => {
      // eslint-disable-next-line no-param-reassign
      item.imageClass = "me-3";
      return (
        <div
          className="col-10 mb-2 mb-md-0 col-md-6 col-lg-3"
          key={`link-${index}`}
        >
          <LinkCustom {...item} />
        </div>
      );
    });
  }

  return (
    <div className="nav-other-links pb-5">
      <div className="container-xxl">
        <div className="row">
          <p className="d-flex align-items-center small text-uppercase text-secondary">
            <Icon {...icon} />
            <strong>{title}</strong>
          </p>
        </div>
        <div className="row">{linkItems}</div>
      </div>
    </div>
  );
}

export default NavOtherLinks;
