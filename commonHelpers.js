import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="45523262-d0ffc350dbb21d9b3ec29cf8d",f="https://pixabay.com/api/",p=r=>{const o=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${f}?key=${m}&q=${r}&${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},h=r=>` <li class="gallery-card">
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
    </li>`,a=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader");function y(){u.classList.remove("is-hidden")}function g(){u.classList.add("is-hidden")}y();setTimeout(g,2e3);const L=r=>{r.preventDefault();const o=a.elements.user_query.value.trim();p(o).then(s=>{if(o===""){c.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"}),l.innerHTML="",a.reset();return}if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",a.reset();return}console.log(s);const n=s.hits.map(t=>h(t)).join("");l.innerHTML=n,new d(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0}).refresh()}).catch(s=>{console.log(s)})};a.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
