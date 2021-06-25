const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="home"></jje-icon>Home</h1>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	