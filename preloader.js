const loader = document.querySelector(".preloader");


window.addEventListener("load",function(){
    loader.classList.add('afterload');
    document.getElementsByTagName('html')[0].style = 'overflow-y : visible';
})
