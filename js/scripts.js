$(document).ready(function() {
    // feedback slider
    $('.bxslider1').bxSlider({
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all'

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
        pagerCustom: '#bx-pager',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all'
    });
    // contacts slider
    $('.bxslider4').bxSlider({
        pagerCustom: '#bx-pager4',
        adaptiveHeight: true,
        adaptiveHeightSpeed: 300,
        preloadImages: 'all'
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
