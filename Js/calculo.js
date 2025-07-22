const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let soma = 0

    for (let i = 1; i <= numero; i++){
        soma += i
    }

    resp1.innerText = soma
})