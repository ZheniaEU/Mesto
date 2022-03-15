const myApi = {
   site: "https://mesto.nomoreparties.co/v1/plus-cohort7",
   authorization: "7ae2c7b1-ef91-4b42-9f75-558787176ab1",
   contentType: "application/json"
}
//получаем карточки
function getCards() {
   return fetch("https://mesto.nomoreparties.co/v1/plus-cohort7/cards", {
      method: "GET",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      }
   })
      .then(res => res.json())
      .then((result) => {
         console.log(result)
      })
}

//Используйте этот массив при отображении предзагруженных карточек, а от предыдущего способа отображения первоначальных
// карточек избавьтесь.
//У каждой карточки есть свойства name и link — это заголовок и ссылка на картинку — они понадобятся
// при отображении каждой отдельной карточки.
//Как видите, у карточки также есть идентификатор — свойство _id. Сейчас он вам не нужен, но скоро понадобится.

//получаем профиль
export function getProfile() {
   return fetch("https://mesto.nomoreparties.co/v1/plus-cohort7/users/me", {
      method: "GET",
      headers: {
         authorization: myApi.authorization,
         "Content-Type": myApi.contentType
      }
   })
      .then(res => res.json())
      .then((result) => {
         console.log(result);
      })
}

//{   "name": "Jacques Cousteau","about": "Sailor, researcher","avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//   "_id": "e20537ed11237f86bbb20ccb","cohort": "cohort0"} 
// Используйте свойства name, about и avatar в соответствующих элементах шапки страницы.
// Свойство _id — идентификатор пользователя, в данном случае вашего.


//отправляем профиль
function giveProgile() {
   fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
      method: 'PATCH',
      headers: {
         authorization: myApi.authorization,
         'Content-Type': "application/json"
      },
      body: JSON.stringify({
         name: "Катан",
         about: "мур-мур-мур мы любим гламуррррр"
      })
   })
}
//мур-мур-мур мы любим гламур
getCards()

getProfile()

giveProgile()

//вопросы наставнику, что такое v1?