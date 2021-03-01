import Home from '../views/home';
import Objectif from '../views/objectif';
import Experience from '../views/experience';
import Formation from '../views/formation';
import Competences from '../views/competences';
import Langues from '../views/langues';
import Hobbies from '../views/hobbies';
let content = document.querySelector('.showInfo');
const router = (route) => {
	content.innerHTML = '';
	switch (route) {
		case '#/':
			return (content.innerHTML = Home());
		case '#/objectif':
			return (content.innerHTML = Objectif());
		case '#/experienceProfessionnelle':
			return (content.innerHTML = Experience());
		case '#/formation':
			return (content.innerHTML = Formation());
		case '#/competences':
			return (content.innerHTML = Competences());
		case '#/langues':
			return (content.innerHTML = Langues());
		case '#/centreInteret':
			return (content.innerHTML = Hobbies());
		default:
			return console.log('404 error');
	}
};
export { router };
