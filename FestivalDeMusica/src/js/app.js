document.addEventListener("DOMContentLoaded", ()=> {
    crearGaleria()
    navegacionFija()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija(){
    const header = document.querySelector(".header")
    const festival = document.querySelector(".festival")

    window.addEventListener('scroll', function() {
        if (festival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed")
        } else if (header.classList.contains("fixed")) {
            header.classList.remove("fixed")

        }
    })
}

function crearImagen(i){

    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = "No Image"
    return imagen
}


function crearGaleria(){
    const cantidadDeImagenes = 16
    const galeria = document.querySelector(".galeria-imagenes")
    for(let i = 1 ; i<= cantidadDeImagenes ; i++){
        const imagen = crearImagen(i)
        //Event Handler
        
        imagen.onclick = () => mostrarImagen(i);
        galeria.appendChild(imagen)
        
    }
}

function mostrarImagen(i){

    //Obteniendo lo necesario
    const modal = document.createElement("DIV")
    const imagen = crearImagen(i)
    const body = document.querySelector("body")
    
    //Generar Modal
    modal.classList.add("modal")
    modal.onclick = cerrarModal
    modal.appendChild(imagen)

    //Boton cerrar Modal
    const botonCerrar = document.createElement('BUTTON')
    botonCerrar.textContent = "X"
    botonCerrar.onclick = cerrarModal
    botonCerrar.classList.add("boton-cerrar")
    modal.appendChild(botonCerrar)

    //Agregar al HTML
    body.appendChild(modal)
    body.classList.add("overflow-hidden")
    
}

function cerrarModal(){
    const modal = document.querySelector(".modal")
    modal.classList.add("fade-out")

    setTimeout(() =>{
        modal?.remove()
        
        const body = document.querySelector("body")
        body.classList.remove("overflow-hidden")
    },495)
}

function resaltarEnlace(){
    document.addEventListener('scroll', () =>{
        const section = document.querySelectorAll("section")
        const enlaces = document.querySelectorAll(".navegacion-principal a")

        actual = '';
        section.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientTop

            if (window.scrollY + 500 >= (sectionTop - sectionHeight / 3)){
                actual = section.id
            }
        })

        enlaces.forEach(link => {
            link.classList.remove("active")
            if (link.getAttribute('href') === '#'+actual){
                link.classList.add("active")
            }
        })
    })
}

function scrollNav(){
    const enlaces = document.querySelectorAll(".navegacion-principal a")
    const header = document.querySelector("h1 a")
    enlaces.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            console.log(section)

            section.scrollIntoView({behavior:'smooth'})
        })
    })


    header.addEventListener('click', e => {
        e.preventDefault()
        
        const sectionScroll = e.target.getAttribute('href')
        const section = document.querySelector(sectionScroll)

        console.log(section)

        section.scrollIntoView({behavior:'smooth'})
    })

}