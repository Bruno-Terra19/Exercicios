const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoSubmit = document.querySelector("#btSubmit")
const BotaoNewGame = document.querySelector("#btNewGame")

const numeros = []
const maiores = []
const menores = []

BotaoAdd.addEventListener("click", () => {

    const numero = Number(frm.inNumero.value)

    if (!frm.inNumero.value) {
        alert("Digite um número antes de adicionar")
        frm.inNumero.focus()
        return
    }

    if (numeros.length >= 5) {
        alert("Você já adicionou a quantida de números permitidos!")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }

    numeros.push(numero)

    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (numeros.length < 5) {
        alert("Você precisa adicionar 5 números antes de somar!")
        frm.inNumero.focus()
        return
    }

    maiores.length = 0
    menores.length = 0

    numeros.forEach((num) => {
        num >= 10 ? maiores.push(num) : menores.push(num)
    })

    const soma = maiores.reduce((total, num) => total + num, 0)

    resp.innerText = `A soma dos números maiores que 10 é: ${soma}\nOs números restantes são: ${menores}\nNúmeros adicionados: ${numeros}`
})

BotaoNewGame.addEventListener("click", () => {
    numeros.length = 0
    maiores.length = 0
    menores.length = 0
    resp.innerText = ""
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

window.addEventListener("load", () => {
    alert("Bem vindo a Soma Inteligente!\nVocê poderá adicionar até 5 números.\nO computador irá somar os números maiores que 10.")
})