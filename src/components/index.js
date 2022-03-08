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
   buttonSelectorSubmit: ".popup__accept",
   //кнопки
   buttonDisabledClass: "popup__accept_disabled"
}

const t1 = profilePopup.querySelector(".popup__container")
console.log(t1)
const editProfileInputs = Array.from(t1.querySelectorAll(validationConfig.InputSelector))


const t2 = imageUserPopup.querySelector(".popup__container")
const editProfileInputs1 = Array.from(t1.querySelectorAll(validationConfig.InputSelector))

// const popupProfileEdit = profilePopup.querySelector(".popup__form")
// console.log(popupProfileEdit)





// слушатели
closeButtonProfile.addEventListener("click", () => closePopup(profilePopup)) //слушатерь закрывает попап редактирования профиля
closeImageButton.addEventListener("click", () => closePopup(imageUserPopup)) //слушатерь закрывает попап пользовательской карточки
editButtonProfile.addEventListener("click", function () {
   openProfilePopupHandler()
   toggleButtonState(t1, editProfileInputs, validationConfig)
}) // слушатерь открывает попап редактирование профиля
addButtonImage.addEventListener("click", function () {
   openPopup(imageUserPopup)

   toggleButtonState(t2, editProfileInputs1, validationConfig)
   console.log(t2, editProfileInputs1, validationConfig)
}) // слушатерь открывае попап пользовательской карточки


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


// popup__error
// popup__edit_invalid
//функция валидации
const enableValidation = (validationConfig) => {

   //массив всех форм
   const forms = Array.from(document.querySelectorAll(validationConfig.formSelector))
   // console.log(forms)
   //проходимся по массиву чтобы повесить обработчик события сабмита
   forms.forEach(formElement => {
      //чтобы форма никуда не улетала
      formElement.addEventListener("submit", event => {
         event.preventDefault()
         // console.log("кнопка сабмит")
      })
      setEnventListeners(formElement, validationConfig)
      // console.log(formElement, validationConfig)
   })
}



//у каждой формы есть несколько инпутов и каждый нужно валидировать
// вешаем обрабочики событий на каждый инпут
const setEnventListeners = (formElement, validationConfig) => {
   // массив инпутов
   const inputList = Array.from(formElement.querySelectorAll(validationConfig.InputSelector))


   inputList.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
         // проверка валидации этого inputElement
         checkInputValidity(formElement, inputElement, validationConfig)
         // проверка состоянии кнопки сабмита
         toggleButtonState(formElement, inputList, validationConfig)

      })
   })
   // toggleButtonState(formElement, inputList, validationConfig)
}

// работа с состоянием кнопки сабмита
const toggleButtonState = (formElement, inputList, validationConfig) => {
   const buttonElement = formElement.querySelector(validationConfig.buttonSelectorSubmit)

   if (hasInvelidInput(inputList)) {
      buttonElement.classList.add(validationConfig.buttonDisabledClass)
      buttonElement.disabled = true;
   } else {
      buttonElement.classList.remove(validationConfig.buttonDisabledClass)
      buttonElement.disabled = false;
   }
}

const hasInvelidInput = (inputList) => inputList.some(inputElement => !inputElement.validity.valid)

// работа с спаном
const checkInputValidity = (formElement, inputElement, validationConfig) => {
   const errorElement = formElement.querySelector(`.${inputElement.name}-error`)
   if (inputElement.validity.valid) {
      hideinputError(inputElement, errorElement, validationConfig)
   } else {
      showInputError(inputElement, errorElement, inputElement.validationMessage, validationConfig)
   }
}

const hideinputError = (inputElement, errorElement, validationConfig) => {
   inputElement.classList.remove(validationConfig.InputInvalidClass)
   errorElement.classList.remove(validationConfig.errorClass)
   errorElement.textContent = ""
}

const showInputError = (inputElement, errorElement, errorMessage, validationConfig) => {
   inputElement.classList.add(validationConfig.InputInvalidClass)
   errorElement.classList.add(validationConfig.errorClass)
   errorElement.textContent = errorMessage
}

enableValidation(validationConfig)














// const disableButton = (buttonElement, validationConfig) => {
//    buttonElement.classList.add(validationConfig.buttonDisabledClass)
//    buttonElement.disabled = true;
// }

// const enableButton = (buttonElement, validationConfig) => {
//    buttonElement.classList.remove(validationConfig.buttonDisabledClass)
//    buttonElement.disabled = false;
// }

// const hasInvelidInput = (inputList) => {
//    return inputList.some(inputElement => {
//       return !inputElement.validity.valid
//    })
// }

















