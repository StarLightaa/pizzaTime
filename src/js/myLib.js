;(function() {
    window.myLib = {};

    window.myLib.body = document.querySelector('body');

    /* 
        Поиск ближайщего элемента с указанным атрибутом
        item - элемент относительно которого начинается поиск
        attr - название атрибута,который ищем (data-....)
    */
    window.myLib.closestAttr = function(item, attr) {
        var node = item;

        while(node) {
            var attrValue = node.getAttribute(attr);
            if(attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }
        return null;
    }

    /* 
        Поиск ближайщего элемента с указанным классом
        item - элемент относительно которого начинается поиск
        attr - название класса,который ищем
    */
    window.myLib.closestItemByClass = function(item, className) {
        var node = item;

        while(node) {
            if(node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }
        return null;
    }

    window.myLib.toggleScroll = function() {
        myLib.body.classList.toggle('no-scroll');
    }

})();