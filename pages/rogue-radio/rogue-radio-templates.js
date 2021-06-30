const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="mic"></jje-icon>${component.pageData.header}</h1>
<p class="section2">${component.pageData.description}</p>
<hr>
<div class="grid-container container-fluid">
	<div class="row">
	${outputRogueRadios(component)}
	</div>
</div>

`
);

const outputRogueRadios = component => {
	let html = ``;
	Object.keys(component.rogueRadios).map((rogueRadioKey, index) => {
		const rogueRadio = component.rogueRadios[rogueRadioKey];
		html += `
		<div class="grid-item col-sm-24 col-md-12 col-lg-12 section2">
			<a href="#/rogue-radio/${rogueRadioKey}">
				<div class="section0">
					<div class="audio-banner">
						<img src="${rogueRadio.image}">
						<div class="banner-overlay"></div>
					</div>
				</div>
				<div><em>${rogueRadio.title}</em></div>
				<div>Episode ${rogueRadio.number}</div>
			</a>
		</div>
		`;
	});
	return html;
};

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	