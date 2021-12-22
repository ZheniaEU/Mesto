// ДА наконец-то JS, наконец-то я смогу бороться с кротами которые обладают не человеческими свойствами.
// Здесь я буду создавать таких чудовищ Myкрича("🐉" $[`+`] }🦛{)! что последние творения профессора Преображенского будет завидовать мне!
// P.S они даже будут петь "лук эт ми айем а бьютифал крича". https://www.youtube.com/watch?v=84LBjXaeKk4


//░░░░░░░░░░░░░░░░░░░░ПЕРЕМЕННЫЕ░░░░░░░░░░░░░░░░░░░░
// попапы
const profilePopup = document.querySelector(".popup__profile") // модалка профиля
const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек
const fullImagesPopup = document.querySelector(".popup_images_open") // модалка полного изображения карточек

const elementsContainer = document.querySelector(".elements") //контейнер для подготовленых картинок 

//_____________________Профиль_____________________________________________
const profileName = document.querySelector(".profile__name") // Имя в профиле
const profileText = document.querySelector(".profile__text") // Описание в профиле

//кнопки профиля
const editButtonProfile = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
const closeButtonProfile = document.querySelector(".popup__close") // кнопка закрытие попапа профиля
//форма профиля
const formProfileUser = document.querySelector(".popup__form_character") // форма профиля пока
//инпуты профиля
const editUserName = document.querySelector(".popup__edit_user_name") //профиль юзер нейм
const editUserDescription = document.querySelector(".popup__edit_user_description") //профиль дескрипшен

//______________________Добавление новых карточек____________________________
//кнопки картинок
const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками
//форма пользовательских картинок
const formUserAdd = document.querySelector(".popup__form_image") // форма пользовательских картинок
//инпуты картинок
const editImagePlace = document.querySelector(".popup__edit_image_place") // инпут места пользовательской карточки
const editImageUrl = document.querySelector(".popup__edit_image_url") // инпут url пользовательской карточки

//_____________________Развёрнутое модальное окно(полная картинка)__________
// кнопка фулл
const closeImageFullButton = document.querySelector(".popup__close_images_full")

//селкеторы полного попапа
const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")

//________________________Массивы________________________________________________
//временные массивы
let newRenderArray = [] // массив где хранятся добавленные карточки

// массив подготовленных карточек
// ША! это мои альты никто не смеит их трогать! меня уже разок похвалили за то как я их заполняю, будем держать марку. https://i.imgur.com/dxgpYLQ.png
const initialCards = [
   {
      name: 'Большая голубая дыра',
      link: 'images/place/Big-Blue-Hole.jpg',
      alt: "Большa голубоa дырa",
   },
   {
      name: 'Амазонка',
      link: 'images/place/mole.jpg',
      alt: "данный участок кода захвачен кротами которые прошли вакцинацию",
   },
   {
      name: 'Большой Барьерный риф',
      link: 'images/place/Great_Barrier_Reef.jpg',
      alt: "Больщой Барьерный риф",
   },
   {
      name: 'Клуб Орлиного глаза',
      link: 'images/place/клуб-орлиного-глаза.jpg',
      alt: "Вуаэристы",
   },
   {
      name: 'Морейн',
      link: 'images/place/Moraine_Lake.jpg',
      alt: "озеро Морейн",
   },
   {
      name: 'что-то',
      link: 'images/place/Great-Barrier-Reef.jpg',
      alt: "эта карточка ещё не заполнена",
   },
]

//░░░░░░░░░░░░░░КОД░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

//_________Открытие и закрытие модальных окон____________________
// одна функция на все открывающиеся модальные окна
function openPopup(popup) {
   popup.classList.add("popup_opened")
}
// одна функция на все закрывающиеся модальные окна
function closePopup(popup) {
   popup.classList.remove("popup_opened")
   // form.reset()
}

// слушатели
closeButtonProfile.addEventListener("click", () => closePopup(profilePopup)) //слухатерь закрывает попап профиля
closeImageButton.addEventListener("click", () => closePopup(imageUserPopup)) //слухатерь закрывает попап картинок
editButtonProfile.addEventListener("click", () => openPopup(profilePopup)) // слухатерь открывает попап с  профилем
addButtonImage.addEventListener("click", () => openPopup(imageUserPopup)) // слухатерь открывае попап с картинкам
closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //слухатерь фулки

// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла



function handleProfileFormSubmit(evt) {
   evt.preventDefault()
   profileName.textContent = editUserName.value
   profileText.textContent = editUserDescription.value
   closePopup(profilePopup)
}

// function likeTogge(evt ) {
//    evt.target.classList.toggle("element__heart-botton_active")
// }

// function deleteCard(evt) {

