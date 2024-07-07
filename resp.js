const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav_list');
const rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
});
