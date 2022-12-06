import TrackFocus from './track-focus'

import BOOTSTRAP_ITALIA_VERSION from '../version'

export default () => {
    if (!window.BOOTSTRAP_ITALIA_VERSION) {
        new TrackFocus();
        window.BOOTSTRAP_ITALIA_VERSION = BOOTSTRAP_ITALIA_VERSION
    }
}