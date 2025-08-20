import { useEffect, useId, useRef } from "react";
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
  const videoRef = useRef(null);
  const playerRef = useRef(null);

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

  if (trascriptionLabel) messages.it.trascriptionLabel = trascriptionLabel;
  if (trascriptionLabelEN) messages.en.trascriptionLabel = trascriptionLabelEN;

  const t = (key) => messages[lang][key];

  const videoId = `video-js-${useId().replace(/:/g, "-")}`; // fix React useId for CSS selectors

  let HLevel;
  if (trascriptionHeadingLevel) {
    HLevel = `h${trascriptionHeadingLevel}`;
  } else {
    HLevel = `h2`;
  }

  useEffect(() => {
    let cleanup = () => {};

    const initializeVideoPlayer = async () => {
      try {
        // Dynamic import Bootstrap Italia - this loads videojs globally
        const { VideoPlayer, AcceptOverlay } = await import("bootstrap-italia");

        const videoElement = document.getElementById(videoId);
        const acceptElement = document.getElementById(
          `${videoId}-accept-video`,
        );

        if (!videoElement || !acceptElement) {
          return;
        }

        const acceptOverlay = new AcceptOverlay(acceptElement, {
          service: "youtube.com",
        });

        const video = new VideoPlayer(videoElement);
        playerRef.current = video;

        if (typeof videojs !== "undefined") {
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
        }

        if (subtitles) {
          video.player.addRemoteTextTrack({
            kind: "subtitles",
            label: "Italiano",
            srclang: "it",
            default: true,
            src: subtitles,
          });
        }

        if (typeof window !== "undefined" && window.localStorage) {
          const cookieData = JSON.parse(localStorage.getItem("bs-ck3") || "{}");
          if (cookieData["youtube.com"]) {
            setTimeout(() => {
              video.setYouTubeVideo(url);
            }, 1000);
          }
        }

        cleanup = () => {
          try {
            if (video && video.player) {
              video.player.dispose();
            }
            if (acceptOverlay && acceptOverlay.dispose) {
              acceptOverlay.dispose();
            }
          } catch (error) {
            // Silently handle cleanup errors
          }
        };
      } catch (error) {
        // Silently handle initialization errors
      }
    };

    initializeVideoPlayer();

    // Cleanup on unmount
    return cleanup;
  }, [videoId, url, subtitles]);

  const handleAcceptVideo = () => {
    if (playerRef.current) {
      playerRef.current.setYouTubeVideo(url);
      if (subtitles && playerRef.current.player) {
        playerRef.current.player.addRemoteTextTrack({
          kind: "subtitles",
          label: "Italiano",
          srclang: "it",
          default: true,
          src: subtitles,
        });
      }
    }
  };

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
                onClick={handleAcceptVideo}
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
            ref={videoRef}
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
