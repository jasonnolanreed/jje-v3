const makeCss = (component) => (
`
<style>
@import "styles/components/nav.css";
</style>
`
);

const makeHtml = (component) => (
`
<nav class="main-layout-container--nav">
	<a href="#/">
		<img class="main-logo" alt="Jay Jackson Entertainment Logo" src="assets/images/logo.png">
	</a>
	<div class="main-nav-links-list">
		<a href="#/lyrics">Lyrics<jje-icon name="audio_track"></jje-icon></a>
		<a href="#/laughs">Laughs<jje-icon name="emoji_emotions"></jje-icon></a>
		<a href="#/rogue-radio">Rogue Radio<jje-icon name="mic"></jje-icon></a>
		<a href="#/rogue-report">Rogue Report<jje-icon name="article"></jje-icon></a>
		<a href="#/calendar">Calendar<jje-icon name="event"></jje-icon></a>
		<a href="#/contact">Contact<jje-icon name="alternate_email"></jje-icon></a>
	</div>
	<div class="section2">
		<jje-social></jje-social>
	</div>
	<div class="press section2">
		<a href="cdn/pdfs/epk-20170628.pdf" target="presskit">
			<h5>
				<jje-icon name="file_download"></jje-icon>
				Download Press Kit
			</h5>
		</a>
	</div>
</nav>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
