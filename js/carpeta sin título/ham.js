const ham = document.querySelector(".ham");
const enlaces= document.querySelector(".mi-menu");

ham.addEventListener("click", () => {
    enlaces.classList.toggle("activado");
})

$(document).ready(() =>{

    $(".loader").css({
        opacity: 0
    })
})