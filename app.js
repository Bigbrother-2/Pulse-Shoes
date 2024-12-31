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



// FUNCIONES PARA EL SLIDER 


/* Vamos a explicar un poco el codigo para que cuando lo vea de vuelta no se me sea complicado entenderlo y ademas pueda estudiarlo de vuelta */


/* Primero lo que debemos hacer es organizar los datos. Para esto tomammos a todas las diapositivas para tenerlas en el js como un nodeList y poder modificarlas, osea hacer la transicion de un lado para el otro.  */


let diapositivas = document.querySelectorAll(".slider")




let contadorDiapo = 0


/*Segundo paso. Ahora trabajamos con css. Craamos clases de ocultas o activas para ir alternando entre las clases. Porque? porque tenemos que usar un forEach para ejecutar determinada funcion o determinadas ordenes para todas las diapos. Por esto, Cuando usamos el ciclo en el indice 0 usamos la clase activa y para los demas indices usamos la clase ocultas. Para no entrar en quilombos  */


function mostrarDiapo ( ) {
    setInterval(() => {


        // Esto oculta todas las diapositivas
        diapositivas.forEach(diapo=> diapo.classList.remove("activa"))


        // Esta parte de aca se encarga de mostar la diapo que sigue. 3

    

        diapositivas[contadorDiapo].classList.add("activa")

        // Esto es lo que cada que termine el setInterval incremente el contador para que en la proxima vuelta cambie la diapo
        
        contadorDiapo++
        



        // Esto la funcion que va a complir es que con el condicional evalue si el tamaño de las diapo es igual al contador se reinicie para que vuelva a cero y muestre la primera creando asi un bucle. 

        if(contadorDiapo >= diapositivas.length){
            contadorDiapo = 0
        }

        console.log(diapositivas[contadorDiapo].classList)

    },3000)
    
    
}


//  mostrarDiapo()

























