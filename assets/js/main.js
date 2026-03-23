document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const id = this.getAttribute('href')

        if (id.length > 1) {
            const destino = document.querySelector(id)

            if (destino) {
                e.preventDefault()
                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }
    })
})