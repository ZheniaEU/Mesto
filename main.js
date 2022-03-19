(()=>{"use strict";var e=document.querySelector(".popup_images_open");function t(e){e.classList.add("popup_opened"),window.addEventListener("keydown",o)}function n(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))}document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&n(e),t.target.classList.contains("popup__close")&&n(e)}))}));var r={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort7",headers:{authorization:"7ae2c7b1-ef91-4b42-9f75-558787176ab1","Content-Type":"application/json"}},c=function(e){return e.ok?e.json():Promise.reject("Обнаружен запуск ядерной ракеты: ".concat(e.status))},a=document.querySelector(".popup_images"),u=document.querySelector(".popup__image"),i=document.querySelector(".popup__caption");function l(n,o){var a=document.querySelector(".template").content.querySelector(".element__card").cloneNode(!0),l=a.querySelector(".element__cards-item"),s=a.querySelector(".element__title"),d=a.querySelector(".element__heart-botton"),p=a.querySelector(".element__bin"),_=a.querySelector(".element__like"),f=a.querySelector(".element__bin");return l.src=n.link,l.alt=n.name,s.textContent=n.name,_.textContent=n.likes.length,function(e){for(var t=0;t<e.length;t++)e[t]._id==o&&d.classList.add("element__heart-botton_active")}(n.likes),d.addEventListener("click",(function(e){var t;e.target.classList.toggle("element__heart-botton_active"),d.classList.contains("element__heart-botton_active")?(t=n._id,fetch("".concat(r.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:r.headers,body:JSON.stringify({})}).then(c)).then((function(){_.textContent=1*_.textContent+1})):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers,body:JSON.stringify({})}).then(c)}(n._id).then((function(){_.textContent=1*_.textContent-1}))})),l.addEventListener("click",(function(){u.src=n.link,u.alt=n.name,i.textContent=n.name,t(e)})),n.owner._id==o&&f.classList.add("element__bin_active"),p.addEventListener("click",(function(){var e;(e=n._id,fetch("".concat(r.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:r.headers,body:JSON.stringify({})}).then(c)).then((function(){a.remove()}))})),a}var s={formSelector:".popup__form",InputSelector:".popup__edit",errorClass:"popup__error",InputInvalidClass:"popup__edit_invalid",buttonSelectorSubmit:".popup__accept",buttonDisabledClass:"popup__accept_disabled"},d=function(e,t,n){var o=e.querySelector(n.buttonSelectorSubmit);p(t)?(o.classList.add(n.buttonDisabledClass),o.disabled=!0):(o.classList.remove(n.buttonDisabledClass),o.disabled=!1)},p=function(e){return e.some((function(e){return!e.validity.valid}))},_=function(e,t,n){var o=e.querySelector(".".concat(t.name,"-error"));t.validity.valid?f(t,o,n):m(t,o,t.validationMessage,n)},f=function(e,t,n){e.classList.remove(n.InputInvalidClass),t.classList.remove(n.errorClass),t.textContent=""},m=function(e,t,n,o){e.classList.add(o.InputInvalidClass),t.classList.add(o.errorClass),t.textContent=n};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var v=document.querySelector(".popup_profile"),h=document.querySelector(".profile__name"),S=document.querySelector(".profile__text"),b=document.querySelector(".profile__button-edit"),q=document.querySelector(".popup_avatar"),g=document.querySelector(".popup__form_character"),L=(document.querySelector(".popup__form_avatar"),document.querySelector(".popup__form_image")),E=document.querySelector(".popup__edit_user_name"),C=document.querySelector(".popup__edit_user_description"),k=document.querySelector(".popup__edit_image_place"),A=document.querySelector(".popup__edit_image_url"),x=document.querySelector(".elements__list"),I=document.querySelector(".profile__avatar"),w=document.querySelector(".profile__button-add"),U=document.querySelector(".popup__accept_image"),T=document.querySelector(".popup__container-profile-js"),D=Array.from(T.querySelectorAll(s.InputSelector)),O=document.querySelector(".popup__container-cards-js"),j=Array.from(O.querySelectorAll(s.InputSelector)),N=document.querySelector(".profile__avatar-edit"),J=document.querySelector(".popup__form_avatar"),P=document.querySelector(".popup__edit_user_avatar");function G(e){h.textContent=e.name,S.textContent=e.about}function H(e){I.src=e}b.addEventListener("click",(function(){E.value=h.textContent,C.value=S.textContent,t(v),_(g,E,s),_(g,C,s),d(T,D,s)})),N.addEventListener("click",(function(){t(q)})),w.addEventListener("click",(function(){t(a),d(O,j,s)})),g.addEventListener("submit",(function(e){e.preventDefault(),$(!0,z),function(e,t){return fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:e.value,about:t.value})}).then(c)}(E,C).then((function(e){G(e),n(v)})).catch((function(e){console.log(e)})).finally((function(){$(!1,z)}))})),L.addEventListener("submit",(function(e){e.preventDefault(),$(!0,U),function(e,t){return fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:e.value,link:t.value})}).then(c)}(k,A).then((function(e){x.prepend(l(e,M)),n(a),L.reset()})).catch((function(e){console.log(e)})).finally((function(){$(!1,U)}))}));var M,z=document.querySelector(".popup__accept_avatar");function $(e,t){t.textContent=e?"Сохранение...":t==z?"Сохранить":"Создать"}J.addEventListener("submit",(function(e){var t;e.preventDefault(),$(!0,z),(t=P.value,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then(c)).then((function(e){H(e.avatar),n(q)})).catch((function(e){console.log(e)})).finally((function(){$(!1,z)}))})),Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{method:"GET",headers:r.headers}).then(c),fetch("".concat(r.baseUrl,"/cards"),{method:"GET",headers:r.headers}).then(c)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];M=r._id,H(r.avatar),G(r),function(e,t){e.forEach((function(e){x.append(l(e,t))}))}(c,M)})).catch((function(e){console.log("Отшиб__очка в промисс алл".concat(e))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.InputSelector));n.forEach((function(o){o.addEventListener("input",(function(){_(e,o,t),d(e,n,t)}))}))}(t,e)}))}(s)})();