const makeCss = (component) => ``;

const makeHtml = (component) => (
`
<div class="container-fluid to-edges">
	<div class="row">
	${outputHomeBanners(component)}
	</div>
</div>

<div class="container-fluid to-edges">
	<div class="row">
		<div class="col-sm-24 col-md-12 col-lg-12">
			<p class="section2">${component.pageData.description}</p>
		</div>
		<div class="col-sm-24 col-md-12 col-lg-12">
			<jje-twitter></jje-twitter>
		</div>
	</div>
</div>
`
);

const outputHomeBanners = component => {
	var html = ``;
	if (component.homeBanners && component.homeBanners.length) {
		for (const homeBanner of component.homeBanners) {
			html += `
			<div class="col-sm-24 section1">
				<a href="${homeBanner.link.href}" target="${homeBanner.link.target}">
					<img src="${homeBanner.image}">
				</a>
			</div>
			`;
		}
	}
	return html;
}

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
