import React from "react"
import { useEffect } from "react";
import { VideoPlayer, AcceptOverlay } from "bootstrap-italia"
import parse from 'html-react-parser';
import ReactMarkdown from "react-markdown"
import { Script } from "gatsby"

const messages = {
  it: {
    rememberLabel: 'Ricorda la mia scelta',
    acceptLabel: 'Accetta',
    trascriptionLabel: 'Trascrizione',
    cookiePolicy: 'Devi accettare i cookie di YouTube per abilitare la visione di questo contenuto. Scopri cosa sono i cookie e approfondisci i dettagli nella nostra <a href="https://designers.italia.it/privacy-policy#cookie/" className="text-white">cookie policy</a>. '
  },
  en: {
    rememberLabel: 'Remember my choice',
    acceptLabel: 'Accept',
    trascriptionLabel: 'Transcription',
    cookiePolicy: 'You must accept YouTube cookies to enable viewing of this content. Find out what cookies are and read more about them in our <a href="https://designers.italia.it/privacy-policy#cookie/" className="text-white">cookie policy (italian language)</a>.'
  },
};

// TO DO
// - enable multiple videos (different ids + unique youtube.js + ...)
// - poster...
// - media archive > switch to cards...
// - youtube link...
// - privacy management
// - privacy link... 
// - modular approach for local videos/youtubes/...
// - download thumbnail during build- eg. url: http://i3.ytimg.com/vi/_0j7ZQ67KtY/hqdefault.jpg

const MediaPlayerEl = (
  {
    url,
    lang,
    trascription,
    poster
  }) => {
  let video = null;
  const t = (key) => messages[lang][key];
  useEffect(() => {
    new AcceptOverlay(document.getElementsByClassName('accept-video')[0], {
      service: 'youtube.com'
    })
    video = new VideoPlayer(document.getElementsByClassName('video-js')[0])
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <div className="acceptoverlayable">
        <div className="acceptoverlay acceptoverlay-primary fade show">
          <div className="acceptoverlay-inner">
            <div className="acceptoverlay-icon">
              <svg className="icon icon-xl"><use href="/dist/svg/sprites.svg#it-video"></use></svg>
            </div>
            <p>{parse(t('cookiePolicy'))}</p>
            <div className="acceptoverlay-buttons bg-dark">
              <div className="form-check">
                <input id="chk-remember" type="checkbox" data-bs-accept-remember></input>
                <label htmlFor="chk-remember">{t('rememberLabel')}</label>
              </div>
              <button onClick={() => video.setYouTubeVideo(url)}
                type="button" className="btn btn-primary accept-video" data-bs-accept-from="youtube.com">{t('acceptLabel')}</button>
            </div>
          </div>
        </div>
        <div>
          <video controls data-bs-video
            className="video-js"
            width="640" height="264">
          </video>
        </div>
      </div>
      <div className="vjs-transcription accordion">
        <div className="accordion-item">
          <h2 className="accordion-header " id="transcription-head9">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription9" aria-expanded="true" aria-controls="transcription">
              {t('trascriptionLabel')}
            </button>
          </h2>
          {trascription &&
            <div id="transcription9" className="accordion-collapse collapse" role="region" aria-labelledby="transcription-head9">
              {/* <div className="accordion-body">{parse(trascription)}</div> */}
              <div className="accordion-body">
                <ReactMarkdown>{trascription}</ReactMarkdown>
                </div>
            </div>
          }
        </div>
      </div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/3.0.1/Youtube.min.js" />
    </div>
  )
}

export default MediaPlayerEl
