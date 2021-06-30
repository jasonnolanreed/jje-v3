const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="mic"></jje-icon>${component.pageData.header}</h1>
<hr>
<div class="section2">
	<jje-detail-nav currentkey="${component.rogueRadioKey}" collection="${encodeURI(JSON.stringify(component.rogueRadios))}" baseurl="#/rogue-radio"></jje-detail-nav>
</div>
<div class="section2">
	<h2 class="section00">${component.rogueRadio.title}</h2>
	<h4 class="subtext">Episode ${component.rogueRadio.number}</h4>
	<p>${component.rogueRadio.description}</p>

	<iframe src="${component.rogueRadio.soundCloudUrl}"></iframe>
	<div class="subtext">
		<span class="inline0">Music:</span>
		<em>${component.rogueRadio.music}</em>
	</div>
</div>
<div class="section2">
	<jje-detail-nav currentkey="${component.rogueRadioKey}" collection="${encodeURI(JSON.stringify(component.rogueRadios))}" baseurl="#/rogue-radio"></jje-detail-nav>
</div>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
