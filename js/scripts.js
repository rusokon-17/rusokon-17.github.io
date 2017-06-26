$(document).ready(function() {

    // feedback slider
    $('.bxslider1').bxSlider({
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        oneToOneTouch: false,
        mode: 'horizontal',
        speed: 100,


    });
    // awards slider
    $('.bxslider2').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 180,
        slideMargin: 20,
        pager: false,
        oneToOneTouch: false,
        infiniteLoop: true
    });
    // banner slider
    $('.bxslider3').bxSlider({
        mode: 'horizontal',
        // default: 3,
        speed: 1,
        pagerCustom: '#bx-pager',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false,
        oneToOneTouch: false,
        infiniteLoop: true,
        autoHover: true,
       
    });

    // contacts slider
    var slider4 = $('.bxslider4').bxSlider({
        // mode: 'fade',
        speed: 10,
        pagerCustom: '#bx-pager4',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false,
        touchEnabled: false,
        infiniteLoop: false
    });



    // $('#reload-m').click(function(e) {
    //     e.preventDefault();
    //     myMap3.redraw();
    // });

    // $('#reload-k').click(function(e) {
    //     e.preventDefault();
    //     myMap4.redraw();
    // });

    // $('#reload-s').click(function(e) {
    //     e.preventDefault();
    //     myMap6.redraw();
    // });



    // TVshow slider Main
    var slider5 = $('.bxslider5').bxSlider({

        speed: 1,
        pagerCustom: '#bx-pager5',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false,
        touchEnabled: false,
        infiniteLoop: false,
    });


    var slider6 = $('.bxslider6').bxSlider({
        mode: 'horizontal',
        speed: 100,
        slideWidth: 306.6666666666667,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 30,
        moveSlides: 0,
        preloadImages: 'all',
        oneToOneTouch: false,
        infiniteLoop: false
    });

    var slider7 = $('.bxslider7').bxSlider({
        speed: 100,
        slideWidth: 306.6666666666667,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 30,
        moveSlides: 1,
        preloadImages: 'all',
        oneToOneTouch: false,
        infiniteLoop: false
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
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all',
        controls: false,
        touchEnabled: false,
        preventDefaultSwipeX: true,
        oneToOneTouch: false,
            infiniteLoop: false
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

    // Вопрос-ответ. Faq
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: false,
        active: 0,
        animation: 'slide',
        duration: 200,
        scrollToAccordion: true, // скрол до заголовка
        scrollToAccordionOnLoad: false, //отключаем скрол до аккорд при загрузки страницы

        // event: 'mouseover',
        // animationQueue: 'accordion',
    });


    $('.bxslider9').bxSlider({
        pagerCustom: '#bx-pager9',
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: 'Эффективнее',
        prevText: 'Доступнее',
        infiniteLoop: false,
        mode: 'fade',
        speed: 10,
        preventDefaultSwipeX: true,
        adaptiveHeight: true,
    });



    // FancyBox
    $("[data-fancybox]").fancybox({
        speed: 10,
        infobar: true,
        buttons: true,
        loop: false,
        autoplay: '1',
        iframe: {
            css: {
                width: '80%',
                margin: '0'


            }
        }
    });









    /*Настройки API Yandex.map*/

    ymaps.ready(init);

    function init() {

        map_load();

        // Создаем карту.
        var myMap = new ymaps.Map("map", {
            center: [55.755814, 37.617635], // Координаты центра карты
            zoom: 8, // Масштаб
            controls: [], // Отлкючены инструменты на карте
            suppressMapOpenBlock: true,
            drag: false
        });

        // Создаем круг.
        var myCircle = new ymaps.Circle([
            // Координаты центра круга.
            [55.755814, 37.617635], // Центр круга
            // Радиус круга в метрах.
            90000
        ], {
            // Описываем свойства круга.
            // Содержимое балуна.
            balloonContent: "Работаем по всей <br> Московской области",
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


        /*
                // Создаем карту.
                var myMap2 = new ymaps.Map("map2", {
                    center: [55.755814, 37.617635], // Координаты центра карты
                    zoom: 8, // Масштаб
                    controls: [], // Отлкючены инструменты на карте
                    suppressMapOpenBlock: true,
                    drag: false
                });

                // Создание метки Москва
                var myPlacemark2 = new ymaps.Placemark(
                    // Координаты метки
                    [55.755814, 37.617635], {
                        // Свойства
                        // Текст метки
                        // hintContent: 'Балтийская улица, 9',
                        iconCaption: 'Москва, офис' // То что написано над иконкой
                    }, {
                        preset: 'islands#greenDotIconWithCaption', // Иконка с возможностью вставить текст
                        iconColor: '#ff0000' // Цвет иконки

                    });

                // Добавление метки на карту
                myMap2.geoObjects.add(myPlacemark2);






                // Создаем карту.
                var myMap3 = new ymaps.Map("map3", {
                    center: [56.329796, 36.725024], // Координаты центра карты
                    zoom: 8, // Масштаб
                    controls: [], // Отлкючены инструменты на карте
                    suppressMapOpenBlock: true,
                    drag: false
                });

                // Создание метки Москва
                var myPlacemark3 = new ymaps.Placemark(
                    // Координаты метки
                    [56.329796, 36.725024], {
                        // Свойства
                        // Текст метки
                        // hintContent: 'Балтийская улица, 9',
                        iconCaption: 'Клин, офис' // То что написано над иконкой
                    }, {
                        preset: 'islands#greenDotIconWithCaption', // Иконка с возможностью вставить текст
                        iconColor: '#ff0000' // Цвет иконки

                    });

                // Добавление метки на карту
                myMap3.geoObjects.add(myPlacemark3);



                // Создаем карту для Солнечногорска
                var myMap4 = new ymaps.Map("map4", {
                    center: [56.196311, 36.955119], // Координаты центра карты
                    zoom: 8, // Масштаб
                    controls: [], // Отлкючены инструменты на карте
                    suppressMapOpenBlock: true,
                    drag: false
                });

                // Создание метки Солнечногорска
                var myPlacemark4 = new ymaps.Placemark(
                    // Координаты метки
                    [56.196311, 36.955119], {
                        // Свойства
                        // Текст метки
                        // hintContent: 'Балтийская улица, 9',
                        iconCaption: 'Солнечногорск, офис' // То что написано над иконкой
                    }, {
                        preset: 'islands#greenDotIconWithCaption', // Иконка с возможностью вставить текст
                        iconColor: '#ff0000' // Цвет иконки

                    });

                // Добавление метки Солнечногорска на карту
                myMap4.geoObjects.add(myPlacemark4);


                // Создание метки г. Клин
                // var myPlacemark2 = new ymaps.Placemark(
                //     // Координаты метки
                //     [56.331693, 36.728716], {
                //         // Свойства
                //         // Текст метки
                //         // hintContent: 'Балтийская улица, 9',
                //         iconCaption: 'Клин, офис' // То что написано над иконкой
                //     }, {
                //         preset: 'islands#greenDotIconWithCaption', // Иконка с возможностью вставить текст
                //         iconColor: '#ff0000' // Цвет иконки

                //     });

                // Добавление метки на карту
                // myMap.geoObjects.add(myPlacemark2);

                // Создание метки Солнечногорск
                // var myPlacemark3 = new ymaps.Placemark(
                //     // Координаты метки
                //     [56.185147, 36.976678], {
                //         // Свойства
                //         // Текст метки
                //         // hintContent: 'Балтийская улица, 9',
                //         iconCaption: 'Солнечногорск, офис' // То что написано над иконкой
                //     }, {
                //         preset: 'islands#greenDotIconWithCaption', // Иконка с возможностью вставить текст
                //         iconColor: '#ff0000' // Цвет иконки

                //     });

                // Добавление метки на карту
                // myMap.geoObjects.add(myPlacemark3);
            */
    }








});
