import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"
import { CarouselBI, Alert, Tooltip, Sticky, InputNumber, BackToTop } from 'bootstrap-italia'
import { useState, useEffect } from 'react';


const IndexPage = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const carousel = new CarouselBI(document.getElementById('myCarousel'))

    const alert = new Alert(document.getElementsByClassName('alert')[0])

    setTimeout(() => {
      alert.close()
    }, 15000);

    document.querySelectorAll('.ttp').forEach(el => {
      new Tooltip(el);
    });

    const stickyElement = document.getElementById('sticky');
    const sticky = new Sticky(stickyElement, {
      positionType: 'sticky',
      stickyClassName: 'is-sticky',
      stackable: true,
      paddingTop: 0,
    });
    const inputNumber = new InputNumber(document.getElementById('inputNumber3'))
    const backToTop = new BackToTop(document.getElementsByClassName('back-to-top')[0])
  });

  return (
    <main>
      <div id="sticky" class="it-header-slim-wrapper it-header-sticky" data-bs-toggle="sticky"
        data-bs-position-type="fixed" data-bs-target="#stickyTrigger1" data-bs-sticky-class-name="is-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="it-header-slim-wrapper-content">
                <a class="d-none d-lg-block navbar-brand" href="#">Questa demo illustra l'utilizzo di Bootstrap
                  Italia 2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="it-hero-wrapper it-dark it-overlay it-bottom-overlapping-content">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img
              src="https://p0.piqsels.com/preview/590/580/957/4k-wallpaper-astronomy-constellations-environment.jpg"
              title="img title" alt="imagealt" /></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="it-hero-text-wrapper bg-dark">
                <span class="it-category">Category</span>
                <h1>Una semplice demo con Bootstrap Italia 2.</h1>
                <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit
                  ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc
                  mi ipsum faucibus.</p>
                <div class="it-btn-container"><a class="btn btn-sm btn-secondary" href="#">Label button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card-wrapper card-space">
              <div class="card card-bg">
                <div class="card-body">
                  <h5 class="card-title">La città nuova, Alda Merini</h5>
                  <p class="card-text"> Ecco un <a href="#" class="ttp" title="Primo tooltip">bianco
                    scenario</a><br />
                    per tratteggiarvi l’accompagnamento<br />
                    degli oggetti di sfondo che pur vivono.<br />
                    Non ne sarò <a href="#" class="ttp" title="Secondo tooltip">l’artefice</a>
                    impaziente.<br />
                    Berrò alle coppe della nostalgia,<br />
                    avrò preteso d’ozio nelle lacrime...<br />
                    perché non mi ribello alla natura:<br />
                    la mia lentezza li esaspera...<br />
                    La mia lentezza? No, la mia fiducia.<br />
                    Per adesso è deserto.<br />
                    <a href="#" class="ttp" title="Terzo tooltip">Il mondo può rifarsi senza me</a>,<br />
                    E intanto gli altri mi denigreranno
                  </p>
                  <a class="read-more" href="#">
                    <span class="text">Leggi di più</span>
                    <svg class="icon">
                      <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="alert alert-danger" role="alert">
        Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
      </div>
      <div>
        <label for="inputNumber3" class="input-number-label">Fai una donazione</label>
        <span class="input-number input-number-currency">
          <input type="number" id="inputNumber3" name="inputNumber3" step="any" value="3.50" min="0" />
          <button class="input-number-add">
            <span class="visually-hidden">Aumenta valore Euro</span>
          </button>
          <button class="input-number-sub">
            <span class="visually-hidden">Diminuisci valore Euro</span>
          </button>
        </span>
      </div>
      <div id="myCarousel" class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card">
                    <div class="card-body">
                      <div class="category-top">
                        <a class="category" href="#">Category</a>
                        <span class="data">10/12/2022</span>
                      </div>
                      <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit…</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span class="card-signature">di Federico De Paolis</span>
                      <a class="read-more" href="#">
                        <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit…</span></span>
                        <svg class="icon">
                          <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card">
                    <div class="card-body">
                      <div class="category-top">
                        <a class="category" href="#">Category</a>
                        <span class="data">10/12/2022</span>
                      </div>
                      <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit…</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span class="card-signature">di Federico De Paolis</span>
                      <a class="read-more" href="#">
                        <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit…</span></span>
                        <svg class="icon">
                          <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card">
                    <div class="card-body">
                      <div class="category-top">
                        <a class="category" href="#">Category</a>
                        <span class="data">10/12/2022</span>
                      </div>
                      <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit…</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span class="card-signature">di Federico De Paolis</span>
                      <a class="read-more" href="#">
                        <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit…</span></span>
                        <svg class="icon">
                          <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card">
                    <div class="card-body">
                      <div class="category-top">
                        <a class="category" href="#">Category</a>
                        <span class="data">10/12/2022</span>
                      </div>
                      <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit…</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span class="card-signature">di Federico De Paolis</span>
                      <a class="read-more" href="#">
                        <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit…</span></span>
                        <svg class="icon">
                          <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" aria-hidden="true" data-bs-toggle="backtotop" class="back-to-top back-to-top-small">
        <svg class="icon icon-light">
          <use href="node_modules/bootstrap-italia/dist/svg/sprites.svg#it-arrow-up"></use>
        </svg>
      </a>
      <footer class="py-4"></footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
