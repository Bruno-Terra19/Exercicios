const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const BotaoAdd = document.querySelector("#btAdd")

const numeros = []

BotaoAdd.addEventListener("click", () => {

    const num = Number(frm.inNumero.value)

    if(isNaN(num)) {
        alert("Digite um número.")
        frm.inNumero.focus()
        return
    }

    numeros.push(num)
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if(numeros.length === 0) {
        alert("Não há números na lista.")
        frm.inNumero.focus()
        return
    }

    let soma = 0
    let contador = 0
    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            break // Se o número for 0, para o loop com break.
        }
        soma += numeros[i]
        contador++
        // Senão, soma o número e aumenta o contador.
        // O contador conta quantos números foram somados, ou seja, quantos números válidos vieram antes do 0.
    }

    const media = contador > 0 ? soma / contador : 0

    resp.innerText = `Números: ${numeros.join(", ")}\nMédia até o zero: ${media.toFixed(2)}`
})