import {JJEElement} from '../../classes/jje-element.js';
import {makeTemplate} from './lyrics-templates.js';

import pageData from '../../data/page-data.js';
import lyrics from '../../data/lyrics.js';
import lyricsAudios from '../../data/lyric-audios.js';

export class Lyrics extends JJEElement {
	constructor() {
		super();
		this.pageData = pageData.lyrics;
		this.lyrics = lyrics;
		this.lyricsAudios = lyricsAudios;
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

customElements.define(`jje-lyrics`, Lyrics);
