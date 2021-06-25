const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1>Laughs</h1>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	