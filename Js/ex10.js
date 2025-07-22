const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
     e.preventDefault()

    const ladoA = Number(frm.inA.value)
    const ladoB = Number(frm.inB.value)
    const ladoC = Number(frm.inC.value)

   let tipo = ""

   if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = `Não pode ser um Triângulo`
    resp2.innerText = ""
    return
   }

   if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    tipo = "equilatero"
    resp1.innerText = `Pode-se formar um Triângulo`
   } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    tipo = "isosceles"
    resp1.innerText = `Pode-se formar um Triângulo`
   } else {
    tipo = "escaleno"
    resp1.innerText = `Pode-se formar um Triângulo`
   }

   switch (tipo) {
    case "equilatero":
        resp2.innerText = "Equilátero";
        break;
    case "isosceles":
        resp2.innerText = "Isósceles";
        break;
    case "escaleno":
        resp2.innerText = "Escaleno";
        break;
}
})