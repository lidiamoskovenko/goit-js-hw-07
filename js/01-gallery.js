import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const renderList = (arr, container) => {
    const markup = arr.map(({ original, preview, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}" />
            </a>
        </li>`
    ).join("");


    container.insertAdjacentHTML('afterbegin', markup);
};

renderList(galleryItems, galleryList);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImage = event.target.dataset.source;
  const largeImageAlt = event.target.description;
  const instance = basicLightbox.create(`
    // <img src="${largeImage}" alt="${largeImageAlt}" >
  `);

  instance.show();
}

galleryList.addEventListener('click', openModal);

