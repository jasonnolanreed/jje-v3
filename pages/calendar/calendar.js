import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './calendar-templates.js';

import pageData from '../../data/page-data.js';
import calendar from '../../data/calendar.js';

export class Calendar extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.calendar;
		this.calendar = calendar;
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

customElements.define(`jje-calendar`, Calendar);
