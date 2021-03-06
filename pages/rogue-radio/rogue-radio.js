import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './rogue-radio-templates.js';

import pageData from '../../data/page-data.js';
import rogueRadios from '../../data/rogue-radios.js';

export class RogueRadio extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData[`rogue-radio`];
		this.rogueRadios = rogueRadios;
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
			document.title = this.pageData.title;
			this.innerHTML = makeTemplate(this);
		} catch(error) {
			console.error(`Error rendering`, error);
		}
	}
}

customElements.define(`jje-rogue-radio`, RogueRadio);
