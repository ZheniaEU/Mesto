// ДА наконец-то JS, наконец-то я смогу бороться с кротами которые обладают не человеческими свойствами.
// Здесь я буду создавать таких чудовищ Myкрича("🐉" $[`+`] }🦛{)! что последние творения профессора Преображенского будет завидовать мне!
// P.S они даже будут петь "лук эт ми айем а бьютифал крича". https://www.youtube.com/watch?v=84LBjXaeKk4

// Открытие и закрытие popup
// нам нужно добовлять и удалять стиль в диве с классом попап
// ААААА, чтож так сложно то ещё ничё не начал делать, а эти кроты бегают повсюду и ты даже не знаешь с какого начать, ну пожалуй начну с того который поближе...
// объявим переменную которое будет ощуповать окно
// так пойду попью водички и почитаю теорию заново, а то кроты близко, но я даже тапком в него не попадаю!

// Во! Во! а я хорошь
// соталось то совсем нехрена да? создать функци которая бы дописывала сюды popup_opened когда я жмякаю на кнопку и уписывла когда я жмякаю на другую кнопку, что нет такого слово жмякать? это JS в нём есть всё!
// мож ей надо было id пришпандорить а?


// как то странна я пока ощущаю 2 места где оно будет использоваться, а кнопка одна, где тот тут ползает крот

// дописав 55 строчку кода я наконец-то добрался до первого крота, на все 55 строчек кода у меня была одна ошибка(ну конечно с комментариями) я не поставил ("profile__button-add") точку и часа наверное 4 тупил не понимая что делать с этим кротом, а главное во всех других местах поставил. Ну чтож FIRST BLOOD первый крот уничтожен, раскоментирую один из методов слухатеря, остальные оставлю закоментироваными 

// ога у нас же ещё есть кнопан внутри попапа который добавляет картинку
//const vypuskajteKrakena = document.querySelector(".popup__accept") ладно ладно, назовём по другому а то я чувствую что ревьюер кракенов не любит, как и класс с названием Kashpirovsky, да а я предвидел что такое не понравится же...





//так теперь нам нужно определить место где больше всего сконцентрированы эти кроты, для этого мы говорим слухатерю, чтоб он со скоростью махал кадилом со скоростью 60 герц в минут, а не не рано ещё кротов отпевать, пусть определяет точку наибольшую с концентрацией кротов уткнувшись мордой в песок.



//addButtonImge.onclick = function () {
//   popupContainer.classList.add("popup_opened")
//}

//addButtonImge.onclick = function() {
//   popupContainer.style.display = "flex";
//}

//addButtonImge.addEventListener('click', function () {
//   openPopup();
//})

//editButton.addEventListener('click', function () {
//   popupContainer.classList.add("popup_opened");
//  });

// совершим рейд на кнопку большого плюса и захватим его, заставим работать на нас! на уничтожение кротов

//прошла рестуктуризация кода, а то я уже путаюсь, вобъяление  переменных в самом верху, а не походу кода, потом функции потом вызов, нупока я так это вижу

// давайте тут же рядом закроем попап
//function closePopup() {
//   popupContainer.classList.remove("popup_opened");
//   imageContainer.classList.remove("popup_opened");
//}

//addButtonImge.addEventListener("click", () => openImagePopup()); // мне если честно стрелочные функции не нравятся они выглядят для меня плохо читаемые пока, а что скажит ревьюер по поводу читаемости стрелочной функции? там чуть ниже есть такая же но не простая 

// откроем ещё этот же попап через кнопку едит, пока это один и тот же попап но в будущем я продам шкуру с крота и куплю ещё один попап.
// editButton.addEventListener("click", () => openPopup());

// закроем попап // пока всё работает красота, кроты пока не мешают.
//closeButton.addEventListener("click", () => closePopup());

// наш слухатерь пришёл к нас с докладом что кротов он не обнаружил и высказал своё подозрение что кроты в песке не водятся, поставим его на обнаружение у озера!


//function closeImagePopup() {
//   imageContainer.classList.remove("popup_opened")
//}

// // открываю попап с профилем
//function openPopup() {
//   popupContainer.classList.add("popup_opened")
//}

// // открываю попап с картинками
//function openImagePopup() {
//   imageContainer.classList.add("popup_opened")
//}

