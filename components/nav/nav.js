import '../social/social.js';

import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './nav-templates.js';

export class Nav extends JJEElement {
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
		this._bindNavClickEvents();
		try {
			this.innerHTML = makeTemplate(this);
		} catch(error) {
			console.error(`Error rendering`, error);
		}
	}

	_bindNavClickEvents() {
		document.querySelector(".nav-toggle-switch").addEventListener("click", event => {
			document.querySelector(".main-layout-container").classList.toggle("nav-open");
		});
		document.querySelector(".content-overlay").addEventListener("click", event => {
			document.querySelector(".main-layout-container").classList.remove("nav-open");
		});
	}
}

customElements.define(`jje-nav`, Nav);
