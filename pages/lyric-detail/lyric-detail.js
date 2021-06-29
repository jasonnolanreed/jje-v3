import {router} from '../../router.js';
import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './lyric-detail-templates.js';

import pageData from '../../data/page-data.js';
import lyrics from '../../data/lyrics.js';

import '../../components/detail-nav/detail-nav.js';

export class LyricDetail extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.lyrics;
		this.lyrics = lyrics;
		this.lyricKey = router.lastRouteResolved().params.lyricKey;
		this.lyric = lyrics[this.lyricKey];
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

customElements.define(`jje-lyric-detail`, LyricDetail);
