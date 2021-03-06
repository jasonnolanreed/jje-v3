export class JJEElement extends HTMLElement {
	constructor() {
		super();
		this._onClick = this._onClick.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
		this._updateNamedSize = this._setNamedSizeAttribute.bind(this);
		this._setupResizeListener = this._setupResizeListener.bind(this);
		this._clickEvents = null;
		this._namedSizes = [
			{name: `small`, width: 600},
			{name: `medium`, width: 900},
			{name: `large`, width: 1200},
			{name: `huge`, width: 1600},
		];
		this._hasSetupResizeListener = false;
		this._hasSetNamedSizes = false;
		this._hasConnected = false;
	}

	connectedCallback() {
		this._hasConnected = true;
		this.classList.add(`block`);
		this.addEventListener(`click`, this._onClick);
		this._setupResizeListener();
	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this._onClick);
		if (this._hasForm) { this.removeEventListener(`submit`, this._onSubmit); }
		if (this._resizeObserver) { this._resizeObserver.disconnect(); }
	}

	render() {
		document.querySelector(`jje-loader`).loading = false;
	}

	bindForm() {
		this._hasForm = true;
		this.addEventListener(`submit`, this._onSubmit);
	}

	setClickEvents(clickEvents) {
		this._clickEvents = clickEvents;
	}

	setNamedSizes(sizes) {
		this._hasSetNamedSizes = true;
		if (sizes) {
			this._namedSizes = sizes;
		}
		this._setupResizeListener();
	}

	_onClick(event) {
		if (!this._clickEvents) { return; }
		let targetMatched = false;
		for (let target of event.composedPath()) {
			if (typeof target.matches !== `function`) { continue; }
			for (let clickEvent of this._clickEvents) {
				if (target.matches(clickEvent.target)) {
					event.preventDefault();
					clickEvent.handler.call(this, event, target);
					targetMatched = true;
					break;
				}
			}
			if (targetMatched) { break; }
		}
	}

	_onSubmit(event) {
		for (let target of event.composedPath()) {
			if (typeof target.matches !== `function`) { continue; }
			if (target.matches(`form`)) {
				event.preventDefault();
				if (typeof this.onSubmit === `function`) {
					this.onSubmit.call(this, event, target);
				}
				break;
			}
		}
		event.preventDefault();
	}

	_setupResizeListener() {
		if (this._hasSetupResizeListener) { return; }
		if (!this._hasConnected) { return; }
		if (!this._hasSetNamedSizes) { return; }
		this._hasSetupResizeListener = true;
		if (`ResizeObserver` in window) {
			this._resizeObserver = new ResizeObserver(elements => {
				this._setNamedSizeAttribute(elements[0].contentRect.width);
			});
			setTimeout(_ => {
				this._resizeObserver.observe(this);
			}, 0);
		} else {
			// Fallback to set once and not update on resize
			setTimeout(_ => {
				this._setNamedSizeAttribute(this.getBoundingClientRect().width);
			}, 0);
		}
	}

	_setNamedSizeAttribute(width) {
		let sizeName = ``;
		for (const size of this._namedSizes) {
			if (size.width <= width) {
				sizeName = size.name;
			}
		}
		this.setAttribute(`namedsize`, sizeName);
	}
}
