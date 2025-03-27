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

let diapositivas = document.querySelectorAll(".slider");
let flechas = document.querySelectorAll(".flecha");
let contadorDiapo = 0;
let intervalo;
let reiniciarTiempo;

// ✅ Función para iniciar el slider automático
function iniciarSlider() {
    clearInterval(intervalo); // Limpiamos intervalos previos para evitar acumulación
    intervalo = setInterval(() => {
        contadorDiapo++;
        if (contadorDiapo >= diapositivas.length) {
            contadorDiapo = 0;
        }
        mostrarDiapo();
    }, 3000);
}

// ✅ Función para mostrar la diapositiva activa
function mostrarDiapo() {
    diapositivas.forEach(diapo => diapo.classList.remove("activa"));
    diapositivas[contadorDiapo].classList.add("activa");
}

// ✅ Función para reiniciar el slider después de 5s de inactividad
function reinicioautomatico() {
    clearTimeout(reiniciarTiempo);
    reiniciarTiempo = setTimeout(() => {
        iniciarSlider(); // Reactivamos el slider automático después de 5 segundos
    }, 5000);
}

// ✅ Evento para las flechas (controla el slider manualmente)
flechas.forEach(flecha => {
    flecha.addEventListener("click", (evento) => {
        clearInterval(intervalo); // Pausamos el slider automático

        if (evento.currentTarget.classList.contains("izquierda")) {
            contadorDiapo--; // Retrocede una imagen
            if (contadorDiapo < 0) contadorDiapo = diapositivas.length - 1;
        } else if (evento.currentTarget.classList.contains("derecha")) {
            contadorDiapo++; // Avanza una imagen
            if (contadorDiapo >= diapositivas.length) contadorDiapo = 0;
        }

        mostrarDiapo(); // Mostramos la diapositiva correcta
        reinicioautomatico(); // Reactivamos el slider después de 5s
    });
});

// ✅ Iniciar el slider automático al cargar la página
iniciarSlider();



// let diapositivas = document.querySelectorAll(".slider")

// let contadorDiapo = 0

// let intervalo;

// function iniciarSlider(){
//     clearInterval(intervalo) //Lo que hace esto es reiniciar el intervalo para que no se cree ninguna complicacion. 
//     intervalo = setInterval(()=>{
//         contadorDiapo++;
//         if(contadorDiapo >= diapositivas.length) {
//             contadorDiapo = 0;
//         }
//         mostrarDiapo()
//     },3000)
// }


// // Funcion para mostrar las diapositivas de manera automatica 

// function mostrarDiapo ( ) {
//         diapositivas.forEach(diapo=> diapo.classList.remove("activa"))

//         diapositivas[contadorDiapo].classList.add("activa")

//         contadorDiapo++

//         if(contadorDiapo >= diapositivas.length){
//             contadorDiapo = 0
//         }
    
// }

// // Funcion para reiniciar el slider despues de 5 seg. que no se clickeo el slider. 
// let reiniciarTiempo;

// function reinicioautomatico() {
//     clearTimeout(reiniciarTiempo); //Esto es lo que limpia el intervalo antes de iniciar cualquier otro. 

//     reiniciarTiempo = setTimeout(() => {
//         iniciarSlider(); //Esto es lo que dispara despus de 5seg para inicio automatico 
//     }, 5000);
// }


// // Funcion para manejar las flechas para correrlo de manera manual.     |
// let flechas = document.querySelectorAll(".flecha")

// flechas.forEach(flecha=>{
//     flecha.addEventListener("click", (evento)=>{
//         clearInterval(intervalo) //Esto es para detener el intervalo cuando se hace click en las flechas. 
//         if (evento.currentTarget.classList.contains("izquierda")) {
//             contadorDiapo--; // Retrocede una imagen

//             if (contadorDiapo < 0) contadorDiapo = diapositivas.length - 1;

//         } else if (evento.currentTarget.classList.contains("derecha")) {
//             contadorDiapo++; // Avanza una imagen

//             if (contadorDiapo >= diapositivas.length) contadorDiapo = 0; //Esto hace que si esta en tu ultimo slider lo regresa al principio 
//         }
        
//         mostrarDiapo()
//         reinicioautomatico()
//     })
// })

// iniciarSlider()


// function pausarIntervalo(evento){
//     if(evento.currentTarget.classList.contains("izquierda")){

//         contadorDiapo--

//         if (contadorDiapo < 0) {  
//             contadorDiapo = diapositivas.length - 1;
//         }

//         diapositivas.forEach(diapo=> diapo.classList.remove("activa"))
        
//         diapositivas[contadorDiapo].classList.add("activa")
        
//         clearInterval(intervalo)


//     } else if (evento.currentTarget.classList.contains("derecha")){

//         contadorDiapo++ 

//         if(contadorDiapo >= diapositivas.length){
//             contadorDiapo = 0 
//         }
        
//         diapositivas.forEach(diapo=> diapo.classList.remove("activa")) //Actualizamos. 
        
//         diapositivas[contadorDiapo].classList.add("activa")

//         clearInterval(intervalo)
//     }
// }




// flechas.forEach(flecha => {
//     flecha.addEventListener("click", (evento) => {
//         clearInterval(intervalo);
//         mostrarDiapo(evento);
//         reinicioautomatico(); 
//     });
// });



// mostrarDiapo()