// }
function showCard() {
   // evt.preventDefault()
   initialCards.forEach(card => {
      elementsContainer.append(createCard(card["link"], card["name"]))
   })
}

function showUserCard(evt) {
   evt.preventDefault()
   elementsContainer.prepend(createCard(editImageUrl["link"], editImagePlace["name"]))
   closePopup(imageUserPopup)
}

function createCard(link, name) {
   const preform = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
   const url = preform.querySelector(".element__cards-item")
   const titel = preform.querySelector(".element__title")
   const alt = preform.querySelector(".element__title")
   const likeButton = preform.querySelector(".element__heart-botton")
   const binButton = preform.querySelector(".element__bin")

   url.src = link
   alt.alt = name
   titel.textContent = name
   console.log(link, name)

   // лайкает
   likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle("element__heart-botton_active")
   })
   // удаляет
   binButton.addEventListener("click", () => {
      preform.remove()
   })
   // открывает на фулл

   const openImg = url

   openImg.addEventListener("click", () => {
      imagePopup.src = link
      imagePopup.alt = name
      captionPopup.textContent = name

      openPopup(fullImagesPopup)
   })

   return preform
}

showCard()

// работа с подготовленными карточками
// function showsCard() {
//    initialCards.forEach(card => {

//       // это отрисовывает
//       const img = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
//       img.querySelector(".element__cards-item").alt = card["alt"]
//       img.querySelector(".element__cards-item").src = card["link"]
//       img.querySelector(".element__title").textContent = card["name"]

//       // открывает на фулл
//       const openImg = img.querySelector(".element__cards-item")

//       openImg.addEventListener("click", () => {
//          imagePopup.src = card["link"]
//          imagePopup.alt = card["alt"]
//          captionPopup.textContent = card["name"]

//          openPopup(fullImagesPopup)
//       })

//       // это удаляет
//       const binButton = img.querySelector(".element__bin")
//       binButton.addEventListener("click", () => {
//          console.log(img)
//          img.remove()
//       })


//       // это лайкает
//       img.querySelector(".element__heart-botton").addEventListener('click', (evt) => {
//          evt.target.classList.toggle("element__heart-botton_active")
//       })
//       elementsContainer.appendChild(img)
//    })
// }

// formUserAdd.addEventListener("submit", intermediateArray) //слушатель формы пользовательской карточки

// //обновление формы
// function intermediateArray(evt) {
//    evt.preventDefault()
//    const img = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
//    img.querySelector(".element__cards-item").alt = editImagePlace.value
//    img.querySelector(".element__cards-item").src = editImageUrl.value
//    img.querySelector(".element__title").textContent = editImagePlace.value
//    let alt = img.querySelector(".element__cards-item").alt
//    let link = img.querySelector(".element__cards-item").src
//    let name = img.querySelector(".element__title").textContent
//    newRenderArray.push({ name, link, alt })
//    newRenderArray = [newRenderArray.pop()]
//    showUserCards()
//    editImageUrl.value = ""
//    editImagePlace.value = ""
// }

// // отображает добавленые карточки
// function showUserCards() {
//    newRenderArray.map(card => {
//       //это отрисовывает
//       const img = document.querySelector(".template").content.querySelector(".element__card").cloneNode(true)
//       img.querySelector(".element__cards-item").alt = card["alt"]
//       img.querySelector(".element__cards-item").src = card["link"]
//       img.querySelector(".element__title").textContent = card["name"]

//       //открывает на фулл
//       const openImg = img.querySelector(".element__cards-item")
//       openImg.addEventListener("click", () => {
//          imagePopup.alt = card["alt"]
//          imagePopup.src = card["link"]
//          captionPopup.textContent = card["name"]
//          openPopup(fullImagesPopup)
//       })
//       // это удаляет карточку
//       const binButton = img.querySelector(".element__bin")
//       binButton.addEventListener("click", () => {
//          img.remove()
//       })
//       // лайкает
//       img.querySelector(".element__heart-botton").addEventListener('click', (evt) => {
//          evt.target.classList.toggle("element__heart-botton_active")
//       })
//       elementsContainer.prepend(img)
//       closePopup(imageUserPopup)
//    })
// }

// showsCard()

// говорят чем больше программист напишет кода тем лучше, поэтому вот


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░ЗАПУСКАЕМ ГУСЕЙ-РАЗВЕДЧИКОВ░░
// ░░░░░▄▀▀▀▄░░░▄▀▀▀▀▄░░░▄▀▀▀▄░░░░░░
// ▄███▀░◐░░░▌░▐0░░░░0▌░▐░░░◐░▀███▄
// ░░░░▌░░░░░▐░▌░▐▀▀▌░▐░▌░░░░░▐░░░░░
// ░░░░▐░░░░░▐░▌░▌▒▒▐░▐░▌░░░░░▌░░░░░