//весь легаси код едит наверх, первый мой JS а у же легаси код 🤪

// пока на вид как не понятная хрень / Находим форму в DOM
// посути как я понимаю мне нужно 2 функции с формомй которые будут вызыватся при нажатии сабмита и сабмит им должен передавать значение? или или там как то по другому значение передаётся, должно вроде по другому... 

// ну вот нашёл же водяного крота, а говорил в песке кроты не водятся, в воде водятся же! щас мы подумаем как его уничтожить
// я должен повешать событие сабмит на форму, а у меня клик на кнопке -,-!
// submitProfileButton.addEventListener("click", () => formSubmitHandler());

// function formSubmitHandler (evt) {
//    evt.preventDefault();
//    profileName.textContent = editUserName.value;
//    profileText.textContent = editUserDescription.value;
//    closePopup(popupContainer);


// попапы
const popupContainer = document.querySelector(".popup") // контейнер где лежит папап профиля
const imageContainer = document.querySelector(".popup_images") //контейнер где лежит попап картинок


//_______________________________óÔÔò ʕ·͡ᴥ·ʔ óÔÔò____________________________________________________//
//заголовки профиля, бам бам бам кроту по ушам, чтоб такого я больше не писал editUserName.textContent = editUserName.value;
const profileName = document.querySelector(".profile__name")
const profileText = document.querySelector(".profile__text")
//кнопки профиля
const editButton = document.querySelector(".profile__button-edit") // кнопка редактирования профиля
const closeButton = document.querySelector(".popup__close") // кнопка закрытие попапа профиля
const submitProfileButton = document.querySelector(".popup__accept_profile") // сабмит профиля
//инпуты профиля
const formProfile = document.querySelector(".popup__form_character") // форма профиля пока х3 зачем она мне но пусть будет
const editUserName = document.querySelector(".popup__edit_user_name")
const editUserDescription = document.querySelector(".popup__edit_user_description")



//____________________________̿' ̿'\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿__все кроты будут наказаны_________________________//
//кнопки картинок
const addButtonImage = document.querySelector(".profile__button-add") // кнопка открытия картинок
const closeImageButton = document.querySelector(".popup__close_images") //кнопка закрытия попапа с картинками
const submitButtonImage = document.querySelector(".popup__accept_image") // сабмит картинки
//инпуты картинок
const formImage = document.querySelector(".popup__edit_image_place") // форма картино тоже х3 зачем но пусть будет
const editImagePlace = document.querySelector(".popup__edit_image_place")
const editImageUrl = document.querySelector(".popup__edit_image_url")


function openPopup() { // так я поидеи должен открыть попап
   popupContainer.classList.add("popup_opened")
}

function openImagePopup() { // так я поидеи должен открыть попап картинками
   imageContainer.classList.add("popup_opened")
}

function closePopup(popup) { // давайте тут же рядом закроем попап
   popup.classList.remove("popup_opened")
}

closeButton.addEventListener("click", () => closePopup(popupContainer)); //слухатерь закрывает попап профиля
closeImageButton.addEventListener("click", () => closePopup(imageContainer)); //слухатерь закрывает попап картинок


editButton.addEventListener("click", () => openPopup()); // слухатерь открывает попап с  профилем
addButtonImage.addEventListener("click", () => openImagePopup()); // слухатерь открывае попап с картинками

//formProfile.addEventListener("submit", formSubmitHandler)
//submitProfileButton.addEventListener("click", formSubmitHandler, closePopup(popupContainer))
//вопщем оставлю этот способ, мыж за единобразие, у нас в HTML висит тип submit по этому мы может шмалять по кротам из/со всех орудий
submitProfileButton.addEventListener("click", formSubmitHandler)
// я вот прям так с ходу навешать не могу, мало практили хотел чтоб и сохранял и закрывал форму, но при такой записи у меня обновляется страница, придётся по тупому закрывать попа в теле функции
//submitProfileButton.addeventlistener("submit", () => {formSubmitHandler; closePopup(popupContainer)})

function formSubmitHandler(evt) {
   evt.preventDefault();
   profileName.textContent = editUserName.value;
   profileText.textContent = editUserDescription.value;
   closePopup(popupContainer);
}
