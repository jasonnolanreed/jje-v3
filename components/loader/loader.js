import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './loader-templates.js';

export class Loader extends JJEElement {
	constructor() {
		super();
		this.loadingTimeout = null;
	}

	static get observedAttributes() {
		return [`loading`];
	}

	get loading() {
		return this.getAttribute(`loading`);
	}

	set loading(newValue) {
		if (typeof newValue !== `boolean`) { return; }
		if (newValue === true) {
			this.loadingTimeout = setTimeout(_ => {
				this.setAttribute(`loading`, newValue);
			}, 1000);
		} else {
			if (this.loadingTimeout) {
				clearTimeout(this.loadingTimeout);
				this.loadingTimeout = null;
			}
			this.removeAttribute(`loading`);
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// Only called for attributes returned from observedAttributes
	}

	connectedCallback() {
		super.connectedCallback();
		this.render();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	render() {
		try {
			this.innerHTML = makeTemplate(this);
		} catch(error) {
			console.error(`Error rendering`, error);
		}
	}
}

customElements.define(`jje-loader`, Loader);
