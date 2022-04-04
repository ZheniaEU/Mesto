// const myApi = {
//    baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort7",//`${myApi.baseUrl}`
//    headers: {
//       authorization: "7ae2c7b1-ef91-4b42-9f75-558787176ab1",//myApi.headers
//       "Content-Type": "application/json"
//    }
// }


export class Api {
   constructor(options) {
      this._url = options.url
      this._headers = options.headers
   }


   //получаем от сервера карточки
   receiveCards = () => {
      return fetch(`${this._url}/cards`, {
         method: "GET",
         headers: this._headers
      })
         .then(this._checkResponse)
   }

   //получаем от сервера профиль
   receiveProfile() {
      return fetch(`${this._url}/users/me`, {
         method: "GET",
         headers: this._headers
      })
         .then(this._checkResponse)

   }

   //отправляем профиль
   giveProfile(editUserName, editUserDescription) {
      return fetch(`${this._url}/users/me`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            name: editUserName.value,
            about: editUserDescription.value
         })
      })
         .then(this._checkResponse)
   }

   //отправка пользовательской карточки
   giveCards(editImagePlace, editImageUrl) {
      return fetch(`${this._url}/cards`, {
         method: "POST",
         headers: this._headers,
         body: JSON.stringify({
            "name": editImagePlace.value,
            "link": editImageUrl.value,
         })
      })
         .then(this._checkResponse)
   }

   // запрос на удаление карточки пользователя
   deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
         method: "DELETE",
         headers: this._headers,
         body: JSON.stringify({
         })
      })
         .then(this._checkResponse)
   }

   // запрос на добавление лайка
   givelike(cardId) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
         method: "PUT",
         headers: this._headers,
         body: JSON.stringify({
         })
      })
         .then(this._checkResponse)
   }

   // запрос на удаление лайка
   deletelike(cardId) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
         method: "DELETE",
         headers: this._headers,
         body: JSON.stringify({
         })
      })
         .then(this._checkResponse)
   }

   // обновление аватара
   giveAvatar(url) {
      return fetch(`${this._url}/users/me/avatar`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            avatar: url
         })
      })
         .then(this._checkResponse)
   }

   //обработка ошибки
   _checkResponse = function (response) {
      if (response.ok) {
         return response.json()
      } else {
         return Promise.reject(`Обнаружен запуск ядерной ракеты: ${response.status}`)
      }
   }

}