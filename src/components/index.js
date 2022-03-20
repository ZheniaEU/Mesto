import "../pages/index.css"
import { createCard, imageUserPopup, handleDeleteCard } from "./card"
import { openPopup, closePopup } from "./modal"
import { enableValidation, validationConfig, toggleButtonState, checkInputValidity } from "./validate"
import { giveProfile, giveAvatar, receiveProfile, giveCards, receiveCards, deleteCard, givelike, deletelike } from "./api"

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
// const formuserAvatar = document.querySelector(".popup__form_avatar")

//форма пользовательских картинок
const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок

//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//инпуты картинок
const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

//контейнер для подготовленых картинок 
const elementsContainer = document.querySelector(".elements__list")

//аватар
const userAvatar = document.querySelector(".profile__avatar")

//______________________Добавление новых карточек____________________________
//кнопки картинок
const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок

//кнопка создания карточек
const imageButtonAccept = document.querySelector(".popup__accept_image")

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
const avatarEditIntut = Array.from(popupContaineAvatar.querySelectorAll(validationConfig.InputSelector))

const popupAvatar = document.querySelector(".profile__avatar-edit") // попап аватара
const editAvatar = document.querySelector(".popup__form_avatar") // форма аватара

const inputAvatar = document.querySelector(".popup__edit_user_avatar") //поля аватара

// слушатерь открывает попап редактирование профиля
editButtonProfile.addEventListener("click", function () {
   openProfilePopup()
   checkInputValidity(formProfileUser, editUserName, validationConfig)
   checkInputValidity(formProfileUser, editUserDescription, validationConfig)
   toggleButtonState(popupContainerProfile, profileEditIntuts, validationConfig)
})

// слушатель открывает попап редактирования аватара
popupAvatar.addEventListener("click", function () {
   openPopup(profileAvatar)
   toggleButtonState(popupContaineAvatar, avatarEditIntut, validationConfig)
})

// слушатерь открывае попап пользовательской карточки
addButtonImage.addEventListener("click", function () {
   openPopup(imageUserPopup)
   toggleButtonState(popupContainerimage, imageEditIntuts, validationConfig)
})

// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

// получает информацию профиля и открываю попап с ним
export function openProfilePopup() {
   editUserName.value = profileName.textContent
   editUserDescription.value = profileText.textContent
   openPopup(profilePopup)
}

// после редактирования профиля, закрываю попап
function handleProfileFormSubmit(evt) {// тут нужно переделать вен и кеч
   evt.preventDefault()

   renderLoading(true, buttonAvatarSubmit) // поставить загрузку

   giveProfile(editUserName, editUserDescription)
      .then((profile) => {
         //меняю уже из ответа, поля профайла
         profileRender(profile)
         closePopup(profilePopup)
      })
      .catch(err => { console.log(err) })
      .finally(() => {
         renderLoading(false, buttonAvatarSubmit) //убрать загрузку
      })
}


//получаем данные по нику и дискрипшену с сервера
function profileRender(profile) {
   profileName.textContent = profile.name
   profileText.textContent = profile.about
}

//меняем аватарку
function renderAvatar(avatars) {
   userAvatar.src = avatars
}

const buttonAvatarSubmit = document.querySelector(".popup__accept_avatar")

//слушатель формы изменения аватара
editAvatar.addEventListener("submit", handleAvatarFormSubmit) //слушатель весит на форме с колбеком

function handleAvatarFormSubmit(evt) {// сам колбэк
   evt.preventDefault()//прерываю стандарное действие

   renderLoading(true, buttonAvatarSubmit) // поставить загрузку

   giveAvatar(inputAvatar.value) //отдать аватар на сервер
      .then((profile) => {
         renderAvatar(profile.avatar) //отобразить аватар
         closePopup(profileAvatar) //закрыть попап
         editAvatar.reset() // сброс формы
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

// добавить пользовательскую карточку
function handleAddCardSubmit(evt) {
   evt.preventDefault()// сбрасываем тандартное поведени

   renderLoading(true, imageButtonAccept) //функия лоадинга

   giveCards(editImagePlace, editImageUrl) // отправить пользовательскую карточку
      .then(card => {
         elementsContainer.prepend(createCard(card, id))
         closePopup(imageUserPopup)
         formUserAdd.reset() // сбросить инпуты  в форме
      })
      .catch(err => { console.log(err) })
      .finally(() => {
         renderLoading(false, imageButtonAccept) //убрать загрузку
      })
}

function renderOthersUsersCards(cards, profile) {
   cards.forEach(card => {
      elementsContainer.append(createCard(card, profile))
   })
}

//функция лайка карточки
export function likos(card_id, likeButton, like) {
   likeButton.classList.toggle("element__heart-botton_active")
   if (likeButton.classList.contains("element__heart-botton_active")) {
      givelike(card_id)
         .then(() => {
            like.textContent = like.textContent * 1 + 1
         })
         .catch(err => { console.log(err) })
   } else {
      deletelike(card_id)
         .then(() => {
            like.textContent = like.textContent * 1 + -1
         })
         .catch(err => { console.log(err) })
   }
}

//функция удаления карточки
export function handleDeleteIconClick(cardElement, cardId) {
   deleteCard(cardId)
      .then(() => {
         handleDeleteCard(cardElement);
      })
      .catch(err => { console.log(err) })
}


let id

//промисы проайла и карточки
Promise.all([receiveProfile(), receiveCards()])
   .then(function ([profile, cards]) {

      id = profile._id
      //профиль
      renderAvatar(profile.avatar) //рендерит аватар
      profileRender(profile) //рендерит профиль имя и дескрипшен

      //карточки
      renderOthersUsersCards(cards, id) //рендерит карточки
   })
   .catch(err => { console.log(`Отшиб__очка в промисс алл${err}`) })


enableValidation(validationConfig) // запуск валидации