/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Ro:()=>I,Bf:()=>k,rC:()=>L,CV:()=>E});var t=document.querySelector(".popup_images_open");function n(e){e.classList.add("popup_opened"),window.addEventListener("keydown",o)}function r(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&r(document.querySelector(".popup_opened"))}document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&r(e),t.target.classList.contains("popup__close")&&r(e)}))}));var a={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort7",headers:{authorization:"7ae2c7b1-ef91-4b42-9f75-558787176ab1",contentType:"application/json"},authorization:"7ae2c7b1-ef91-4b42-9f75-558787176ab1",contentType:"application/json"},c=function(e){return e.ok?e.json():Promise.reject("Обнаружен запуск ядерной ракеты: ".concat(e.status))};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector(".popup_images"),i=document.querySelector(".elements__list"),s=document.querySelector(".popup__form_image"),d=document.querySelector(".popup__edit_image_place"),p=document.querySelector(".popup__edit_image_url"),f=document.querySelector(".popup__image"),m=document.querySelector(".popup__caption");function _(e,r,o,u,l){var i=document.querySelector(".template").content.querySelector(".element__card").cloneNode(!0),s=i.querySelector(".element__cards-item"),d=i.querySelector(".element__title"),p=i.querySelector(".element__heart-botton"),_=i.querySelector(".element__bin"),y=i.querySelector(".element__like"),v=i.querySelector(".element__bin");return s.src=e,s.alt=r,d.textContent=r,y.textContent=o.length,function(e){for(var t=0;t<e.length;t++)"1857d95644e3d5336aa91bb2"==e[t]._id&&p.classList.add("element__heart-botton_active")}(o),p.addEventListener("click",(function(e){e.target.classList.toggle("element__heart-botton_active"),p.classList.contains("element__heart-botton_active")?(function(e){var t=e;fetch("".concat(a.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:a.headers,body:JSON.stringify({name:k.value,about:I.value})}).then(c)}(l),y.textContent=1*y.textContent+1):(function(e){var t=e;fetch("".concat(a.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:a.headers,body:JSON.stringify({name:k.value,about:I.value})}).then(c)}(l),y.textContent=1*y.textContent-1)})),_.addEventListener("click",(function(){i.remove(),function(e){var t=e;fetch("".concat(a.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:a.headers,body:JSON.stringify({name:k.value,about:I.value})}).then(c)}(l)})),s.addEventListener("click",(function(){f.src=e,f.alt=r,m.textContent=r,n(t)})),"1857d95644e3d5336aa91bb2"==u&&v.classList.add("element__bin_active"),i}s.addEventListener("submit",(function(e){e.preventDefault(),fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:{authorization:a.authorization,"Content-Type":a.contentType},body:JSON.stringify({likes:[],_id:"5d1f0611d321eb4bdcd707dd",name:d.value,link:p.value,owner:{name:L.textContent,about:E.textContent,avatar:"https://pictures.s3.yandex.net/frontend-developer/ava.jpg",_id:"ef5f7423f7f5e22bef4ad607",cohort:"local"},createdAt:""})}).then(c),i.prepend(_(p.value,d.value,[],"1857d95644e3d5336aa91bb2")),r(l),s.reset()})),Promise.all([fetch("".concat(a.baseUrl,"/cards"),{method:"GET",headers:a.headers}).then(c)]).then((function(e){var t,n;(t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].forEach((function(e){i.append(_(e.link,e.name,e.likes,e.owner._id,e._id))}))}));var y={formSelector:".popup__form",InputSelector:".popup__edit",errorClass:"popup__error",InputInvalidClass:"popup__edit_invalid",buttonSelectorSubmit:".popup__accept",buttonDisabledClass:"popup__accept_disabled"},v=function(e,t,n){var r=e.querySelector(n.buttonSelectorSubmit);h(t)?(r.classList.add(n.buttonDisabledClass),r.disabled=!0):(r.classList.remove(n.buttonDisabledClass),r.disabled=!1)},h=function(e){return e.some((function(e){return!e.validity.valid}))},b=function(e,t,n){var r=e.querySelector(".".concat(t.name,"-error"));t.validity.valid?S(t,r,n):q(t,r,t.validationMessage,n)},S=function(e,t,n){e.classList.remove(n.InputInvalidClass),t.classList.remove(n.errorClass),t.textContent=""},q=function(e,t,n,r){e.classList.add(r.InputInvalidClass),t.classList.add(r.errorClass),t.textContent=n};function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=document.querySelector(".popup_profile"),L=document.querySelector(".profile__name"),E=document.querySelector(".profile__text"),A=document.querySelector(".profile__button-edit"),x=document.querySelector(".popup_avatar"),w=document.querySelector(".popup__form_character"),k=document.querySelector(".popup__edit_user_name"),I=document.querySelector(".popup__edit_user_description"),T=document.querySelector(".profile__avatar"),j=document.querySelector(".profile__button-add"),O=document.querySelector(".popup__container-profile-js"),U=Array.from(O.querySelectorAll(y.InputSelector)),D=document.querySelector(".popup__container-cards-js"),P=Array.from(D.querySelectorAll(y.InputSelector));A.addEventListener("click",(function(){k.value=L.textContent,I.value=E.textContent,n(C),b(w,k,y),b(w,I,y),v(O,U,y)}));var N=document.querySelector(".profile__avatar-edit"),z=document.querySelector(".popup__form_avatar"),J=document.querySelector(".popup__edit_user_avatar");function M(e){T.src=e}N.addEventListener("click",(function(){n(x)})),j.addEventListener("click",(function(){n(l),v(D,P,y)})),w.addEventListener("submit",(function(e){e.preventDefault(),L.textContent=k.value,E.textContent=I.value,r(C),fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:k.value,about:I.value})}).then(c)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.InputSelector));n.forEach((function(r){r.addEventListener("input",(function(){b(e,r,t),v(e,n,t)}))}))}(t,e)}))}(y),Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{method:"GET",headers:a.headers}).then(c)]).then((function(e){var t,n,r=(t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];M(r.avatar),function(e){L.textContent=e.name,E.textContent=e.about}(r)})).catch((function(e){console.log("Отшиб__очка ".concat(e))}));var G=document.querySelector(".popup__accept_avatar");function H(e,t,n){var r=n+"...";t.textContent=1==e?r:n}z.addEventListener("submit",(function(e){var t;e.preventDefault(),H(!0,G,"Сохранить"),(t=J.value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:a.authorization,"Content-Type":a.contentType},body:JSON.stringify({avatar:t})}).then(c)).then((function(e){M(e.avatar),r(x)})).catch((function(e){console.log(e)})).finally((function(){H(!1,G,"Сохранить")}))}))})();