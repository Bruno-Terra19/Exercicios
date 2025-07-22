const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const NotasRest = document.querySelector("pre")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoSubmit = document.querySelector("#btSubmit")
const BotaoNewCalc = document.querySelector("#btNewCalc")

const notas = []
const aprovadas = []
const numNotas = 5

BotaoAdd.addEventListener("click", () => {

    const nota = Number(frm.inNumero.value)

    if (!frm.inNumero.value) {
        alert("Digite um número primeiro!")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }

    if (notas.length >= 5) {
        alert("Você já adicionou 5 notas permitidas.")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }

    if (notas.includes(nota)) {
        alert("Você já adiciou essa nota!")
    } else {
        notas.push(nota)
        const tamanho = notas.length
        const notasRest = numNotas - tamanho
        NotasRest.innerText = `Notas restantes: ${notasRest}`
    }

    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (notas.length < 5) {
        alert("Você precisa adicionar 5 notas primeiro!")
        frm.inNumero.focus()
        return
    }

    aprovadas.length = 0

    notas.forEach((num) => {
        if (num >= 7){
            aprovadas.push(num)
        }
})
    const media = notas.reduce((soma, atual) => soma + atual, 0) / notas.length

    resp.innerText = `Notas: ${notas.join(", ")}\nNotas Aprovadas: ${aprovadas}\nMédia final: ${media.toFixed(2)}`
})

    BotaoNewCalc.addEventListener("click", () => {
    notas.length = 0
    aprovadas.length = 0
    resp.innerText = "";
    NotasRest.innerText = `Notas restantes: ${numNotas}`
    frm.inNumero.value = ""
    frm.inNumero.focus()
});

window.addEventListener("load", () => {
    alert("Bem vindo a Calculadora de Notas.\nVocê poderá adicionar até 5 notas.\nSerá calculado a média delas e quais foram aprovadas!")
    NotasRest.innerText = `Notas restantes: ${numNotas}`
});