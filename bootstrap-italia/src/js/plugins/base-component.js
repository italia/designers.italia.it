import BSBaseComponent from 'bootstrap/js/src/base-component.js'
import initBootstrapItalia from './init'


class BaseComponent extends BSBaseComponent {
    constructor(element) {
        initBootstrapItalia()
        super(element)
    }
}

export default BaseComponent
