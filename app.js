const menu = document.querySelector('#mobile-menu') 
const menuLinks = document.querySelector('.navbar__menu')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu)

//About Section Expanding Cards
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
    
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
