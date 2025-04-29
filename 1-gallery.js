import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-D0gBiHs0.js";const i=[{preview:"https://placehold.co/600x400?text=Thumb1",original:"https://placehold.co/1200x800?text=Image1",description:"Image 1 description"},{preview:"https://placehold.co/600x400?text=Thumb2",original:"https://placehold.co/1200x800?text=Image2",description:"Image 2 description"}],o=document.querySelector(".gallery"),r=i.map(({preview:e,original:l,description:t})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${l}">
      <img
        class="gallery-image"
        src="${e}"
        alt="${t}"
      />
    </a>
  </li>
`).join("");o.innerHTML=r;new a(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
