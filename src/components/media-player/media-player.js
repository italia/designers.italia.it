import React, { useEffect } from "react";
import uniqueId from "lodash/uniqueId";

import { VideoPlayer, AcceptOverlay } from "bootstrap-italia";
import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";

// TO DO
// - [future] modular approach for local videos/youtubes/...
// - [future] download thumbnail during build - eg. url: http://i3.ytimg.com/vi/_0j7ZQ67KtY/hqdefault.jpg

function MediaPlayerEl({ url, lang, trascription, poster }) {
  const messages = {
    it: {
      rememberLabel: "Ricorda per tutti i video",
      acceptLabel: "Accetta",
      trascriptionLabel: "Trascrizione",
      cookiePolicy:
        'Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella <a href="/privacy-policy/#gestione-cookie" className="text-white">cookie policy</a>. ',
    },
    en: {
      rememberLabel: "Remember my choice",
      acceptLabel: "Accept",
      trascriptionLabel: "Transcription",
      cookiePolicy:
        'You have to accept YouTube cookies to enable viewing of this video. You can manage the preferences via <a href="/privacy-policy/#gestione-cookie" className="text-white">cookie policy (italian language)</a>.',
    },
  };

  let video = null;
  const t = (key) => messages[lang][key];

  const videoId = `video-js-${uniqueId("id_")}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/3.0.1/Youtube.min.js";
    document.head.appendChild(script);
    // eslint-disable-next-line no-new
    new AcceptOverlay(document.getElementById(`${videoId}-accept-video`), {
      service: "youtube.com",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    video = new VideoPlayer(document.getElementById(videoId));
    const ButtonComp = videojs.getComponent("Button");
    const notesBut = new ButtonComp(video.player, {
      clickHandler() {
        window.location.replace("/privacy-policy/#gestione-cookie");
      },
    });
    video.player.controlBar.addChild(notesBut, {}, 1);
    notesBut.el_.innerHTML = '<button class="vjs-play-control vjs-control vjs-button vjs-playing" type="button" title="Gestione cookie" aria-disabled="false" data-focus-mouse="false"><svg class="icon icon-white"><use href="/svg/sprites.svg#it-locked"></use></svg><span class="vjs-control-text" aria-live="polite">Gestione cookie</span></button>';
    video.player.controlBar.removeChild("SkipBackward");
    video.player.controlBar.removeChild("SkipForward");
    if (JSON.parse(localStorage.getItem("bs-ck3") || "{}")["youtube.com"]) {
      setTimeout(() => {
        video.setYouTubeVideo(url);
      }, 1000);
    }
  });

  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="acceptoverlayable">
        <div className="acceptoverlay acceptoverlay-primary fade show">
          <div className="acceptoverlay-inner">
            <div className="acceptoverlay-icon">
              <svg className="icon icon-xl">
                <use href="/dist/svg/sprites.svg#it-video" />
              </svg>
            </div>
            <p>{parse(t("cookiePolicy"))}</p>
            <div className="acceptoverlay-buttons bg-dark">
              <button
                onClick={() => {
                  console.log("clicca");
                  video.setYouTubeVideo(url);
                }}
                type="button"
                id={`${videoId}-accept-video`}
                className="btn btn-primary accept-video"
                data-bs-accept-from="youtube.com"
              >
                {t("acceptLabel")}
              </button>
              <div className="form-check">
                <input
                  id={`${videoId}-chk-remember`}
                  type="checkbox"
                  data-bs-accept-remember
                />
                <label htmlFor={`${videoId}-chk-remember`}>
                  {t("rememberLabel")}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <video
            controls
            data-bs-video
            poster={poster}
            id={videoId}
            className="video-js"
            width="640"
            height="264"
          />
        </div>
      </div>
      <div className="vjs-transcription accordion">
        <div className="accordion-item">
          <h2 className="accordion-header " id="transcription-head9">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${videoId}-transcription`}
              aria-expanded="true"
              aria-controls="transcription"
            >
              {t("trascriptionLabel")}
            </button>
          </h2>
          {trascription && (
            <div
              id={`${videoId}-transcription`}
              className="accordion-collapse collapse"
              role="region"
              aria-labelledby="transcription-head9"
            >
              <div className="accordion-body">
                <ReactMarkdown>{trascription}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MediaPlayerEl;
