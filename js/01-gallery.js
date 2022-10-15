import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const imgMarkup = createGalleryMarkup(galleryItems);
let modalWindow;

galleryContainer.insertAdjacentHTML(`beforeend`, imgMarkup);
galleryContainer.addEventListener(`click`, onImageClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
       .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
      })
      .join('');
  }
  

function onImageClick (event) {
    event.preventDefault()
    const isImgEl = event.target.classList.contains(`gallery__image`)
    const largeImg = event.target.dataset.source;
    if(!isImgEl) {
        return;
    };
    
    modalWindow = basicLightbox.create(`
      <img src = "${largeImg}">
    `)
modalWindow.show(onclick);
};

