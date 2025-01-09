const burger = document.querySelector('.nav2 .burger');
const mobileUl = document.querySelector('.nav2 .mobileUl');

burger.addEventListener("click", function(e){
    mobileUl.classList.toggle("show");

    const deleteX = burger.querySelector('.fa-solid');

    deleteX.classList.toggle("fa-xmark");
})

// FOR MY INTRO PAGE
const input = document.querySelector("#username");
const btn = document.querySelector("#submit");
const errorTxt = document.querySelector(".hidden");

btn.addEventListener("click", function (e) {
    e.preventDefault(); //Since the default behavior of input fields is to reload, this prevents that default reload.
    const isAlphabetic = /^[A-Za-z]+$/.test(input.value.trim()); //Returns true or false depending on if the input text is a string or numbers/symbols.

      if (isAlphabetic) {
        window.location.href = "/My-Portfolio/Landing_page/landing.html";
      } else{
        errorTxt.classList.remove('hidden')
        setTimeout(() => {
                            errorTxt.classList.add('hidden') //For error text to disappear after 2 seconds
                        }, 2000);
      }
      
      setTimeout(() => {
        input.value = ""; //To clear input field after 2 seconds
    }, 2000);
    });
