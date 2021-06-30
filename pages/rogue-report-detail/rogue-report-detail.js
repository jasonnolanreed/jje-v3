import {router} from '../../router.js';
import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './rogue-report-detail-templates.js';

import pageData from '../../data/page-data.js';
import rogueReports from '../../data/rogue-reports.js';

import '../../components/detail-nav/detail-nav.js';

export class RogueReportDetail extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData[`rogue-report`];
		this.rogueReports = rogueReports;
		this.rogueReportKey = router.lastRouteResolved().params.rogueReportKey;
		this.rogueReport = rogueReports[this.rogueReportKey];
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

customElements.define(`jje-rogue-report-detail`, RogueReportDetail);
