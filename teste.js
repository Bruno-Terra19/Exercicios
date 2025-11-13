let numeros = [1, 2, 3, 4]

for (let i = 0; i < numeros.length; i++){
   let valor = numeros[i]
   console.log(valor)
}


for (let valor of numeros ) {
    console.log(valor)
}

let frutas = ["laranja", "uva", "morango"]

frutas.forEach((fruta) => {console.log(fruta)})