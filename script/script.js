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

//formProfile.addEventListener("submit", formSubmitHandler)
//submitProfileButton.addEventListener("click", formSubmitHandler, closePopup(popupContainer))
// я вот прям так с ходу навешать не могу, мало практили хотел чтоб и сохранял и закрывал форму, но при такой записи у меня обновляется страница, придётся по тупому закрывать попа в теле функции
//submitProfileButton.addeventlistener("submit", () => {formSubmitHandler; closePopup(popupContainer)})

// и что? что дальше то я вот эту вот байду скопировал, делать то? я чёто не понимаю, эх пойду спрошу в чате
// и так у нас есть темплейти мы должны передать в него из массива описание  и ссылку, вопрос что с альтом? куда денутся мои альты

// ооо вот это чудовище!, есть одна проблема оно не работает
// function showCards() {
//    initialCards.forEach(card => {
//       templateItem.alt = card["name"]
//       templateItem.src = card["link"]
//       templateTitel.textContent = card["name"]
//       elementsCard.appendChild(templateCard.cloneNode(true))
//    })
// }

// ещё одно не рабочие чудовище, но не рабочие, чувствую что подсосал не правильно
// function addCards() {
//    const addimg = template.content.querySelector(".element__card").cloneNode(true)
//    addimg.querySelector(".popup__edit_image_place").alt = card["alt"]
//    addimg.querySelector(".popup__edit_image_url").src = card["link"]
//    addimg.querySelector(".popup__edit_image_place").textContent = card["name"]
//    elementsCard.prependChild(addimg)
//    closePopup(imageContainer)
// }

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
const templateImage = document.querySelector(".template__card") // заготовка для картинок, может id использовать а не класс? или мы за единобразие кода?

//______________________________(⌐■_■)--︻╦╤─ - - -____________________________________________________//
// темплейты
const template = document.querySelector(".template")
const templateCard = document.querySelector(".element__card") // див карточки
const templateItem = document.querySelector(".element__cards-item") //сама картинка
const templateTitel = document.querySelector(".element__title") //тайтл
const templateBin = document.querySelector(".template__bin")
const templateHeart = document.querySelector(".template__heart-botton")

// насколько я понимаю мы сюда должны скидывать массив заранее подготовленных карточек
const elementsCard = document.querySelector(".elements") //контейнер для подготовленых картинок

// фулл попап
const f = document.querySelector(".popup_images_open")

const form = document.querySelectorAll(".popup__form")



function openImagageFullPopup() { // так я поидеи должен открыть попап
   f.classList.add("popup_opened")
}
// кнопка фулл
const closeImageFullButton = document.querySelector(".popup__close_images_full")
//слухатерь фулки
closeImageFullButton.addEventListener("click", () => closePopup(f));

//селкеторы полного попапа

const imagePopup = document.querySelector(".popup__image")
const captionPopup = document.querySelector(".popup__caption")

function openPopup() { // так я поидеи должен открыть попап
   popupContainer.classList.add("popup_opened")
}

function openImagePopup() { // так я поидеи должен открыть попап картинками
   imageContainer.classList.add("popup_opened")
}

function closePopup(popup) { // давайте тут же рядом закроем попапы, одна функция на все попапы, в аргумент я передаю, что я хочу закрыть
   popup.classList.remove("popup_opened")
   // form.reset()
}

closeButton.addEventListener("click", () => closePopup(popupContainer)); //слухатерь закрывает попап профиля
closeImageButton.addEventListener("click", () => closePopup(imageContainer)); //слухатерь закрывает попап картинок


editButton.addEventListener("click", () => openPopup()) // слухатерь открывает попап с  профилем
addButtonImage.addEventListener("click", () => openImagePopup()) // слухатерь открывае попап с картинками

//вобщем оставлю этот способ, мыж за единобразие, у нас в HTML висит тип submit по этому мы может шмалять по кротам из/со всех орудий
submitProfileButton.addEventListener("click", formSubmitHandler)
//submitProfileButton.addeventlistener("click", () => {formSubmitHandler(event); closePopup(popupContainer)}) не забыть потыкать

