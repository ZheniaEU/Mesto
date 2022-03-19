import "../pages/index.css"
import { createCard, imageUserPopup } from "./card"
import { openPopup, closePopup } from "./modal"
import { enableValidation, validationConfig, toggleButtonState, checkInputValidity } from "./validate"
import { giveProfile, giveAvatar, receiveProfile, giveCards, receiveCards } from "./api"

// попапы
const profilePopup = document.querySelector(".popup_profile") // модалка профиля

//_____________________Профиль_____________________________________________
const profileName = document.querySelector(".profile__name") // Имя в профиле
const profileText = document.querySelector(".profile__text") // Описание в профиле

//кнопки профиля
const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
const profileAvatar = document.querySelector(".popup_avatar") //открываю попап с аватаром

//форма профиля
const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
const formuserAvatar = document.querySelector(".popup__form_avatar")
// console.log(formProfileUser)

//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//аватар
const userAvatar = document.querySelector(".profile__avatar")

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
const imageEditIntuts = Array.from(popupContainerimage.querySelectorAll(validationConfig.InputSelector))
//аватар
const popupContaineAvatar = document.querySelector(".popup__container-avatar-js")
// const avatarEditIntut = Array.from(popupContaineAvatar.querySelectorAll(validationConfig.InputSelector))
const formAvatar = popupContaineAvatar.querySelector(".popup__form")
const avatarEditIntut = document.querySelector(".popup__form_avatar")
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
   toggleButtonState(popupContainerimage, imageEditIntuts, validationConfig)
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
export function handleProfileFormSubmit(evt) {// тут нужно переделать вен и кеч
   evt.preventDefault()
   profileName.textContent = editUserName.value
   profileText.textContent = editUserDescription.value
   closePopup(profilePopup)
   giveProfile(editUserName, editUserDescription)
   // вимо здесь должен быть вен и кеч
}

enableValidation(validationConfig) // запуск валидации



//меняем ник и описание
function profileRender(profile) {
   profileName.textContent = profile.name
   profileText.textContent = profile.about
}

//меняем аватарку
function renderAvatar(avatars) {
   userAvatar.src = avatars
}

const buttonAvatarSubmit = document.querySelector(".popup__accept_avatar")

editAvatar.addEventListener("submit", handleAvatarFormSubmit) //слушатель весит на форме с колбеком
//!Женя слушатель! слушатель нужно отвалидировать а не колбек


function handleAvatarFormSubmit(evt) {// сам колбэк
   evt.preventDefault()//прерываю стандарное действие

   renderLoading(true, buttonAvatarSubmit) // поставить загрузку

   giveAvatar(inputAvatar.value) //отдать аватар на сервер
      .then((profile) => {
         renderAvatar(profile.avatar) //отобразить аватар
         closePopup(profileAvatar) //закрыть попап
         // formAvatar.reset()
         // toggleButtonState(formAvatar, avatarEditIntut , validationConfig) //валидация
      })
      .catch(err => { console.log(err) })
      .finally(() => {
         renderLoading(false, buttonAvatarSubmit) //убрать загрузку
      })
}

//отображение загрузки
function renderLoading(isLoading, button) {
   const loadingText = "Сохранение..."
   const buttonSubmit = button
   if (isLoading) {
      buttonSubmit.textContent = loadingText
   } else {
      if (button == buttonAvatarSubmit) {
         buttonSubmit.textContent = "Сохранить"
      } else {
         buttonSubmit.textContent = "Создать"
      }
   }
}

//______________________Добавление новых карточек____________________________
//форма пользовательских картинок
const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
//инпуты картинок
const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

// сабмиты форм
// formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

//пробую передать кнопку
const imageButtonAccept = document.querySelector(".popup__accept_image")

//______________________________Наш фрон работа__________________________________________________________
// добавить пользовательскую карточку
function handleAddCardSubmit(evt) {
   evt.preventDefault()// сбрасываем тандартное поведени

   renderLoading(true, imageButtonAccept) //функия лоадинга

   giveCards(editImagePlace, editImageUrl) // отправить пользовательскую карточку
      .then(card => {
         elementsContainer.prepend(createCard(card))
         closePopup(imageUserPopup)
         formUserAdd.reset() // сбросить инпуты  в форме
      })
      .catch(err => { console.log(err) })
      .finally(() => {
         renderLoading(false, imageButtonAccept) //убрать загрузку
      })
}


















const elementsContainer = document.querySelector(".elements__list") //контейнер для подготовленых картинок 

// Promise.all([receiveProfile(), receiveCards()])
//    .then(function ([profile, cards]) {
//       //профиль
//       renderAvatar(profile.avatar) //рендерит аватар
//       profileRender(profile) //рендерит профиль имя и дескрипшен
//       //карточки
//       renderOthersUsersCards(cards) //рендерит карточки 
//    })
//    .catch(err => { console.log(`У нас тут ошибка ${err}`) })

function renderOthersUsersCards(cards, profile) {
   cards.forEach(card => {
      elementsContainer.append(createCard(card, profile))
   })
}

Promise.all([receiveProfile(), receiveCards()])
   .then(function ([profile, cards]) {

      //профиль
      renderAvatar(profile.avatar) //рендерит аватар
      profileRender(profile) //рендерит профиль имя и дескрипшен

      //карточки
      renderOthersUsersCards(cards, profile) //рендерит карточки
   })
   .catch(err => { console.log(`Отшиб__очка в промисс алл${err}`) })

// // создаем DOM функцию удаления карточки
// export const handleDeleteCard = function (card) {
//    card.remove()
//    card = null;
// }

// binButton.addEventListener('click', () => handleDeleteCard(cardElement, nubmerOfCard))