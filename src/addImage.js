import aziz from './assets/moiA.jpg';

function addImage() {
	const img1 = document.querySelector('#info img');
	if (img1) {
		img1.width = 150;
		img1.alt = 'moi meme';
		img1.src = aziz;
	}
}
export default addImage;
