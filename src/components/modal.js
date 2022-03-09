//_____________________Развёрнутое модальное окно(полная картинка)__________
// кнопка фулл
// const closeImageFullButton = document.querySelector(".popup__close_images_full")

// модалка полного изображения карточек
export const fullImagesPopup = document.querySelector(".popup_images_open")

//ловим открытый попап
const openedPopup = document.querySelector(".popup_opened")

//открытие модального окна
export function openPopup(popup) {
   popup.classList.add("popup_opened")
   window.addEventListener("keydown", handleModalEscPress)
}

//закрытие модального окна
export function closePopup(popup) {
   popup.classList.remove("popup_opened")
   window.removeEventListener("keydown", handleModalEscPress)
}

//закрытие модального окна по эскейпу
function handleModalEscPress(evt) {
   if (evt.key === "Escape") {
      closePopup(openedPopup)
   }
}

//все попапы
const popups = document.querySelectorAll(".popup")

//шедевр инженерной мысли закрытия и открытия попапов по кнопке и клику вне окна
popups.forEach((popup) => {
   popup.addEventListener("mousedown", (evt) => {
       if (evt.target.classList.contains("popup_opened")) {
           closePopup(popup)
       }
       if (evt.target.classList.contains("popup__close")) {
         closePopup(popup)
       }
   })
})