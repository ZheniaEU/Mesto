// ДА наконец-то JS, наконец-то я смогу бороться с кротами которые обладают не человеческими свойствами.
// Здесь я буду создавать таких чудовищ Myкрича("🐉" $[`+`] }🦛{)! что последние творения профессора Преображенского будет завидовать мне!
// P.S они даже будут петь лук эт ми айем а бьютифал крича.

// Открытие и закрытие popup
// нам нужно добовлять и удалять стиль в диве с классом попап
// ААААА, чтож так сложно то ещё ничё не начал делать, а эти кроты бегают повсюду и ты даже не знаешь с какого начать, ну пожалуй начну с того который поближе...
// объявим переменную которое будет ощуповать окно
// так пойду попью водички и почитаю теорию заново, а то кроты близко, но я даже тапком в него не попадаю!

const popupContainer = document.querySelector(".popup"); // Контейнер где лежит папап
// Во! Во! а я хорошь
// соталось то совсем нехрена да? создать функци которая бы дописывала сюды popup_opened когда я жмякаю на кнопку и уписывла когда я жмякаю на другую кнопку, что нет такого слово жмякать? это JS в нём есть всё!
// мож ей надо было id пришпандорить а?
const editButton = document.querySelector(".profile__button-edit") // Кнопка редактирования профиля

// как то странна я пока ощущаю 2 места где оно будет использоваться, а кнопка одна, где тот тут ползает крот
const closeButton = document.querySelector(".popup__close") // Кнопка закрытие попаппа
const addButtonPlace = document.querySelector(".profile__button-add") // кнопка открытия профиля
// дописав 55 строчку кода я наконец-то добрался до первого крота, на все 55 строчек кода у меня была одна ошибка(ну конечно с комментариями) я не поставил ("profile__button-add") точку и часа наверное 4 тупил не понимая что делать с этим кротом, а главное во всех других местах поставил. Ну чтож FIRST BLOOD первый крот уничтожен, раскоментирую один из методов слухатеря, остальные оставлю закоментироваными 

// ога у нас же ещё есть кнопан внутри попапа который добавляет картинку
//const vypuskajteKrakena = document.querySelector(".popup__accept") ладно ладно, назовём по другому а то я чувствую что ревьюер кракенов не любит, как и класс с названием Kashpirovsky, да а я предвидел что такое не понравится же...

const submitButtonPlace = document.querySelector(".popup__accept") // кнопка отправки картинки

// так я поидеи должен открыть попап
function openPopup() {
   popupContainer.classList.add("popup_opened")
}

// давайте тут же рядом закроем попап
function closePopup() {
   popupContainer.classList.remove("popup_opened")
}

//так теперь нам нужно определить место где больше всего сконцентрированы эти кроты, для этого мы говорим слухатерю, чтоб он со скоростью махал кадилом со скоростью 60 герц в минут, а не не рано ещё кротов отпевать, пусть определяет точку наибольшую с концентрацией кротов уткнувшись мордой в песок.

addButtonPlace.addEventListener("click", () => openPopup()); // мне если честно стрелочные функции не нравятся они выглядят для меня плохо читаемые пока, а что скажит ревьюер по поводу читаемости стрелочной функции? там чуть ниже есть такая же но не простая 

//addButtonPlace.onclick = function () {
//   popupContainer.classList.add("popup_opened")
//}

//addButtonPlace.onclick = function() {
//   popupContainer.style.display = "flex";
//}

//addButtonPlace.addEventListener('click', function () {
//   openPopup();
//})

//editButton.addEventListener('click', function () {
//   popupContainer.classList.add("popup_opened");
//  });

// откроем ещё этот же попап через кнопку едит, пока это один и тот же попап но в будущем я продам шкуру с крота и куплю ещё один попап.
editButton.addEventListener("click", () => openPopup());

// закроем попап // пока всё работает красота, кроты пока не мешают.
closeButton.addEventListener("click", () => closePopup());