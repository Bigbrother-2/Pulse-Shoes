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
let flechas = document.querySelectorAll(".flecha")
let contadorDiapo = 0
let reiniciarTiempo


/*Esta variable global la ocupa la funcion de cancelar el intervalo momentaneamente, explacion mas abajo.  */

let intervalo;

/*
    Ahora lo que hacemos es crear una funcion para que de el punta pie inicial para iniciar el slider. Pero no solamente va a hacer esto, si no que, cumple con una funcion de controlador, por llamarle asi, en donde se encarga de limiaro o reiniciar el intervalo para que no se cree ninguna complicacion ni haya otros intervalos ejecutandose en segundo plano alterando su funcion principal. 
*/

function iniciarSlider(){
    clearInterval(intervalo) //Lo que hace esto es reiniciar el intervalo para que no se cree ninguna complicacion. 
    intervalo = setInterval(()=>{
        contadorDiapo++;
        if(contadorDiapo >= diapositivas.length) {
            contadorDiapo = 0;
        }
        mostrarDiapo()
    },3000)
}


/* Tercer paso. Ahora trabajamos con css. Craamos clases de ocultas o activas para ir alternando entre las clases. Porque? porque tenemos que usar un forEach para ejecutar determinada funcion o determinadas ordenes para todas las diapos. Por esto, Cuando usamos el ciclo en el indice 0 usamos la clase activa y para los demas indices usamos la clase ocultas. Para no entrar en quilombos  */


function mostrarDiapo ( ) {

        // Esto oculta todas las diapositivas
        diapositivas.forEach(diapo=> diapo.classList.remove("activa"))

        // Esta parte de aca se encarga de mostar la diapo que sigue. 3

        diapositivas[contadorDiapo].classList.add("activa") 
}

/*

    Sigue hacer la funcion para reiniciar el slider de manera automatica cuando no se haga click en el slider durante 5seg

*/

function reinicioautomatico() {
    clearTimeout(reiniciarTiempo); //Esto es lo que limpia el intervalo antes de iniciar cualquier otro. 

    reiniciarTiempo = setTimeout(() => {
        iniciarSlider(); //Esto es lo que dispara despus de 5seg para inicio automatico 
    }, 5000);
}

/*

Y por ultimo falta manejar el caso para el paso manual del slider. Para ello, obviamente tenemos que colocar un escuchador de evento en las flechas y segun donde se clickee avance o retroseda. Para ello, una vez escuchado el evento se juzga cual es la que se clickeo maneje la variable contadorDiapo para retoceder o avanzar en el slider, para finalmente ejecute la funcion mostrarDiapo, por ende esta funcion se actualiza y como la funcion IniciarSlider esta en llamada constante, cuando se ejecuta el setInterval va a mostar otra cara del Slider, asi mostrando lo que quiere el Usuario. Finalmente, luego de haber ejecutado mostrarDiapo se ejecuta reinicioAutomatico. En donde limpia el intervalo que dice que si no se hace click en 5seg se ejecute iniciarSlider lo que comezaria el ciclo de manera automatica 

*/


flechas.forEach(flecha=>{
    flecha.addEventListener("click", (evento)=>{
        clearInterval(intervalo) //Esto es para detener el intervalo cuando se hace click en las flechas. 
        if (evento.currentTarget.classList.contains("izquierda")) {
            contadorDiapo--; // Retrocede una imagen

            if (contadorDiapo < 0) contadorDiapo = diapositivas.length - 1; //Esto significa que se traslade al utlimo

        } else if (evento.currentTarget.classList.contains("derecha")) {
            contadorDiapo++; // Avanza una imagen

            if (contadorDiapo >= diapositivas.length) contadorDiapo = 0; //Esto hace que si esta en tu ultimo slider lo regresa al principio 
        }
        
        mostrarDiapo()
        reinicioautomatico()
    })
})









                            Segunda parte. Slider Con descuentos y Ofertas



Puma: 

Modelo en la imagen de fondo normal

https://www.lasrosas.com.ar/portal/puma-lanza-kyron-con-la-figura-de-winnie-harlow/

Nombre de la zapatilla: Kyron


Foto de la zapatilla:
https://www.lasrosas.com.ar/portal/puma-lanza-kyron-con-la-figura-de-winnie-harlow/


Foto logo del hover:
https://1000marcas.net/puma-logo/












Adidas:

Modelo en la imagen de fondo 

https://www.telva.com/fitness/2018/04/06/5ac72ab0468aebf4628b4613.html

Nombre de la zapatilla: Arkyn 

foto de la zapatilla
https://www.runnea.com/sneakers/adidas/arkyn/1001449/

Foto logo del hover:
https://graffica.info/cual-es-la-historia-y-evolucion-del-logo-de-adidas/










Nike:

Modelo en la imagen de fondo

https://www.barcin.com/nike-blazer-mid-77-jumbo-swoosh-erkek-spor-ayakkabi-beyaz-beyaz-acik-kirmizi-2/


Nombre de la zapatilla : Nike Blazer Mid '77 Jumbo Swoosh

foto de la zapatilla
https://www.barcin.com/nike-blazer-mid-77-jumbo-swoosh-erkek-spor-ayakkabi-beyaz-beyaz-acik-kirmizi-2/

Foto logo del hover:
https://1000marcas.net/logo-nike/











Reebok:

Modelo en la imagen de fondo

https://www.zalando.es/reebok-classic-club-c-85-zapatillas-re015b00g-a12.html

Nombre de la zapatilla: Reebok classic CLUB C 85

Foto de la zapatilla
https://www.zalando.es/reebok-classic-club-c-85-zapatillas-re015b00g-a12.html

Foto logo del hover:
https://www.citypng.com/photo/25813/reebok-black-logo-hd-png




