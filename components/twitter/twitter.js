import {JJEElement} from '../../classes/jje-element.js';

export class Twitter extends JJEElement {
	constructor() {
		super();
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
			this.innerHTML =
			`<a class="twitter-timeline" href="https://twitter.com/jayjacksonmusic" data-widget-id="730186732008673280">Tweets by @jayjacksonmusic</a>`;
		} catch(error) {
			console.error(`Error rendering`, error);
		}
		this._initWidget();
	}

	_initWidget() {
		(function(d, s, id) {
			// If Twitter has already been instantiated, remove script so
			// new instantiation can happen when component is rendered again
			if (d.getElementById(id)) {
				let twitterScript = d.getElementById(id);
				twitterScript.parentNode.removeChild(twitterScript);
			}
			let js;
			let fjs = d.getElementsByTagName(s)[0];
			let p = /^http:/.test(d.location) ? "http" : "https";
			js = d.createElement(s);
			js.id = id;
			js.src = p + "://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, "script", "twitter-wjs"));
	}
}

customElements.define(`jje-twitter`, Twitter);
