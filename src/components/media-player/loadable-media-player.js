import React, { useEffect, useId } from "react";
import { VideoPlayer, AcceptOverlay } from "bootstrap-italia";
import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";

// TODO
// - [future] modular approach for local videos/youtubes/...
// - [future] download thumbnail during build - eg. url: http://i3.ytimg.com/vi/_0j7ZQ67KtY/hqdefault.jpg

function MediaPlayerEl({
  url,
  lang,
  subtitles,
  trascription,
  trascriptionLabel,
  trascriptionLabelEN,
  trascriptionHeadingLevel,
  poster,
}) {
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

  // trascription label
  if (trascriptionLabel) messages.it.trascriptionLabel = trascriptionLabel;
  if (trascriptionLabelEN) messages.en.trascriptionLabel = trascriptionLabelEN;

  let video = null;
  const t = (key) => messages[lang][key];

  const videoId = `video-js-${useId().replace(/:/g, "-")}`; // fix React useId for CSS selectors

  // trascription heading level
  let HLevel;
  if (trascriptionHeadingLevel) {
    HLevel = `h${trascriptionHeadingLevel}`;
  } else {
    HLevel = `h2`;
  }

  useEffect(() => {
    // eslint-disable-next-line no-new
    new AcceptOverlay(document.getElementById(`${videoId}-accept-video`), {
      service: "youtube.com",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    video = new VideoPlayer(document.getElementById(videoId));
    const ButtonComp = videojs.getComponent("Button");
    const privacyPolicyButton = new ButtonComp(video.player, {
      clickHandler() {
        window.location.replace("/privacy-policy/#gestione-cookie");
      },
    });
    video.player.controlBar.addChild(privacyPolicyButton, {}, 1);
    privacyPolicyButton.el_.innerHTML =
      '<button class="vjs-play-control vjs-control vjs-button vjs-playing" type="button" title="Gestione cookie" aria-disabled="false" data-focus-mouse="false"><svg class="icon icon-white"><use href="/svg/sprites.svg#it-locked"></use></svg><span class="vjs-control-text" aria-live="polite">Gestione cookie</span></button>';
    video.player.controlBar.removeChild("SkipBackward");
    video.player.controlBar.removeChild("SkipForward");
    if (subtitles) 
      // note: all videos with voice/s must have subtitles! (a11y)
      video.player.addRemoteTextTrack({
        kind: "subtitles",
        label: "Italiano",
        srclang: "it",
        default: true,
        src: subtitles,
      });
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
                  video.setYouTubeVideo(url);
                  video.addTrack(subtitles);
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
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
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
          <HLevel className="accordion-header " id="transcription-head9">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${videoId}-transcription`}
              aria-expanded="false"
              aria-controls={`${videoId}-transcription`}
            >
              {t("trascriptionLabel")}
            </button>
          </HLevel>
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
