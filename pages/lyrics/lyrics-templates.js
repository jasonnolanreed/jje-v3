const makeCss = (component) => `
<style>
.lyric-audio-label { display: block; }
</style>
`;

const makeHtml = (component) => (
`
<h1 class="page-header"><jje-icon name="audio_track"></jje-icon>${component.pageData.header}</h1>
<p class="section2">${component.pageData.description}</p>
<hr>
<div class="container-fluid to-edges">
	<div class="row">
	${outputLyricAudios(component)}
	</div>
	<hr>
</div>
<div class="grid-container container-fluid">
	<div class="row">
	${outputLyrics(component)}
	</div>
</div>
`
);

const outputLyricAudios = component => {
	let html = ``;
	Object.keys(component.lyricsAudios).map((lyricsAudiosKey, index) => {
		let audio = component.lyricsAudios[lyricsAudiosKey];
		html += `
		<div class="section0 col-sm-24 col-md-12">
			<label class="subtext lyric-audio-label">
				<em>"${audio.trackName}"</em> - <i>${audio.albumName}</i>, ${audio.year}
			</label>
			<audio
				class="lyrics-audio-element"
				controls="controls"
				preload="none">
				<source
					src="${audio.audioFile}"
					type="audio/mp3">
			</audio>
		</div>
		`;
	});
	return html;
};

const outputLyrics = component => {
	let html = ``;
	Object.keys(component.lyrics).map((lyricKey, index) => {
		const lyric = component.lyrics[lyricKey];
		html += `
		<div class="grid-item col-sm-24 col-md-12 col-lg-12 section2">
			<a href="#/lyrics/${lyricKey}" class="section0">
				<div class="section0">
					<div class="video-banner">
						<img src="${lyric.image}">
						<div class="banner-overlay"></div>
					</div>
				</div>
				<div><em>${lyric.name}</em></div>
			</a>
		</div>
		`;
	});
	return html;
};

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
	