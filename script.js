// Capturo el botón, el nro ingresado el mensaje y los intentos
const boton = document.getElementById('boton')
const numeroIngresado = document.getElementById('numeroIngresado')
const mensaje = document.getElementById('mensaje')
let intentos = document.getElementById('intentos')

// Creo el número a adivinar y la variable para el contador
let aleatorio = Math.random() * 100 + 1
let intento = 0


// Redondeo el número a adivinar y escucho el click en el botón
aleatorio = Math.round(aleatorio)
boton.addEventListener('click', verificar)


function verificar() {
    if (numeroIngresado.value < 0) {
        mensaje.innerHTML = "El número debe ser mayor o igual a cero!"
        mensaje.style.color = "red"
    } else if (numeroIngresado.value > 100) {
        mensaje.innerHTML = "El número debe ser menor o igual a cien!"
        mensaje.style.color = "red"

    } else if (numeroIngresado.value == 0) {
        mensaje.innerHTML = "Debés ingresar un número del 0 al 100!"
        mensaje.style.color = "red"
    } else {
        intento = intento + 1
        mensaje.style.color = "black"
        if (numeroIngresado.value > aleatorio) {
            mensaje.innerHTML = "Más chico"
            intentos.innerHTML = intento
        } else if (numeroIngresado.value < aleatorio) {
            mensaje.innerHTML = "Más grande"
            intentos.innerHTML = intento
        } else {
            mensaje.style.color = "GREEN"
            mensaje.innerHTML = "¡GANASTE!"
            intentos.innerHTML = intento
            boton.disabled = true
            boton.style.backgroundColor = 'grey'
            boton.style.cursor = 'auto'
            return
        }
    }
}

function reiniciar(){
    window.location.reload()
}