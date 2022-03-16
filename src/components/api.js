import { createCard, renderCards} from "./card"

const elementsContainer = document.querySelector(".elements__list") //контейнер для подготовленых картинок 

export const myApi = {
   site: "https://mesto.nomoreparties.co/v1/plus-cohort7",
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


const getCards = () => {
   return fetch("https://mesto.nomoreparties.co/v1/plus-cohort7/cards", {
      method: "GET",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      }
   })
      .then(checkResponse)
}

Promise.all([
   getCards()
]).then(function ([cards]) {
   // const d1 = cards
   console.log(cards)
   // createCard(cards.link, cards.name )
   // console.log(cards, cards.link, cards.name )
   renderCards2(cards)
   // d1.forEach(card => {
   //    elementsContainer.append(createCard(card.link, card.name))
   // })
})

export function renderCards2(cards) {
   cards.forEach(card => {
      elementsContainer.append(createCard(card.link, card.name))
   })
}
// .then((res) => {
//    console.log(res)
// })
// .then(checkResponse)
// .catch((res) => {
//    console.log("что-то пошло не так", res)
// });

//)
// console.log(p)


// cards.forEach(function(card) {
//    renderCards2(card, userId);
//  })



// p.then(function([cards]){
//    console.log(cards)
//    userId = profileData._id;
//    cards.forEach(function(card) {
//       renderCards2(card, userId)
//       console.log(renderCards2(card, userId))
//     })
// })
// p.catch((res) => {
//    console.log("что-то пошло не так", res)
// })
// p.then((res) => {
//    console.log(res.status)
// })

// p.then(checkResponse)
// function renderError(err) {
//    error.textContent = err;
//    result.textContent = "";
//  }
// function renderCards(err) {
//    error.textContent = err;
//    result.textContent = "";
//  }
//Используйте этот массив при отображении предзагруженных карточек, а от предыдущего способа отображения первоначальных
// карточек избавьтесь.
//У каждой карточки есть свойства name и link — это заголовок и ссылка на картинку — они понадобятся
// при отображении каждой отдельной карточки.
//Как видите, у карточки также есть идентификатор — свойство _id. Сейчас он вам не нужен, но скоро понадобится.

//получаем профиль
export function getProfile() {
   return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort7/users/me`, {
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


Promise.all([
   getProfile()
]).then(function ([profile]) {
   console.log(profile)
   profileRender(profile) //рендерит профиль имя и дескрипшен
})

function profileRender(profile) {
   profileName.textContent = profile.name
   profileText.textContent = profile.about
   // editUserName.value = profileName.textContent
   // editUserDescription.value = profileText.textContent
}
//{   "name": "Jacques Cousteau","about": "Sailor, researcher","avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//   "_id": "e20537ed11237f86bbb20ccb","cohort": "cohort0"} 
// Используйте свойства name, about и avatar в соответствующих элементах шапки страницы.
// Свойство _id — идентификатор пользователя, в данном случае вашего.

//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//отправляем профиль
export function giveProfile() {
   fetch("https://nomoreparties.co/v1/plus-cohort7/users/me", {
      method: "PATCH",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         name: editUserName.value,
         about: editUserDescription.value
      })
   })
}

//мур-мур-мур мы любим гламур

//!тестовая функция не вызывать
function giveCards() {
   fetch("https://nomoreparties.co/v1/plus-cohort7/cards", {
      method: "PATCH",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         "likes": [],
         "_id": "5d1f0611d321eb4bdcd707dd",
         "name": "Байкал",
         "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
         "owner": {
            "name": "Jacques Cousteau",
            "about": "Sailor, researcher",
            "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
            "_id": "ef5f7423f7f5e22bef4ad607",
            "cohort": "local"
         },
         "createdAt": "2019-07-05T08:10:57.741Z"
      })
   })
}

// getCards()

// getProfile()

// giveProfile()

//?вопросы наставнику, что такое v1?

// export function giveProfiles() {
//    fetch("https://nomoreparties.co/v1/plus-cohort7/users/me", {
//       method: "PATCH",
//       headers: {
//          authorization: myApi.authorization,
//          "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//          name: editUserName.value,
//          about: editUserDescription.value
//       })
//    })
// }