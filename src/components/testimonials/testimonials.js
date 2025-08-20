import Icon from "../icon/icon";
import "./testimonials.scss";

function Testimonials({ items }) {
  return (
    <div className="testimonials pt-5">
      <div className="row justify-content-md-between">
        {items.map((item, index) => (
          <div key={`col-${index}`} className="col-12 col-md-5">
            <div className="testimonial-wrapper d-xl-flex mb-5 mb-lg-0">
              <div className="icon-zone me-4">
                <div className="icon-wrapper d-flex align-items-center justify-content-center">
                  <Icon {...item.icon} />
                </div>
              </div>
              <div className="testimonial-text mt-4">
                <p className="font-serif lead mb-4">
                  <em>{item.text}</em>
                </p>
                <span className="d-flex justify-content-end fw-medium">
                  <em>— @{item.signature}</em>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
