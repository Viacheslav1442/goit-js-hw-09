import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Дані галереї — в одному файлі
const galleryItems = [
  {
    preview: 'https://placehold.co/600x400?text=Thumb1',
    original: 'https://placehold.co/1200x800?text=Image1',
    description: 'Image 1 description',
  },
  {
    preview: 'https://placehold.co/600x400?text=Thumb2',
    original: 'https://placehold.co/1200x800?text=Image2',
    description: 'Image 2 description',
  },
  // додай інші об'єкти при потребі
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});