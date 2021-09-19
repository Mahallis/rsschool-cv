let hamBtn = document.querySelector('.hamburger-menu-container')
let mobileNavigation = document.querySelector('.navigation-mobile')
let navList = document.querySelector('.navigation__list')
let body = document.querySelector('body')

hamBtn.addEventListener('click', ()=>{
    mobileNavigation.classList.toggle('navigation_disabled')
    mobileNavigation.classList.toggle('navigation_enabled')
    body.classList.toggle('active')
})

navList.addEventListener('click', ()=>{
    mobileNavigation.classList.toggle('navigation_enabled')
    mobileNavigation.classList.toggle('navigation_disabled')
    body.classList.toggle('active')
})

addEventListener('resize', () => {if (window.innerWidth >= 700){
    mobileNavigation.classList.remove('navigation_enabled')
    mobileNavigation.classList.add('navigation_disabled')
    body.classList.remove('active')
}})
