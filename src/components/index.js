import "../pages/index.css"
import { renderCards, imageUserPopup } from "./card"
import { openPopup, closePopup } from "./modal"
import { enableValidation, validationConfig, toggleButtonState, checkInputValidity } from "./validate"
import { giveProfile, giveAvatar, receiveProfile, checkResponse } from "./api"
// zaraza()

// попапы
const profilePopup = document.querySelector(".popup_profile") // модалка профиля

//_____________________Профиль_____________________________________________
export const profileName = document.querySelector(".profile__name") // Имя в профиле
export const profileText = document.querySelector(".profile__text") // Описание в профиле

//кнопки профиля
const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
const profileAvatar = document.querySelector(".popup_avatar") //открываю попап с аватаром

//форма профиля
const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
// console.log(formProfileUser)

//инпуты профиля
export const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
export const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//______________________Добавление новых карточек____________________________
//кнопки картинок
const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
// const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками

//_____________________Переменные для валидации ____________________________
//юзер
const popupContainerProfile = document.querySelector(".popup__container-profile-js")
const profileEditIntuts = Array.from(popupContainerProfile.querySelectorAll(validationConfig.InputSelector))
//карточки
const popupContainerimage = document.querySelector(".popup__container-cards-js")
const ImageEditIntuts = Array.from(popupContainerimage.querySelectorAll(validationConfig.InputSelector))

// слушатерь открывает попап редактирование профиля
editButtonProfile.addEventListener("click", function () {
   openProfilePopup()
   checkInputValidity(formProfileUser, editUserName, validationConfig)
   checkInputValidity(formProfileUser, editUserDescription, validationConfig)
   toggleButtonState(popupContainerProfile, profileEditIntuts, validationConfig)
})


const popupAvatar = document.querySelector(".profile__avatar-edit")
const editAvatar = document.querySelector(".popup__form_avatar")

const inputAvatar = document.querySelector(".popup__edit_user_avatar")

// слушатель открывает попап редактирования аватара
popupAvatar.addEventListener("click", function () {
   openPopup(profileAvatar)
})



// слушатерь открывае попап пользовательской карточки
addButtonImage.addEventListener("click", function () {
   openPopup(imageUserPopup)
   toggleButtonState(popupContainerimage, ImageEditIntuts, validationConfig)
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
   giveProfile()
}

// renderCards() //запускаем отображение карточек

enableValidation(validationConfig) // запуск валидации

let userId

Promise.all([receiveProfile()])
   .then(function ([profile]) {

      userId = profile
      // console.log(userId)
// console.log(profile.avatar)
      profileRender(profile) //рендерит профиль имя и дескрипшен
      renderAvatar(profile.avatar)


   })
   .catch(console.log("у нас отшибочка"))

function profileRender(profile) {
   profileName.textContent = profile.name
   profileText.textContent = profile.about
}

const userAvatar = document.querySelector(".profile__avatar")

function renderAvatar(avatars) {
   userAvatar.src = avatars
}


const buttonAvatarSubmit = document.querySelector(".popup__accept_avatar")

//!слушатель отправки аватара, нужно отвалидировать колбэк
editAvatar.addEventListener("submit", handleAvatarFormSubmit) //слушатель весит на форме с колбеком

function handleAvatarFormSubmit(evt) {// сам колбэк
   evt.preventDefault()//прерываю стандарное действие

   renderLoading(true, buttonAvatarSubmit, "Сохранить") // поставить загрузку

   giveAvatar(inputAvatar.value) //отдать аватар на сервер
      .then((profile) => {
         renderAvatar(profile.avatar) //отобразить аватар
         closePopup(profileAvatar) //закрыть попап
         //по идеи тут ещё нужно отвалидировать поле url
      })
      .catch(console.log("Ошибка"))
      .finally(() => {
         renderLoading(false, buttonAvatarSubmit, "Сохранить") //убрать загрузку
      })

}

// .then(function (userId) {
//    console.log(userId)






//функция загрузки
function renderLoading(isLoading, button, text) {
   const loadingText = text + "..."
   const buttonSubmit = button
   if (isLoading == true) {
      buttonSubmit.textContent = loadingText
   } else {
      buttonSubmit.textContent = text
   }
}