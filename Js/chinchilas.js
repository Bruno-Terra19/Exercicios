const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const anos = Number(frm.inAno.value)
    const chinchila = Number(frm.inNumero.value)

    // validação, numero de chinchilas tem que ser maior ou igual a 2
    if (chinchila < 2) {
        resp1.innerText = `Número inicial deve ser no mínimo 2.`
        resp2.innerText = ""
        return
    }

    let total = chinchila
    let resultado = `Ano 1: ${total} Chinchilas\n`  // ja mostra o primeiro ano sem multiplicar
    for (let i = 2; i <= anos; i++) { // laço começa do ano 2 ate o ano final informado
        total *= 3 // triplicamos o total
        resultado += `Ano ${i}: ${total} Chinchilas\n`
    }
    resp1.innerText = resultado
})