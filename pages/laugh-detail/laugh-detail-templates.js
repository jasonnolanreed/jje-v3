const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="emoji_emotions"></jje-icon>${component.pageData.header}</h1>
<hr>
<div class="section2">
	<jje-detail-nav currentkey="${component.laughKey}" collection="${encodeURI(JSON.stringify(component.laughs))}" baseurl="#/laughs"></jje-detail-nav>
</div>
<div class="section2">
	<h2 class="section00">${component.laugh.name}</h2>
	<h4 class="subtext section1">${component.laugh.date}</h4>
	<div class="iframe-container">
		<iframe
			src="https://youtube.com/embed/${component.laugh.youtubeVideoCode}?autoplay=1"
			class="youtube-player"></iframe>
	</div>
</div>
<div class="section2">
<jje-detail-nav currentkey="${component.laughKey}" collection="${encodeURI(JSON.stringify(component.laughs))}" baseurl="#/laughs"></jje-detail-nav>
</div>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
