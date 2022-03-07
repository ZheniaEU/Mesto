import "../styles/index.css"
import { renderCards } from "./card"
import { openPopup, closePopup } from "./modal"

// попапы
const profilePopup = document.querySelector(".popup_profile") // модалка профиля
const imageUserPopup = document.querySelector(".popup_images") // модалка добавления карточек

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

// слушатели
closeButtonProfile.addEventListener("click", () => closePopup(profilePopup)) //слушатерь закрывает попап редактирования профиля
closeImageButton.addEventListener("click", () => closePopup(imageUserPopup)) //слушатерь закрывает попап пользовательской карточки
editButtonProfile.addEventListener("click", () => openProfilePopupHandler()) // слушатерь открывает попап редактирование профиля
addButtonImage.addEventListener("click", () => openPopup(imageUserPopup)) // слушатерь открывае попап пользовательской карточки


// сабмиты форм
formProfileUser.addEventListener("submit", handleProfileFormSubmit) //слушатель формы профайла
// formUserAdd.addEventListener("submit", handleAddCardSubmit) //слушатель формы пользовательской карточки

// получает информацию профиля и открываю попап с ним
export function openProfilePopupHandler() {
   editUserName.value = profileName.textContent
   editUserDescription.value = profileText.textContent
   openPopup(profilePopup)
}

// после редактирования профиля, закрываю попап
export function handleProfileFormSubmit(evt) {
   evt.preventDefault()
   profileName.textContent = editUserName.value
   profileText.textContent = editUserDescription.value
   closePopup(profilePopup)
}

renderCards() //запускаем карточки

//валидация

const validationConfig = {
   //формы
   formSelector: ".popup__form",
   //инпуты
   InputSelector: ".popup__edit",
   //спаны
   errorClass: "popup__error",
   //спаны
   InputInvalidClass: "popup__edit_invalid",
   //кнопки
   buttonSelector: ".popup__accept",
   //кнопки
   buttonDisabledClass: "popup__accept_disabled"

}
// popup__error
// popup__edit_invalid
//функция валидации
const enableValidation = (config) => {
   //массив всех форм
   const forms = Array.from(document.querySelectorAll(config.formSelector))

   //проходимся по массиву чтобы повесить обработчик события сабмита
   forms.forEach(formElement => {
      //чтобы форма никуда не улетала
      formElement.addEventListener("submit", event => {
         event.preventDefault()
         console.log("кнопка сабмит")
      })
      setEnventListeners(formElement, config)
   })
}

//у каждой формы есть несколько инпутов и каждый нужно валидировать
// вешаем обрабочики событий на каждый инпут
const setEnventListeners = (formElement, config) => {
   // массив инпутов
   const inputList = Array.from(formElement.querySelectorAll(config.InputSelector))
   console.log(inputList)

   inputList.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
         // проверка валидации этого inputElement
         checkInputValidity(formElement, inputElement, config)
         // проверка состоянии кнопки сабмита
         toggleButtonState(formElement, inputList, config)
      })
   })
   toggleButtonState(formElement, inputList, config)
}

// работа с состоянием кнопки сабмита
const toggleButtonState = (formElement, inputList, config) => {
   const buttonElement = formElement.querySelector(config.buttonSelector)

   if (hasInvelidInput(inputList)) {
      disableButton(buttonElement, config)
   } else {
      enableButton(buttonElement, config)
   }
}

const disableButton = (buttonElement, config) => {
   buttonElement.classList.add(config.buttonDisabledClass)
   buttonElement.disabled = true;
}

const enableButton = (buttonElement, config) => {
   buttonElement.classList.remove(config.buttonDisabledClass)
   buttonElement.disabled = false;
}

const hasInvelidInput = (inputList) => {
   return inputList.some(inputElement => {
      return !inputElement.validity.valid
   })
}

// работа с спаном
const checkInputValidity = (formElement, inputElement, config) => {
   const errorElement = formElement.querySelector(`.${inputElement.name}-error`)
   if (inputElement.validity.valid) {
      hideinputError(inputElement, errorElement, config)
   } else {
      showInputError(inputElement, errorElement, inputElement.validationMessage, config)
   }
}

const hideinputError = (inputElement, errorElement, config) => {
   inputElement.classList.remove(config.InputInvalidClass)
   console.log(inputElement)
   // InputSelector.classList.add(config.popup__edit_invalid)
   // tt.classList.add(config.popup__edit_invalid)
   errorElement.classList.remove(config.errorClass)
   errorElement.textContent = ""
}

const showInputError = (inputElement, errorElement, errorMessage, config) => {
   inputElement.classList.add(config.InputInvalidClass)
   console.log(inputElement)
   // InputSelector.classList.add(config.popup__edit_invalid)
   // tt.classList.add(config.popup__edit_invalid)
   errorElement.classList.add(config.errorClass)
   errorElement.textContent = errorMessage
}

































enableValidation(validationConfig)