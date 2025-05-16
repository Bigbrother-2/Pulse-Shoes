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





let diapositivas = document.querySelectorAll(".slider")

let contadorDiapo = 0

let intervalo;

function iniciarSlider(){
    clearInterval(intervalo) 
    intervalo = setInterval(()=>{
        contadorDiapo++;
        if(contadorDiapo >= diapositivas.length) {
            contadorDiapo = 0;
        }
        mostrarDiapo()
    },3000)
}


// Funcion para mostrar las diapositivas de manera automatica 

function mostrarDiapo ( ) {
        diapositivas.forEach(diapo=> diapo.classList.remove("activa"))

        diapositivas[contadorDiapo].classList.add("activa")

}

// Funcion para reiniciar el slider despues de 5 seg. que no se clickeo el slider. 
let reiniciarTiempo;

function reinicioautomatico() {
    clearTimeout(reiniciarTiempo); 

    reiniciarTiempo = setTimeout(() => {
        iniciarSlider();
    }, 5000);
}


// Funcion para manejar las flechas para correrlo de manera manual.     |
let flechas = document.querySelectorAll(".flecha")

flechas.forEach(flecha=>{
    flecha.addEventListener("click", (evento)=>{
        clearInterval(intervalo) 
        if (evento.currentTarget.classList.contains("izquierda")) {
            contadorDiapo--; 

            if (contadorDiapo < 0) contadorDiapo = diapositivas.length - 1; 

        } else if (evento.currentTarget.classList.contains("derecha")) {
            contadorDiapo++; 

            if (contadorDiapo >= diapositivas.length) contadorDiapo = 0;  
        }
        
        mostrarDiapo()
        reinicioautomatico()
    })
})

// iniciarSlider()



// Funciones para Novedades y ofertas.

// Explicacioooooon. 

/* La logica de este slider es. Cuando yo coloque el mouse cambie a una imagen pequeña con el logo de la marca. Luego cuando haga click cambie la imagen de fondo y se agrande de anchura al 100%. Para esto el primer paso es traer las etiquetas html claves para ir formando la logica. En este caso tenemos los contenedores individuales y la flecha.  */

let contenedorNovedades = document.querySelectorAll(".sliderNovedades")

let botonRegresar = document.querySelectorAll(".volverNovedades")

let contenedorAl100 = document.getElementsByClassName("contenedorPadreInSide")

contenedorNovedades.forEach(click=>{
    click.addEventListener("click", agrandar)
    /*Lo que se hace aca es usar un forEach para recorrer a todos los divs individualmente y colocar un listener para el click y llame a la funcion de agrandar.  */
})

function agrandar(e){
    let divClickeado =  e.currentTarget

    divClickeado.classList.add("widthAl100")

    /* Esta funcion es la encargada de agrandar su anchura al 100. Como lo hace? 
    Sabemos que un addEventListener guarda informacion de manera automatica, como donde se hizo click, la hora, si fue un click o entro el mouse y demas eventos. Entonces, usamos un parametro, la cual es e. e significa la info que manda de manera automatica JS. Entonces, con un currentTarget extraemos la info y luego con el classList.add agregamos la clase para que se agrande de manera automatica. 
    */

    // Aca vamos a usar esta funcion para colocar o manejar el evento que pasa cuando se agranda. Es decir que aca vamos a mostrar el contenedor que tiene la muestra de la zapatilla. Para ello, usamos tambien la variable anterior. Entonces lo que hace con el querySelector traemos a la primera etiqueta que encuentre, y como clicleamos a solamente uno, el que traiga es el clickeado por ello, en la vista general le colocamos display none para ocultarla y viceversa con el vistaInterior para mostrarla.  
    let vistaGeneral = divClickeado.querySelector(".contenedorOutSide")
    vistaGeneral.style.display = "none"
    let vistaInterior = divClickeado.querySelector(".contedorPadreInSide")
    vistaInterior.style.display = "block"
}


// Manejo del evento para volver hacia atras. 

botonRegresar.forEach(click=>{
    click.addEventListener("click", atras)
    /*Hacemos lo mismo que en el forEach anterior pero llamamos atras */
})

function atras(){

    /* Esta situacion es algo mas entretenido. Porque nosotros escuchamos un evento de una etiqueta html, pero modificamos otra etiqueta totalmente diferente. Por ello, que hacemos, traemos a todos los divs que tengan widthAl100 para que luego si estos estan "activos" remueva esta clase dejando asi su anchura original. Esto esta bueno porque no analiza todos los divs si no que trae al que tenga la clase, entonces si no hay ninguna clase por mas que apretemos la flecha no pasaria nada, dejandola sin efectos ni posibles bugs */
    let divActivo = document.querySelector(".sliderNovedades.widthAl100")
    
    if(divActivo){
        divActivo.classList.remove("widthAl100")
    }


    /*Esta madre hace lo mismo que en la funcion agrandar. Pero al reves. Oculta la vista interna y muestra la vistaGeneral. */
    let vistaGeneral = divActivo.querySelector(".contenedorOutSide")
    vistaGeneral.style.display = "block"

    let vistaInterna = divActivo.querySelector(".contedorPadreInSide")
    vistaInterna.style.display = "none"
}



































































function saludo(){
    console.log("Funciona")
}




