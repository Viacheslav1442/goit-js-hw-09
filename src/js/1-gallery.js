import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// 👉 Ось сюди вставляємо масив:
const galleryItems = [
    {
        preview: 'https://placehold.co/150x100?text=Preview+1',
        original: 'https://placehold.co/800x600?text=Original+1',
        description: 'Example Image 1',
    },
    {
        preview: 'https://placehold.co/150x100?text=Preview+2',
        original: 'https://placehold.co/800x600?text=Original+2',
        description: 'Example Image 2',
    },
    {
        preview: 'https://placehold.co/150x100?text=Preview+3',
        original: 'https://placehold.co/800x600?text=Original+3',
        description: 'Example Image 3',
    },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
).join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});