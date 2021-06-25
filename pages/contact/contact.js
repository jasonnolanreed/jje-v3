import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './contact-templates.js';

import pageData from '../../data/page-data.js';

export class Contact extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.contact;
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

customElements.define(`jje-contact`, Contact);
