import { сhangeLikeState, handleDeleteIconClick } from "./index"
import { openPopup, fullImagesPopup } from "./modal"
// попапы
export const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

//селкеторы полного попапа
const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")

export class Card {
   constructor(card, id) { // prfile = id
      this._card = card
      this._id = id
   }
   tt() {
      console.log(this._card, this._id)
   }

 createCard(card, id) {
      const cardElement = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
      const cardImage = cardElement.querySelector(".element__cards-item")
      const title = cardElement.querySelector(".element__title")
      const likeButton = cardElement.querySelector(".element__heart-botton")
      const binButton = cardElement.querySelector(".element__bin")
      const like = cardElement.querySelector(".element__like")
      const bin = cardElement.querySelector(".element__bin")
   
      cardImage.src = card.link
      cardImage.alt = card.name
      title.textContent = card.name
      like.textContent = card.likes.length
   
      //чекаем лайки
      chekLikes(card.likes, likeButton, id)
   
      // лайкает
      likeButton.addEventListener("click", () => сhangeLikeState(card._id, likeButton, like))
   
      // удаляет 
      binButton.addEventListener('click', () => handleDeleteIconClick(cardElement, card._id))
   
      // открывает на фулл
      cardImage.addEventListener("click", () => {
         imagePopup.src = card.link
         imagePopup.alt = card.name
         captionPopup.textContent = card.name
         openPopup(fullImagesPopup)
      })
   
      // показывает бины на карточке пользователя
      if (card.owner._id == id) {
         bin.classList.add("element__bin_active")
      }
   
      // return cardElement
   }
   
   //проверяю поставил ли я жопку раньше карточке, если поставил, отображаю
   chekLikes(like, likeButton, id) {
      for (let i = 0; i < like.length; i++) {
         if (like[i]._id == id) {
            likeButton.classList.add("element__heart-botton_active")
         }
      }
   }
   
   //удаление карточки
   handleDeleteCard(card) {
      card.remove()
      card = null
   }

}


// //создание карточки
export function createCard(card, id) {
   const cardElement = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
   const cardImage = cardElement.querySelector(".element__cards-item")
   const title = cardElement.querySelector(".element__title")
   const likeButton = cardElement.querySelector(".element__heart-botton")
   const binButton = cardElement.querySelector(".element__bin")
   const like = cardElement.querySelector(".element__like")
   const bin = cardElement.querySelector(".element__bin")

   cardImage.src = card.link
   cardImage.alt = card.name
   title.textContent = card.name
   like.textContent = card.likes.length

   //чекаем лайки
   chekLikes(card.likes, likeButton, id)

   // лайкает
   likeButton.addEventListener("click", () => сhangeLikeState(card._id, likeButton, like))

   // удаляет 
   binButton.addEventListener('click', () => handleDeleteIconClick(cardElement, card._id))

   // открывает на фулл
   cardImage.addEventListener("click", () => {
      imagePopup.src = card.link
      imagePopup.alt = card.name
      captionPopup.textContent = card.name
      openPopup(fullImagesPopup)
   })

   // показывает бины на карточке пользователя
   if (card.owner._id == id) {
      bin.classList.add("element__bin_active")
   }

   return cardElement
}

//проверяю поставил ли я жопку раньше карточке, если поставил, отображаю
function chekLikes(like, likeButton, id) {
   for (let i = 0; i < like.length; i++) {
      if (like[i]._id == id) {
         likeButton.classList.add("element__heart-botton_active")
      }
   }
}

//удаление карточки
export function handleDeleteCard(card) {
   card.remove()
   card = null
}

