const makeCss = (component) => (
`
<style>
@import "styles/components/social.css";
</style>
`
);

const makeHtml = (component) => (
`
<div class="social table">
	<div class="table-row">
		<div class="social-container table-cell h-center">
			<a href="https://twitter.com/jayjacksonmusic" target="newtab">
				<jje-icon name="twitter"></jje-icon>
				<div class="label">Twitter</div>
			</a>
		</div>
		<div class="social-container table-cell h-center">
			<a href="https://www.facebook.com/jay.jackson.entertainment/" target="newtab">
				<jje-icon name="facebook"></jje-icon>
				<div class="label">Facebook</div>
			</a>
		</div>
		<div class="social-container table-cell h-center">
			<a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fjayjacksonentertainment%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNHh1n-x-LH54VcXEbJwrAR-mEI3vg" target="newtab">
				<jje-icon name="instagram"></jje-icon>
				<div class="label">Instagram</div>
			</a>
		</div>
		<div class="social-container table-cell h-center">
			<a href="https://www.reverbnation.com/jayjacksonmusic" target="newtab">
				<jje-icon name="reverbnation"></jje-icon>
				<div class="label">Reverb Nation</div>
			</a>
		</div>
		<div class="social-container table-cell h-center">
			<a href="https://www.youtube.com/channel/UC0W0En1GoAZCN-_zXz7ocaA" target="newtab">
				<jje-icon name="youtube"></jje-icon>
				<div class="label">YouTube</div>
			</a>
		</div>
	</div>
</div>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
