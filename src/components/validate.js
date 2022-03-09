export const validationConfig = {
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

//функция валидации
export const enableValidation = (validationConfig) => {
   const forms = Array.from(document.querySelectorAll(validationConfig.formSelector))

   //проходимся по массиву чтобы повесить обработчик события сабмита
   forms.forEach(formElement => {
      formElement.addEventListener("submit", event => {
         event.preventDefault()
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
}

// работа с состоянием кнопки сабмита
export const toggleButtonState = (formElement, inputList, validationConfig) => {
   const buttonElement = formElement.querySelector(validationConfig.buttonSelectorSubmit)

   if (hasInvelidInput(inputList)) {
      buttonElement.classList.add(validationConfig.buttonDisabledClass)
      buttonElement.disabled = true
   } else {
      buttonElement.classList.remove(validationConfig.buttonDisabledClass)
      buttonElement.disabled = false
   }
}

const hasInvelidInput = (inputList) => {
   return inputList.some(inputElement => {
      return !inputElement.validity.valid
   })
}

// работа с спаном
const checkInputValidity = (formElement, inputElement, validationConfig) => {
   const errorElement = formElement.querySelector(`.${inputElement.name}-error`)
   if (inputElement.validity.valid) {
      hideinputError(inputElement, errorElement, validationConfig)
   } else {
      showInputError(inputElement, errorElement, inputElement.validationMessage, validationConfig)
   }
}

//скрываем ошибки
const hideinputError = (inputElement, errorElement, validationConfig) => {
   inputElement.classList.remove(validationConfig.InputInvalidClass)
   errorElement.classList.remove(validationConfig.errorClass)
   errorElement.textContent = ""
}

//показываем ошибки
const showInputError = (inputElement, errorElement, errorMessage, validationConfig) => {
   inputElement.classList.add(validationConfig.InputInvalidClass)
   errorElement.classList.add(validationConfig.errorClass)
   errorElement.textContent = errorMessage
}


// const disableButton = (buttonElement, validationConfig) => {
//    buttonElement.classList.add(validationConfig.buttonDisabledClass)
//    buttonElement.disabled = true
// }

// const enableButton = (buttonElement, validationConfig) => {
//    buttonElement.classList.remove(validationConfig.buttonDisabledClass)
//    buttonElement.disabled = false
// }

// const hasInvelidInput = (inputList) => {
//    return inputList.some(inputElement => {
//       return !inputElement.validity.valid
//    })
// }