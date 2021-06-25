const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="alternate_email"></jje-icon>Contact</h1>`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	