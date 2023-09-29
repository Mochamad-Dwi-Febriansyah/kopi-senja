// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hambuerger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar
const hambuerger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hambuerger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})