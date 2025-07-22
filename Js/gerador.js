const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta = ""

    for (let i = 1; i <= numero; i++){
        if (i % 2 === 0) {
            resposta += i + " "
        }
    }

    resp1.innerText = resposta
})