'use strict'

function onToggleMenu() {
    const elNav = document.querySelector('.main-nav')
    const elBody = document.querySelector('body')
    const elBtn = document.querySelector('.open-menu-btn')

    const isOpen = elNav.classList.contains('display-menu')

    if (!isOpen) {
        elBody.classList.add('menu-open')
        elNav.classList.add('display-menu')
        elBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        elBody.classList.remove('menu-open')
        elNav.classList.remove('display-menu')
        elBtn.innerHTML = `<i class="fa-solid fa-burger"></i>`
    }
}

function onOpenLink(elA) {
    const elLinks = [...document.querySelectorAll('.nav-list li')]

    elLinks.forEach(link => link.classList.remove('toggled'))

    elA.classList.add('toggled')
}