function formSubmitHandler(evt) {
   evt.preventDefault();
   profileName.textContent = editUserName.value;
   profileText.textContent = editUserDescription.value;
   closePopup(popupContainer)
}

// если я пишу массив руками, я оставляю висячую зяпятую
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

function showCards() {
   initialCards.forEach(card => {
      

// это отрисовывает
      const img = template.content.querySelector(".element__card").cloneNode(true)
      img.querySelector(".element__cards-item").alt = card["alt"]
      img.querySelector(".element__cards-item").src = card["link"]
      img.querySelector(".element__title").textContent = card["name"]


      const openImg = img.querySelector(".element__cards-item")

      openImg.addEventListener("click", () => {
      // AAAAAA Жёванный крот!!!! чтож так сложно добратся до этой норы
      // a = e.target.closest(".element__cards-item").attr('src')
      // b = e.target.closest(".element__title")
      // console.log("click on image", a, b)
      // imagePopup.src = a;
      // captionPopup.textContent = b;
      imagePopup.src = card["link"]
      imagePopup.alt = card["alt"]
      captionPopup.textContent = card["name"]

      openImagageFullPopup()
      })

// это удаляет
      const binButton = img.querySelector(".element__bin")
      binButton.addEventListener("click", () => {
         img.remove()
      })


// это лайкает
      img.querySelector(".element__heart-botton").addEventListener('click', (evt) => {
         console.log(evt)
         evt.target.classList.toggle("element__heart-botton_active")
      })
      elementsCard.appendChild(img)
   })
}

showCards()

// так следущие добавить карточки, по идеи, по идеи это тоже самое только урлу и название нужно подсосать с велью формы, что должно делать, пока не понятно с кнопкой формы что делать, что она должна делать сабмитить или просто батонить -,-!?
// но тут конечно ну надо понять и простить, я вчера посматрел первый сезон ведьмак, а сегодня пятница, сегодня вышел второй сезон и я уже покупаю на торренте по дешовке, поймите меня Михаил, войдите в моё положение, а тут ещё эти кроты "зараза, два раза".
// ну вот когда я начал писать функци я понял что по идеи, по идеи, да, батон должен вызыват функцию добавления карточки
// P.S в слове бато́н ударение на о́


let test = []
let test2 = []

function taddCards() {
   const addimg = template.content.querySelector(".element__card").cloneNode(true)
   addimg.querySelector(".element__cards-item").alt = editImagePlace.value
   addimg.querySelector(".element__cards-item").src = editImageUrl.value
   addimg.querySelector(".element__title").textContent = editImagePlace.value
   let alt = addimg.querySelector(".element__cards-item").alt
   let link  = addimg.querySelector(".element__cards-item").src
   let name = addimg.querySelector(".element__title").textContent
   test.push({name, link, alt})
   // test2 = test[test.length - 1]
   test = [test.pop()]
   addCards()
   editImageUrl.value = ""
   editImagePlace.value = ""
   console.log(test)
}


