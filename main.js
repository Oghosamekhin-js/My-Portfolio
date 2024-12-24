const burger = document.querySelector('.nav2 .burger');
const mobileUl = document.querySelector('.nav2 .mobileUl');
console.log(mobileUl);

burger.addEventListener("click", function(e){
    mobileUl.classList.toggle("show");
    
    const deleteX = burger.querySelector('.fa-solid');

    deleteX.classList.toggle("fa-xmark");

    console.log(burger);
})