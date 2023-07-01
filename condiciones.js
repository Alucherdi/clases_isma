/*
// definición de elementos

let edad = 15
let esMayor = edad > 18
edad = 30
console.log(esMayor)
esMayor = edad > 18
console.log(esMayor)


*/


/*
Explicación de conectores Y y O:
para Y &&:
    si a es verdadero && b es verdadero = verdadero
    si a es falso && b es verdadero     = falso
    si a es falso && b es falso         = falso

para O ||:
    si a es verdadero || b es verdadero = verdadero
    si a es falso || b es verdadero     = Verdadero
    si a es falso || b es falso         = falso
*/


/* 
//Ejercicio de conectores

let nombre = "Paco"
let edad = 16
if (edad >= 18 && nombre != "Javi") {
    console.log("Puede pasar")
} else if (nombre == "Javi") {
    console.log("No puede pasar >:(")
} else {
    console.log("No puede pasar")
}
*/


/*
//Ejercicio con ifs anidados

let nombre = "Paco"
let edad = 16
if (nombre == "Javi") {
    console.log("No pasa >:(")
} else {
    if (edad >= 18) {
        console.log("Si pasa")
    } else {
        console.log("No pasa")
    }
}
*/

/*
// Ejercicio de operador ternario: ?

let nombre = "Paco"
let edad = 13

let texto = nombre == "Javi" ?
    "No puede pasar >:(" :
    edad >= 18 ?
        "Puede pasar" :
        "No puede pasar"
*/


/*
// Conectores dentro de ternario (Ejemplo de O)

let edad = 19
let esConocido = false

let texto = esConocido || edad >= 18 ?
    "Puede pasar" :
    "No puede pasar"
console.log(texto)
*/
