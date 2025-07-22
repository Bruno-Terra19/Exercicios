const frm = document.querySelector("form")
const resp = document.querySelector("#resp")
const outErros = document.querySelector("#outErros")
const outChances = document.querySelector("#outChances")
const NewGame = document.querySelector("#btNewGame")
const btSubmit = document.querySelector("#btSubmit")

const numSorteados = []
const errados = []
const chances = 5

const radioSortear = document.querySelector('input[name="escolha"]')

function sortearNumeros() {
    numSorteados.length = 0
    while (numSorteados.length < 5) {
        const num = Math.floor(Math.random() * 30) + 1
        if (!numSorteados.includes(num)) {
            numSorteados.push(num)
        }
    }
}

radioSortear.addEventListener("change", () => {
    sortearNumeros()
    btSubmit.disabled = false
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const opcao = document.querySelector('input[name="escolha"]:checked')
    if (!opcao) {
        alert("Por favor selecione a opção sortear primeiro!")
        return
    }
    
    const numero = Number(frm.inNumero.value)

    if (numSorteados.includes(numero)) {
        resp.innerText = `🎉 Parabéns, o número está na lista!\nNúmeros sorteados: ${numSorteados.join(", ")}`
        btSubmit.disabled = true
    } else {
        if (errados.includes(numero)) {
            alert("Você já tentou esse número, tente um número diferente!")
        } else {
            errados.push(numero)
            const numErrados = errados.length
            const numChances = chances - numErrados
            outErros.innerText = `❌ Palpites: ${numErrados} (${errados.join(", ")})`
            outChances.innerText = `🔁 Chances Restantes: ${numChances}`
            if (numChances === 0) {
                alert(`😢 Suas chances acabaram!\nNúmeros Sorteados: ${numSorteados.join(", ")}`)
                btSubmit.disabled = true
            }
        }
    }

    frm.inNumero.value = ""
    frm.inNumero.focus()
})

NewGame.addEventListener("click", () => {
    errados.length = 0
    sortearNumeros()
    
    btSubmit.disabled = false
    outResp.innerText = ""
    outErros.innerText = "Palpites:"
    outChances.innerText = "Chances Restantes: " + chances
    frm.inNumero.value = ""
    frm.inNumero.focus()
})