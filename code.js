let btn = document.getElementById("btn_4")
let texto = document.querySelector(".contenido_parrafo")

btn.addEventListener('click', function(){
    texto.classList.toggle("nuevo")
})