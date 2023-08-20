import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const renderList = (arr, container) => {
    const markup = arr.map(({ original, preview, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    ).join("");


    container.insertAdjacentHTML('afterbegin', markup);
};

renderList(galleryItems, galleryList);

let lightbox = new SimpleLightbox('.gallery a', {
 captions: true,            
captionsData: 'alt',       
captionDelay: 250 });
