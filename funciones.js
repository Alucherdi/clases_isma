let persona = {
    nombre: "Guillermo"
}

function saludo(persona) {
    console.log("hola " + persona.nombre)
}

saludo(persona)

function suma(a, b) {
    return a + b
}
let c = suma(8, 5)
console.log(c)

function fibo(base) {
    if (base < 2) return base

    return fibo(base - 2) + fibo(base - 1)
}

function fact(numero) {
    if (numero == 1) {
        return 1
    }
    
    return numero * fact(numero - 1)
}
// 1, 1, 2, 3, 5, 8
console.log(fibo(6))

function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function ejecutar(numeros, operacion) {
    return operacion(numeros[0], numeros[1])
}

console.log(
    ejecutar([1, 2], multiplicar)
)


function saludar() {
    console.log("Hola")
}

setInterval(saludar, 1000)
