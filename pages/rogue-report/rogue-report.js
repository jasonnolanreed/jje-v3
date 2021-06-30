import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './rogue-report-templates.js';

import pageData from '../../data/page-data.js';
import rogueReports from '../../data/rogue-reports.js';

export class RogueReport extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData[`rogue-report`];
		this.rogueReports = rogueReports;
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

customElements.define(`jje-rogue-report`, RogueReport);
