// Scroll suave al hacer clic en los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const destino = document.querySelector(this.getAttribute('href'))
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' })
        }
    })
})