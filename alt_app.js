const memeDiv = document.querySelector('.meme-div');
let imageURL = document.querySelector('input[name="inputURL"]');
let form = document.querySelector('#imageform');
let topTextInput = document.getElementById('top-text');
let bottomTextInput = document.getElementById('bottom-text');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	let memeContainer = document.createElement('div');
	memeContainer.classList.add('memecontainer');

	const newMeme = new Image(200, 130);
	newMeme.src = imageURL.value;
	newMeme.setAttribute('class', 'memeStyle');

	const topCaption = document.createElement('p');
	topCaption.classList.add('topcaption');
	topCaption.appendChild(document.createTextNode(topTextInput.value));

	const bottomCaption = document.createElement('p');
	bottomCaption.classList.add('bottomcaption');
	bottomCaption.appendChild(document.createTextNode(bottomTextInput.value));

	memeContainer.appendChild(topCaption);
	memeContainer.appendChild(newMeme);
	memeContainer.appendChild(bottomCaption);

	memeDiv.append(memeContainer);

	imageURL.value = '';
	topTextInput.value = '';
	bottomTextInput.value = '';

	newMeme.addEventListener('click', function(e) {
		e.currentTarget.parentNode.remove();
	});
});
