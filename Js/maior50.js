let numeros = [12, 38, 52, 68, 7, 41, 102, 287]
const tamanho = numeros.length
let num = 0
for (let i = 0; i <= tamanho; i++) {
    if (numeros[i] >= 50) {
        num = numeros[i]
        console.log(num)
    }
}