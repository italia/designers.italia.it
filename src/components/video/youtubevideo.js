import React from "react"
import { useEffect } from "react";
import { VideoPlayer, AcceptOverlay } from "bootstrap-italia"
import parse from 'html-react-parser';


const messages = {
  it: {
    rememberLabel: 'Ricorda la mia scelta',
    acceptLabel: 'Accetta',
    trascriptionLabel: 'Trascrizione',
    privacyPolicy: 'Questo contenuto è ospitato da un sito di terze parti. Mostrando il contenuto esterno accetti i <a href="https://www.youtube.com/t/terms" className="text-white">termini e le condizioni di youtube.com.</a>'
  },
  en: {
    rememberLabel: 'Remember my choice',
    acceptLabel: 'Accept',
    trascriptionLabel: 'Transcription',
    privacyPolicy: 'This content is hosted by a third party site. By showing external content you agree to the <a href="https://www.youtube.com/t/terms" className="text-white">youtube.com terms and conditions.</a>'
  },
};

const YoutubeVideoEl = (
  {
    url,
    lang,
    trascription
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
            <p>{parse(t('privacyPolicy'))}</p>
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
          <div className="vjs-transcription accordion">
            <div className="accordion-item">
              <h2 className="accordion-header " id="transcription-head9">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription9" aria-expanded="true" aria-controls="transcription">
                  {t('trascriptionLabel')}
                </button>
              </h2>
              <div id="transcription9" className="accordion-collapse collapse" role="region" aria-labelledby="transcription-head9">
                <div className="accordion-body">{parse(trascription)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideoEl
