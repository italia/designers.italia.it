import { Suspense, lazy } from "react";

const LazyMediaPlayer = lazy(() => import("../media-player/media-player"));

function ConditionalMediaPlayer(props) {
  return (
    <Suspense fallback={<div>Loading media player...</div>}>
      <LazyMediaPlayer {...props} />
    </Suspense>
  );
}

export default ConditionalMediaPlayer;
