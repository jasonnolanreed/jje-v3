const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="emoji_emotions"></jje-icon>${component.pageData.header}</h1>
<p>${component.pageData.description}</p>
<hr>
<div class="grid-container container-fluid">
	<div class="row">
	${outputLaughs(component)}
	</div>
</div>

`
);

const outputLaughs = component => {
	let html = ``;
	Object.keys(component.laughs).map((laughKey, index) => {
		const laugh = component.laughs[laughKey];
		html += `
		<div class="grid-item col-sm-24 col-md-12 col-lg-12 section2">
			<a href="#/laughs/details/${Object.keys(component.laughs)[index]}">
				<div class="section0">
					<div class="video-banner">
						<img src="${laugh.image}">
						<div class="banner-overlay"></div>
					</div>
				</div>
				<div><em>${laugh.name}</em></div>
			</a>
		</div>
		`;
	});
	return html;
};

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
