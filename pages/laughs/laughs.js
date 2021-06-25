import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './laughs-templates.js';

export class Laughs extends JJEElement {
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

customElements.define(`jje-laughs`, Laughs);
