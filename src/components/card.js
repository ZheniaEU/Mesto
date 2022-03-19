// import { handleDeleteCard } from "./index"
import { openPopup, closePopup, fullImagesPopup } from "./modal"
import { deleteCard, givelike, deletelike, receiveCards } from "./api"
// попапы
export const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

//селкеторы полного попапа
const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")

//создание карточки
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

   //проверяю поставил ли я жопку раньше карточке, если поставил, отображаю
   function chekLikes(likes) {
      for (let i = 0; i < likes.length; i++) {
         if (likes[i]._id == id) {
            likeButton.classList.add("element__heart-botton_active")
         }
      }
   }
   chekLikes(card.likes)

   likeButton.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__heart-botton_active")
      if (likeButton.classList.contains("element__heart-botton_active")) {
         givelike(card._id)
            .then(() => {
               like.textContent = like.textContent * 1 + 1
            })
      } else {
         deletelike(card._id)
            .then(() => {
               like.textContent = like.textContent * 1 + -1
            })
      }
   })

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

   //удаляет
   binButton.addEventListener("click", () => {
      deleteCard(card._id)
         .then(() => {
            cardElement.remove()
         })
   })

   return cardElement
}