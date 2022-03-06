//_____________________Развёрнутое модальное окно(полная картинка)__________
// кнопка фулл
const closeImageFullButton = document.querySelector(".popup__close_images_full")

export const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек

export function openPopup(popup) {
   popup.classList.add("popup_opened")
}

export function closePopup(popup) {
   popup.classList.remove("popup_opened")
}

closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //разворачивает карточку в полное модальное окно