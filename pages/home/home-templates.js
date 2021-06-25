const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<h1>Home</h1>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	