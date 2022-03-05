// ДА наконец-то JS, наконец-то я смогу бороться с кротами которые обладают не человеческими свойствами.
// Здесь я буду создавать таких чудовищ Myкрича("🐉" $[`+`] }🦛{)! что последние творения профессора Преображенского будет завидовать мне!
// P.S они даже будут петь "лук эт ми айем а бьютифал крича". https://www.youtube.com/watch?v=84LBjXaeKk4
import "../styles/index.css"

//░░░░░░░░░░░░░░░░░░░░ПЕРЕМЕННЫЕ░░░░░░░░░░░░░░░░░░░░
// попапы
export const profilePopup = document.querySelector(".popup__profile") // модалка профиля
export const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек
export const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек

export const elementsContainer = document.querySelector(".element__list") //контейнер для подготовленых картинок 

//_____________________Профиль_____________________________________________
export const profileName = document.querySelector(".profile__name") // Имя в профиле
export const profileText = document.querySelector(".profile__text") // Описание в профиле

//кнопки профиля
export const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
export const closeButtonProfile = document.querySelector(".popup__close") // кнопка закрытие попапа профиля
//форма профиля
export const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
//инпуты профиля
export const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
export const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//______________________Добавление новых карточек____________________________
//кнопки картинок
export const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
export const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками
//форма пользовательских картинок
export const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
//инпуты картинок
export const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
export const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

//_____________________Развёрнутое модальное окно(полная картинка)__________
// кнопка фулл
export const closeImageFullButton = document.querySelector(".popup__close_images_full")

//селкеторы полного попапа
export const imagePopup = document.querySelector(".popup__image")
export const captionPopup = document.querySelector(".popup__caption")

// картинки для webpack
export const bigBlueHole = new URL("./../images/place/Big-Blue-Hole.jpg", import.meta.url)
export const amazonka = new URL("./../images/place/mole.jpg", import.meta.url)
export const greatBarrierReef = new URL("./../images/place/Great_Barrier_Reef.jpg", import.meta.url)
export const clubOfAnEagleEye = new URL("./../images/place/клуб-орлиного-глаза.jpg", import.meta.url)
export const moraine = new URL("./../images/place/Moraine_Lake.jpg", import.meta.url)
export const x3 = new URL("./../images/place/Great-Barrier-Reef.jpg", import.meta.url)

export const initialCards = [
   {
      name: "Большая голубая дыра",
      link: bigBlueHole
      // alt: "Большa голубоa дырa",
   },
   {
      name: "Амазонка",
      link: amazonka
      // alt: "данный участок кода захвачен кротами которые прошли вакцинацию",
   },
   {
      name: "Большой Барьерный риф",
      link: greatBarrierReef
      // alt: "Больщой Барьерный риф",
   },
   {
      name: "Клуб Орлиного глаза",
      link: clubOfAnEagleEye
      // alt: "Вуаэристы",
   },
   {
      name: "Морейн",
      link: moraine
      // alt: "озеро Морейн",
   },
   {
      name: "что-то",
      link: x3
      // alt: "эта карточка ещё не заполнена",
   },
]

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
closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //слухатерь фулки

// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

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

// показать заранее подготовленые карточки
export function renderCards() {
   initialCards.forEach(card => {
      elementsContainer.append(createCard(card["link"], card["name"]))
   })
}

// добавить пользовательскую карточку
export function handleAddCardSubmit(evt) {
   evt.preventDefault()
   elementsContainer.prepend(createCard(editImageUrl.value, editImagePlace.value))
   closePopup(imageUserPopup)
   editImageUrl.value = ""
   editImagePlace.value = ""
}

//создание карточки
export function createCard(link, name) {
   const cardElement = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
   const cardImage = cardElement.querySelector(".element__cards-item")
   const title = cardElement.querySelector(".element__title")
   // const alt = cardElement.querySelector(".element__title")
   const likeButton = cardElement.querySelector(".element__heart-botton")
   const binButton = cardElement.querySelector(".element__bin")

   cardImage.src = link
   cardImage.alt = name
   title.textContent = name

   // лайкает
   likeButton.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__heart-botton_active")
   })

   // удаляет
   binButton.addEventListener("click", () => {
      cardElement.remove()
   })

   // открывает на фулл
   cardImage.addEventListener("click", () => {
      imagePopup.src = link
      imagePopup.alt = name
      captionPopup.textContent = name
      openPopup(fullImagesPopup)
   })

   return cardElement
}

renderCards()