// отображает добавленые карточки
function addCards() {
   test.map(card => {
      console.log(test)
      const addimg = template.content.querySelector(".element__card").cloneNode(true)
      addimg.querySelector(".element__cards-item").alt = card["alt"]
      addimg.querySelector(".element__cards-item").src = card["link"]
      addimg.querySelector(".element__title").textContent = card["name"]
   // const addimg = template.content.querySelector(".element__card").cloneNode(true)
   // addimg.querySelector(".element__cards-item").alt = editImagePlace.value
   // addimg.querySelector(".element__cards-item").src = editImageUrl.value
   // addimg.querySelector(".element__title").textContent = editImagePlace.value
   // let alt = addimg.querySelector(".element__cards-item").alt
   // let link  = addimg.querySelector(".element__cards-item").src
   // let name = addimg.querySelector(".element__title").textContent
   // test.push({name, link, alt})
   // alt = editImagePlace.value
   // link = editImageUrl.value
   // name = editImagePlace.value
   // console.log(alt, link, name)
   // initialCards.push(name, link, alt)

//открывает на фулл
   const openImg = addimg.querySelector(".element__cards-item")

   // imagePopup.src = card["link"]
   // imagePopup.alt = card["alt"]
   // captionPopup.textContent = card["name"]
   openImg.addEventListener("click", () => {
      // imagePopup.alt = editImagePlace.value
      // imagePopup.src = editImageUrl.value
      // captionPopup.textContent = editImagePlace.value
      imagePopup.alt = card["alt"]
      imagePopup.src = card["link"]
      captionPopup.textContent = card["name"]
      openImagageFullPopup()
   })

// это удаляет карточку
   const binButton = addimg.querySelector(".element__bin")

   binButton.addEventListener("click", () => {
      addimg.remove()
   })

// лайкает
   addimg.querySelector(".element__heart-botton").addEventListener('click', (evt) => {
      console.log(evt)
      evt.target.classList.toggle("element__heart-botton_active")
   })
   elementsCard.prepend(addimg)
   closePopup(imageContainer)


   })
}
// я чувствую что на прямую я это как не сделаю придётся брать селекторы опять в обход..... да как жеж мне получить эти поля уууууу чёртов DOM! в нём водятся кроты...
// норм ща сезончик оказался ведьмачка, ждём продолжение.
// я всё напутал все теже самые констатнты, а то что я взял из них нужно присваивать. Кстати Михаил если вы ещё не посмотрели, то Геральд искал кошку, а ищу кротов

submitButtonImage.addEventListener("click", () => taddCards());


//так сделать лайко карточки, хм, сделал себе кофе и даже не знаю как подступится, чувствую в лайке будет дофигище кротов.
//Я раньше думал что самый действенный способ борьбы с кротами это строить платины и разводить бобров, а оно вон чё "Михалыч" они плавать умеют, да и ведьмак тому подтверждение, там такое в канализациях водится -,-!
// Ну так вернёмся к нашим сертечкам, как понять на какое сердечко я нажал? этож одна и таже кнопка -,-, всё просто там стиль нарисовать отрисовать, но как понять на какое нажимают? я вообще не вкуриваю этот момент, там же ещё есть бины, как узнать в какой бин тычет крендель? принцып должен быть один осталось напряч лобную мышцу, ну или спросить в чате 🧐
// текс вот это наш класс element__heart-botton_active , так гррр как я должен вызвать эту функцию ? но как если ты не знаешь по какой кнопке произошёл клик? ну шо опять за ребусы то 🥴
// так пойду почитаю теория, я помню там чёто с сердечками было.
// ну так это а я если мы будем жмакать лайкос не в темплейте? а в добавленной карточки, что гда? мм? либо мы функцию лайкоса запихиваем в нутрь добавления карточки и зарание подготовленых карточек либо пишем отдельно и дял того и для того, по сути мы пишем всеравно 2 раза, значит не будем усложнять и не будем писать внутри.

//короч поповоду лайкосов я зафигачил вот такую вот штуку как в функцию заранее отрисованых карточек, так и в те которые добавляют, я бы мог эту функцию вытащить за пределы их, но мне кажется так тупо больше работы. всеравно её писать 2 раза, какой я не постоянный хочу снаружи, то в нутри:) 🤭
// img и addimg.querySelector(".element__heart-botton").addEventListener('click', (evt) => {
//    console.log(evt)
//    evt.target.classList.toggle("element__heart-botton_active")

// Ну чтож Михаил бины? на моё удивление в лайках кротов совсем небыло, может они сидят в бинах?
// Надо прикинуть логику, жмяшим в батон, помним да ? ударение на о́, почему на о́, да потому-что боевой батон рвётся к власти! https://www.youtube.com/watch?v=Itoy8pOPsTc
// И так жмякаем в батон происходит вызов функции которая удаляет потомка, прям как во стором сезоне ведьмака, Сир Ёж конечно "дал пенки" 😀

