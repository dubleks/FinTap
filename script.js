//-------------- scroool

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('nav').offsetHeight; 
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                menuBody.classList.remove('_active');
                iconMenu.classList.remove('_active');
                menuList.classList.remove('_active');

            }
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//-------------- burger


const iconMenu = document.querySelector('.btn-s');
const menuBody = document.querySelector('.menu__body')
const menuList = document.querySelector('.menu')

if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuList.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}