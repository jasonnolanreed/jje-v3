const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="article"></jje-icon>${component.pageData.header}</h1>
<p>${component.pageData.description}</p>
<hr>
<div class="grid-container container-fluid to-edges">
	<div class="row">
	${outputRogueReports(component)}
	</div>
</div>
`
);

export const outputRogueReports = component => {
	let html = ``;
	Object.keys(component.rogueReports).map((rogueReportKey ,index) => {
		const rogueReport = component.rogueReports[rogueReportKey];
		html += `
		<div class="grid-item col-sm-24 col-md-12 col-lg-12 section2">
			<a href="#/rogue-report/${rogueReportKey}">
				<div class="section0">
					<img src="${rogueReport.image}">
				</div>
				<div><em>${rogueReport.title}</em></div>
				<div>${rogueReport.date}</div>
			</a>
		</div>
		`;
	});
	return html;
};

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
