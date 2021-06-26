import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './detail-nav-templates.js';

export class DetailNav extends JJEElement {
	constructor() {
		super();
		this.previousKey = null;
		this.nextKey = null;
		this.collection = null;
	}

	connectedCallback() {
		super.connectedCallback();
		this.render();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	static get observedAttributes() {
		return [`currentkey`, `collection`, `baseurl`];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}

	render() {
		super.render();
		this.collection = JSON.parse(decodeURI(this.getAttribute(`collection`)));
		this._setIds();
		try {
			this.innerHTML = makeTemplate(this);
		} catch(error) {
			console.error(`Error rendering`, error);
		}
	}

	_setIds() {
		let indexOfCurrent = -1;
		const currentDataKey = this.getAttribute(`currentkey`);
		const collectionKeys = Object.keys(this.collection);
		collectionKeys.map((itemKey, index) => {
			if (currentDataKey !== collectionKeys[index]) { return; }
			indexOfCurrent = collectionKeys.indexOf(itemKey);
		});
		if (indexOfCurrent === -1) { return; }
		if (indexOfCurrent > 0) {
			this.previousKey = collectionKeys[indexOfCurrent - 1];
		} else {
			this.previousKey = null;
		}
		if ((indexOfCurrent + 1) < collectionKeys.length) {
			this.nextKey = collectionKeys[indexOfCurrent + 1];
		} else {
			this.nextKey = null;
		}
	}
}

customElements.define(`jje-detail-nav`, DetailNav);
