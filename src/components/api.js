const myApi = {
   baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort7",//`${myApi.baseUrl}`
   headers: {
      authorization: "7ae2c7b1-ef91-4b42-9f75-558787176ab1",//myApi.headers
      "Content-Type": "application/json"
   }
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
export function giveProfile(editUserName, editUserDescription) {
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
export function giveCards(editImagePlace, editImageUrl) {
   return fetch(`${myApi.baseUrl}/cards`, {
      method: "POST",
      headers: myApi.headers,
      body: JSON.stringify({
         "name": editImagePlace.value,
         "link": editImageUrl.value,
      })
   })
      .then(checkResponse)
}

// запрос на удаление карточки пользователя
export function deleteCard(cardId) {
   return fetch(`${myApi.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: myApi.headers,
      body: JSON.stringify({
      })
   })
      .then(checkResponse)
}

// запрос на добавление лайка
export function givelike(cardId) {
   return fetch(`${myApi.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: myApi.headers,
      body: JSON.stringify({
      })
   })
      .then(checkResponse)
}

// запрос на удаление лайка
export function deletelike(cardId) {
   return fetch(`${myApi.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: myApi.headers,
      body: JSON.stringify({
      })
   })
      .then(checkResponse)
}

// обновление аватара
export function giveAvatar(url) {
   return fetch(`${myApi.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: myApi.headers,
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
