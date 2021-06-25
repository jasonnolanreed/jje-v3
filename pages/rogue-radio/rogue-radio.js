import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './rogue-radio-templates.js';

export class RogueRadio extends JJEElement {
	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
		this.render();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	render() {
		super.render();
		try {
			this.innerHTML = makeTemplate(this);
		} catch(error) {
			console.error(`Error rendering`, error);
		}
	}
}

customElements.define(`jje-rogue-radio`, RogueRadio);
