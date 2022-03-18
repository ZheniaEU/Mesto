import { editImagePlace, editImageUrl } from "./card"
import { profileName, profileText, editUserName, editUserDescription } from "./index"

export const myApi = {
   baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort7",//`${myApi.baseUrl}`
   headers: {
      authorization: "7ae2c7b1-ef91-4b42-9f75-558787176ab1",//myApi.headers
      contentType: "application/json"
   },
   authorization: "7ae2c7b1-ef91-4b42-9f75-558787176ab1", //фикс для чего там, не позволяет отправлять карточки через myApi.headers , чёто связано с касперским пишет мне, что нельзя передавать заголовок именно в функции function giveCards вот в таком виде myApi.headers
   contentType: "application/json"
}

//получаем от сервера карточки
export const receiveCards = () => {
   return fetch(`${myApi.baseUrl}/cards`, {
      method: "GET",
      headers: myApi.headers
   })
      .then(checkResponse)
}

//получаем от сервера профиль
export function receiveProfile() {
   return fetch(`${myApi.baseUrl}/users/me`, {
      method: "GET",
      headers: myApi.headers
   })
      .then(checkResponse)
}

//отправляем профиль
export function giveProfile() {
   return fetch(`${myApi.baseUrl}/users/me`, {
      method: "PATCH",
      headers: myApi.headers,
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
      .then(checkResponse)
}

//отправка пользовательской карточки
export function giveCards() {
   return fetch(`${myApi.baseUrl}/cards`, {
      method: "POST",
      //   headers: myApi.headers, так не пропускает
      headers: { //а так пропускает
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

// запрос на удаление карточки пользователя
export function deleteCard(nubmerOfCard) {
   const cardId = nubmerOfCard
   // console.log(nubmerOfCard)
   return fetch(`${myApi.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: myApi.headers,
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
   return fetch(`${myApi.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: myApi.headers,
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
   return fetch(`${myApi.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: myApi.headers,
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
      .then(checkResponse)
}

// обновление аватара
export function giveAvatar(url) {
   return fetch(`${myApi.baseUrl}/users/me/avatar`, {
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

//обработка ошибки
export const checkResponse = function (response) {
   if (response.ok) {
      return response.json()
   } else {
      return Promise.reject(`Обнаружен запуск ядерной ракеты: ${response.status}`)
   }
}
