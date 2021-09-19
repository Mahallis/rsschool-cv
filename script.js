let hamBtnContainer = document.querySelector('.hamburger-menu-container')
let hamBtn = document.querySelector('.hamburger-menu')
let mobileNavigation = document.querySelector('.navigation-mobile')
let navList = document.querySelector('.navigation__list')
let body = document.querySelector('body')

let selfCheck = ['https://github.com/Mahallis/rsschool-cv/pull/8',
'вёрстка валидная +10',
'вёрстка семантическая +20',
'для оформления СV используются css-стили +10',
'контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10',
'вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10',
'есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10',
'на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt +10',
'контакты для связи и перечень навыков оформлены в виде списка ul > li +10',
'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10',
'CV содержит пример кода с подсветкой кода. +10',
'CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10',
'CV выполнено на английском языке +10',
'выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10',
'Видеорезюме отсутствует + 0',
'дизайн, оформление, качество выполнения CV постарался сделать не ниже чем в примерах CV +10'].forEach(item => console.log(item))

hamBtnContainer.addEventListener('click', ()=>{
    mobileNavigation.classList.toggle('navigation_disabled')
    mobileNavigation.classList.toggle('navigation_enabled')
    hamBtn.classList.toggle('hamburger-menu_active')
    body.classList.toggle('active')
})

navList.addEventListener('click', ()=>{
    mobileNavigation.classList.toggle('navigation_enabled')
    mobileNavigation.classList.toggle('navigation_disabled')
    hamBtn.classList.toggle('hamburger-menu_active')
    body.classList.toggle('active')
})

addEventListener('resize', () => {if (window.innerWidth >= 700){
    mobileNavigation.classList.remove('navigation_enabled')
    hamBtn.classList.remove('hamburger-menu_active')
    mobileNavigation.classList.add('navigation_disabled')
    body.classList.remove('active')
}})

alert('Для Вашего удобства вывел самопроверку, а также ссылку на PR в консоль. ')
