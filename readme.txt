Anotaciones importantes. 

links de fotos. 

Creditos de las fotos de nike 
https://www.instagram.com/conceptnikes/?hl=es




Creditos de ArtStation

adidas blancas : https://www.artstation.com/artwork/oJJ1a4

Nike foto negra: https://www.artstation.com/artwork/3NWvv artista Rob Bryant, Jr. 

nike foto naranja: https://www.artstation.com/artwork/e060ZX artista Gonzalo Blanco

adidas foto negra : https://www.artstation.com/artwork/NylQqJ artista Magomed Makhsunov

reebook blanca : https://www.artstation.com/artwork/qADz2N artista Roberto Castillo

reebook negra : https://www.artstation.com/artwork/1n09nK artista Amit Sharma

puma verde : https://www.artstation.com/artwork/9m5z0a artista david abasto

Puma blanca  https://www.artstation.com/nathan_di_girolamo



FOTOS DE FONDO DEL SLIDER 

ADIDAS : https://www.artstation.com/artwork/kQD9dy Creador: WIFFERIO https://www.artstation.com/wifferio23

Nike: https://www.artstation.com/artwork/NGr4O5 Creador:  Nguyen Dong https://www.artstation.com/nguyendongdraws   / https://ar.pinterest.com/pin/107312403615211575/ Sponhardi _Sponhardi7 https://ar.pinterest.com/ericsponhardi/  

            IMAGEN UTILIZADA: https://www.pixelstalk.net/nike-wallpapers-hd-free-download/ 

N

					Puma

Imagen utilizada de fondo: https://wallpapers.com/aesthetic-background.

Zapatilla Azul: https://www.freepik.es/vector-gratis/icono-deporte-zapatos-tenis-azules_73260400.htm#fromView=keyword&page=1&position=1&uuid=64bba17f-257d-41da-ae70-1621caceb007&query=Zapatillas+Puma

Zapatilla Negra y blanco: https://www.amazon.es/PUMA-Zapatillas-unisex-400326-Dribble/dp/B0DKDKR6DF

Zapatilla roja: https://images.app.goo.gl/o73s761AZWnm4zsJ8 Ilustracion by: Friiida

Puma Recortado: https://populargoodness.wordpress.com/2008/10/01/puma-ad/

Puma recortado del Twitter: https://x.com/LTAEspanol/status/1488297374111961088







Cosas para mejora


en el navbar, cuando esta de 768 px abajo aparece la lupa para buscar pero no sale un input. Ver como colocar este imput



Cosas desechadas por tema de mal funcionalidad. 

Slider: 

Esta parte del codigo fue la primer version del movimiento manual y automatico del mismo asi como su reinicio automatico. Notas: Tuve que cortarlo y pegarlo aca porque era demaciado primitivo y tenia los siguentes errores. setInterval se acumula

En la función mostrarDiapo(), cada vez que se llama, se crea un nuevo setInterval, pero nunca se limpia el anterior. Esto hace que después de cada reactivación del slider, se generen múltiples intervalos ejecutándose a la vez.

No se está limpiando bien el setInterval antes de crear uno nuevo. En reinicioautomatico(), primero se ejecuta clearInterval(intervalo), pero después mostrarDiapo() también crea otro intervalo nuevo dentro de su propio setInterval.

Los eventos de clic llaman dos veces a mostrarDiapo(evento). El manejador de eventos de las flechas ya cambia la diapositiva manualmente, pero después mostrarDiapo() también intenta hacerlo.

Parte de cogido:(obiamente esta con explicaciones.)



/* Vamos a explicar un poco el codigo para que cuando lo vea de vuelta no se me sea complicado entenderlo y ademas pueda estudiarlo de vuelta */


/* Primero lo que debemos hacer es organizar los datos. Para esto tomammos a todas las diapositivas para tenerlas en el js como un nodeList y poder modificarlas, osea hacer la transicion de un lado para el otro.  */


let diapositivas = document.querySelectorAll(".slider")




let contadorDiapo = 0

/*Esta variable global la ocupa la funcion de cancelar el intervalo momentaneamente, explacion mas abajo.  */

let intervalo;


/*Segundo paso. Ahora trabajamos con css. Craamos clases de ocultas o activas para ir alternando entre las clases. Porque? porque tenemos que usar un forEach para ejecutar determinada funcion o determinadas ordenes para todas las diapos. Por esto, Cuando usamos el ciclo en el indice 0 usamos la clase activa y para los demas indices usamos la clase ocultas. Para no entrar en quilombos  */


