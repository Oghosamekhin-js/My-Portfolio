//To make my BURGER interactive
const burger = document.querySelector('.nav2 .burger');
const mobileUl = document.querySelector('.nav2 .mobileUl');

burger.addEventListener("click", function(e){
    mobileUl.classList.toggle("show");

    const deleteX = burger.querySelector('.fa-solid');

    deleteX.classList.toggle("fa-xmark");
})