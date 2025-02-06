import Loadable from "@loadable/component"

const LoadableMediaPlayer = Loadable(() => import("./loadable-media-player"))

export default LoadableMediaPlayer;
