import TrackFocus from './track-focus.js';
import BOOTSTRAP_ITALIA_VERSION from '../version.js';

var initBootstrapItalia = () => {
    if (!window.BOOTSTRAP_ITALIA_VERSION) {
        new TrackFocus();
        window.BOOTSTRAP_ITALIA_VERSION = BOOTSTRAP_ITALIA_VERSION;
    }
};

export { initBootstrapItalia as default };
//# sourceMappingURL=init.js.map
