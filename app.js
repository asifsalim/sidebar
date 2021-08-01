const sideBar = document.querySelector(".sidebar");
const crossBtn = document.querySelector(".cross-icon");
const menuBtn = document.querySelector(".menu-icon");

crossBtn.addEventListener('click',function(){
    sideBar.classList.toggle('hidebar');
})

menuBtn.addEventListener('click',function(){
    sideBar.classList.toggle('hidebar');
})