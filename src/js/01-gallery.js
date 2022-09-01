// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const placeForGalleryHtml = document.querySelector(".gallery");
const galleryInserted = createGalleryMap (galleryItems);

        placeForGalleryHtml.insertAdjacentHTML('beforeend', galleryInserted);
        placeForGalleryHtml.addEventListener('click', openModal);

        
            function createGalleryMap (galleryItems) {
                return galleryItems.map(({preview, description, original})=> {
                return `<a class="gallery__link" href = "${original}"> <img class="gallery__image" src = ${preview} alt = "${description}" data-source=${original} /> </a>`;
                }).join("");
                }

                function openModal(event) {
                    event.preventDefault();
                
                    const instance = basicLightbox.create(`<img src = ${event.target.dataset.source} width="800" height="600">
                    `);
                    instance.show();
                    window.addEventListener('keydown', reset);
                    return;
                    }

                    function reset (ev){  
                            if (ev.key === 'Escape') {
                        const modalPicture = document.querySelector(".basicLightbox", ".basicLightbox--img", ".basicLightbox--visible");
                        modalPicture.remove();
                        return;
                        }  
                        } 