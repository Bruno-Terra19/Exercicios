const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numero % 2 === 0){
        resp1.innerText = `${numero} é par`
    } else {
        resp1.innerText = `${numero} é ímpar`
    }
})