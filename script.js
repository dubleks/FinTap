//-------------- scroool

// const menuLinks = document.querySelectorAll('.linnk_item[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoSection = document.querySelector(menuLink.dataset.goto);
//             const gotoSectionValue = gotoSection.getBoundingClientRect().top + scrollY - document.querySelector('.navbar-scroll').offsetHeight; 

//             window.scrollTo({
//                 top: gotoSectionValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }
// }

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