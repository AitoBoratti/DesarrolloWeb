
// /// Crear HTML con JS

// const nuevo_enlace = document.createElement('A');
// nuevo_enlace.href = "nosotros.html"
// nuevo_enlace.textContent = "Mas sobre nosotros"
// nuevo_enlace.classList.add("navegacion__enlace")

// const navegacion = document.querySelector(".navegacion")
// navegacion.appendChild(nuevo_enlace)


// /// Algunos eventos con window y document
// console.log(1)
// window.addEventListener('load', function() {
//     console.log(2)
// })

// window.onload = function () {
//     console.log(3)
// }
// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4)
// })

///Seleccionar elementos y asociarles un evento;

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

nombre.addEventListener('input', registrar)
email.addEventListener('input', registrar)
mensaje.addEventListener('input', registrar)

function registrar(e){
    datos[e.target.id] = e.target.value
    console.log(datos)
}


const formulario =  document.querySelector('.formulario')



formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const {nombre, email, mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === ''){
        MostrarMensaje('* Todos los campos son obligatorios', 'error')
        return
    }
    MostrarMensaje('El formulario fue enviado correctamente.')
})



function MostrarMensaje(text, error = null){
    const mensaje = document.createElement('P')
    if (error === 'error'){
        mensaje.classList.add("error_text")
    }else{
        mensaje.classList.add("exito_text")
    }
    mensaje.textContent = text
    formulario.appendChild(mensaje)
    setTimeout( () => mensaje.remove(),5000)
}