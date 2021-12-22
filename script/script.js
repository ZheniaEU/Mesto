// ДА наконец-то JS, наконец-то я смогу бороться с кротами которые обладают не человеческими свойствами.
// Здесь я буду создавать таких чудовищ Myкрича("🐉" $[`+`] }🦛{)! что последние творения профессора Преображенского будет завидовать мне!
// P.S они даже будут петь "лук эт ми айем а бьютифал крича". https://www.youtube.com/watch?v=84LBjXaeKk4

// Обращение к Геннадию. Пожалуйста без шаблонов, по русски. Если я не сделал, что-то, это значит. Я не понял чего Вы просите. У меня всё работает, в консоли нет ошибок, код нигде не повторяется. Все названия переменных с вашими утончёнными вкусами я поправил.


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
function openPopup(popup) {
   popup.classList.add("popup_opened")
}

function closePopup(popup) {
   popup.classList.remove("popup_opened")
}

// слушатели
closeButtonProfile.addEventListener("click", () => closePopup(profilePopup)) //слухатерь закрывает попап редактирования профиля
closeImageButton.addEventListener("click", () => closePopup(imageUserPopup)) //слухатерь закрывает попап пользовательской карточки
editButtonProfile.addEventListener("click", () => openPopup(profilePopup)) // слухатерь открывает попап редактирование профиля
addButtonImage.addEventListener("click", () => openPopup(imageUserPopup)) // слухатерь открывае попап пользовательской карточки
closeImageFullButton.addEventListener("click", () => closePopup(fullImagesPopup)) //слухатерь фулки

// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
formUserAdd.addEventListener("submit", showUserCard) //слушатель формы пользовательской карточки

function handleProfileFormSubmit(evt) {
   evt.preventDefault()
   profileName.textContent = editUserName.value
   profileText.textContent = editUserDescription.value
   closePopup(profilePopup)
}

// показать заранее подготовленые карточки
function showCard() {
   initialCards.forEach(card => {
      elementsContainer.append(createCard(card["link"], card["name"]))
   })
}

// добавить пользовательскую карточку
function showUserCard(evt) {
   evt.preventDefault()
   elementsContainer.prepend(createCard(editImageUrl.value, editImagePlace.value))
   closePopup(imageUserPopup)
   editImageUrl.value = ""
   editImagePlace.value = ""
}

//создание карточки
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

   // лайкает
   likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle("element__heart-botton_active")
   })

   // удаляет
   binButton.addEventListener("click", () => {
      preform.remove()
   })

   // открывает на фулл
   url.addEventListener("click", () => {
      imagePopup.src = link
      imagePopup.alt = name
      captionPopup.textContent = name
      openPopup(fullImagesPopup)
   })

   return preform
}

showCard()