// const img = template.content.querySelector(".element__card").cloneNode(true)

// const binButton = img.querySelector(".element__bin") // кнопка корзины
// console.log(binButton)

// binButton.addEventListener("click", () => deleteImg());

// function deleteImg(img) {
//    console.log(deleteImg)
//    img.target.closest(".element__card").remove()
// }

//не получается осилить пока кнопку корзины, залезу в цсс где голова не нужна, сделаю там попап для развёрнутой картинки
//чам нужно, при клике по картинке передать инфу, и чё куда передаём? ааа пойду досплю
// const img = template.content.querySelector(".element__card").cloneNode(true)
// const binButton = img.querySelector(".element__bin")

// binButton.addEventListener("click", function(){
//    console.log("click")
// })

// проспавшись я решил покавырять всётаки корзину, краем глаза я пока засыпал увидел прямую трансляцию на ютубе, проснувшись я глянул а не обманули ли меня и там была запись на 6 часов вау подумал я. посмотрел тайм коды ткнул в прослушку событий и обана работает. "А в переди веселое море, а с зади попутный ветер, а к вечеру родится такое чудовище, что просто ураган"
// но есть проблемка, я то хотел это сделать за пределами функции отрисовки карточки, чтобы код и рендер новых падал и в отрисовку, а не получается! придётся код дублировать и в начальные карточки в новые которые добавляют. А главная проблема что я даже не понимаю с какого края начать кусать его чтоб за пределы вынести

// Так ну и что там у нас осталось попап с раскрытие картинки
// ну не удачное чудовище

      // const cEL = img.querySelector(".element__cards-item").src
      // const cEL =initialCards
      // img.querySelector(".element__cards-item").src.addEventListener("click", function() {
      //    console.log("click on image")
      // })

// openIMG.addEventListener("click", function(e) {
//    a = e.target.closest(".element__cards-item").attr('src')
//    b = e.target.closest(".element__title")
//    console.log("click on image", a, b)
//    imagePopup.src = a;
//    captionPopup.textContent = b;
// })

// function addCards() {
//    const addimg = template.content.querySelector(".element__card").cloneNode(true)
//    addimg.querySelector(".element__cards-item").alt = editImagePlace.value
//    addimg.querySelector(".element__cards-item").src = editImageUrl.value
//    addimg.querySelector(".element__title").textContent = editImagePlace.value

// //открывает на фулл
//    const openImg = addimg.querySelector(".element__cards-item")

//    openImg.addEventListener("click", () => {
//       imagePopup.src = editImageUrl.value
//       imagePopup.alt = editImagePlace.value
//       captionPopup.textContent = editImagePlace.value
//       openImagageFullPopup()
//    })

// // это удаляет карточку
//    const binButton = addimg.querySelector(".element__bin")

//    binButton.addEventListener("click", () => {
//       addimg.remove()
//    })

// // лайкает
//    addimg.querySelector(".element__heart-botton").addEventListener('click', (evt) => {
//       console.log(evt)
//       evt.target.classList.toggle("element__heart-botton_active")
//    })
//    elementsCard.prepend(addimg)
//    closePopup(imageContainer)
//    // editImageUrl.value = ""
//    // editImagePlace.value = ""
// }
// при сбросе формы,я  не могу открыть попап картинки так как я его сбрасываю
//ну вот я в логове кротов, они лезут отовсюду, Убить всех кротов!!!


// какой синтаксис заставит бежать только по последнему элементу массива? ааааа!!!
// function addCards() {
//    test.map(card => {
//       const addimg = template.content.querySelector(".element__card").cloneNode(true)
//       addimg.querySelector(".element__cards-item").alt = card["alt"]
//       addimg.querySelector(".element__cards-item").src = card["link"]
//       addimg.querySelector(".element__title").textContent = card["name"]
//    })
// }