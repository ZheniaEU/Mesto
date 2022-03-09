//_____________________Развёрнутое модальное окно(полная картинка)__________
// кнопка фулл
const closeImageFullButton = document.querySelector(".popup__close_images_full")

export const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек


//открытие модального окна
export function openPopup(popup) {
   popup.classList.add("popup_opened")
   window.addEventListener('keydown', handleModalEscPress)
}

//закрытие модального окна
export function closePopup(popup) {
   popup.classList.remove("popup_opened")
   window.addEventListener('keydown', handleModalEscPress)
}

closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //разворачивает карточку в полное модальное окно

const popups = document.querySelectorAll(".popup")

// срефакторрить переменные
const profilePopup = document.querySelector(".popup_profile") // модалка профиля
const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

//закрытие модального окна по эскейпу
function handleModalEscPress(evt) {
   if (evt.keyCode == 27) {
      closePopup(fullImagesPopup)
      closePopup(profilePopup)
      closePopup(imageUserPopup)
   }
}


//закрытие модального при клике за его пределами
popups.forEach((popup) => {
   popup.addEventListener("click", (evt) => {
     if (evt.target.classList.contains("popup_opened")) {
       closePopup(popup)
     }
   })
})