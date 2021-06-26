const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<div class="detail-nav">
	${component.previousKey ? outputPrevious(component) : outputPreviousDisabled(component)}
	<div class="detail-nav-control list">
	<a href="${component.getAttribute('baseurl')}">
	<jje-icon name="list"></jje-icon>
	<span class="label">List</span>
	</a>
	</div>
	${component.nextKey ? outputNext(component) : outputNextDisabled(component)}
</div>

`
);

const outputPrevious = component => (
	`
	<div class="detail-nav-control previous">
		<a href="${component.getAttribute('baseurl')}/${component.previousKey}">
			<jje-icon name="arrow_back"></jje-icon>
			<span class="label">Prev</span>
		</a>
	</div>
	`
);

const outputPreviousDisabled = component => (
	`
	<div class="detail-nav-control previous disabled">
		<a>
			<jje-icon name="arrow_back"></jje-icon>
			<span class="label">Prev</span>
		</a>
	</div>
	`
);

const outputNext = component => (
	`
	<div class="detail-nav-control next">
			<a href="${component.getAttribute('baseurl')}/${component.nextKey}">
			<span class="label">Next</span>
			<jje-icon name="arrow_forward"></jje-icon>
		</a>
	</div>
	`
);

const outputNextDisabled = component => (
	`
	<div class="detail-nav-control next disabled">
		<a>
			<span class="label">Next</span>
			<jje-icon name="arrow_forward"></jje-icon>
		</a>
	</div>
	`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
