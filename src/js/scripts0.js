import '@css/cleanup&common.css'
import '@css/header.css'
import '@css/main.css'
import '@css/projects&contacts.css'
import '@img/preloader.gif'
import '@img/stAva.jpg'
import '@img/mazeGame.png'
import '@img/github.png'
import '@img/gmail.png'
import '@img/svetofor.png'
import '@img/telegram.png'
import '@img/todoTs.png'
import '@img/vk.png'

let helloBtn = document.querySelector('.hello_btn') ? document.querySelector('.hello_btn') : undefined
let resume = document.querySelector('.resume') ? document.querySelector('.resume') : undefined
let bodyEl = document.querySelector('body')
let headerBurger = document.querySelector('.header_burger')
let headerMenu = document.querySelector('.header__menu')


let loader = document.getElementById('preloader')


window.addEventListener("load", function(){
    setTimeout(() => {
        loader.classList.add('finish')
    }, 1000)
})


let openResume = helloBtn ? helloBtn.classList.contains('active') : undefined
let lockBody = bodyEl.classList.contains('lock')
let openMenu = headerBurger.classList.contains('lock')

const openBurgerHandler = function() {
    if(lockBody && !openMenu){
        headerBurger.classList.toggle('active')
        headerMenu.classList.toggle('active')
    }else {
        bodyEl.classList.toggle('lock')
        headerBurger.classList.toggle('active')
        headerMenu.classList.toggle('active')
    }
}

headerBurger.addEventListener('click', openBurgerHandler)

const openResumeHandler = function() {
    if (!lockBody && openResume){
        let scroll = window.pageYOffset
        window.scrollBy(0, -scroll)
    }
    bodyEl.classList.toggle('lock')
    helloBtn.classList.toggle('active')
    if (resume !== undefined) {
        resume.classList.toggle('active')
    }
    openMenu = !openMenu
    lockBody = !lockBody
}

if (helloBtn !== undefined) {
    helloBtn.addEventListener('click', openResumeHandler)
}

window.onbeforeunload = function () {
    window.scrollTo(0,0);

};




