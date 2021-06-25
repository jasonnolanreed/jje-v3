const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="event"></jje-icon>${component.pageData.header}</h1>
<hr>
<p>${component.pageData.description}</p>
<hr>
${outputCalender(component)}
`
);

const outputCalender = component => {
	let html = ``;
	for (const event of component.calendar) {
		html += `
		<div class="section2">
			<h3 class="section00">${event.name}</h3>
			<h4 class="subtext">${event.date} <span class="subtext">at ${event.time}</span></h4>
			<p class="section0">
				<em>
					<span>${event.venue}</span>
				</em>
			</p>
		</div>
		`;
	}
	return html;
}

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	