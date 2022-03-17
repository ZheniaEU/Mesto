import { openPopup, closePopup, fullImagesPopup } from "./modal"
import { giveProfile, giveCards, myApi, deleteCard, givelike, deletelike } from "./api"
// попапы
export const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

const elementsContainer = document.querySelector(".elements__list") //контейнер для подготовленых картинок 

//______________________Добавление новых карточек____________________________
//форма пользовательских картинок
const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
//инпуты картинок
const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

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
   { name: "Большая голубая дыра", link: bigBlueHole },
   { name: "Амазонка", link: amazonka },
   { name: "Большой Барьерный риф", link: greatBarrierReef },
   { name: "Клуб Орлиного глаза", link: clubOfAnEagleEye },
   { name: "Морейн", link: moraine },
   { name: "что-то", link: x3 },
]

// сабмиты форм
// formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

// добавить пользовательскую карточку
export function handleAddCardSubmit(evt) {
   evt.preventDefault()
   const like = []
   const userId = "1857d95644e3d5336aa91bb2"
   giveCards() // отправить пользовательскую карточку
   elementsContainer.prepend(createCard(editImageUrl.value, editImagePlace.value, like, userId))
   closePopup(imageUserPopup)
   formUserAdd.reset() // сбросить инпуты  в форме
}

// export function renderCards2() {

// }

// показать заранее подготовленые карточки
export function renderCards() {
   initialCards.forEach(card => {
      elementsContainer.append(createCard(card.link, card.name))
   })
}

//создание карточки
export function createCard(link, name, likes, userId, nubmerOfCard) {
   const cardElement = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
   const cardImage = cardElement.querySelector(".element__cards-item")
   const title = cardElement.querySelector(".element__title")
   const likeButton = cardElement.querySelector(".element__heart-botton")
   const binButton = cardElement.querySelector(".element__bin")
   const like = cardElement.querySelector(".element__like")
   const bin = cardElement.querySelector(".element__bin")

   cardImage.src = link
   cardImage.alt = name
   title.textContent = name
   like.textContent = likes.length

   //проверяю поставил ли я жопку карьше карточке, если поставил, отображаю
   function chekLikes(likes) {
      for (let i = 0; i < likes.length; i++) {
         if (likes[i]._id == "1857d95644e3d5336aa91bb2") {
            likeButton.classList.add("element__heart-botton_active")
         }
      }
   }
   chekLikes(likes)

   likeButton.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__heart-botton_active")
      if (likeButton.classList.contains("element__heart-botton_active")) {
         givelike(nubmerOfCard)
         like.textContent = like.textContent * 1 + 1
      } else {
         deletelike(nubmerOfCard)
         like.textContent = like.textContent * 1 + -1
      }
   })

   // удаляет
   binButton.addEventListener("click", () => {
      cardElement.remove()
      deleteCard(nubmerOfCard)
   })

   // открывает на фулл
   cardImage.addEventListener("click", () => {
      imagePopup.src = link
      imagePopup.alt = name
      captionPopup.textContent = name
      openPopup(fullImagesPopup)
   })
   // показывает бины на карточке пользователя
   //я вообще безпонятия откуда я должен был знать что "1857d95644e3d5336aa91bb2" это я, но я вытащил этот id из своих созданных карточек
   if (userId == "1857d95644e3d5336aa91bb2") {
      bin.classList.add("element__bin_active")
   }

   return cardElement
}
