import "../styles/index.css"
import {renderCards} from "./card.js"

//░░░░░░░░░░░░░░░░░░░░ПЕРЕМЕННЫЕ░░░░░░░░░░░░░░░░░░░░
// попапы
const profilePopup = document.querySelector(".popup__profile") // модалка профиля
const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек
const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек
// const elementsContainer = document.querySelector(".element__list") //контейнер для подготовленых картинок 

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
//форма пользовательских картинок
const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
// //инпуты картинок
// const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
// const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

// //_____________________Развёрнутое модальное окно(полная картинка)__________
// // кнопка фулл
// const closeImageFullButton = document.querySelector(".popup__close_images_full")

//селкеторы полного попапа
const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")


//░░░░░░░░░░░░░░КОД░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

//_________Открытие и закрытие модальных окон____________________
export function openPopup(popup) {
   popup.classList.add("popup_opened")
}

export function closePopup(popup) {
   popup.classList.remove("popup_opened")
}

// слушатели
closeButtonProfile.addEventListener("click", () => closePopup(profilePopup)) //слухатерь закрывает попап редактирования профиля
closeImageButton.addEventListener("click", () => closePopup(imageUserPopup)) //слухатерь закрывает попап пользовательской карточки
editButtonProfile.addEventListener("click", () => openProfilePopupHandler()) // слухатерь открывает попап редактирование профиля
addButtonImage.addEventListener("click", () => openPopup(imageUserPopup)) // слухатерь открывае попап пользовательской карточки
// closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //слухатерь фулки

// сабмиты форм
// formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
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

// // показать заранее подготовленые карточки
// export function renderCards() {
//    initialCards.forEach(card => {
//       elementsContainer.append(createCard(card["link"], card["name"]))
//    })
// }

//добавить пользовательскую карточку
export function handleAddCardSubmit(evt) {
   evt.preventDefault()
   elementsContainer.prepend(createCard(editImageUrl.value, editImagePlace.value))
   closePopup(imageUserPopup)
   editImageUrl.value = ""
   editImagePlace.value = ""
}

// //создание карточки
// export function createCard(link, name) {
//    const cardElement = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
//    const cardImage = cardElement.querySelector(".element__cards-item")
//    const title = cardElement.querySelector(".element__title")
//    // const alt = cardElement.querySelector(".element__title")
//    const likeButton = cardElement.querySelector(".element__heart-botton")
//    const binButton = cardElement.querySelector(".element__bin")

//    cardImage.src = link
//    cardImage.alt = name
//    title.textContent = name

//    // лайкает
//    likeButton.addEventListener("click", (evt) => {
//       evt.target.classList.toggle("element__heart-botton_active")
//    })

//    // удаляет
//    binButton.addEventListener("click", () => {
//       cardElement.remove()
//    })

//    // открывает на фулл
//    cardImage.addEventListener("click", () => {
//       imagePopup.src = link
//       imagePopup.alt = name
//       captionPopup.textContent = name
//       openPopup(fullImagesPopup)
//    })

//    return cardElement
// }

// renderCards()


//░░░░░░░░░░░░░░░░░░░░ПЕРЕМЕННЫЕ░░░░░░░░░░░░░░░░░░░░
// попапы
// const profilePopup = document.querySelector(".popup__profile") // модалка профиля
// const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек
// const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек

// const elementsContainer = document.querySelector(".element__list") //контейнер для подготовленых картинок 

// //_____________________Профиль_____________________________________________
// const profileName = document.querySelector(".profile__name") // Имя в профиле
// const profileText = document.querySelector(".profile__text") // Описание в профиле

// //кнопки профиля
// const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
// const closeButtonProfile = document.querySelector(".popup__close") // кнопка закрытие попапа профиля
// //форма профиля
// const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
// //инпуты профиля
// const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
// const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

// //______________________Добавление новых карточек____________________________
// //кнопки картинок
// const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
// const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками
// //форма пользовательских картинок
// const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
// //инпуты картинок
// const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
// const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

// //_____________________Развёрнутое модальное окно(полная картинка)__________
// // кнопка фулл
// const closeImageFullButton = document.querySelector(".popup__close_images_full")

// //селкеторы полного попапа
// const imagePopup = document.querySelector(".popup__image")
// const captionPopup = document.querySelector(".popup__caption")