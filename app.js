const navToggle = document.querySelector('.show-links');
const links = document.querySelector('.link-box')

navToggle.addEventListener('click',function(){
    links.classList.toggle('show-box');
})

