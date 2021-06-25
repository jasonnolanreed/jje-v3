const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="emoji_emotions"></jje-icon>Laughs</h1>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	