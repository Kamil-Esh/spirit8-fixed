document.querySelector('.mobile-menu').addEventListener ('click', () => {
    document.querySelector('.top-menu').classList.toggle('show')
    document.querySelector('body').classList.toggle('lock')
})
    document.querySelectorAll('.top-menu a').forEach((el) => {
        el.addEventListener('click', () => {
        document.querySelector('.top-menu').classList.remove('show')
    })
})
