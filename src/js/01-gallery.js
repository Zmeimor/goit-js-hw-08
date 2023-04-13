// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.js";

// Change code below this line

// console.log();


const placeForFalleryHtml = document.querySelector(".gallery");
const galleryInserted = createGalleryMap(galleryItems);

function createGalleryMap (galleryItems) {
return galleryItems.map(({preview, description, original})=> {
return `<a class="gallery__item" href=${original}> <img class="gallery__image" src=${preview} title = ${description}/></a>`;
       }).join("");
    }

placeForFalleryHtml.insertAdjacentHTML('beforeend', galleryInserted);

placeForFalleryHtml.addEventListener('click', openModal);

new SimpleLightbox('.gallery a', { captionDelay:500, 
   doubleTapZoom: 1.3, rtl: true });

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
//import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
//import SimpleLightbox from "simplelightbox";

function openModal(event) {
   const imageLink = event.target.dataset.original;
  SimpleLightbox('.gallery a', {caption});
     gallery.captionsData(alt);

gallery.on('show.simplelightbox', function () {
//    // Do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});
   

// const instance = basicLightbox.create(`
// <img src = ${imageLink} width="800" height="600">
// `);
instance.show();
}