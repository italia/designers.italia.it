import { Suspense, lazy } from "react";

const LazyMediaPlayer = lazy(() => import("../media-player/media-player"));

const ConditionalMediaPlayer = (props) => (
  <Suspense fallback={<div>Loading media player...</div>}>
    <LazyMediaPlayer {...props} />
  </Suspense>
);

export default ConditionalMediaPlayer;