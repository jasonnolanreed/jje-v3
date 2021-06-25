const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="alternate_email"></jje-icon>${component.pageData.header}</h1>
<hr>
<p>${component.pageData.description}</p>
<jje-social></jje-social>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
