const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="audio_track"></jje-icon>Lyrics</h1>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	