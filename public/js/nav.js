(function () {
    var MENU_BREAKPOINT = 1100;
    var SEARCH_BREAKPOINT = 900;

    function getSidebar() {
        return document.getElementById('sidebar');
    }

    function getToggle() {
        return document.querySelector('.nav-toggle');
    }

    function setOpen(open) {
        var sidebar = getSidebar();
        if (!sidebar) {
            return;
        }
        sidebar.classList.toggle('open', open);
        sidebar.setAttribute('aria-hidden', open ? 'false' : 'true');
        document.documentElement.classList.toggle('nav-open', open);
        var toggle = getToggle();
        if (toggle) {
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
    }

    function toggleSidebar(force) {
        var sidebar = getSidebar();
        if (!sidebar) {
            return;
        }
        var open = typeof force === 'boolean' ? force : !sidebar.classList.contains('open');
        setOpen(open);
    }

    window.toggleSidebar = toggleSidebar;
    window.closeSidebar = function () {
        setOpen(false);
    };

    function placeSearch() {
        var center = document.querySelector('.nav-center');
        if (!center) {
            return;
        }
        var container = document.querySelector('.nav-container');
        var content = document.querySelector('.sidebar-content');
        if (!container || !content) {
            return;
        }
        if (window.innerWidth <= SEARCH_BREAKPOINT) {
            if (center.parentElement !== content) {
                content.insertBefore(center, content.firstChild);
            }
        } else if (center.parentElement !== container) {
            var menu = container.querySelector('.nav-menu');
            container.insertBefore(center, menu || container.querySelector('.nav-toggle'));
        }
    }

    function syncLayout() {
        placeSearch();
        if (window.innerWidth > MENU_BREAKPOINT) {
            setOpen(false);
        }
    }

    var scheduled = false;
    function onResize() {
        if (scheduled) {
            return;
        }
        scheduled = true;
        window.requestAnimationFrame(function () {
            scheduled = false;
            syncLayout();
        });
    }

    document.addEventListener('click', function (event) {
        var sidebar = getSidebar();
        if (!sidebar || !sidebar.classList.contains('open')) {
            return;
        }
        if (event.target.closest('.sidebar-link')) {
            setOpen(false);
            return;
        }
        if (sidebar.contains(event.target)) {
            return;
        }
        var toggle = getToggle();
        if (toggle && toggle.contains(event.target)) {
            return;
        }
        setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            setOpen(false);
        }
    });

    window.addEventListener('resize', onResize);

    function init() {
        syncLayout();
        var root = document.getElementById('navigation-container');
        if (!root || typeof MutationObserver === 'undefined') {
            return;
        }
        new MutationObserver(syncLayout).observe(root, { childList: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
