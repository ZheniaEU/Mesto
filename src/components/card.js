import { openPopup, closePopup, fullImagesPopup } from "./modal"
import { deleteCard, givelike, deletelike, receiveCards } from "./api"
// попапы
export const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

const elementsContainer = document.querySelector(".elements__list") //контейнер для подготовленых картинок 

//селкеторы полного попапа
const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")

//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

































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
         givelike(nubmerOfCard, editUserName, editUserDescription)
         like.textContent = like.textContent * 1 + 1
      } else {
         deletelike(nubmerOfCard, editUserName, editUserDescription)
         like.textContent = like.textContent * 1 + -1
      }
   })

   // удаляет
   binButton.addEventListener("click", () => {
      cardElement.remove()
      deleteCard(nubmerOfCard, editUserName, editUserDescription)
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


