import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import { router } from './router/index.routes';
import addImage from './addImage.js';
window.addEventListener('hashchange', () => {
	router(window.location.hash);
	addImage();
});
