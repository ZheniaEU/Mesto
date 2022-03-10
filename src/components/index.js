import "../pages/index.css"
import { renderCards, imageUserPopup } from "./card"
import { openPopup, closePopup } from "./modal"
import { enableValidation, validationConfig, toggleButtonState, checkInputValidity } from "./validate"

// попапы
const profilePopup = document.querySelector(".popup_profile") // модалка профиля
// const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

//_____________________Профиль_____________________________________________
const profileName = document.querySelector(".profile__name") // Имя в профиле
const profileText = document.querySelector(".profile__text") // Описание в профиле

//кнопки профиля
const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
// const closeButtonProfile = document.querySelector(".popup__close") // кнопка закрытие попапа профиля
//форма профиля
const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
// console.log(formProfileUser)

//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//______________________Добавление новых карточек____________________________
//кнопки картинок
const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
// const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками

//_____________________Переменные для валидации ____________________________
const popupContainer = profilePopup.querySelector(".popup__container")
const editProfileInputs = Array.from(popupContainer.querySelectorAll(validationConfig.InputSelector))
// console.log(editProfileInputs)

const popupContainerImage = imageUserPopup.querySelector(".popup__container")
const editImageInputs = Array.from(popupContainer.querySelectorAll(validationConfig.InputSelector))
// console.log(editImageInputs)

// слушатерь открывает попап редактирование профиля
editButtonProfile.addEventListener("click", function () {
   openProfilePopup()
   // checkInputValidity(formProfileUser, editProfileInputs, validationConfig)
   toggleButtonState(popupContainer, editProfileInputs, validationConfig)
   // console.log(popupContainer)
   // console.log(editProfileInputs)
   // console.log(validationConfig)
})

// слушатерь открывае попап пользовательской карточки
addButtonImage.addEventListener("click", function () {
   openPopup(imageUserPopup)
   // checkInputValidity(popupContainerImage, editImageInputs, validationConfig)
   toggleButtonState(popupContainerImage, editImageInputs, validationConfig)
})

// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла

// получает информацию профиля и открываю попап с ним
export function openProfilePopup() {
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

renderCards() //запускаем отображение карточек

enableValidation(validationConfig) // запуск валидации