function mostrarDiapo ( ) {
    intervalo = setInterval(() => {


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


    },3000)
    
    
}

// ExplicacioooooooOn!

/* Mira vamos de a poco. Tenemos que ver como podemos hacer para detener el intervalo cuando el usuario haga click en cualquiera de las 2 flechas. Para esto llamamos a un listener en la funcion.  */


// Llamamos a las flechas para poder escuchar el evento 

let flechas = document.querySelectorAll(".flecha")



/* Aca esta la parte mas importante de la funcion. Porque en este momento es cuando salta el evento cuando se hace click en cualquiera de las 2 flechas o mejor explicado cuando se hace un click en cualquier etiqueta html que tenga la clase ".contenedorFlechas". 
    Una vez clickeado, llama a una funcion que va a detener el setInterval de manera momentanea y que cambie el control de paso automatico a paso manual del slider.
*/
flechas.forEach(flecha=>{
    flecha.addEventListener("click", (evento)=>{
        pausarIntervalo(evento)
        /*explicacion rapida. Al colocar esta miniFuncion, lo que hacemos es pasar toda la informacion que recauda el evento como parametro a la funcion pausarIntervalo para que podamos saber cual es la flecha que se presiono. */
    })
})

// Esta funcion es la encargada de pausar el intervalo momentaneamente y de controlar el slider de manera manual. Para ello tenemos que acceder a la funcion de mostrarDiapo y cancelar el intervalo. Luego agregar controles manuales y controlar constantemente si no se hace click durante 5s vuelva a pasarse de manera automatica. 


function pausarIntervalo(evento){
    // Primero. Por logica si apretamos en una flecha tenemos que cambiar el slider para donde quiera el usuario. Para esto, cuando escuchamos debemos obtener informacion de cual es la flecha fue la que se apreto. Para ello debemos obtenerlo al momento cuando se clickea y pasarlo como parametro a esta funcion. 
    /* 
                                                IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!! 
        aprendiste que el target te devuelve el elemento mas interno al cual hiciste click. Si queremos saber en donde se hizo click pero referenciando al contenedor padre digamos usamos: currentTarget.
    */
    if(evento.currentTarget.classList.contains("izquierda")){
        // console.log("presionaste la flecha izquierda")

        contadorDiapo-- //Primero restamos. 

        if (contadorDiapo < 0) { // Controlamos los límites antes de aplicar cambios. Si es el primero lo mandamos al ultimo. 
            contadorDiapo = diapositivas.length - 1;
        }

        diapositivas.forEach(diapo=> diapo.classList.remove("activa"))
        
        diapositivas[contadorDiapo].classList.add("activa")
        
        clearInterval(intervalo)


    } else if (evento.currentTarget.classList.contains("derecha")){
        // console.log("apretaste la flecha derecha")

        contadorDiapo++ //Primero restamos. 

        if(contadorDiapo >= diapositivas.length){
            contadorDiapo = 0  //Contralmos limites
        }
        
        diapositivas.forEach(diapo=> diapo.classList.remove("activa")) //Actualizamos. 
        
        diapositivas[contadorDiapo].classList.add("activa")

        clearInterval(intervalo)
    }
    //  Segundo debemos cancelar el intervalo. Como lo hacemos? 
    /*Explicacion de la cancelacion del intervalo. 
        Sabemos que tenemos que acceder a la funcion de mostrarDiapo y ahi eliminar el intervalo. Para esto, debemos almacenar el identificador en una variable global para que luego cuando usemos el clearInterval(identificador) javascript sepa que intervalo eliminar. Por eso, cuando hacemos el intervalo lo "almacenamos" en una variable global. Pero, no se guarda la info, si no que guardamos el identificador.
    */ 
    
}

let reiniciarTiempo;

function reinicioautomatico() {
    clearTimeout(reiniciarTiempo); // Limpiamos cualquier timeout activo

    reiniciarTiempo = setTimeout(() => {
        clearInterval(intervalo); // Nos aseguramos de limpiar el intervalo anterior
        intervalo = setInterval(mostrarDiapo, 3000); // Reactivamos el slider automático
    }, 5000); // Esperamos 5 segundos de inactividad
}

// Dentro del manejador de eventos de las flechas
flechas.forEach(flecha => {
    flecha.addEventListener("click", (evento) => {
        clearInterval(intervalo); // Pausamos el slider automático
        mostrarDiapo(evento); // Llamamos a la función que cambia la diapositiva
        reinicioautomatico(); // Programamos la reactivación del slider
    });
});



mostrarDiapo()