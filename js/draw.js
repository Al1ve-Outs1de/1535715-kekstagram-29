import {photos} from './mock.js';

const photosElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

photos.forEach(({_, url, description, likes, comments})=>{
	const photoElement = photoTemplate.cloneNode(true);
	photoElement.querySelector('.picture__img').src = url;
	photoElement.querySelector('.picture__img').alt = description;
	photoElement.querySelector('.picture__likes').textContent = likes;
	photoElement.querySelector('.picture__comments').textContent = comments.length;
	fragment.append(photoElement);
});

photosElement.append(fragment);
