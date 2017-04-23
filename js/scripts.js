$(document).ready(function() {
    // feedback slider
    $('.bxslider1').bxSlider({
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        oneToOneTouch: false,
        mode: 'fade',
        speed: 100

    });
    // awards slider
    $('.bxslider2').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 180,
        slideMargin: 20,
        pager: false,
        oneToOneTouch: false
    });
    // banner slider
    $('.bxslider3').bxSlider({
        mode: 'fade',
        speed: 100,
        pagerCustom: '#bx-pager',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false
    });
    // contacts slider
    $('.bxslider4').bxSlider({
        mode: 'fade',
        speed: 100,
        pagerCustom: '#bx-pager4',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false
    });

    // TVshow slider Main
    var slider5 = $('.bxslider5').bxSlider({
        // mode: 'fade',
        speed: 100,
        pagerCustom: '#bx-pager5',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false,
        touchEnabled: false,



    });


    var slider6 = $('.bxslider6').bxSlider({
        mode: 'horizontal',
        slideWidth: 306.6666666666667,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 30,
        moveSlides: 1,
        preloadImages: 'all',
        oneToOneTouch: false


    });

    var slider7 = $('.bxslider7').bxSlider({
        slideWidth: 306.6666666666667,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 30,
        moveSlides: 1,
        preloadImages: 'all',
        oneToOneTouch: false

    });
    /*
    Используется метод перегрузки слайдера,
    для корректного отображения на новой вкладке*/
    $('#reload-video').click(function(e) {
        e.preventDefault();
        slider7.reloadSlider();
    });
    $('#reload-photo').click(function(e) {
        e.preventDefault();
        slider6.reloadSlider();
    });

    // best slider
    var slider8 = $('.bxslider8').bxSlider({
        mode: 'fade',
        speed: 100,
        pagerCustom: '#bx-pager8',
        // adaptiveHeight: true,
        // adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false,
                oneToOneTouch: false
    });


    // Блок best
    /*    Суть: при разрешении окна меньше чем 768px
        слайдер отключается благодаря
        slider8.destroySlider
        Сначала ширина окна проверяется при загрузки страницы.
        Затем отслеживается при ресайзе*/



    // Проверка первоначальной загрузки
    var w = $(window).width();
    if (w < 768) {
        slider8.destroySlider();
    } else {
        slider8.reloadSlider();
    }

    // При ресайзе
    $(window).resize(function() {
        var w = $(window).width();
        if (w < 768) {
            slider8.destroySlider();
        } else {
            slider8.reloadSlider();
        }
    });



    /*Настройки API Yandex.map*/

    ymaps.ready(init);

    function init() {
        // Создаем карту.
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64], // Координаты центра карты
            zoom: 7.5, // Масштаб
            controls: [], // Отлкючены инструменты на карте
            suppressMapOpenBlock: true,
            drag: false
        });

        // Создаем круг.
        var myCircle = new ymaps.Circle([
            // Координаты центра круга.
            [55.76, 37.64], // Центр круга
            // Радиус круга в метрах.
            70000
        ], {
            // Описываем свойства круга.
            // Содержимое балуна.
            balloonContent: "В радиусе <br />30 км от Москвы <br />замер бесплатный!",
            // Содержимое хинта.
            // hintContent: "В радиусе 30 км от Москвы замер бесплатный!"
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#DB709377",
            // Цвет обводки.
            strokeColor: "#ff0000",
            // Прозрачность обводки.
            strokeOpacity: 0.8,
            // Ширина обводки в пикселях.
            strokeWidth: 4,
            fillOpacity: 0.2,


        });


        myMap.behaviors.disable('scrollZoom'); // Отключаем масштабирование колесиком мышки
        myMap.behaviors.disable('drag'); // Отключаем перетаскивание карты мышкой

        // Добавляем круг на карту.
        myMap.geoObjects.add(myCircle);


        // Создание метки
        var myPlacemark = new ymaps.Placemark(
            // Координаты метки
            [55.809176, 37.512955], {
                // Свойства
                // Текст метки
                // hintContent: 'Балтийская улица, 9',
                iconCaption: 'Балтийская улица, 9' // То что написано над иконкой
            }, {
                preset: 'islands#greenDotIconWithCaption', // Иконка с возможностью вставить текст
                iconColor: '#ff0000' // Цвет иконки

            });

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
    }

});
