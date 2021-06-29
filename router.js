import Navigo from './vendor/navigo.js';
import {LoadView} from './utilities/load-view.js';

export const router = new Navigo(null, true, `#`);
const $view = document.getElementById(`view`);
const layouts = {
	main: `layouts/layout-main.html`
};

router
.on(`/`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/home-view.html`);
})
.on(`/lyrics`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/lyrics-view.html`);
})
.on(`/lyrics/:lyricKey`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/lyric-detail-view.html`);
})
.on(`/laughs`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/laughs-view.html`);
})
.on(`/laughs/:laughKey`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/laugh-detail-view.html`);
})
.on(`/rogue-radio`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/rogue-radio-view.html`);
})
.on(`/rogue-report`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/rogue-report-view.html`);
})
.on(`/calendar`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/calendar-view.html`);
})
.on(`/contact`, (params, query) => {
	LoadView.layout($view, layouts.main, `views/contact-view.html`);
})
.notFound(_ => {
	router.navigate(`/`);
})
.resolve();
