;(function() {
    var sectionContacts = document.querySelector('.section-contacts');

    var yMapInit = function() {
        if(typeof ymaps === 'undefined') {
            return;
        }
        ymaps.ready(function () {
            var myMap = new ymaps.Map('ymap', {
                    center: [55.794887, 37.712812],
                    zoom: 16
                }, {
                    searchControlProvider: 'yandex#search'
                }),
        
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    balloonContent: 'г. Москва, Преображенская площадь, 8'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/common/marker.svg',
                    iconImageSize: [40, 63],
                    iconImageOffset: [-50, -38]
                });
            myMap.geoObjects.add(myPlacemark);
    
            myMap.behaviors.disable('scrollZoom');
        });
    }
    var yMapLoad = function() {
        var script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        myLib.body.appendChild(script);
        script.onload = yMapInit;
    }
    var checkYmapInit = function() {
        var sectionContactsTop = sectionContacts.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var sectionContactsOffsetTop = scrollTop + sectionContactsTop;
        if(scrollTop + window.innerHeight > sectionContactsOffsetTop) {
            yMapLoad();
            window.removeEventListener('scroll', checkYmapInit);
        }
    };

    window.addEventListener('scroll', checkYmapInit);
    checkYmapInit();
})();