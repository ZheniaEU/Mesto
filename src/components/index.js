import "../styles/index.css"
import {renderCards} from "./card"
import {openPopup, closePopup} from "./modal"

// попапы
const profilePopup = document.querySelector(".popup__profile") // модалка профиля
const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

//_____________________Профиль_____________________________________________
const profileName = document.querySelector(".profile__name") // Имя в профиле
const profileText = document.querySelector(".profile__text") // Описание в профиле

//кнопки профиля
const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
const closeButtonProfile = document.querySelector(".popup__close") // кнопка закрытие попапа профиля
//форма профиля
const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//______________________Добавление новых карточек____________________________
//кнопки картинок
const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками

// слушатели
closeButtonProfile.addEventListener("click", () => closePopup(profilePopup)) //слушатерь закрывает попап редактирования профиля
closeImageButton.addEventListener("click", () => closePopup(imageUserPopup)) //слушатерь закрывает попап пользовательской карточки
editButtonProfile.addEventListener("click", () => openProfilePopupHandler()) // слушатерь открывает попап редактирование профиля
addButtonImage.addEventListener("click", () => openPopup(imageUserPopup)) // слушатерь открывае попап пользовательской карточки


// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
// formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

// получает информацию профиля и открываю попап с ним
export function openProfilePopupHandler() {
   editUserName.value = profileName.textContent
   editUserDescription.value = profileText.textContent
   openPopup(profilePopup)
}

// после редактирования профиля, закрываю попап
export function handleProfileFormSubmit(evt) {
   evt.preventDefault()
   profileName.textContent = editUserName.value
   profileText.textContent = editUserDescription.value
   closePopup(profilePopup)
}

renderCards() //запускаем карточки