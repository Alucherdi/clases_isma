let numeros = [1, 2, 3, undefined, 4, 5]
let iteracion = 0

while (iteracion < numeros.length) {
    console.log(numeros[iteracion])
    iteracion++
}
console.log(iteracion)

while (true) {
    if (iteracion == 5) continue
    iteracion++
    console.log(iteracion)
    if (iteracion == 10) break
}

for (
    let i = 0, numero = numeros[i];
    i < numeros.length;
    i += 2, numero = numeros[i]
) {
    console.log(numero)
}

console.log("-------")

for (let numero of numeros) {
    console.log(numero)
}
