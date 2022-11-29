import { TrackFocus } from "bootstrap-italia/dist/bootstrap-italia.esm"
import { FontsLoader } from "bootstrap-italia/dist/bootstrap-italia.esm"

const trackFocusDummy = TrackFocus //trick treeshaking

if (typeof document !== "undefined") {
  window.__PUBLIC_PATH__ = '/fonts'
}
