import {openPopup, closePopup,} from "./modal"

// попапы
const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

// const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек
const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек
const elementsContainer = document.querySelector(".element__list") //контейнер для подготовленых картинок 

//______________________Добавление новых карточек____________________________
//форма пользовательских картинок
const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
//инпуты картинок
const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

//_____________________Развёрнутое модальное окно(полная картинка)__________
// кнопка фулл
const closeImageFullButton = document.querySelector(".popup__close_images_full")

//селкеторы полного попапа
const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")

// картинки для webpack
const bigBlueHole = new URL("./../images/place/Big-Blue-Hole.jpg", import.meta.url)
const amazonka = new URL("./../images/place/mole.jpg", import.meta.url)
const greatBarrierReef = new URL("./../images/place/Great_Barrier_Reef.jpg", import.meta.url)
const clubOfAnEagleEye = new URL("./../images/place/клуб-орлиного-глаза.jpg", import.meta.url)
const moraine = new URL("./../images/place/Moraine_Lake.jpg", import.meta.url)
const x3 = new URL("./../images/place/Great-Barrier-Reef.jpg", import.meta.url)

const initialCards = [
   {name: "Большая голубая дыра", link: bigBlueHole},
   {name: "Амазонка", link: amazonka},
   {name: "Большой Барьерный риф", link: greatBarrierReef},
   {name: "Клуб Орлиного глаза", link: clubOfAnEagleEye},
   {name: "Морейн", link: moraine},
   {name: "что-то", link: x3},
]

// сабмиты форм
// formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //слухатерь фулки

// добавить пользовательскую карточку
export function handleAddCardSubmit(evt) {
   evt.preventDefault()
   elementsContainer.prepend(createCard(editImageUrl.value, editImagePlace.value))
   closePopup(imageUserPopup)
   editImageUrl.value = ""
   editImagePlace.value = ""
}

// показать заранее подготовленые карточки
export function renderCards() {
   initialCards.forEach(card => {
      elementsContainer.append(createCard(card["link"], card["name"]))
   })
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
