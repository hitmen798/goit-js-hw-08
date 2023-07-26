
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const list = document.querySelector('.gallery')

function markup(items) {
  return items.map((item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`).join("")
}


list.insertAdjacentHTML('beforeend', markup(galleryItems))

list.addEventListener('click', onClick)
function onClick(evt) {
  evt.preventDefault()
  if (evt.target.tagName !== 'IMG') {
    return
  }
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom'
}); 