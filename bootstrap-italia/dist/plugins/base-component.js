import BSBaseComponent from 'bootstrap/js/src/base-component.js';
import initBootstrapItalia from './init.js';

class BaseComponent extends BSBaseComponent {
    constructor(element) {
        initBootstrapItalia();
        super(element);
    }
}

export { BaseComponent as default };
//# sourceMappingURL=base-component.js.map
