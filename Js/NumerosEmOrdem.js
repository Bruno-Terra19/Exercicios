const frm = document.querySelector("form")
const Lista = document.querySelector("#outLista")
const Resp = document.querySelector("#outResp")
const BotaoAdd = document.querySelector("#btAdd")
const NovaVerifi = document.querySelector("#btNew")

const listaNum = []

BotaoAdd.addEventListener("click", () => {

    const num = Number(frm.inNumero.value)

    if (!num) {
        alert("Digite um número primeiro!")
        frm.inNumero.focus()
        return
    }

    if (listaNum.includes(num)) {
        alert("Você já digitou esse número!")
    } else {
        listaNum.push(num)
    }

    let lista = ""
        for (let i = 0; i < listaNum.length; i++) { // metodo para exibir numero ou string a cada inclusao
            lista += `${listaNum[i] + ", "}`
        }

        Lista.innerText = `Números: ${lista}`
        frm.inNumero.value = ""
        frm.inNumero.focus()
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (listaNum.length < 2) {
        alert("Precisa ter no mínimo dois números!")
        frm.inNumero.focus()
        return
    }

    const copiaOrdenada = [...listaNum].sort((a, b) => a - b); // metodo para verificar se esta em ordem [... parametro] => metodo spread e metodo .sort()

    const estaEmOrdem = listaNum.every((num, i) => num === copiaOrdenada[i]);

    if (estaEmOrdem) {
        Resp.innerText = "✅ A lista está em ordem crescente!";
    } else {
        Resp.innerText = "⚠️ A lista está fora de ordem!";
    }
})

NovaVerifi.addEventListener("click", () => {

    listaNum.length = 0
    Lista.innerText = "Números: "
    Resp.innerText = ""
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

window.addEventListener("load", () => {
    alert("Bem vindo(a) ao Program em Ordem!\nDigite alguns números e veja se está na ordem correta.")
})