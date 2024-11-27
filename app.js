let menuOculto = document.querySelectorAll(".menuOculto")
let menuItemEvento = document.querySelectorAll(".menuItem")

menuItemEvento.forEach((evento)=>{
    evento.addEventListener("click",(menu)=>{
        menu.forEach((display)=>{
            let displayActual = display.style.display
            console.log( displayActual)
        })
    })
})


//corregir lo de arriba


