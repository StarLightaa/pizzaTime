;(function() {
    var catalogSection = document.querySelector('.section-catalog');
    if(catalogSection === null) {
        return;
    }

    var removeChildren = function(item) {
        while(item.firstChild) {
            item.removeChild(item.firstChild);
        }
    }

    var updateChildren = function(item, children) {
        removeChildren(item);
        for(var i = 0; i < children.length; i++) {
            item.appendChild(children[i]);
        }
    }

    var catalog = document.querySelector('.catalog');
    var catalogNav = document.querySelector('.catalog-nav');
    var catalogItems = document.querySelectorAll('.catalog__item');

    catalogNav.addEventListener('click', function(e) {
        var target = e.target;
        var item = myLib.closestItemByClass(target, 'catalog-nav__btn');
        if(item === null || item.classList.contains('is-active')) {
            return;
        }

        e.preventDefault();
        var filterValue = item.getAttribute('data-filter');
        var previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active');
        previousBtnActive.classList.remove('is-active');
        item.classList.add('is-active');

        if(filterValue === 'all') {
            updateChildren(catalog, catalogItems);
            return;
        }

        var filteredItems = [];
        for(var i = 0; i < catalogItems.length; i++) {
            var current = catalogItems[i];
            if(current.getAttribute('data-category') === filterValue) {
                filteredItems.push(current);
            }
        }

        updateChildren(catalog, filteredItems);
    });
})();