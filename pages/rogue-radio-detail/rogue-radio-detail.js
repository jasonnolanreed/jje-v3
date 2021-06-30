import {router} from '../../router.js';
import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './rogue-radio-detail-templates.js';

import pageData from '../../data/page-data.js';
import rogueRadios from '../../data/rogue-radios.js';

import '../../components/detail-nav/detail-nav.js';

export class RogueRadioDetail extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData[`rogue-radio`];
		this.rogueRadios = rogueRadios;
		this.rogueRadioKey = router.lastRouteResolved().params.rogueRadioKey;
		this.rogueRadio = rogueRadios[this.rogueRadioKey];
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

customElements.define(`jje-rogue-radio-detail`, RogueRadioDetail);
