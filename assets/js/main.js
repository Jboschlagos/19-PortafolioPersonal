document.addEventListener('DOMContentLoaded', function () {
    // Cierra el menú colapsable al hacer clic en un enlace de navegación
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    // Usamos Bootstrap para cerrar el menú
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // Nota: el desplazamiento suave con offset se maneja mediante CSS
    // (scroll-behavior: smooth + scroll-margin-top en los elementos con id)
});