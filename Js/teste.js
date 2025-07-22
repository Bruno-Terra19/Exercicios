const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")
const btNovo = document.querySelector("#btNovo")

const erros = []
let sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if (numero === sorteado) {
        respDica.innerText = `Parabéns, você acertou o número!! Número sorteado: ${numero}`
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou nesse número! Tente outro número...`)
        } else {
            erros.push(numero)
            const numErrados = erros.length
            const numChances = chances - numErrados
            respErros.innerText = `${numErrados} (${erros.join(", ")})`
            respChances.innerText = numChances
                if (numChances === 0) {
                    alert("Suas chances acabaram!")
                    frm.btSubmit.disabled = true
                    respDica.innerText = `Game Over! Número sorteado: ${sorteado}`
                } else {
                    const dica = numero < sorteado ? "maior" : "menor"
                    respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
                }
        } 
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

btNovo.addEventListener("click", () => {
    erros.length = 0
    sorteado = Math.floor(Math.random() * 100) + 1
    respErros.innerText = ""
    respChances.innerText = chances
    respDica.innerText = ""
    frm.btSubmit.disabled = false
    frm.inNumero.focus()
})