import React from "react"
import { useEffect } from "react";
import { VideoPlayer, AcceptOverlay } from "bootstrap-italia"


const VideoEl = (props) => {
  let video = null;
  useEffect(() => {
    new AcceptOverlay(document.getElementsByClassName('accept-video')[0],{
      service: 'youtube.com'
    })
    video = new VideoPlayer(document.getElementsByClassName('video-js')[0])
  });
  return (
    <div className="acceptoverlayable">
      <div className="acceptoverlay acceptoverlay-primary fade show">
        <div className="acceptoverlay-inner">
          <div className="acceptoverlay-icon">
            <svg className="icon icon-xl"><use href="/dist/svg/sprites.svg#it-video"></use></svg>
          </div>
          <p>Questo contenuto è ospitato da un sito di terze parti. Mostrando il contenuto esterno accetti i <a href="https://www.youtube.com/t/terms" className="text-white">termini e le condizioni di youtube.com.</a></p>
          <div className="acceptoverlay-buttons bg-dark">
            <div className="form-check">
              <input id="chk-remember" type="checkbox" data-bs-accept-remember></input>
              <label for="chk-remember">Ricorda la mia scelta</label>
            </div>
            <button onClick={() => video.setYouTubeVideo('https://youtu.be/_0j7ZQ67KtY')}   
            type="button" className="btn btn-primary accept-video" data-bs-accept-from="youtube.com">Accetta</button>
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
                Trascrizione
              </button>
            </h2>
            <div id="transcription9" className="accordion-collapse collapse" role="region" aria-labelledby="transcription-head9">
              <div className="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEl
