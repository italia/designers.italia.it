import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css";

import "./breadcrumbs.scss";

function Breadcrumbs({ pageContext, crumbLabel }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const styles = "ps-lg-4 ms-lg-2";

  return (
    <div>
      {crumbLabel ? (
        <div className={styles}>
          <Breadcrumb
            crumbs={crumbs}
            crumbLabel={crumbLabel}
            crumbSeparator=" > "
          />
        </div>
      ) : (
        <div className={styles}>
          <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
        </div>
      )}
    </div>
  );
}

export default Breadcrumbs;
