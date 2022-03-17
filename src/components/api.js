import { createCard, renderCards } from "./card"
import { } from "./index"

const elementsContainer = document.querySelector(".elements__list") //контейнер для подготовленых картинок 

export const myApi = {
   website: "https://mesto.nomoreparties.co/v1/plus-cohort7",//`${myApi.website}`
   authorization: "7ae2c7b1-ef91-4b42-9f75-558787176ab1",
   contentType: "application/json"
}

//обработка ошибки
const checkResponse = (response) => {
   if (response.ok) {
      return response.json()
   } else {
      return Promise.reject(`Обнаружен запуск ядерной ракеты: ${response.status}`)
   }
}


const receiveCards = () => {
   return fetch(`${myApi.website}/cards`, {
      method: "GET",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      }
   })
      .then(checkResponse)
}

Promise.all([
   receiveCards()
]).then(function ([cards]) {
   console.log(cards)
   renderCards2(cards)
})

export function renderCards2(cards) {
   cards.forEach(card => {
      // console.log(card)
      elementsContainer.append(createCard(card.link, card.name, card.likes, card.owner._id, card._id))
   })
}



//получаем профиль
export function receiveProfile() {
   return fetch(`${myApi.website}/users/me`, {
      method: "GET",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      }
   })
      .then(checkResponse)
}

//_____________________Профиль_____________________________________________
const profileName = document.querySelector(".profile__name") // Имя в профиле
const profileText = document.querySelector(".profile__text") // Описание в профиле

export let tt = ""

Promise.all([
   receiveProfile()
]).then(function ([profile]) {
   profileRender(profile) //рендерит профиль имя и дескрипшен
   renderAvatar(profile.avatar)
   tt = profile.avatar
})

function profileRender(profile) {
   profileName.textContent = profile.name
   profileText.textContent = profile.about
}

const avatar = document.querySelector(".profile__avatar")

export function renderAvatar(avatars) {
   avatar.scr = avatars
   console.log(avatar.scr)
}

//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//отправляем профиль
export function giveProfile() {
   fetch(`${myApi.website}/users/me`, {
      method: "PATCH",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      },
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
      .then(checkResponse)
}

//мур-мур-мур мы любим гламур

//инпуты картинок
const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

//отправка пользовательской карточки
export function giveCards() {
   fetch(`${myApi.website}/cards`, {
      method: "POST",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      },
      body: JSON.stringify({
         "likes": [],
         "_id": "5d1f0611d321eb4bdcd707dd",
         "name": editImagePlace.value,
         "link": editImageUrl.value,
         "owner": {
            "name": profileName.textContent,
            "about": profileText.textContent,
            "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
            "_id": "ef5f7423f7f5e22bef4ad607",
            "cohort": "local"
         },
         "createdAt": ""
      })
   })
      .then(checkResponse)
}

//?вопросы наставнику, что такое v1?
// запрос на удаление карточки пользователя
export function deleteCard(nubmerOfCard) {
   const cardId = nubmerOfCard
   console.log(nubmerOfCard)
   fetch(`${myApi.website}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      },
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
      .then(checkResponse)
}

// запрос на добавление лайка
export function givelike(nubmerOfCard) {
   const cardId = nubmerOfCard
   fetch(`${myApi.website}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      },
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
      .then(checkResponse)
}

// запрос на удаление лайка
export function deletelike(nubmerOfCard) {
   const cardId = nubmerOfCard
   fetch(`${myApi.website}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      },
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
      .then(checkResponse)
}

// обновление аватара
export function giveAvatar(url) {
   console.log(url)
   fetch(`${myApi.website}/users/me/avatar`, {
      method: "PATCH",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      },
      body: JSON.stringify({
         avatar: url
      })
   })
      .then(checkResponse)
}


