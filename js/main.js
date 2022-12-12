const menuOverlay = document.querySelector('.header__menu-overlay');
const btnMenuOverlay = document.querySelector('.burger__btn_js');
const accordionContainer = document.querySelector('.js-accrodion-container');
const accordionElementList = document.querySelectorAll('.js-accrodion-element');
const accordionMenu = document.querySelector('.menu__list');
const sliderBtnNext = document.querySelector('.btn_next');
const sliderBtnPrev = document.querySelector('.btn_prev');

let slideIndex = 1;


document.addEventListener('DOMContentLoaded', () => {
    // burgerSlider();
    PageScroll();
});

btnMenuOverlay.addEventListener('click', (event) => {
    menuOverlay.style.display = "block";
    console.log('hi');
})

menuOverlay.addEventListener('click', (event) => {
    if (event.target === document.querySelector('.overlay__content')) {
        menuOverlay.style.display = "none";
        console.log('privet')
    }
})

createAccordion(accordionContainer);
createAccordion(accordionMenu);

function createAccordion(element) {

    element.addEventListener('click', function (event) {
        const { target, currentTarget } = event;
        const { classList } = target;

        if (classList.contains('js-accrodion-element')) {
            classList.toggle('accordion_active')
        }
        accordionElementList.forEach((event) => {
            if (event === target) return;
            event.classList.remove('accordion_active');
        });

    })

};

function burgerSlider() {

}


showSlides(slideIndex);

sliderBtnNext.addEventListener('click', () => {
    showSlides(slideIndex += 1);
});

sliderBtnPrev.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
})

/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider__items");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "flex";
}

ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.939099, 30.315877],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });

    var myPlacemark1 = new ymaps.Placemark([59.97, 30.31], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.svg',
        iconImageSize: [60, 52],
        iconUmageOffset: [-3, -42.]
    });
    var myPlacemark2 = new ymaps.Placemark([59.94, 30.25], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.svg',
        iconImageSize: [60, 52],
        iconUmageOffset: [-3, -42.]
    });
    var myPlacemark3 = new ymaps.Placemark([59.93, 30.34], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.svg',
        iconImageSize: [60, 52],
        iconUmageOffset: [-3, -42.]
    });
    var myPlacemark4 = new ymaps.Placemark([59.93, 30.40], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.svg',
        iconImageSize: [60, 52],
        iconUmageOffset: [-3, -42.]
    });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);
}

function PageScroll() {
    document.addEventListener('wheel', (event) => {
        console.log(event)
        if (event.deltaY > 0 ) {
            console.log('Страница едет вниз')
        }
        else if (event.deltaY < 0 ) {
            console.log('Страница едет верх')
        }
    })

}
