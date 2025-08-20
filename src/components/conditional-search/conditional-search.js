import { Suspense, lazy } from "react";

const LazySearchMain = lazy(() => import("../search-main/search-main"));

function ConditionalSearch(props) {
  return (
    <Suspense
      fallback={
        <section
          className="search-main bg-light"
          aria-labelledby="searchHomeTitle"
        >
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 g-0">
                <div className="search-main-content px-3 py-5 px-lg-0 px-lg-5 py-lg-6">
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">
                        Caricamento ricerca...
                      </span>
                    </div>
                    <p className="mt-3 text-muted">Caricamento ricerca...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <LazySearchMain {...props} />
    </Suspense>
  );
}

export default ConditionalSearch;
