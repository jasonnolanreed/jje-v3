const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="article"></jje-icon>${component.pageData.header}</h1>
<hr>
<div class="section2">
	<jje-detail-nav currentkey="${component.rogueReportKey}" collection="${encodeURI(JSON.stringify(component.rogueReports))}" baseurl="#/rogue-report"></jje-detail-nav>
</div>
<div class="section2">
	<h2 class="section00">${component.rogueReport.title}</h2>
	<h4 class="subtext section1">${component.rogueReport.date}</h4>
	${outputBodySections(component)}
</div>
<div class="section2">
	<jje-detail-nav currentkey="${component.rogueReportKey}" collection="${encodeURI(JSON.stringify(component.rogueReports))}" baseurl="#/rogue-report"></jje-detail-nav>
</div>
`
);

const outputBodySections = component => {
	let html = ``;
	for (const bodySection of component.rogueReport.bodySections) {
		html += `
		<div class="section1">
		${bodySection.heading ? '<h5>' + bodySection.heading + '</h5>' : ''}
		${bodySection.body ? '<p>' + bodySection.body + '</p>' : ''}
		${bodySection.images ? outputImages(bodySection.images) : ''}
	</div>
		`;
	}
	return html;
};

const outputImages = images => {
	let html = ``;
	for (const image of images) {
		html += `
		<div class="section1">
			<img src="${image.path}">
			${image.description ? '<span class="subtext">' + image.description + '</span>' : ''}
		</div>
		`;
	}
	return html;
};

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
