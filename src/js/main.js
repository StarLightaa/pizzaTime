;(function() {
    var support_format_webp = function() {
        var elem = document.createElement('canvas');

        if (!!(elem.getContext && elem.getContext('2d'))) {
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
        return false;
    }
    var isWebpSupported = support_format_webp();
    if(isWebpSupported === false) {
        var lazyItems = document.querySelectorAll('data-src-replace-webp')
        for(var i = 0; i < lazyItems.length; i++) {
            var item = lazyItems[i];
            var dataSrcReplaceWebp = item.getAttribute('data-src-replace-webp');
            if(dataSrcReplaceWebp !== null) {
                item.setAttribute('data-src', dataSrcReplaceWebp);
            }
        }
    }
    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });
})();