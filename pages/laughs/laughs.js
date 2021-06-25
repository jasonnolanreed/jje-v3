import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './laughs-templates.js';

import pageData from '../../data/page-data.js';
import laughs from '../../data/laughs.js';

export class Laughs extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.laughs;
		this.laughs = laughs;
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

customElements.define(`jje-laughs`, Laughs);
