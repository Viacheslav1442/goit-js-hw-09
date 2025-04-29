import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-D0gBiHs0.js";const i=[{preview:"https://placehold.co/150x100?text=Preview+1",original:"https://placehold.co/800x600?text=Original+1",description:"Example Image 1"},{preview:"https://placehold.co/150x100?text=Preview+2",original:"https://placehold.co/800x600?text=Original+2",description:"Example Image 2"},{preview:"https://placehold.co/150x100?text=Preview+3",original:"https://placehold.co/800x600?text=Original+3",description:"Example Image 3"}],r=document.querySelector(".gallery"),o=i.map(({preview:e,original:l,description:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}">
        <img class="gallery-image" src="${e}" alt="${a}" />
      </a>
    </li>`).join("");r.innerHTML=o;new t(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
