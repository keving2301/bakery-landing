// Mobile menu: a button that opens the full-screen navigation.
(function () {
    var toggle = document.querySelector('.menu-toggle');
    var list = document.getElementById('site-nav');
    if (!toggle || !list) return;

    var wide = window.matchMedia('(min-width: 992px)');

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        list.classList.toggle('open', open);
        document.documentElement.style.overflow = open ? 'hidden' : '';
        // A closed menu is hidden on small screens, so keep it out of the tab order as well.
        list.toggleAttribute('inert', !wide.matches && !open);
    }

    toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Following a link closes the menu, so the page it points to is not left behind the overlay.
    list.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            toggle.focus();
        }
    });

    // Crossing the breakpoint resets the menu: on wide screens the links are always part of the page.
    wide.addEventListener('change', function () {
        setOpen(false);
    });
    setOpen(false);
})();
