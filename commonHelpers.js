import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="45523262-d0ffc350dbb21d9b3ec29cf8d",m="https://pixabay.com/api/",f=r=>{const o=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${m}?key=${d}&q=${r}&${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},p=r=>` <li class="gallery-card">
    <a href="${r.largeImageURL}">
    <img class="gallery-img"
    src="${r.webformatURL}" 
    alt="${r.tags}" />
    </a>
    <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${r.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${r.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${r.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${r.downloads}</span>
      </li>
    </ul>
  </div>
    </li>`,n=document.querySelector(".js-search-form"),h=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader");console.log(n);function y(){c.classList.remove("is-hidden")}function g(){c.classList.add("is-hidden")}y();setTimeout(g,2e3);const L=r=>{r.preventDefault();const o=n.elements.user_query.value.trim();f(o).then(s=>{if(o===""){i.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"}),galleryEl.innerHTML="";return}if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),galleryEl.innerHTML="",n.reset();return}console.log(s);const a=s.hits.map(t=>p(t)).join("");h.innerHTML=a,new u(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0}).refresh()}).catch(s=>{console.log(s)})};n.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
