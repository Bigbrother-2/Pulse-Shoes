let menuOculto = document.getElementById("menuJS")

menuOculto.addEventListener("click", ocultarCosas)


let displayNavbar = document.querySelectorAll(".busqueda")
let menuPadre =  document.querySelectorAll(".menuPadre")
let barraNavegacion = document.querySelector(".barraNavegacion")
let menuOpen = false
let icono = document.querySelectorAll(".menuContenedor")
let user = document.getElementById("user")

let xOculta = document.getElementById("xJS")


xOculta.addEventListener("click", ocultarCosas)



function ocultarCosas(){
    let openClose = window.getComputedStyle(barraNavegacion)
    if (openClose.height === "100px"){
        /*Aca se maneja el evento cuando la pantalla a 400px */
        barraNavegacion.style.height = "400px"
        xOculta.style.display = "flex"
        menuOculto.style.display ="none"
        setTimeout(()=>{
            icono.forEach(function(display){
                display.style.display = "flex"
            })
            user.style.display = "flex"
        },400)
    } else if ( openClose.height === "400px"){
        /*Aca se maneja el evento cuando se cierra la panalla */
        barraNavegacion.style.height = "100px"
        menuOculto.style.display = "flex"
        xOculta.style.display = "none"
        icono.forEach(function(display){
            display.style.display = "none"
        })
        user.style.display = "none"
    }
    
}




























function alerta (){
    alert("asd")
}