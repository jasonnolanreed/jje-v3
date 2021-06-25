import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './home-templates.js';
import pageData from '../../data/page-data.js';
import homeBanners from '../../data/home-banners.js';

import "../../components/twitter/twitter.js";

export class Home extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.home;
		this.homeBanners = homeBanners;
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

customElements.define(`jje-home`, Home);
