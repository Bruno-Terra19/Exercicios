const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inNumero.value)

    resp1.innerText = ""
    resp2.innerText = ""
    resp3.innerText = ""

    if (valor % 10 != 0) {
        alert("Não há notas disponíveis para o valor informado")
        frm.inNumero.focus()
        return
    }

    const notasDuzentos = Math.floor(valor / 200)
    let resto = valor % 200
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasVinte = Math.floor(resto / 20)

    if (notasDuzentos > 0) {
        resp1.innerText = `Notas de R$ 200: ${notasDuzentos}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasVinte > 0) {
        resp3.innerText = `Notas de R$ 20: ${notasVinte}`
    }
    e.preventDefault()
})
