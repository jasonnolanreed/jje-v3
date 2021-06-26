import {router} from '../../router.js';
import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './laugh-detail-templates.js';

import pageData from '../../data/page-data.js';
import laughs from '../../data/laughs.js';

import '../../components/detail-nav/detail-nav.js';

export class LaughDetail extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.laughs;
		this.laughs = laughs;
		this.laughKey = router.lastRouteResolved().params.laughKey;
		this.laugh = laughs[this.laughKey];
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

customElements.define(`jje-laugh-detail`, LaughDetail);
