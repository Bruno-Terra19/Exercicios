const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")
const resp4 = document.querySelector("#resp4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inNumero.value)

    resp1.innerText = ""
    resp2.innerText = ""
    resp3.innerText = ""
    resp4.innerText = ""

    const valorCentavos = Math.round(valor * 100)
    if (valorCentavos % 5 !== 0) {
    alert("Não há moedas disponíveis!")
    frm.inNumero.focus()
    return
    }

    const moedasUm = Math.floor(valorCentavos / 100)
    let resto = valorCentavos % 100
    const moedasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const moedasVinteCinco = Math.floor(resto / 25)
    resto = resto % 25
    const moedasDez = Math.floor(resto / 10)

    if (moedasUm > 0) {
        resp1.innerText = `Moedas R$ 1,00: ${moedasUm}`
    }
    if (moedasCinquenta > 0) {
        resp2.innerText = `Moedas R$ 0,50: ${moedasCinquenta}`
    }
    if (moedasVinteCinco > 0) {
        resp3.innerText = `Moedas R$ 0,25: ${moedasVinteCinco}`
    }
    if (moedasDez > 0) {
        resp4.innerText = `Moedas R$ 0,10: ${moedasDez}`
    }
})
