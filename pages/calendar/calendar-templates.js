const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="event"></jje-icon>Calendar</h1>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	