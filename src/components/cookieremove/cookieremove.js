import Button from "../button/button";

export const isBrowser = () => typeof window !== "undefined";

const isServiceRemembered = (serviceKey) => {
  const services = isBrowser()
    ? JSON.parse(localStorage.getItem("bs-ck3") || "{}")
    : {};
  return services[serviceKey];
};

const isPreferencesSet = () => {
  const services = isBrowser()
    ? JSON.parse(localStorage.getItem("bs-ck3") || "{}")
    : {};
  for (const service in services) {
    if (services[service] === true) {
      return true;
    }
  }
  return false;
};

function CookieRemove({ cookies }) {
  const cookieItems = cookies.map(
    (cookie) =>
      isServiceRemembered(cookie.key) && (
        <div className="row mt-4" key={cookie.key}>
          <div className="col-12 col-md-6 mt-md-1 mb-3 mb-lg-0 fw-semibold">
            <span>{cookie.label}</span>
          </div>
          <div className="col-12 col-md-6">
            <Button
              btnStyle="outline-primary btn-xs"
              onClick={() => {
                localStorage.removeItem("bs-ck3");
                window.location.reload();
              }}
              aria-label="{accordionSrCopyLabel}"
            >
              Revoca
            </Button>
          </div>
        </div>
      ),
  );
  return (
    <div className="text-image-cta d-flex mb-5">
      <div className="content w-100">
        {isBrowser() && isPreferencesSet() ? (
          <div>
            <p>
              Hai acconsentito a installare i seguenti cookie di terze parti:
            </p>
            {cookieItems}
          </div>
        ) : (
          <div>
            <p>Non hai installato cookie di terze parti.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CookieRemove;
